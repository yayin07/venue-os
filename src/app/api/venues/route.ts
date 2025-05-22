import { NextRequest, NextResponse } from "next/server"
import { venues } from "@/lib/mock-data"

// GET /api/venues - Get all venues with optional filtering
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  // Extract filter parameters
  const location = searchParams.get("location")
  const minPrice = searchParams.get("minPrice")
  const maxPrice = searchParams.get("maxPrice")
  const minCapacity = searchParams.get("minCapacity")
  const featured = searchParams.get("featured")

  // Apply filters
  let filteredVenues = [...venues]

  if (location) {
    filteredVenues = filteredVenues.filter((venue) =>
      venue.location.toLowerCase().includes(location.toLowerCase())
    )
  }

  if (minPrice) {
    filteredVenues = filteredVenues.filter(
      (venue) => venue.pricePerHour >= Number(minPrice)
    )
  }

  if (maxPrice) {
    filteredVenues = filteredVenues.filter(
      (venue) => venue.pricePerHour <= Number(maxPrice)
    )
  }

  if (minCapacity) {
    filteredVenues = filteredVenues.filter(
      (venue) => venue.capacity >= Number(minCapacity)
    )
  }

  if (featured === "true") {
    filteredVenues = filteredVenues.filter((venue) => venue.featured)
  }

  return NextResponse.json(filteredVenues)
}
