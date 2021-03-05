import React, { useState } from 'react'

const Form = () => {
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
      .then(() => alert('Success! Your message was sent, I will get back to you as soon as possible. Thank you'))
      .catch((error) => alert(error))

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <form onSubmit={handleFormSubmit}>
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="jsName" onChange={(e) => setName(e.target.value)} value={name} required />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email Address</label>
      <input type="email" name="email" id="jsEmail" onChange={(e) => setEmail(e.target.value)} value={email}required />
    </div>
    <div className="form-group">
      <label htmlFor="message">Send me a quick message</label>
      <textarea type="text" name="message" id="jsMessage" onChange={(e) => setMessage(e.target.value)} value={message} required />
    </div>
    <button className="btn btn-primary">Submit Request</button>
  </form>
  )
}

export default Form
