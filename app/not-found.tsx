import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 – Strona nie istnieje | ERWO Garage',
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-erwo-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl font-bebas text-erwo-red mb-4">404</p>
        <h1 className="text-3xl font-bebas tracking-wide mb-4">Strona nie istnieje</h1>
        <p className="text-gray-400 mb-8">Nie mogliśmy znaleźć tej strony. Może adres jest błędny?</p>
        <Link href="/" className="btn-primary">
          Wróć na stronę główną
        </Link>
      </div>
    </main>
  )
}
