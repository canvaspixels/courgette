import React, { Component } from 'react';
import CommonTemplate from './CommonTemplate';
import './FAQs.scss';

class FAQs extends Component {

  qs = [
    {
      q: 'How do you install and run courgette behind a corporate proxy?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eius aut eligendi quam aspernatur repellat, quisquam laudantium minus a aliquid facilis, sed non consequuntur assumenda, veritatis, eum enim commodi itaque.'
     },
    {
      q: 'How do you run your tests in parallel?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eius aut eligendi quam aspernatur repellat, quisquam laudantium minus a aliquid facilis, sed non consequuntur assumenda, veritatis, eum enim commodi itaque.'
     },
    {
      q: 'How do you test an application behind a login? Do you need to complete the login form before each scenario?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eius aut eligendi quam aspernatur repellat, quisquam laudantium minus a aliquid facilis, sed non consequuntur assumenda, veritatis, eum enim commodi itaque.'
     },
    {
      q: 'How do you test an application running on localhost over HTTPS when the add exception page keeps showing?',
      a: 'User agent str? Flag in conf?'
     },
  ]

  render() {
    return (
      <CommonTemplate className="">
        <h1>“Frequently” “asked” questions</h1>
        <p className="faqs__intro">None of these questions were <em>frequently</em> asked, nor were they actually ever <em>asked</em> to any of the Courgette team, but they're problems that a lot of people come across when automating UI tests. They're here nonetheless to help you people.</p>

        <div className="faqs">
        { this.qs.map((q, i) => (
          <div className="faq" key={i}>
            <div className="faq__q">
              {/*<a href="/faqs" onClick={() => { this.setState({  }) }}>{q.q}</a>*/}
              <h2>{q.q}</h2>
            </div>
            <div className="faq__a">
              {q.a}
            </div>
          </div>
        ))}
        </div>

      </CommonTemplate>
    );
  }
}

export default FAQs;
