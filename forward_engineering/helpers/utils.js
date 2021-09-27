const MAX_CHAR_LENGTH = 10;

const formatComment = comment => {
    return !comment ? '' :
        comment.replaceAll('\n', '').split(' ')
            .reduce((descriptionComment, word, i) => { return descriptionComment + ' ' + word + (i % MAX_CHAR_LENGTH === MAX_CHAR_LENGTH - 1 ? '\n*' : '') }, '/*') + '*/\n';
}

module.exports = {
    formatComment
}