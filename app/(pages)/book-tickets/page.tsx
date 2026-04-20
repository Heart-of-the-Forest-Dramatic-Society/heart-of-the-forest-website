"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function BookTickets() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="relative flex items-center flex-col justify-center min-h-screen">
      <div className="fixed bottom-0 left-0 p-6">
        <Switch checked={isChecked} onCheckedChange={setIsChecked} />
        <span className="ml-2">Ticket Enabled?</span>
      </div>
      <h1>Book Tickets</h1>
      <p className="text-muted-foreground">
        Ticket booking functionality will be available soon. Stay tuned!
      </p>
      <div className=" border-2">
        {isChecked ? (
          <div className="p-4 justify-center items-center flex flex-col">
            <h1 className="text-green-500 text-2xl">
              Ticket booking is available.
            </h1>
            <Button className="mt-4">
              Book Now from TicketSource{" "}
              {/* This button is just a placeholder and does not have any functionality yet */}
            </Button>
          </div>
        ) : (
          <div className="p-4 justify-center items-center flex flex-col">
            <h1 className="text-red-500 text-2xl">
              Ticket booking is unavailable.
            </h1>
            <p className="text-muted-foreground">Tickets are available in:</p>
            <p>30 days, 12 hours, 45 minutes</p>
          </div>
        )}
      </div>
    </div>
  );
}
