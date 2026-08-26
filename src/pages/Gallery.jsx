import PageHeader from '../components/PageHeader'
import { FiImage } from 'react-icons/fi'

const GALLERY_CATEGORIES = [
  'Hospital Building',
  'ICU & Critical Care',
  'Operation Theatre',
  'Patient Rooms',
  'Cleanliness & Hygiene',
  'Reception & Lobby',
  'Pharmacy',
  'Emergency Ward',
]

export default function Gallery() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="A glimpse into our facilities and commitment to care"
      />

      <section className="py-20">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY_CATEGORIES.map((label) => (
            <div
              key={label}
              className="flex aspect-4/3 flex-col items-center justify-center gap-3 rounded-2xl bg-primary/5 text-primary"
            >
              <FiImage className="text-4xl" />
              <span className="px-4 text-center font-medium">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
