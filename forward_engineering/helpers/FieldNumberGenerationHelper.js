const { dependencies } = require('../../reverse_engineering/appDependencies');

const fixFieldNumbers = (fields, reservedNumbers) => {
    const _ = dependencies.lodash;
    const fieldNumbers = Object.values(fields).map(field => field.fieldNumber);
    const fieldsNumber = _.size(fieldNumbers)

    const checks = getChecksFromReservedNumbers(reservedNumbers)
    const fieldsNumberSequence = generateSequence(fieldsNumber, checks);
    return Object.entries(fields).reduce((fixedFields, [key, value]) =>
    ({
        ...fixedFields,
        [key]: { ...value, fieldNumber: fieldsNumberSequence.shift() }
    }), {})
}

const getChecksFromReservedNumbers = reservedNumbers => {
    if (!reservedNumbers) {
        return [];
    }

    if (!reservedNumbers.match(/^\d+(?:(?:,\s*\d+)|(?:,\s+\d+\s+to\s+\d+)|(?:,\s+\d+\s+to\s+max))*$/gm)) {
        return [];
    }

    return reservedNumbers.split(',')
        .map(number => number.replaceAll(' ', ''))
        .reduce((checks, check) => {
            if (check.match(/^\d+$/gm)) {
                const newCheck = {
                    type: 'value',
                    value: parseInt(check)
                }
                return [...checks, newCheck];
            }
            if (check.match(/^\d+to\d+$/gm)) {
                const [from, to] = check.split('to');
                if (parseInt(from) > parseInt(to)) {
                    return checks;
                }
                const newCheck = {
                    type: 'range',
                    from: parseInt(from),
                    to: parseInt(to)
                }
                return [...checks, newCheck];
            }
            if (check.match(/\d+tomax/gm)) {
                const [lessThen] = check.split('toMax');
                const newCheck = {
                    type: 'less',
                    value: parseInt(lessThen)
                }
                return [...checks, newCheck];
            }
            return checks
        }, [])
}

const generateSequence = (fieldsNumber, checks) => {
    const _ = dependencies.lodash;

    const fieldsNumberPositionRange = _.range(1, fieldsNumber + 1);

    return fieldsNumberPositionRange
        .reduce((usedNumbers, position) => [...usedNumbers, getNextFieldNumber(position, usedNumbers, checks)], []);
}

const getNextFieldNumber = (position, usedNumbers, checks) => {
    const _ = dependencies.lodash;
    const candidates = _.range(position, position + 1000);
    const nextNumber = candidates.find(candidate => !usedNumbers.includes(candidate) && notReservedField(candidate, checks));
    if (nextNumber) {
        return nextNumber;
    }
    return 1;
}

const notReservedField = (candidate, checks) => {
    return checks.reduce((valid, check) => {
        if (check.type === 'value') {
            return valid && (candidate !== check.value);
        }
        if (check.type === 'range') {
            return valid && (candidate < check.from || candidate > check.to);
        }
        if (check.type === 'less') {
            return valid && (candidate < check.value);
        }
    }, true)
}

module.exports = {
    fixFieldNumbers
}