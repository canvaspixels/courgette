import React, { Component } from 'react';
import CommonTemplate from './CommonTemplate';
import './BDD.scss';

class BDD extends Component {
  render() {
    return (
      <CommonTemplate className="">
        <h1>BDD (Behaviour-Driven Developement) </h1>
        <h2>User stories vs specifications</h2>

        <p>With Courgette, you have the option to either write user stories, specifications, or a mixture of the both.</p>
        <p>An example of a user story:</p>
        <div dangerouslySetInnerHTML={{__html: `
<div class="highlight highlight-text-gherkin-feature"><pre><span class="pl-k">Scenario</span>:<span class="pl-s"> Refunded items should be returned to stock</span>
  <span class="pl-k">Given </span>that a customer previously bought a black sweater from me
  <span class="pl-k">And </span>I have three black sweaters in stock.
  <span class="pl-k">When </span>they return the black sweater for a refund
  <span class="pl-k">Then </span>I should have four black sweaters in stock.</pre></div>
<p>An example of a specification:</p>
<div class="highlight highlight-text-gherkin-feature"><pre><span class="pl-k">Scenario</span>:<span class="pl-s"> Refunded items should be returned to stock</span>
  <span class="pl-k">Given </span>I am on the <span class="pl-s">'login'</span> page
  <span class="pl-k">When </span>I set <span class="pl-s">'email'</span> to <span class="pl-s">'user@email.com'</span>
  <span class="pl-k">And </span>I set <span class="pl-s">'password'</span> to <span class="pl-s">'Password~1'</span>
  <span class="pl-k">And </span>I submit the <span class="pl-s">'login form'</span>
  <span class="pl-k">Then </span>I expect to be on the <span class="pl-s">'home'</span> page
  <span class="pl-k">Given </span>I am on the <span class="pl-s">'black sweaters'</span> page
  <span class="pl-k">When </span>I click the <span class="pl-s">'buy now button'</span>
  <span class="pl-k">Then </span>I expect to be on the <span class="pl-s">'checkout'</span> page
  <span class="pl-k">When </span>I set <span class="pl-s">'first name'</span> to <span class="pl-s">'Jill'</span>
  <span class="pl-k">And </span>I set <span class="pl-s">'last name'</span> to <span class="pl-s">'McGillis'</span>
  <span class="pl-k">And </span>I set <span class="pl-s">'address'</span> to <span class="pl-s">'44 Test Road'</span>
  <span class="pl-k">And </span>I set <span class="pl-s">'postcode'</span> to <span class="pl-s">'N44 9GG'</span>
  <span class="pl-k">And </span>I set <span class="pl-s">'card number'</span> to <span class="pl-s">'4111 1111 1111 1111'</span>
  <span class="pl-k">And </span>I set <span class="pl-s">'cvv number'</span> to <span class="pl-s">'444'</span>
  <span class="pl-k">And </span>I set <span class="pl-s">'expiry date'</span> to <span class="pl-s">'04/22'</span>
  <span class="pl-k">And </span>I submit the <span class="pl-s">'purchase form'</span>
  <span class="pl-k">Then </span>I expect to be on the <span class="pl-s">'confirmation'</span> page
  <span class="pl-k">Given </span>I am on the <span class="pl-s">'black sweaters'</span> page
  <span class="pl-k">And </span>the <span class="pl-s">'amount of items in stock'</span> contains the text <span class="pl-s">'3 in stock'</span>
  <span class="pl-k">When </span>I go to <span class="pl-s">'my account'</span> page
  <span class="pl-k">And </span>I click the <span class="pl-s">'my orders link'</span>
  <span class="pl-k">And </span>I click <span class="pl-s">'return black sweater link'</span>
  <span class="pl-k">Then </span>I expect to be on the <span class="pl-s">'returns'</span> page
  <span class="pl-k">When </span>I click the <span class="pl-s">'confirm button'</span>
  <span class="pl-k">Then </span>I expect to be on the <span class="pl-s">'item returned confirmation'</span> page
  <span class="pl-k">When </span>I go to <span class="pl-s">'black sweaters'</span> page
  <span class="pl-k">Then </span>the <span class="pl-s">'amount of items in stock'</span> contains the text <span class="pl-s">'4 in stock'</span></pre></div>
<p>As you can see, the user story is shorter and more readable for the business however requires a bit more development effort, but not much more with Courgette. With the specification example, you have the implementation details all in place and the scenario will run straight away without further effort. If the tests are just for yourself and you want some quick smoke tests, this may be preferred. If you're writing lots of similar tests to test edge cases, the user story might be preferred as writing the step definitions to support them will actually make your steps DRY.</p>
<p>Both the user story and specification BDD examples above require supporting page objects. So for example the <code>checkout.page</code> file will contain the selectors <code>'first name'</code> and <code>'card number'</code> etc.</p>
<p>Here's how to achieve an automated version of the user story... Inside the <code>stepDefinitions</code> folder, add a new <code>.js</code> file with the following:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> { <span class="pl-c1">Given</span>, <span class="pl-c1">When</span>, <span class="pl-c1">Then</span> } <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>cucumber<span class="pl-pds">'</span></span>);

<span class="pl-en">Given</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>that a customer previously bought a black sweater from me<span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-k">async</span> <span class="pl-k">function</span>() {
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">goToPage</span>(<span class="pl-s"><span class="pl-pds">'</span>login<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setInputFieldValue</span>(<span class="pl-s"><span class="pl-pds">'</span>email<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>user@email.com<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setInputFieldValue</span>(<span class="pl-s"><span class="pl-pds">'</span>password<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>Password~1<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">submitForm</span>(<span class="pl-s"><span class="pl-pds">'</span>login form<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setPageObjectThenCheckUrl</span>(<span class="pl-s"><span class="pl-pds">'</span>home<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">goToPage</span>(<span class="pl-s"><span class="pl-pds">'</span>black sweaters<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">clickElement</span>(<span class="pl-s"><span class="pl-pds">'</span>buy now button<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setPageObjectThenCheckUrl</span>(<span class="pl-s"><span class="pl-pds">'</span>checkout<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setInputFieldValue</span>(<span class="pl-s"><span class="pl-pds">'</span>first name<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>Jill<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setInputFieldValue</span>(<span class="pl-s"><span class="pl-pds">'</span>last name<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>McGillis<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setInputFieldValue</span>(<span class="pl-s"><span class="pl-pds">'</span>address<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>44 Test Road<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setInputFieldValue</span>(<span class="pl-s"><span class="pl-pds">'</span>postcode<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>N44 9GG<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setInputFieldValue</span>(<span class="pl-s"><span class="pl-pds">'</span>card number<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>4111 1111 1111 1111<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setInputFieldValue</span>(<span class="pl-s"><span class="pl-pds">'</span>cvv number<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>444<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setInputFieldValue</span>(<span class="pl-s"><span class="pl-pds">'</span>expiry date<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>04/22<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">submitForm</span>(<span class="pl-s"><span class="pl-pds">'</span>purchase form<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setPageObjectThenCheckUrl</span>(<span class="pl-s"><span class="pl-pds">'</span>confirmation<span class="pl-pds">'</span></span>);
});

<span class="pl-en">Given</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>I have three black sweaters in stock<span class="pl-c1">.</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-k">async</span> <span class="pl-k">function</span>() {
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">goToPage</span>(<span class="pl-s"><span class="pl-pds">'</span>black sweaters<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setSelectValueByOptionText</span>(<span class="pl-s"><span class="pl-pds">'</span>amount of items in stock<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>3 in stock<span class="pl-pds">'</span></span>);
});

<span class="pl-en">When</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>they return the black sweater for a refund<span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-k">async</span> <span class="pl-k">function</span>() {
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">goToPage</span>(<span class="pl-s"><span class="pl-pds">'</span>my account<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">clickElement</span>(<span class="pl-s"><span class="pl-pds">'</span>my orders link<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">clickElement</span>(<span class="pl-s"><span class="pl-pds">'</span>return black sweater link<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setPageObjectThenCheckUrl</span>(<span class="pl-s"><span class="pl-pds">'</span>returns<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">clickElement</span>(<span class="pl-s"><span class="pl-pds">'</span>confirm button<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setPageObjectThenCheckUrl</span>(<span class="pl-s"><span class="pl-pds">'</span>item returned confirmation<span class="pl-pds">'</span></span>);
});

<span class="pl-en">Then</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>I should have four black sweaters in stock<span class="pl-c1">.</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-k">async</span> <span class="pl-k">function</span>() {
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">goToPage</span>(<span class="pl-s"><span class="pl-pds">'</span>black sweaters<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setSelectValueByOptionText</span>(<span class="pl-s"><span class="pl-pds">'</span>amount of items in stock<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>4 in stock<span class="pl-pds">'</span></span>);
});</pre></div>
<p>To take the above one step further, we can remove the duplication in checking the amount in stock.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> { <span class="pl-c1">Given</span>, <span class="pl-c1">When</span>, <span class="pl-c1">Then</span> } <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>cucumber<span class="pl-pds">'</span></span>);

<span class="pl-k">async</span> <span class="pl-k">function</span> <span class="pl-en">goToPageAndCheckItemsInStock</span>(<span class="pl-smi">numberOfItems</span>) {
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">goToPage</span>(<span class="pl-s"><span class="pl-pds">'</span>black sweaters<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-c1">this</span>.<span class="pl-en">setSelectValueByOptionText</span>(<span class="pl-s"><span class="pl-pds">'</span>amount of items in stock<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">\`</span><span class="pl-s1"><span class="pl-pse">$\{</span>numberOfItems<span class="pl-pse">}</span></span> in stock<span class="pl-pds">\`</span></span>);
}

<span class="pl-en">Given</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>I have (<span class="pl-c1">.</span><span class="pl-k">*</span>) black sweaters in stock<span class="pl-c1">.</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>, goToPageAndCheckItemsInStock);

<span class="pl-en">Then</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>I should have (<span class="pl-c1">.</span><span class="pl-k">*</span>) black sweaters in stock<span class="pl-c1">.</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>, goToPageAndCheckItemsInStock);</pre>
</div>
      `}} />














      </CommonTemplate>
    );
  }
}

export default BDD;
