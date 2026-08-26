import { FiPhoneCall } from 'react-icons/fi'
import { CONTACT } from '../data/siteData'

export default function EmergencyCTA() {
  return (
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
        <a
          href={`tel:${CONTACT.phones[0].replace(/\s/g, '')}`}
          className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-accent transition hover:bg-gray-100"
        >
          <FiPhoneCall /> Contact Now
        </a>
      </div>
    </section>
  )
}
