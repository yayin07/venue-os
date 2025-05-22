import type { Venue } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface VenueCardProps {
  venue: Venue;
}

export function VenueCard({ venue }: VenueCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col group">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src="/placeholder.svg?height=200&width=300"
          alt={venue.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {venue.featured && (
          <Badge
            variant="secondary"
            className="absolute top-2 left-2 bg-accent text-white hover:bg-accent"
          >
            Featured
          </Badge>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-20" />
        <div className="absolute bottom-2 left-2 flex items-center text-white">
          <MapPin className="h-3 w-3 mr-1" />
          <span className="text-sm">{venue.location}</span>
        </div>
      </div>

      {/* Content */}
      <CardHeader className="p-4 pb-0">
        <h3 className="font-semibold text-lg line-clamp-1">{venue.name}</h3>
      </CardHeader>

      <CardContent className="p-4 pt-2 pb-0 flex-grow">
        <div className="flex items-center gap-4 mb-2">
          <div className="flex items-center text-sm">
            <Users className="h-3 w-3 mr-1 text-gray-500" />
            <span>Up to {venue.capacity}</span>
          </div>
          <div className="flex items-center text-sm">
            <Star className="h-3 w-3 mr-1 text-yellow-400 fill-yellow-400" />
            <span>{venue.rating}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-2 flex items-center justify-between">
        <div className="font-bold">
          ${venue.pricePerHour}{" "}
          <span className="text-xs font-normal text-gray-500">/ hour</span>
        </div>
        <Link href={`/venues/${venue.id}`}>
          <Button size="sm" variant="outline">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
