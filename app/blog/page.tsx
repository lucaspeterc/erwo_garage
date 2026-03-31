import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | ERWO Garage – Poradniki motoryzacyjne',
  description: 'Porady dotyczące chip tuningu, serwisu samochodowego, diagnostyki i utrzymania aut. Blog ERWO Garage Radomsko.',
}

const posts = [
  {
    slug: 'chip-tuning-co-musisz-wiedziec',
    title: 'Chip Tuning – Co musisz wiedzieć przed modyfikacją?',
    excerpt: 'Kompleksowy przewodnik po chip tuningu. Dowiedz się, jak zwiększyć moc swojego auta bezpiecznie i z gwarancją.',
    image: '/images/bmw3.jpeg',
    category: 'Chip Tuning',
    date: '2025-10-20',
    readTime: '5 min',
  },
  {
    slug: 'wymiana-rozrzadu-bmw',
    title: 'Wymiana rozrządu BMW – Kiedy i dlaczego?',
    excerpt: 'Poznaj objawy zużycia rozrządu i dowiedz się, kiedy należy wykonać wymianę, aby uniknąć poważnej awarii.',
    image: '/images/bmw4.jpeg',
    category: 'Serwis',
    date: '2025-10-15',
    readTime: '7 min',
  },
  {
    slug: 'diagnostyka-komputerowa',
    title: 'Diagnostyka komputerowa – Klucz do sprawnego auta',
    excerpt: 'Jak nowoczesna diagnostyka pomaga w szybkim wykryciu usterek i oszczędza Twoje pieniądze.',
    image: '/images/garage3.jpeg',
    category: 'Diagnostyka',
    date: '2025-10-10',
    readTime: '4 min',
  },
]

export default function BlogPage() {
  return (
    <main className="pt-24">
      <section className="bg-erwo-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bebas tracking-wide mb-4">Blog</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Praktyczne porady i wiedza o motoryzacji z warsztatu ERWO Garage.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white rounded-xl shadow-md overflow-hidden card-hover">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-erwo-red text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(post.date).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-erwo-dark mb-2 group-hover:text-erwo-red transition-colors leading-snug">{post.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
