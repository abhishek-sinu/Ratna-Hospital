import PageHeader from '../components/PageHeader'
import { FiImage } from 'react-icons/fi'

const GALLERY_CATEGORIES = [
  { label: 'Hospital Building', image: '/hospital main entrance.png' },
  { label: 'ICU & Critical Care' , image: '/ICU.jpg'},
  { label: 'Operation Theatre', image: '/cleaning floor.png' },
  { label: 'Patient Rooms' },
  { label: 'Cleanliness & Hygiene', image: '/dispose.png' },
  { label: 'Reception & Lobby' , image: '/Front office.jpg'},
  { label: 'Pharmacy' },
  { label: 'Emergency Ward' },
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
          {GALLERY_CATEGORIES.map(({ label, image }) => (
            <div
              key={label}
              className={`relative flex aspect-4/3 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl text-primary ${
                image ? '' : 'bg-primary/5'
              }`}
            >
              {image ? (
                <img
                  src={image}
                  alt={label}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <FiImage className="text-4xl" />
              )}
              <span
                className={`z-10 px-4 text-center font-medium ${
                  image
                    ? 'absolute inset-x-0 bottom-0 bg-black/55 py-3 text-white'
                    : ''
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
