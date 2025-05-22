import { NextResponse } from "next/server"
import { bookings } from "@/lib/mock-data"

// GET /api/bookings - Get all bookings (with optional filtering)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId")
  const venueId = searchParams.get("venueId")

  let filteredBookings = [...bookings]

  if (userId) {
    filteredBookings = filteredBookings.filter((booking) => booking.userId === userId)
  }

  if (venueId) {
    filteredBookings = filteredBookings.filter((booking) => booking.venueId === venueId)
  }

  return NextResponse.json(filteredBookings)
}

// POST /api/bookings - Create a new booking
export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ["venueId", "userId", "date", "startTime", "endTime", "guests"]
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // In a real app, we would save this to the database
    // For now, we'll just return a mock response
    const newBooking = {
      id: `booking-${Date.now()}`,
      ...body,
      status: "pending",
      createdAt: new Date().toISOString(),
      // Calculate total price based on venue price and duration
      // This would be more complex in a real app
      totalPrice: 200,
    }

    return NextResponse.json(newBooking, { status: 201 })
  } catch (error) {
    console.error("Error creating booking:", error)
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 })
  }
}
