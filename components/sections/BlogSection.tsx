import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { blogSection as copy, blogPosts as postsData } from '@/lib/copy'

const images: Record<string, string> = {
  'chip-tuning-co-musisz-wiedziec': '/images/bmw3.jpeg',
  'wymiana-rozrzadu-bmw':           '/images/bmw4.jpeg',
  'diagnostyka-komputerowa':        '/images/garage3.jpeg',
}

const blogPosts = postsData.map((p, i) => ({
  id: i + 1,
  title: p.title,
  slug: p.slug,
  excerpt: p.excerpt,
  image: images[p.slug] ?? '/images/bmw3.jpeg',
  category: p.category,
  author: 'ERWO Team',
  date: p.date,
  readTime: p.readTime,
}))

export default function BlogSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-4">{copy.heading}</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {copy.subheading}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-lg shadow-lg overflow-hidden card-hover"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-erwo-red text-white px-3 py-1 rounded-full text-xs font-roboto font-bold">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('pl-PL')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl mb-3 group-hover:text-erwo-red transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <span className="inline-flex items-center text-erwo-red font-roboto font-bold group-hover:gap-3 transition-all">
                  {copy.readMore}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/blog" className="btn-primary text-lg px-8 py-4">
            {copy.allArticles}
          </Link>
        </div>
      </div>
    </section>
  )
}
