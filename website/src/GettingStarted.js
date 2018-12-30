import React from 'react';
// import { Link } from 'react-router-dom';
import CommonTemplate from './CommonTemplate';
// import Table from './Table';

const APIPage = () => (
  <CommonTemplate className="">
<h2>Getting Started</h2>
<h3>Setup</h3>
<p>This assumes that you have an npm project. If you don’t then make a new one with <code>npm init</code>. It also assumes you are on a Mac, Linux or Windows and have node 8+, npm 6+, and the latest version of Firefox installed.</p>
<p>Type this into your terminal:</p>
<pre><code>npm install courgette &amp;&amp; npm run setup-courgette-snippets
</code></pre>
<p>This will create a <code>uiTests</code> folder with the sample in it, a sample <code>courgette-conf.js</code> file, adds the <code>ct</code>, <code>postinstall</code>, and <code>install-firefoxdriver</code> scripts to your package.json, and adds snippets/Live templates to your IDE.</p>
<p>Run the sample, type into your terminal:</p>
<pre><code>npm run ct
</code></pre>
<p>To just install the courgette package without any of the postinstall steps (not recommended but there if you need to) you can run install with the following environment variables set:</p>
<pre><code>export IGNORE_COURGETTE_SAMPLE_SETUP=1
export IGNORE_COURGETTE_PACKAGE_JSON_SCRIPTS=1
export IGNORE_COURGETTE_CONF_SETUP=1
export IGNORE_COURGETTE_INSTALL_DRIVERS=1
npm install courgette
</code></pre>
<h3>Futher tips:</h3>
<ol>
<li>To improve organisation and scalability, easily compose Page Objects and Component Objects. Page Objects and Component Objects are composed of <a href="https://www.protractortest.org/#/locators" rel="nofollow">Locators</a>, custom methods, and other Component Objects. Components can compose Components which compose Components etc. The only difference between a Page Object and a Component Object is a Component Object does not have an URL. Use the <a href="https://github.com/canvaspixels/courgette/blob/master/STEP_DEFINITIONS.md#step-definitions">step definitions provided</a> (or create your own) to write your own first scenario.</li>
<li>If you’re using git for source control, add <code>uiTestResult</code> to your .gitignore file. If I’m on a fresh project i’ll run: <code>git init &amp;&amp; BR=$'\n' &amp;&amp; echo "node_modules${'{BR}'}uiTestResult" &gt; .gitignore &amp;&amp; git add . &amp;&amp; git commit -am 'init commit'</code> at the root of my new project folder in terminal.</li>
</ol>
<p>As a shortcut, to create yourself a new npm project, initialise npm (create package.json), install and setup Courgette, initialise git and create a commit, paste the following into your terminal:</p>
<pre><code>mkdir yourProjectName &amp;&amp; cd $_ &amp;&amp; npm init -y &amp;&amp; npm i courgette &amp;&amp; git init &amp;&amp; BR=$'\n' &amp;&amp; echo "node_modules${'{BR}'}uiTestResult" &gt; .gitignore &amp;&amp; git add . &amp;&amp; git commit -am 'init commit'
</code></pre>
<p>or without the git stuff:</p>
<pre><code>mkdir yourProjectName &amp;&amp; cd $_ &amp;&amp; npm init -y &amp;&amp; npm i courgette
</code></pre>
<ol start="3">
<li>As an improvement, to suppress deprecation warnings (if running node &gt;= 8) and also to type <code>courgette</code> or <code>ct</code> rather than typing <code>npm run ct</code> each time, you can add the following lines to your <code>~/.bash_profile</code> file:</li>
</ol>
<pre><code>alias courgette="PATH=$(npm bin):$PATH NODE_OPTIONS=--no-deprecation courgette"
alias ct="PATH=$(npm bin):$PATH NODE_OPTIONS=--no-deprecation courgette"
</code></pre>
<p>This is the same command that was added to your package.json. This means you don't have to put npm run each time.</p>
  </CommonTemplate>
);

export default APIPage;
