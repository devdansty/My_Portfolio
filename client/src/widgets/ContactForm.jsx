import React, { useState } from 'react'
import axios from 'axios'

export default function ContactForm(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      // POST to backend server - update URL if backend runs elsewhere
      await axios.post('http://localhost:5000/api/contact', form, { timeout: 10000 })
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl">
      <input required name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="p-3 rounded-lg card" />
      <input required name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your email" className="p-3 rounded-lg card" />
      <textarea required name="message" rows="6" value={form.message} onChange={handleChange} placeholder="Message" className="p-3 rounded-lg card" />
      <div className="flex items-center gap-4">
        <button type="submit" className="px-5 py-3 rounded-lg bg-neon text-bg font-semibold">Send Message</button>
        <div className="text-sm text-gray-400">
          {status === 'sending' && 'Sending...'}
          {status === 'sent' && 'Message sent — thank you!'}
          {status === 'error' && 'Error sending — try again later.'}
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-2">I will respond to professional inquiries within a few business days.</div>
    </form>
  )
}
