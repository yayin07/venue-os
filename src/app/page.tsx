import { SearchFilters } from "@/components/search-filters";
import { VenueCard } from "@/components/venue-card";
import { venues } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Search, Star } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=500&width=1200')",
          }}
        />
        <div className="container relative z-20 px-4 mx-auto">
          <div className="max-w-2xl text-white">
            <Badge
              variant="outline"
              className="bg-white/10 text-white border-white/20 mb-4"
            >
              Find Your Perfect Space
            </Badge>
            <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl">
              Find the perfect venue for your next event
            </h1>
            <p className="text-lg mb-8 text-gray-200">
              Discover and book unique spaces for meetings, events, photoshoots,
              and more
            </p>
            <Button
              size="lg"
              className=" text-white hover:bg-amber-600 bg-amber-500"
            >
              Explore Venues
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white">
        <div className="container px-4 mx-auto">
          <SearchFilters />
        </div>
      </section>

      {/* Featured Venues */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured Venues</h2>
            <Link
              href="/venues"
              className="flex items-center text-sm font-medium text-primary"
            >
              View all venues <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {venues.slice(0, 8).map((venue) => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-8">Popular Event Types</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              "Wedding",
              "Corporate",
              "Birthday",
              "Photoshoot",
              "Workshop",
              "Conference",
            ].map((category) => (
              <div
                key={category}
                className="relative h-40 rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all z-10" />
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/placeholder.svg?height=160&width=200')",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <span className="text-white font-medium text-lg">
                    {category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-0">
              Simple Process
            </Badge>
            <h2 className="text-3xl font-bold mb-4">How VenueBook Works</h2>
            <p className="text-gray-600 max-w-2xl">
              Finding and booking your perfect venue is quick and easy with our
              streamlined process
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-primary/20 z-0"></div>

            {[
              {
                icon: Search,
                title: "Search",
                description:
                  "Browse our curated selection of venues filtered by location, capacity, and price",
              },
              {
                icon: Calendar,
                title: "Book",
                description:
                  "Select your date and time, then submit a quick inquiry - no account required",
              },
              {
                icon: Star,
                title: "Enjoy",
                description:
                  "Receive confirmation from the host and enjoy your perfectly matched venue",
              },
            ].map((step, index) => (
              <div key={index} className="relative z-10">
                <Card className="text-center h-full flex flex-col">
                  <CardContent className="pt-6 flex-grow flex flex-col">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold relative">
                      <step.icon className="h-8 w-8" />
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Event Planner",
                quote:
                  "This platform made finding the perfect venue for our corporate event so easy. Highly recommended!",
              },
              {
                name: "Michael Chen",
                role: "Photographer",
                quote:
                  "I use this site for all my studio bookings. The variety of spaces available is impressive.",
              },
              {
                name: "Emily Rodriguez",
                role: "Wedding Coordinator",
                quote:
                  "My clients love the venues I find through this platform. The booking process is seamless.",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage
                        src={`/placeholder.svg?height=40&width=40`}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <p className="text-gray-700">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
