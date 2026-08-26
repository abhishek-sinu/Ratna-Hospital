import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { FiMenu, FiX, FiPhoneCall } from 'react-icons/fi'
import { NAV_LINKS, CONTACT } from '../data/siteData'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <div className="bg-primary text-white text-sm">
        <div className="container-x flex items-center justify-between py-1.5">
          <span className="hidden sm:inline">{CONTACT.hours}</span>
          <a
            href={`tel:${CONTACT.phones[0].replace(/\s/g, '')}`}
            className="flex items-center gap-1.5 font-medium"
          >
            <FiPhoneCall /> {CONTACT.phones.join(' / ')}
          </a>
        </div>
      </div>

      <nav className="container-x flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/logo.png" alt="Ratna Hospital" className="h-11 w-auto" />
          <span className="text-lg font-bold text-primary-dark leading-tight">
            Ratna Hospital
            <span className="block text-xs font-normal text-gray-500">
              Cuttack, Odisha
            </span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-6 font-medium text-gray-700">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-primary ${
                    isActive ? 'text-primary font-semibold' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/appointment"
          className="hidden lg:inline-block rounded-full bg-accent px-5 py-2.5 font-semibold text-white transition hover:bg-red-600"
        >
          Book Appointment
        </Link>

        <button
          className="lg:hidden text-2xl text-primary-dark"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <ul className="container-x flex flex-col gap-1 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 font-medium hover:bg-gray-50 ${
                      isActive ? 'text-primary font-semibold' : 'text-gray-700'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/appointment"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-accent px-4 py-2 text-center font-semibold text-white"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
