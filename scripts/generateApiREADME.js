const fs = require('fs');
const api = require('../api');

const str = `
## Methods for combining actions and assertions

Methods that don’t require page objects

| Method name | Args |
| --- | --- |
${api.pageObjectsNotRequired
    .map(({ methodName, methodArgs }) => `| ${methodName} | (${methodArgs.join(', ')}) |`).join('\n')}



Methods that require page objects

| Method name | Args |
| --- | --- |
${api.pageObjectsRequired
    .map(({ methodName, methodArgs }) => `| ${methodName} | (${methodArgs.join(', ')}) |`).join('\n')}
`;


fs.writeFileSync('./METHODS_FOR_COMBINING.md', str);
