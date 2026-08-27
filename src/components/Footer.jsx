import { Link } from 'react-router-dom'
import { FiMapPin, FiMail, FiPhone, FiClock, FiFacebook, FiInstagram } from 'react-icons/fi'
import { CONTACT, NAV_LINKS } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-gray-300">
      <div className="container-x grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <img src="/logo.png" alt="Ratna Hospital" className="h-10 w-auto" />
            <h3 className="text-xl font-bold text-white">Ratna Hospital</h3>
          </div>
          <p className="text-sm leading-relaxed">
            A trusted multi-specialty hospital in Odisha, providing an
            extensive range of treatment options for patients with simple
            and complex health conditions.
          </p>
          <div className="mt-4 flex gap-3 text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-primary-light">
              <FiFacebook />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-primary-light">
              <FiInstagram />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-primary-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">Our Addresses</h4>
          <div className="space-y-4 text-sm">
            {CONTACT.addresses.map((addr) => (
              <div key={addr.label} className="flex gap-2">
                <FiMapPin className="mt-1 shrink-0 text-primary-light" />
                <div>
                  <p className="font-medium text-white">{addr.label}</p>
                  {addr.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FiPhone className="text-primary-light" />
              <a href={`tel:${CONTACT.phones[0].replace(/\s/g, '')}`}>
                {CONTACT.phones.join(' / ')}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-primary-light" />
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <FiClock className="text-primary-light" />
              {CONTACT.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Ratna Hospital. All Rights Reserved.
      </div>
    </footer>
  )
}
