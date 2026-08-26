import {
  FaHeartbeat,
  FaBone,
  FaWaveSquare,
  FaHandHoldingMedical,
  FaStethoscope,
  FaSyringe,
  FaTooth,
  FaShieldAlt,
} from 'react-icons/fa'

const ICONS = {
  FaHeartbeat,
  FaBone,
  FaWaveSquare,
  FaHandHoldingMedical,
  FaStethoscope,
  FaSyringe,
  FaTooth,
  FaShieldAlt,
}

export default function ServiceCard({ title, description, icon }) {
  const Icon = ICONS[icon] || FaStethoscope
  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-2xl text-primary transition group-hover:bg-primary group-hover:text-white">
        <Icon />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  )
}
