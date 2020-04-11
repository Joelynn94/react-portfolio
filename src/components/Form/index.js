import React, { Fragment } from 'react'
import './styles.css'

function Form() {
  return (
    <Fragment>
      <h1 className="contact-heading">CONTACT ME.</h1>
      <form action="" method="post">
        <fieldset>
          <ul>
            <div className="contact__container">
              <label ><i className="fal fa-user contact__icon"></i></label>
              <input className="contact__input" type="text" placeholder="e.g. Alex Smith" id="name" name="user_name" />
            </div>
            <div className="contact__container">
              <label><i className="fal fa-envelope contact__icon"></i></label>
              <input className="contact__input" type="text" placeholder="e.g. alexsmith@gmail.com" id="email" name="user_email" />
            </div>
            <div className="contact__container">
              <label><i className="fal fa-comment-lines contact__icon"></i></label>
              <textarea className="contact__input" type="text" placeholder="Type your message here..." id="message" name="user_message"></textarea>
            </div>
          </ul>

          <button className="btn btn-primary contact-btn" type="submit">Submit</button>
        </fieldset>
      </form>
    </Fragment>
  )
}

export default Form
