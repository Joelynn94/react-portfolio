import React, { useState } from 'react'
import './styles.css'

function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error))

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <>
      <h1 className='contact-heading'>CONTACT ME.</h1>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <ul>
            <div className='contact__container'>
              <label>
                <i className='fal fa-user contact__icon'></i>
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className='contact__input'
                type='text'
                placeholder='e.g. Alex Smith'
                id='name'
                name='user_name'
              />
            </div>
            <div className='contact__container'>
              <label>
                <i className='fal fa-envelope contact__icon'></i>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className='contact__input'
                type='text'
                placeholder='e.g. alexsmith@gmail.com'
                id='email'
                name='user_email'
              />
            </div>
            <div className='contact__container'>
              <label>
                <i className='fal fa-comment-lines contact__icon'></i>
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className='contact__input'
                type='text'
                placeholder='Type your message here...'
                id='message'
                name='user_message'
              ></textarea>
            </div>
          </ul>

          <button className='btn btn-primary contact-btn' type='submit'>
            Submit
          </button>
        </fieldset>
      </form>
    </>
  )
}

export default Form
