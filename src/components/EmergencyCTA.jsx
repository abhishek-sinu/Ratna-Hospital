import { useState } from 'react'
import { FiPhoneCall, FiX } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { CONTACT } from '../data/siteData'

export default function EmergencyCTA() {
  const [showWhatsAppChoices, setShowWhatsAppChoices] = useState(false)
  const defaultMessage = encodeURIComponent(
    'Hello Ratna Hospital, I would like to know more about your medical services. Please assist me.',
  )

  function openWhatsApp(phone) {
    const number = phone.replace(/\D/g, '')
    window.open(
      `https://wa.me/${number}?text=${defaultMessage}`,
      '_blank',
      'noopener,noreferrer',
    )
    setShowWhatsAppChoices(false)
  }

  return (
    <>
      <section className="bg-accent py-10 text-white">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-2xl font-bold">
            Need Emergency Medical Care?
          </h2>
          <p className="mt-1 text-white/90">
            Call us now at {CONTACT.phones.join(' / ')} — our team is ready 24/7.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowWhatsAppChoices(true)}
          className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-accent transition hover:bg-gray-100"
        >
          <FaWhatsapp className="text-lg" /> Contact on WhatsApp
        </button>
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
            aria-labelledby="whatsapp-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="whatsapp-dialog-title" className="text-xl font-bold text-gray-900">
                  Choose a WhatsApp number
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Your message will be ready to send automatically.
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
                  <FiPhoneCall className="text-lg text-accent" />
                  <span>{phone}</span>
                  <FaWhatsapp className="ml-auto text-lg text-green-600" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
