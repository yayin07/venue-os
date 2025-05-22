import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function VenueListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 9 }).map((_, index) => (
        <Card key={index} className="overflow-hidden">
          {/* Image Skeleton */}
          <Skeleton className="h-48 w-full rounded-none" />

          {/* Content Skeleton */}
          <CardHeader className="p-4 pb-0">
            <Skeleton className="h-4 w-1/3 mb-2" />
            <Skeleton className="h-5 w-3/4" />
          </CardHeader>

          <CardContent className="p-4 pt-2 pb-0">
            <div className="flex gap-4 mb-2">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/4" />
            </div>
          </CardContent>

          <CardFooter className="p-4 pt-2 flex items-center justify-between">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-9 w-24" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
