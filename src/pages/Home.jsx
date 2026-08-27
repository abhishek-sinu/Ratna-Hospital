import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiCalendar,
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiMail,
} from 'react-icons/fi'
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

const CLEANLINESS_IMAGES = [
  { src: '/bed%20cleaning.png', alt: 'Hospital bed being cleaned' },
  { src: '/cleaning%20floor.png', alt: 'Hospital floor being cleaned' },
  { src: '/desk%20cleaning.png', alt: 'Hospital desk being disinfected' },
  { src: '/staff%20cleaniness.png', alt: 'Hospital staff maintaining cleanliness' },
  { src: '/training.png', alt: 'Hospital staff hygiene training' },
  { src: '/dispose.png', alt: 'Proper hospital waste disposal' },
]

const HERO_IMAGES = [
  { src: '/hospital%20main%20entrance.png', alt: 'Ratna Hospital main entrance' },
  { src: '/ICU.jpg', alt: 'Ratna Hospital intensive care unit' },
  { src: '/Front%20office.jpg', alt: 'Ratna Hospital front office' },
]

export default function Home() {
  const [subscribed, setSubscribed] = useState(false)
  const [activeHeroImage, setActiveHeroImage] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroImage((current) => (current + 1) % HERO_IMAGES.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  function showPreviousHeroImage() {
    setActiveHeroImage(
      (current) => (current - 1 + HERO_IMAGES.length) % HERO_IMAGES.length,
    )
  }

  function showNextHeroImage() {
    setActiveHeroImage((current) => (current + 1) % HERO_IMAGES.length)
  }

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

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl">
            {HERO_IMAGES.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  index === activeHeroImage ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-12">
              <div className="flex gap-2" aria-label="Hero image slides">
                {HERO_IMAGES.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveHeroImage(index)}
                    className={`h-2.5 w-2.5 rounded-full border border-white transition ${
                      index === activeHeroImage ? 'bg-white' : 'bg-white/35'
                    }`}
                    aria-label={`Show slide ${index + 1}: ${image.alt}`}
                    aria-current={index === activeHeroImage ? 'true' : undefined}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={showPreviousHeroImage}
                  className="rounded-full bg-black/30 p-2 text-white transition hover:bg-black/60"
                  aria-label="Previous hospital image"
                >
                  <FiArrowLeft />
                </button>
                <button
                  type="button"
                  onClick={showNextHeroImage}
                  className="rounded-full bg-black/30 p-2 text-white transition hover:bg-black/60"
                  aria-label="Next hospital image"
                >
                  <FiArrowRight />
                </button>
              </div>
            </div>
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
            {SERVICES.slice(0, 4).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark"
            >
              See More Services <FiArrowRight />
            </Link>
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
            {CLEANLINESS_IMAGES.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="aspect-square w-full rounded-xl object-cover"
              />
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
