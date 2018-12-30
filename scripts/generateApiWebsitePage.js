const fs = require('fs');
const api = require('../api');

const str = `
import React from 'react';
import CommonTemplate from './CommonTemplate';
import Table from './Table';

const APIPage = () => (
  <CommonTemplate className="">
    <h1>Methods for combining actions and assertions</h1>
    <h2>Methods that don’t require page objects</h2>

    <Table>
    <tbody>
    <tr>
${api.pageObjectsNotRequired
    .map(({ methodName, methodArgs }) => `<td>${methodName}</td><td>(${methodArgs.join(', ')})</td>`).join('</tr><tr>')}
    </tr>
    </tbody>
    </Table>

    <h2>Methods that require page objects</h2>

    <Table>
    <tbody>
    <tr>
${api.pageObjectsRequired
    .map(({ methodName, methodArgs }) => `<td>${methodName}</td><td>(${methodArgs.join(', ')})</td>`).join('</tr><tr>')}
    </tr>
    </tbody>
    </Table>


  </CommonTemplate>
);

export default APIPage;
`;


fs.writeFileSync('./website/src/APIPage.js', str);
