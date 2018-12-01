// used for jetbrains IDEs for example
const getXMLSyntax = (snippet) => {
  const placeholderMatcher = /\$\{(\d):([^}]*)\}/g;
  const snippetForXML = snippet
    .replace(placeholderMatcher, '$var$1$');

  const varPlaceholders = [];

  const matchesForXMLSyntax = snippet.match(placeholderMatcher);

  if (matchesForXMLSyntax) {
    matchesForXMLSyntax.forEach((item) => {
      varPlaceholders.push(item.replace(placeholderMatcher, '$2'));
    });
  }

  return {
    snippetForXML,
    varPlaceholders,
  }
};

module.exports = {
  getXMLSyntax,
};