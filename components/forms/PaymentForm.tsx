"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    ssn: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data?.url) {
      window.location.href = data.url; // redirect to Stripe Checkout
    }
  };

  return (
    <form className="space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
      <Input name="firstName" placeholder="First Name" onChange={handleChange} required />
      <Input name="lastName" placeholder="Last Name" onChange={handleChange} required />
      <Input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <Input name="address" placeholder="Address" onChange={handleChange} required />
      <Input name="ssn" placeholder="SSN" onChange={handleChange} required />
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
        Continue to Payment
      </Button>
    </form>
  );
}
