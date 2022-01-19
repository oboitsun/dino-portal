import React from 'react';
import './contact-us.scss';

export default function ContactUs() {
  return (
    <div id="contact-us">
      <div className="my-container relative ">
        <form className="contact-form z-10 flex flex-col h-full justify-between">
          <div className="contact-grid h-full">
            <input
              className="form-input"
              required
              type="text"
              placeholder="Name"
            />
            <input
              className="form-input"
              required
              type="text"
              placeholder="Email /Phone"
            />

            <textarea
              placeholder="Comment"
              className="form-input comment flex-grow"
              rows={4}
            ></textarea>
          </div>
          <input className="submit" type="submit" value="REQUEST A CALL BACK" />
        </form>
      </div>
    </div>
  );
}
