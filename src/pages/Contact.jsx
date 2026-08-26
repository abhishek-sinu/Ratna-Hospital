import PageHeader from '../components/PageHeader'
import { FiMapPin, FiMail, FiPhone, FiClock } from 'react-icons/fi'
import { CONTACT } from '../data/siteData'

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you — reach out anytime"
      />

      <section className="py-20">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            {CONTACT.addresses.map((addr) => (
              <div
                key={addr.label}
                className="flex gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <FiMapPin className="mt-1 shrink-0 text-xl text-primary" />
                <div>
                  <p className="font-semibold text-gray-900">{addr.label}</p>
                  {addr.lines.map((line) => (
                    <p key={line} className="text-sm text-gray-600">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <FiPhone className="mt-1 shrink-0 text-xl text-primary" />
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <a
                  href={`tel:${CONTACT.phones[0].replace(/\s/g, '')}`}
                  className="text-sm text-gray-600"
                >
                  {CONTACT.phones.join(' / ')}
                </a>
              </div>
            </div>

            <div className="flex gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <FiMail className="mt-1 shrink-0 text-xl text-primary" />
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-gray-600"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>

            <div className="flex gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <FiClock className="mt-1 shrink-0 text-xl text-primary" />
              <div>
                <p className="font-semibold text-gray-900">Working Hours</p>
                <p className="text-sm text-gray-600">{CONTACT.hours}</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm lg:col-span-2">
            <iframe
              title="Ratna Hospital Location"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Ratna+Hospital+Jobra+Cuttack&output=embed"
            />
          </div>
        </div>
      </section>
    </>
  )
}
