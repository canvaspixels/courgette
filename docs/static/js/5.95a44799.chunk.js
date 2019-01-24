(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{36:function(s,a,p){},38:function(s,a,p){"use strict";var n=p(3),l=p.n(n),e=p(8),t=p(9),c=p(11),o=p(10),r=p(12),i=p(2),u=p.n(i),d=p(0),h=p.n(d),m=p(39),k=p(5),f=p.n(k),b=p(13),v=Object.assign||function(s){for(var a=1;a<arguments.length;a++){var p=arguments[a];for(var n in p)Object.prototype.hasOwnProperty.call(p,n)&&(s[n]=p[n])}return s};function y(s,a){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?s:a}var g=function(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)},w=function(s){function a(){var p,n;!function(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var l=arguments.length,e=Array(l),t=0;t<l;t++)e[t]=arguments[t];return p=n=y(this,s.call.apply(s,[this].concat(e))),n.handleClick=function(s){if(n.props.onClick&&n.props.onClick(s),!s.defaultPrevented&&0===s.button&&!n.props.target&&!g(s)){s.preventDefault();var a=n.context.router.history,p=n.props,l=p.replace,e=p.to;l?a.replace(e):a.push(e)}},y(n,p)}return function(s,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);s.prototype=Object.create(a&&a.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(s,a):s.__proto__=a)}(a,s),a.prototype.render=function(){var s=this.props,a=(s.replace,s.to),p=s.innerRef,n=function(s,a){var p={};for(var n in s)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(s,n)&&(p[n]=s[n]);return p}(s,["replace","to","innerRef"]);f()(this.context.router,"You should not use <Link> outside a <Router>"),f()(void 0!==a,'You must specify the "to" property');var l=this.context.router.history,e="string"===typeof a?Object(b.b)(a,null,null,l.location):a,t=l.createHref(e);return u.a.createElement("a",v({},n,{onClick:this.handleClick,href:t,ref:p}))},a}(u.a.Component);w.propTypes={onClick:h.a.func,target:h.a.string,replace:h.a.bool,to:h.a.oneOfType([h.a.string,h.a.object]).isRequired,innerRef:h.a.oneOfType([h.a.string,h.a.func])},w.defaultProps={replace:!1},w.contextTypes={router:h.a.shape({history:h.a.shape({push:h.a.func.isRequired,replace:h.a.func.isRequired,createHref:h.a.func.isRequired}).isRequired}).isRequired};var I=w,O=Object.assign||function(s){for(var a=1;a<arguments.length;a++){var p=arguments[a];for(var n in p)Object.prototype.hasOwnProperty.call(p,n)&&(s[n]=p[n])}return s},E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(s){return typeof s}:function(s){return s&&"function"===typeof Symbol&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s};var T=function(s){var a=s.to,p=s.exact,n=s.strict,l=s.location,e=s.activeClassName,t=s.className,c=s.activeStyle,o=s.style,r=s.isActive,i=s["aria-current"],d=function(s,a){var p={};for(var n in s)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(s,n)&&(p[n]=s[n]);return p}(s,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),h="object"===("undefined"===typeof a?"undefined":E(a))?a.pathname:a,k=h&&h.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1");return u.a.createElement(m.a,{path:k,exact:p,strict:n,location:l,children:function(s){var p=s.location,n=s.match,l=!!(r?r(n,p):n);return u.a.createElement(I,O({to:a,className:l?[t,e].filter(function(s){return s}).join(" "):t,style:l?O({},o,c):o,"aria-current":l&&i||null},d))}})};T.propTypes={to:I.propTypes.to,exact:h.a.bool,strict:h.a.bool,location:h.a.object,activeClassName:h.a.string,className:h.a.string,activeStyle:h.a.object,style:h.a.object,isActive:h.a.func,"aria-current":h.a.oneOf(["page","step","location","date","time","true"])},T.defaultProps={activeClassName:"active","aria-current":"page"};var j=T,C=(p(36),function(s){function a(){var s,p;Object(e.a)(this,a);for(var n=arguments.length,l=new Array(n),t=0;t<n;t++)l[t]=arguments[t];return(p=Object(c.a)(this,(s=Object(o.a)(a)).call.apply(s,[this].concat(l)))).state={},p}return Object(r.a)(a,s),Object(t.a)(a,[{key:"render",value:function(){var s=this,a=this.state.showMenu;return l.a.createElement("div",{className:"nav ".concat(a&&"show")},l.a.createElement("header",null,l.a.createElement("button",{type:"button",onClick:function(){return s.setState({showMenu:!0})},className:"burger"},"Menu")),l.a.createElement("p",{className:"logo"},"Courgette"),l.a.createElement("div",{className:"overlay",onClick:function(){return s.setState({showMenu:!1})}},l.a.createElement("div",{className:"overlay-inner"})),l.a.createElement("div",{className:"main-nav"},l.a.createElement("button",{type:"button",className:"close-btn",onClick:function(){return s.setState({showMenu:!1})}},"Close"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(j,{to:"/",activeClassName:"selected",exact:!0},"Overview")),l.a.createElement("li",null,l.a.createElement(j,{to:"/getting-started",activeClassName:"selected"},"Getting Started")),l.a.createElement("li",null,l.a.createElement(j,{to:"/faqs",activeClassName:"selected"},"FAQs")),l.a.createElement("li",null,l.a.createElement(j,{to:"/api",activeClassName:"selected"},"API")),l.a.createElement("li",null,l.a.createElement(j,{to:"/bdd",activeClassName:"selected"},"BDD - User Stories")))))}}]),a}(n.Component)),x=function(){return l.a.createElement("div",{className:"footer"})};a.a=function(s){var a=s.children,p=s.className;return l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement("div",{className:p||"main-container"},a),l.a.createElement(x,null))}},46:function(s,a,p){},51:function(s,a,p){"use strict";p.r(a);var n=p(8),l=p(9),e=p(11),t=p(10),c=p(12),o=p(3),r=p.n(o),i=p(38),u=(p(46),function(s){function a(){return Object(n.a)(this,a),Object(e.a)(this,Object(t.a)(a).apply(this,arguments))}return Object(c.a)(a,s),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(i.a,{className:""},r.a.createElement("h1",null,"BDD (Behaviour-Driven Developement) "),r.a.createElement("h2",null,"User stories vs specifications"),r.a.createElement("p",null,"With Courgette, you have the option to either write user stories, specifications, or a mixture of the both."),r.a.createElement("p",null,"An example of a user story:"),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:'\n<div class="highlight highlight-text-gherkin-feature"><pre><span class="pl-k">Scenario</span>:<span class="pl-s"> Refunded items should be returned to stock</span>\n  <span class="pl-k">Given </span>that a customer previously bought a black sweater from me\n  <span class="pl-k">And </span>I have three black sweaters in stock.\n  <span class="pl-k">When </span>they return the black sweater for a refund\n  <span class="pl-k">Then </span>I should have four black sweaters in stock.</pre></div>\n<p>An example of a specification:</p>\n<div class="highlight highlight-text-gherkin-feature"><pre><span class="pl-k">Scenario</span>:<span class="pl-s"> Refunded items should be returned to stock</span>\n  <span class="pl-k">Given </span>I am on the <span class="pl-s">\'login\'</span> page\n  <span class="pl-k">When </span>I set <span class="pl-s">\'email\'</span> to <span class="pl-s">\'user@email.com\'</span>\n  <span class="pl-k">And </span>I set <span class="pl-s">\'password\'</span> to <span class="pl-s">\'Password~1\'</span>\n  <span class="pl-k">And </span>I submit the <span class="pl-s">\'login form\'</span>\n  <span class="pl-k">Then </span>I expect to be on the <span class="pl-s">\'home\'</span> page\n  <span class="pl-k">Given </span>I am on the <span class="pl-s">\'black sweaters\'</span> page\n  <span class="pl-k">When </span>I click the <span class="pl-s">\'buy now button\'</span>\n  <span class="pl-k">Then </span>I expect to be on the <span class="pl-s">\'checkout\'</span> page\n  <span class="pl-k">When </span>I set <span class="pl-s">\'first name\'</span> to <span class="pl-s">\'Jill\'</span>\n  <span class="pl-k">And </span>I set <span class="pl-s">\'last name\'</span> to <span class="pl-s">\'McGillis\'</span>\n  <span class="pl-k">And </span>I set <span class="pl-s">\'address\'</span> to <span class="pl-s">\'44 Test Road\'</span>\n  <span class="pl-k">And </span>I set <span class="pl-s">\'postcode\'</span> to <span class="pl-s">\'N44 9GG\'</span>\n  <span class="pl-k">And </span>I set <span class="pl-s">\'card number\'</span> to <span class="pl-s">\'4111 1111 1111 1111\'</span>\n  <span class="pl-k">And </span>I set <span class="pl-s">\'cvv number\'</span> to <span class="pl-s">\'444\'</span>\n  <span class="pl-k">And </span>I set <span class="pl-s">\'expiry date\'</span> to <span class="pl-s">\'04/22\'</span>\n  <span class="pl-k">And </span>I submit the <span class="pl-s">\'purchase form\'</span>\n  <span class="pl-k">Then </span>I expect to be on the <span class="pl-s">\'confirmation\'</span> page\n  <span class="pl-k">Given </span>I am on the <span class="pl-s">\'black sweaters\'</span> page\n  <span class="pl-k">And </span>the <span class="pl-s">\'amount of items in stock\'</span> contains the text <span class="pl-s">\'3 in stock\'</span>\n  <span class="pl-k">When </span>I go to <span class="pl-s">\'my account\'</span> page\n  <span class="pl-k">And </span>I click the <span class="pl-s">\'my orders link\'</span>\n  <span class="pl-k">And </span>I click <span class="pl-s">\'return black sweater link\'</span>\n  <span class="pl-k">Then </span>I expect to be on the <span class="pl-s">\'returns\'</span> page\n  <span class="pl-k">When </span>I click the <span class="pl-s">\'confirm button\'</span>\n  <span class="pl-k">Then </span>I expect to be on the <span class="pl-s">\'item returned confirmation\'</span> page\n  <span class="pl-k">When </span>I go to <span class="pl-s">\'black sweaters\'</span> page\n  <span class="pl-k">Then </span>the <span class="pl-s">\'amount of items in stock\'</span> contains the text <span class="pl-s">\'4 in stock\'</span></pre></div>\n<p>As you can see, the user story is shorter and more readable for the business however requires a bit more development effort, but not much more with Courgette. With the specification example, you have the implementation details all in place and the scenario will run straight away without further effort. If the tests are just for yourself and you want some quick smoke tests, this may be preferred. If you\'re writing lots of similar tests to test edge cases, the user story might be preferred as writing the step definitions to support them will actually make your steps DRY.</p>\n<p>Both the user story and specification BDD examples above require supporting page objects. So for example the <code>checkout.page</code> file will contain the selectors <code>\'first name\'</code> and <code>\'card number\'</code> etc.</p>\n<p>Here\'s how to achieve an automated version of the user story... Inside the <code>stepDefinitions</code> folder, add a new <code>.js</code> file with the following:</p>\n<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> { <span class="pl-c1">Given</span>, <span class="pl-c1">When</span>, <span class="pl-c1">Then</span> } <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">\'</span>cucumber<span class="pl-pds">\'</span></span>);\n\n<span class="pl-en">Given</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>that a customer previously bought a black sweater from me<span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-k">async</span> <span class="pl-k">function</span>() {\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">goToPage</span>(<span class="pl-s"><span class="pl-pds">\'</span>login<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setInputFieldValue</span>(<span class="pl-s"><span class="pl-pds">\'</span>email<span class="pl-pds">\'</span></span>, <span class="pl-s"><span class="pl-pds">\'</span>user@email.com<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setInputFieldValue</span>(<span class="pl-s"><span class="pl-pds">\'</span>password<span class="pl-pds">\'</span></span>, <span class="pl-s"><span class="pl-pds">\'</span>Password~1<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">submitForm</span>(<span class="pl-s"><span class="pl-pds">\'</span>login form<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setPageObjectThenCheckUrl</span>(<span class="pl-s"><span class="pl-pds">\'</span>home<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">goToPage</span>(<span class="pl-s"><span class="pl-pds">\'</span>black sweaters<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">clickElement</span>(<span class="pl-s"><span class="pl-pds">\'</span>buy now button<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setPageObjectThenCheckUrl</span>(<span class="pl-s"><span class="pl-pds">\'</span>checkout<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setInputFieldValue</span>(<span class="pl-s"><span class="pl-pds">\'</span>first name<span class="pl-pds">\'</span></span>, <span class="pl-s"><span class="pl-pds">\'</span>Jill<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setInputFieldValue</span>(<span class="pl-s"><span class="pl-pds">\'</span>last name<span class="pl-pds">\'</span></span>, <span class="pl-s"><span class="pl-pds">\'</span>McGillis<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setInputFieldValue</span>(<span class="pl-s"><span class="pl-pds">\'</span>address<span class="pl-pds">\'</span></span>, <span class="pl-s"><span class="pl-pds">\'</span>44 Test Road<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setInputFieldValue</span>(<span class="pl-s"><span class="pl-pds">\'</span>postcode<span class="pl-pds">\'</span></span>, <span class="pl-s"><span class="pl-pds">\'</span>N44 9GG<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setInputFieldValue</span>(<span class="pl-s"><span class="pl-pds">\'</span>card number<span class="pl-pds">\'</span></span>, <span class="pl-s"><span class="pl-pds">\'</span>4111 1111 1111 1111<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setInputFieldValue</span>(<span class="pl-s"><span class="pl-pds">\'</span>cvv number<span class="pl-pds">\'</span></span>, <span class="pl-s"><span class="pl-pds">\'</span>444<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setInputFieldValue</span>(<span class="pl-s"><span class="pl-pds">\'</span>expiry date<span class="pl-pds">\'</span></span>, <span class="pl-s"><span class="pl-pds">\'</span>04/22<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">submitForm</span>(<span class="pl-s"><span class="pl-pds">\'</span>purchase form<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setPageObjectThenCheckUrl</span>(<span class="pl-s"><span class="pl-pds">\'</span>confirmation<span class="pl-pds">\'</span></span>);\n});\n\n<span class="pl-en">Given</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>I have three black sweaters in stock<span class="pl-c1">.</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-k">async</span> <span class="pl-k">function</span>() {\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">goToPage</span>(<span class="pl-s"><span class="pl-pds">\'</span>black sweaters<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setSelectValueByOptionText</span>(<span class="pl-s"><span class="pl-pds">\'</span>amount of items in stock<span class="pl-pds">\'</span></span>, <span class="pl-s"><span class="pl-pds">\'</span>3 in stock<span class="pl-pds">\'</span></span>);\n});\n\n<span class="pl-en">When</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>they return the black sweater for a refund<span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-k">async</span> <span class="pl-k">function</span>() {\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">goToPage</span>(<span class="pl-s"><span class="pl-pds">\'</span>my account<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">clickElement</span>(<span class="pl-s"><span class="pl-pds">\'</span>my orders link<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">clickElement</span>(<span class="pl-s"><span class="pl-pds">\'</span>return black sweater link<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setPageObjectThenCheckUrl</span>(<span class="pl-s"><span class="pl-pds">\'</span>returns<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">clickElement</span>(<span class="pl-s"><span class="pl-pds">\'</span>confirm button<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setPageObjectThenCheckUrl</span>(<span class="pl-s"><span class="pl-pds">\'</span>item returned confirmation<span class="pl-pds">\'</span></span>);\n});\n\n<span class="pl-en">Then</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>I should have four black sweaters in stock<span class="pl-c1">.</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-k">async</span> <span class="pl-k">function</span>() {\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">goToPage</span>(<span class="pl-s"><span class="pl-pds">\'</span>black sweaters<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setSelectValueByOptionText</span>(<span class="pl-s"><span class="pl-pds">\'</span>amount of items in stock<span class="pl-pds">\'</span></span>, <span class="pl-s"><span class="pl-pds">\'</span>4 in stock<span class="pl-pds">\'</span></span>);\n});</pre></div>\n<p>To take the above one step further, we can remove the duplication in checking the amount in stock.</p>\n\n<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> { <span class="pl-c1">Given</span>, <span class="pl-c1">When</span>, <span class="pl-c1">Then</span> } <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">\'</span>cucumber<span class="pl-pds">\'</span></span>);\n\n<span class="pl-k">async</span> <span class="pl-k">function</span> <span class="pl-en">goToPageAndCheckItemsInStock</span>(<span class="pl-smi">numberOfItems</span>) {\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">goToPage</span>(<span class="pl-s"><span class="pl-pds">\'</span>black sweaters<span class="pl-pds">\'</span></span>);\n  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setSelectValueByOptionText</span>(<span class="pl-s"><span class="pl-pds">\'</span>amount of items in stock<span class="pl-pds">\'</span></span>, <span class="pl-s"><span class="pl-pds">`</span><span class="pl-s1"><span class="pl-pse">${</span>numberOfItems<span class="pl-pse">}</span></span> in stock<span class="pl-pds">`</span></span>);\n}\n\n<span class="pl-en">Given</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>I have (<span class="pl-c1">.</span><span class="pl-k">*</span>) black sweaters in stock<span class="pl-c1">.</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>, goToPageAndCheckItemsInStock);\n\n<span class="pl-en">Then</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>I should have (<span class="pl-c1">.</span><span class="pl-k">*</span>) black sweaters in stock<span class="pl-c1">.</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>, goToPageAndCheckItemsInStock);</pre>\n</div>\n      '}}))}}]),a}(o.Component));a.default=u}}]);
//# sourceMappingURL=5.95a44799.chunk.js.map