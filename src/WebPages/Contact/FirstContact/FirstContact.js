import React from 'react';
import { Link } from 'react-router-dom';
import './FirstContact.css';

const FirstContact = () => {
  return (
    <div>
      <p className='title_text'>Contact With Me</p>
      <div className='first_contact'>
        <p className=''>The purpose of a blog contact page is to provide a way for readers to get in touch with the blog owner or organization, whether for feedback, questions, or to pitch ideas for articles. It is an important element of any blog, as it allows readers to easily communicate with the blog owner and helps to build trust and credibility. A well-designed blog contact page should be easy to find and use, and should include clear and concise instructions on how to get in touch. It should also include any relevant contact details, such as an email address or social media profiles, and should provide multiple ways for readers to reach out, such as through a contact form, email, or social media. Additionally, it is important to regularly check and respond to any messages or inquiries received through the contact page to ensure that readers receive timely and helpful responses.</p>

        <div className='form_field'>
          <label>
            <p>Enter Your Name</p>
            <input className='input_field' type="" name="" id="" />
          </label>
          <label>
            <p>Enter Your Email</p>
            <input className='input_field' type="" name="" id="" />
          </label>
          <label>
            <p>Enter Your Message</p>
            <textarea className='input_field' type="" name="" id="" />
          </label>
          <input className='form_btn' type="submit" value="submit" />
        </div>
      </div>
    </div>
  );
};

export default FirstContact;