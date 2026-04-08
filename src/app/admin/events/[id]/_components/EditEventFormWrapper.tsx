"use client";

import { Event } from "@/generated/prisma";
import { EventForm } from "./EventForm";
import { useEvents } from "../_hooks/useEvents";
import { useRouter } from "next/navigation";
import { EventFormValues as HookFormValues } from "../_hooks/useEvents";
import { EventFormValues } from "./useEventForm";

interface EditEventFormWrapperProps {
  event: Event;
}

export function EditEventFormWrapper({ event }: EditEventFormWrapperProps) {
  const router = useRouter();
  const { isSubmitting, processEventData } = useEvents(event.municipalityId);

  const handleSubmit = async (
    data: EventFormValues,
    imageFile: File | null,
  ) => {
    // Convert EventFormValues to HookFormValues if needed
    // In this case, they seem compatible
    await processEventData(data as HookFormValues, imageFile, event);
    router.push(`/admin/events`);
    router.refresh();
  };

  return (
    <EventForm
      event={event}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
    />
  );
}
