export default function DoctorCard({ name, title, specialty, image }) {
  const initials = name
    .replace('Dr.', '')
    .trim()
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {image ? (
        <img
          src={image}
          alt={name}
          className="mx-auto mb-4 h-24 w-24 rounded-full object-cover object-top"
        />
      ) : (
        <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
          {initials}
        </div>
      )}
      <h3 className="font-semibold text-gray-900">
        {name}
        {title ? ` (${title})` : ''}
      </h3>
      <p className="mt-1 text-sm text-primary-light">{specialty}</p>
    </div>
  )
}
