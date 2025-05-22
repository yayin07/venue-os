import { NextResponse } from "next/server"
import { venues } from "@/lib/mock-data"

// GET /api/venues/[id] - Get a specific venue by ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const venue = venues.find((v) => v.id === params.id)

  if (!venue) {
    return NextResponse.json({ error: "Venue not found" }, { status: 404 })
  }

  return NextResponse.json(venue)
}
