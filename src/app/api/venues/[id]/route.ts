import { NextRequest, NextResponse } from "next/server";
import { venues } from "@/lib/mock-data";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } } 
) {
  const { id } = params;
  const venue = venues.find((v) => v.id === id);

  if (!venue) {
    return NextResponse.json({ error: "Venue not found" }, { status: 404 });
  }

  return NextResponse.json(venue);
}
