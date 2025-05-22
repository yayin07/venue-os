import { SearchFilters } from "@/components/search-filters";
import { VenueCard } from "@/components/venue-card";
import { venues } from "@/lib/mock-data";
import { Suspense } from "react";
import { VenueListSkeleton } from "@/components/venue-list-skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";

export default function VenuesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container px-4 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Find Your Perfect Venue</h1>

        <div className="mb-8">
          <SearchFilters />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Filter Results</CardTitle>
              </CardHeader>
              <Separator />
              <CardContent className="pt-4">
                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-4">Price Range</h4>
                  <div className="space-y-4">
                    <Slider defaultValue={[0, 500]} max={1000} step={10} />
                    <div className="flex items-center justify-between">
                      <div className="border rounded-md px-2 py-1 text-sm">
                        $0
                      </div>
                      <div className="border rounded-md px-2 py-1 text-sm">
                        $500
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Capacity */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Guest Capacity</h4>
                  <div className="space-y-2">
                    {[
                      "1-10 guests",
                      "11-50 guests",
                      "51-100 guests",
                      "101-200 guests",
                      "201+ guests",
                    ].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox id={`capacity-${option}`} />
                        <Label
                          htmlFor={`capacity-${option}`}
                          className="text-sm"
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Amenities */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Amenities</h4>
                  <div className="space-y-2">
                    {[
                      "WiFi",
                      "Parking",
                      "Kitchen",
                      "AV Equipment",
                      "Wheelchair Access",
                    ].map((amenity) => (
                      <div
                        key={amenity}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox id={`amenity-${amenity}`} />
                        <Label
                          htmlFor={`amenity-${amenity}`}
                          className="text-sm"
                        >
                          {amenity}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Event Type */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Event Type</h4>
                  <div className="space-y-2">
                    {[
                      "Wedding",
                      "Corporate",
                      "Birthday",
                      "Photoshoot",
                      "Workshop",
                    ].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={`type-${type}`} />
                        <Label htmlFor={`type-${type}`} className="text-sm">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Venue Listings */}
          <div className="flex-1">
            <Suspense fallback={<VenueListSkeleton />}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {venues.map((venue) => (
                  <VenueCard key={venue.id} venue={venue} />
                ))}
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
