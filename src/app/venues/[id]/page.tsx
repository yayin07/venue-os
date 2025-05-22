import { venues } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { BookingForm } from "@/components/booking-form";
import {
  Clock,
  MapPin,
  Users,
  Wifi,
  Car,
  UtensilsCrossed,
  Tv,
  ShipWheelIcon as Wheelchair,
  Star,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function VenueDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  // Find venue by ID
  const venue = venues.find((v) => v.id === params.id);

  // If venue not found, show 404
  if (!venue) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Image Gallery */}
      <section className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[400px]">
          <div className="relative h-full col-span-1 md:col-span-2 lg:col-span-2 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt={venue.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="hidden md:grid grid-rows-2 gap-4 h-full">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt={venue.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt={venue.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Venue Details */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Venue Info */}
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <MapPin className="h-4 w-4" />
              <span>{venue.location}</span>
              {venue.featured && (
                <Badge
                  variant="secondary"
                  className="bg-accent text-white hover:bg-accent ml-2"
                >
                  Featured
                </Badge>
              )}
            </div>

            <h1 className="text-3xl font-bold mb-4">{venue.name}</h1>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-1">
                <Users className="h-5 w-5 text-gray-500" />
                <span>Up to {venue.capacity} guests</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 text-yellow-400" />
                <span>
                  {venue.rating} ({venue.reviewCount} reviews)
                </span>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <Tabs defaultValue="about" className="w-full">
                  <TabsList className="w-full justify-start rounded-b-none border-b">
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="amenities">Amenities</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>

                  <div className="p-6">
                    <TabsContent value="about" className="m-0">
                      <div className="prose max-w-none">
                        <p className="text-gray-700 mb-4">
                          {venue.description}
                        </p>
                        <p className="text-gray-700 mb-4">
                          This stunning venue offers a versatile space perfect
                          for a variety of events. With its modern design, ample
                          natural light, and state-of-the-art facilities, it
                          provides an ideal setting for both professional and
                          social gatherings.
                        </p>
                        <p className="text-gray-700">
                          The space can be configured to accommodate different
                          layouts, from theater-style seating to banquet
                          arrangements, making it suitable for conferences,
                          weddings, corporate events, and more.
                        </p>
                      </div>
                    </TabsContent>

                    <TabsContent value="amenities" className="m-0">
                      <h3 className="text-xl font-semibold mb-4">Amenities</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2">
                          <Wifi className="h-5 w-5 text-primary" />
                          <span>Free WiFi</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Car className="h-5 w-5 text-primary" />
                          <span>Parking Available</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <UtensilsCrossed className="h-5 w-5 text-primary" />
                          <span>Kitchen</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tv className="h-5 w-5 text-primary" />
                          <span>AV Equipment</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Wheelchair className="h-5 w-5 text-primary" />
                          <span>Wheelchair Access</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
                          <span>24/7 Access</span>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="reviews" className="m-0">
                      <h3 className="text-xl font-semibold mb-4">Reviews</h3>
                      <div className="space-y-6">
                        {[
                          {
                            name: "John D.",
                            date: "2 months ago",
                            rating: 5,
                            comment:
                              "Amazing venue! Perfect for our corporate event. The staff was incredibly helpful and the space was exactly what we needed.",
                          },
                          {
                            name: "Sarah M.",
                            date: "3 months ago",
                            rating: 4,
                            comment:
                              "Great space with excellent amenities. The only reason for 4 stars instead of 5 is that parking was a bit limited.",
                          },
                          {
                            name: "Michael T.",
                            date: "4 months ago",
                            rating: 5,
                            comment:
                              "We hosted our wedding reception here and it was perfect. Spacious, beautiful, and the staff went above and beyond.",
                          },
                        ].map((review, index) => (
                          <div key={index} className="pb-6">
                            <div className="flex items-center justify-between mb-2">
                              <div className="font-medium">{review.name}</div>
                              <div className="text-sm text-gray-500">
                                {review.date}
                              </div>
                            </div>
                            <div className="flex items-center mb-2">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                            {index < 2 && <Separator className="mt-6" />}
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Booking Form */}
          <div className="w-full lg:w-96">
            <div className="sticky top-6">
              <Card className="mb-4">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">
                      ${venue.pricePerHour}{" "}
                      <span className="text-sm font-normal text-gray-500">
                        / hour
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1">{venue.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <BookingForm venueId={venue.id} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
