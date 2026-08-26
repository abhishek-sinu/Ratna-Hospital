import { useState } from 'react'
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

  function handleSubmit(e) {
    e.preventDefault()
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
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Department
                </label>
                <select className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
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
    </>
  )
}
