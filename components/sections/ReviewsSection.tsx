'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

// Sample reviews - can be replaced with Google Reviews API integration later
const reviews = [
  {
    id: 1,
    author: 'Jan Kowalski',
    rating: 5,
    text: 'Profesjonalna obsługa, terminowość i uczciwe ceny. Chip tuning mojego BMW przeszedł wszystkie oczekiwania. Polecam!',
    date: '2025-10-15',
    source: 'Google',
  },
  {
    id: 2,
    author: 'Anna Nowak',
    rating: 5,
    text: 'Bardzo kompetentny zespół. Diagnostyka i naprawa wykonana w jednym dniu. Na pewno wrócę na następny przegląd.',
    date: '2025-09-22',
    source: 'Google',
  },
  {
    id: 3,
    author: 'Piotr Wiśniewski',
    rating: 5,
    text: 'Najlepszy warsztat w Radomsku! Świetny kontakt, fachowe doradztwo i gwarancja na wykonane usługi. 100% zadowolenia!',
    date: '2025-09-10',
    source: 'Google',
  },
  {
    id: 4,
    author: 'Marcin Dąbrowski',
    rating: 5,
    text: 'Test na hamowni pokazał realne przyrosty mocy po tuningu. Profesjonalizm na najwyższym poziomie!',
    date: '2025-08-28',
    source: 'Google',
  },
]

export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0)

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const review = reviews[currentReview]

  return (
    <section className="section-padding bg-erwo-gray">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-4">Opinie Klientów</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Zobacz, co mówią o nas nasi zadowoleni klienci
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <Quote className="absolute top-8 left-8 w-12 h-12 text-erwo-red/20" />

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-6 h-6 ${
                    index < review.rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-lg md:text-xl text-gray-700 text-center mb-8 italic min-h-[120px] flex items-center justify-center">
              &ldquo;{review.text}&rdquo;
            </p>

            {/* Author */}
            <div className="text-center">
              <p className="font-roboto font-bold text-erwo-dark text-lg">
                {review.author}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(review.date).toLocaleDateString('pl-PL', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })} • {review.source}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevReview}
                className="w-12 h-12 bg-erwo-gray hover:bg-erwo-red hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextReview}
                className="w-12 h-12 bg-erwo-gray hover:bg-erwo-red hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Next review"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentReview ? 'bg-erwo-red w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Google Reviews Link */}
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/search/erwo+garage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-erwo-blue hover:underline font-roboto"
            >
              Zobacz więcej opinii w Google
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
