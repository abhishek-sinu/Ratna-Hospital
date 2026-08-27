import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import PageHeader from '../components/PageHeader'
import { CONTACT } from '../data/siteData'

const DEPARTMENTS = [
  'General Surgery',
  'Neurosurgery',
  'Medical Oncology',
  'Orthopaedics',
  'Dental & Maxillofacial',
  'Plastic Surgery',
]

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false)
  const [showWhatsAppChoices, setShowWhatsAppChoices] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: DEPARTMENTS[0],
    date: '',
    message: '',
  })

  function updateField(e) {
    setFormData((current) => ({ ...current, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setShowWhatsAppChoices(true)
  }

  function openWhatsApp(phone) {
    const message = `Hello Ratna Hospital, I would like to request an appointment.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Department: ${formData.department}
Preferred date: ${formData.date}
Message: ${formData.message || 'No additional message'}`
    const number = phone.replace(/\D/g, '')
    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
    setShowWhatsAppChoices(false)
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        title="Book an Appointment"
        subtitle="Fill in your details and our team will get back to you shortly"
      />

      <section className="py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={updateField}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={updateField}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Department
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={updateField}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Preferred Date
                </label>
                <input
                  required
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={updateField}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Message (optional)
              </label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-primary py-3 font-semibold text-white transition hover:bg-primary-dark"
            >
              Request Appointment
            </button>

            {submitted && (
              <p className="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                Thank you! Your appointment request has been noted. Our team
                will contact you shortly to confirm.
              </p>
            )}
          </form>

          <div className="rounded-2xl bg-primary/5 p-8">
            <h3 className="text-xl font-semibold text-gray-900">
              Need Immediate Assistance?
            </h3>
            <p className="mt-2 text-gray-600">
              For urgent medical needs, please call us directly instead of
              using the form.
            </p>
            <div className="mt-6 space-y-3 text-gray-700">
              <p className="font-semibold text-primary">
                {CONTACT.phones.join(' / ')}
              </p>
              <p>{CONTACT.email}</p>
              <p>{CONTACT.hours}</p>
            </div>
          </div>
        </div>
      </section>

      {showWhatsAppChoices && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/55 px-4"
          role="presentation"
          onClick={() => setShowWhatsAppChoices(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-whatsapp-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="appointment-whatsapp-title" className="text-xl font-bold text-gray-900">
                  Choose a WhatsApp number
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Your appointment details will be added to the message.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowWhatsAppChoices(false)}
                className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                aria-label="Close WhatsApp number chooser"
              >
                <FiX />
              </button>
            </div>
            <div className="mt-6 grid gap-3">
              {CONTACT.phones.map((phone) => (
                <button
                  key={phone}
                  type="button"
                  onClick={() => openWhatsApp(phone)}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 text-left font-semibold text-primary transition hover:border-primary hover:bg-primary/5"
                >
                  <FaWhatsapp className="text-xl text-green-600" />
                  <span>{phone}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
