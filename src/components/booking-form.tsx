"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface BookingFormProps {
  venueId: string;
}

export function BookingForm({ venueId }: BookingFormProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [guests, setGuests] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !startTime || !endTime || !guests) {
      toast.error("Missing information", {
        description: "Please fill in all required fields",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // In a real app, we would send this data to an API endpoint
      console.log({
        venueId,
        date: date.toISOString(),
        startTime,
        endTime,
        guests,
        notes,
      });

      toast.success("Inquiry submitted!", {
        description: "The venue host will contact you soon.",
      });

      // Reset form
      setDate(undefined);
      setStartTime("");
      setEndTime("");
      setGuests("");
      setNotes("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Quick Inquiry</CardTitle>
        <CardDescription>
          Fill out this form to inquire about this venue. No account required!
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Date */}
          <div className="space-y-2">
            <Label htmlFor="date">Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? date.toLocaleDateString() : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="start-time">Start Time *</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="start-time"
                  type="time"
                  className="pl-9"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="end-time">End Time *</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="end-time"
                  type="time"
                  className="pl-9"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <Label htmlFor="guests">Number of Guests *</Label>
            <Input
              id="guests"
              type="number"
              placeholder="Enter number of guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              placeholder="Tell the host about your event..."
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-accent hover:bg-amber-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Inquire Now"}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Quick inquiry - no account required. The host will contact you
            directly.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
