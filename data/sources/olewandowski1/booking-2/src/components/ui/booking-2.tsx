"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const SERVICES = [
  "Full Service",
  "Interim Service",
  "MOT And Service",
  "Brakes And Discs",
  "Diagnostics",
  "Air Conditioning",
];

const DAYS = ["Weekday Morning", "Weekday Afternoon", "Saturday Morning"];

export default function BookingBlock() {
  const [service, setService] = React.useState(SERVICES[0]);
  const [day, setDay] = React.useState(DAYS[0]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section className="w-full bg-background px-6 py-16 text-foreground sm:py-24">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Book Your Car In
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Tell us what the car needs and when suits. We will call back the
            same day with a price and a slot.
          </p>
          <dl className="mt-8 flex flex-col gap-2.5">
            {[
              ["Courtesy Car", "Free with any service booked a week ahead."],
              ["Collection", "We collect within four miles of the workshop."],
              ["No Surprises", "Nothing gets fixed until you have agreed it."],
            ].map(([term, detail]) => (
              <div
                key={term}
                className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm ring-1 ring-foreground/[0.06]"
              >
                <Check
                  className="mt-0.5 size-4 shrink-0 text-success"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <dt className="text-sm font-medium">{term}</dt>
                  <dd className="mt-0.5 text-sm text-pretty text-muted-foreground">
                    {detail}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6"
        >
          <Field>
            <FieldLabel htmlFor="booking-2-service">What It Needs</FieldLabel>
            <Select
              value={service}
              onValueChange={(value) => setService(String(value))}
            >
              <SelectTrigger id="booking-2-service" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent align="start" alignItemWithTrigger={false}>
                {SERVICES.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel>When Suits</FieldLabel>
            <RadioGroup
              value={day}
              onValueChange={(value) => setDay(String(value))}
              className="mt-1 flex flex-col gap-2.5"
            >
              {DAYS.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2.5 text-sm"
                >
                  <RadioGroupItem value={option} className="size-4" />
                  {option}
                </label>
              ))}
            </RadioGroup>
          </Field>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="booking-2-reg">Registration</FieldLabel>
              <Input id="booking-2-reg" placeholder="AB12 CDE" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="booking-2-phone">Phone</FieldLabel>
              <Input
                id="booking-2-phone"
                type="tel"
                placeholder="07700 900123"
                required
              />
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="booking-2-notes">
              Anything We Should Know
            </FieldLabel>
            <Textarea
              id="booking-2-notes"
              rows={4}
              placeholder="Noise from the front left when braking."
            />
          </Field>

          <Button type="submit" className="w-full">
            Request A Slot
          </Button>
        </form>
      </div>
    </section>
  );
}
