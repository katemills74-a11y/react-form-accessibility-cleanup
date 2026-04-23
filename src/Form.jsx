// src/Form.jsx
import React from 'react'

export default function Form() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [alertMessage, setAlertMessage] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email) {
      setAlertMessage('Please fill in all fields')
    } else {
      setAlertMessage(`Form submitted with Name: ${name} and Email: ${email}`)
    }
  }

  return (
    <main>
      <form className="form-container" onSubmit={handleSubmit}>
        <section className="field">
          <label htmlFor="nameInput">Name: * </label>
          <input
            id="nameInput"
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </section>

        <section className="field">
          <label htmlFor="emailInput">Email: * </label>
          <input
            id="emailInput"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>

        <button className="send-button" type="submit">
          Send
        </button>
      </form>

      <div aria-live="polite" className="sr-alert">
        {alertMessage}
      </div>
    </main>
  )
}
