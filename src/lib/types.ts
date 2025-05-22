export interface Venue {
  id: string
  name: string
  description: string
  location: string
  pricePerHour: number
  capacity: number
  amenities: string[]
  images: string[]
  rating: number
  reviewCount: number
  featured?: boolean
}

export interface Booking {
  id: string
  venueId: string
  userId: string
  date: string
  startTime: string
  endTime: string
  guests: number
  status: "pending" | "confirmed" | "cancelled"
  totalPrice: number
  notes?: string
  createdAt: string
}
