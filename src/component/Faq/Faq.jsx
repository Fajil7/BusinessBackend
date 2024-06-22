import React, { Component } from 'react';
import './Faq.css';

class Faq extends Component {
  state = {
    activeQuestionIndex: null,
  };

  toggleAnswer = (index) => {
    this.setState((prevState) => ({
      activeQuestionIndex: prevState.activeQuestionIndex === index ? null : index,
    }));
  };

  render() {
    const { activeQuestionIndex } = this.state;
    const questions = [
      {
        question: 'What is Business Sphere?',
        answer:
          'Business Sphere is a Kolkata-based open networking forum that provides business professionals with valuable networking opportunities and access to resources.',
      },
      {
        question: 'Is there a registration fee to join Business Sphere?',
        answer:
          'No, there are no hefty registration charges. You can participate in our programs by paying the nominal program fees only. However management reserves the right of admission to any event or and any other thing as per the situation and cases.',
      },
      {
        question: 'Are there any routine responsibilities or commitment as a member of Business Sphere?',
        answer:
          'No, there are no mandatory routine responsibilities or long-term commitments for our members. You can engage at your convenience and pace.',
      },
      {
        question: 'How can I get my Credential on the Business Sphere Website?',
        answer:
          'You can have your credentials listed on our website by paying a small annual fee of Rs. 150. This listing will be visible to all website visitors.',
      },
      {
        question: 'What are the benefits of having my credentials listed on the Business Sphere Website?',
        answer:
          'Listing your credentials on our website enhances your visibility and allows you to showcase your professional profile to a wider audience, potentially leading to increased business opportunities and connections.',
      },
      {
        question: 'What types of programs and events does Business Sphere Website offer?',
        answer:
          'Business Sphere offers a range of networking programs, including quarterly meetings, networking sessions, social activities, and other business-related events.',
      },
      {
        question: 'How often are the networking sessions held and what is the usual duration?',
        answer:
          'Our networking sessions are held quarterly, typically on Saturday evenings, and last approximately 4-5 hours, providing ample time for valuable networking.',
      },
      {
        question: 'Can I participate in Business Sphere events as a business professional from any industry or sector?',
        answer:
          'Yes, Business Sphere is open to all business professionals from diverse industries and sectors, fostering cross-industry collaboration and networking.',
      },
      {
        question: 'How can I stay updated on upcoming events or programs hosted by Business Sphere?',
        answer:
          'You can stay informed about our upcoming events by regularly visiting our website, following our active social media channels, and subscribing to our newsletter for timely updates.',
      },
      {
        question: 'Can I promote my products and services through Business Sphere\'s website and events?',
        answer:
          'Yes, we provide advertising and promotional opportunities for your products or services through our website and various events. Contact us for more information on promotional opportunities. We have options to display through Standee, Sponsorship and free distribution to members attending the event.',
      },
      {
        question: 'Is my membership renewal automatic every year?',
        answer:
          'No, membership renewal is not automatic. You will be notified in advance of your membership expiry date, and you can choose to renew it as per your preference. It will be displayed under your login and even on the website in a separate section to be launched soon. However management reserves the right of renewal or admission to any event or any other thing as per the situation and cases.',
      },
    ];

    return (
      <section id="home" className="content">
        <div>
          <img
            src="https://img.freepik.com/premium-vector/faq-concept_23-2148157065.jpg?w=840"
            alt="about"
            className="faq-img"
          />
        </div>
        <div className="faq-container">
          <h1 className="faq-heading">FAQ</h1>
          {questions.map((item, index) => (
            <div key={index} className="question-wrapper">
              <div className="question-container">
                <p className="question">{item.question}</p>
                <button
                  className="plus"
                  onClick={() => this.toggleAnswer(index)}
                >
                  {activeQuestionIndex === index ? '-' : '+'}
                </button>
              </div>
              {activeQuestionIndex === index && (
                <div className="ans-wrapper">
                  <div className="ans-container">
                    <p className="ans">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Faq;
