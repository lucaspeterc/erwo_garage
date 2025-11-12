// Common types for ERWO Garage website

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  link: string
  features?: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  category: 'serwis' | 'chiptuning' | 'hamownia' | 'elektronika'
  images: {
    before?: string
    after?: string
    main: string
  }
  specs?: {
    make: string
    model: string
    year?: number
    powerBefore?: string
    powerAfter?: string
  }
}

export interface Review {
  id: string
  author: string
  rating: number
  text: string
  date: string
  source?: 'google' | 'facebook' | 'manual'
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  category: string
  author: string
  date: string
  readTime: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export interface QuoteFormData {
  name: string
  email: string
  phone: string
  make: string
  model: string
  year?: string
  vin?: string
  serviceType: string
  message?: string
}

export interface BookingFormData {
  name: string
  email: string
  phone: string
  service: string
  preferredDate: string
  preferredTime: string
  message?: string
}

export interface ChipTuningData {
  make: string
  model: string
  engine: string
  powerStock: number
  torqueStock: number
  powerTuned: number
  torqueTuned: number
  price: number
}
