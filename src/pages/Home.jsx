import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCalendar, FiArrowRight, FiCheckCircle, FiImage, FiMail } from 'react-icons/fi'
import StatsSection from '../components/StatsSection'
import ServiceCard from '../components/ServiceCard'
import DoctorCard from '../components/DoctorCard'
import FeatureCard from '../components/FeatureCard'
import EmergencyCTA from '../components/EmergencyCTA'
import {
  SERVICES,
  DOCTORS,
  FEATURES,
  CLEANLINESS_HIGHLIGHTS,
  NEWS,
} from '../data/siteData'

const HIGHLIGHTS = [
  'Advanced ICU & 24/7 emergency care',
  'Experienced specialist doctors',
  '53+ well-equipped hospital rooms',
  'Modern surgical facilities',
]

export default function Home() {
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container-x grid gap-10 py-20 md:grid-cols-2 md:items-center lg:py-28">
          <div>
            <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-medium">
              Trusted Multi-Specialty Hospital in Odisha
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              We Provide Medical Services That You Can Trust
            </h1>
            <p className="mt-4 max-w-lg text-white/85">
              Ratna Hospital, Cuttack offers precision medicine, compassionate
              care, and advanced surgical expertise — tailored to every
              patient's needs, 24 hours a day.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/appointment"
                className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold transition hover:bg-red-600"
              >
                <FiCalendar /> Get Appointment
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                Learn More <FiArrowRight />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
            <h2 className="mb-4 text-xl font-semibold">Why Choose Us</h2>
            <ul className="space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <FiCheckCircle className="shrink-0 text-lg text-green-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Feature highlights */}
      <section className="bg-gray-50 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary-light">
              How We Help
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              We Are Always Ready to Help You & Your Family
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20">
        <div className="container-x grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary-light">
              Who We Are
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Precision Care, Personalized for You
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Our mission at Ratna Hospital is to enhance health outcomes
              through precision medicine, where each treatment plan is
              meticulously tailored to the individual's unique
              pathophysiology and clinical needs. Our core values revolve
              around patient safety, clinical efficacy, and continuous
              improvement in every aspect of healthcare delivery.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-dark"
            >
              Read More About Us <FiArrowRight />
            </Link>
          </div>
          <div className="rounded-2xl bg-primary/5 p-8">
            <blockquote className="space-y-4 text-lg font-medium text-primary-dark">
              <p>"Your health, our priority."</p>
              <p>"Where clinical excellence and compassionate care converge."</p>
              <p>"Excellence in every diagnosis, care in every treatment."</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary-light">
              Our Services
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              We Offer Different Services to Improve Your Health
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <EmergencyCTA />

      {/* Cleanliness */}
      <section className="py-20">
        <div className="container-x grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary-light">
              Our Commitment
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              We Maintain Cleanliness Rules Inside Our Hospital
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              At Ratna Hospital, maintaining a pristine and hygienic
              environment is paramount to ensuring the safety and well-being
              of our patients, staff, and visitors. We adhere to rigorous
              cleanliness protocols and continually monitor our practices to
              uphold the highest standards.
            </p>
            <ul className="mt-6 space-y-3">
              {CLEANLINESS_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <FiCheckCircle className="shrink-0 text-lg text-primary" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-xl bg-primary/5 text-primary"
              >
                <FiImage className="text-3xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary-light">
              Our Team
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Meet Our Doctors
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DOCTORS.slice(0, 3).map((doctor) => (
              <DoctorCard key={doctor.name} {...doctor} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/doctors"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark"
            >
              View More Doctors <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-gray-50 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary-light">
              Latest Updates
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Keep Up With Our Most Recent Medical News
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {NEWS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary-dark py-16 text-white">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Sign Up for Our Newsletter
          </h2>
          <p className="max-w-xl text-white/80">
            Join our newsletter to get access to exclusive content on medical
            breakthroughs, preventive care tips, and updates from Ratna
            Hospital's healthcare professionals.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-4 py-3">
              <FiMail className="text-gray-400" />
              <input
                required
                type="email"
                placeholder="Your email address"
                className="w-full text-gray-800 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-accent px-6 py-3 font-semibold transition hover:bg-red-600"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p className="text-sm font-medium text-green-300">
              Thank you for subscribing to Ratna Hospital's newsletter!
            </p>
          )}
        </div>
      </section>
    </>
  )
}
