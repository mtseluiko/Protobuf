const MAX_CHAR_LENGTH = 10;

const formatComment = comment => {
    return !comment ? '' :
        comment.replaceAll('\n', '').split(' ')
            .reduce((descriptionComment, word, i) => { return descriptionComment + ' ' + word + (i % MAX_CHAR_LENGTH === MAX_CHAR_LENGTH - 1 ? '\n*' : '') }, '/*') + '*/\n';
}

/**
 * @param {{ statement: string, spacePrefix: string }} 
 * @returns {string}
 */
const wrapInCommentBlock = ({ statement, spacePrefix }) => {
  const getCommentBodyLine = (line) =>
    line
      .replace(/\*\/|\/\*|\* /g, '')
      .split('\n')
      .filter((line) => Boolean(line.trim()))
      .map((line) => `${spacePrefix}* ${line}`)
      .join('\n');

  const commentBody = statement
    .split('\n\n')
    .map(getCommentBodyLine)
    .join(`\n${spacePrefix}*\n`);

  return `${spacePrefix}/*\n` + commentBody + `\n${spacePrefix}*/`;
};

module.exports = {
    formatComment,
    wrapInCommentBlock,
}
