import { FaAmbulance, FaPills, FaUserMd } from 'react-icons/fa'

const ICONS = { FaAmbulance, FaPills, FaUserMd }

export default function FeatureCard({ title, description, icon }) {
  const Icon = ICONS[icon] || FaUserMd
  return (
    <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  )
}
