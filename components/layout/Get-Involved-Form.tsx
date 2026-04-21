"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function GetInvolvedForm() {
  const [checked, setChecked] = useState(false);
  const [interest, setInterest] = useState("");

  const FormAction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    console.log("Form submitted");
    console.log("Name:", formData.get("name"));
    console.log("Email:", formData.get("email"));
    console.log("Areas of Interest:", interest ? [interest] : []);
    if (checked) {
      console.log("Signing up a child under 18");
      console.log("Child's Name:", formData.get("childName"));
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-[calc(100dvh-14rem)]">
      <div className="w-full p-6 rounded-lg shadow-md ">
        <div className="space-y-1 ">
          <h1>Get Involved</h1>
          <p className="text-muted-foreground">
            Fill out the form below to get involved with our organization.
          </p>
        </div>
        <div className="pt-1">
          <form className="space-y-4" onSubmit={FormAction}>
            <div>
              <Label htmlFor="name" className="pb-1">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="pb-1">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <Label htmlFor="interests" className="pb-1">
                Areas of Interest
              </Label>
              <Select
                value={interest}
                onValueChange={(value) => setInterest(value ?? "")}
                name="interests"
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your areas of interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Acting">Acting</SelectItem>
                    <SelectItem value="Backstage">
                      Stage Management / Backstage
                    </SelectItem>
                    <SelectItem value="Costumes">Costumes</SelectItem>
                    <SelectItem value="Lighting">Lighting</SelectItem>
                    <SelectItem value="Sound">Sound</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center">
              <Checkbox
                id="age"
                checked={checked}
                onCheckedChange={(value) => setChecked(value === true)}
              />
              <Label className="ml-2" htmlFor="age">
                Are you signing up a child under 18?
              </Label>
            </div>
            {checked && (
              <div className="space-y-1">
                <Label htmlFor="childName">Child's Name</Label>
                <Input
                  type="text"
                  id="childName"
                  name="childName"
                  placeholder="Child's First Name"
                />
              </div>
            )}
            <div>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
