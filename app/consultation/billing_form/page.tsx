"use client";

import type React from "react";
import { useState } from "react";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";
import Header from "@/components/header";

interface BillingFormProps {
  productName: string;
}

export default function BillingForm({ productName }: BillingFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    ssnNumber: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast({
        title: "Payment Successful!",
        description: `Your application for ${productName} has been submitted.`,
      });
      setTimeout(() => {
        window.location.href = "https://stripe.com/checkout/success";
      }, 1500);
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Complete Your Payment for{" "}
              <span className="text-green-600">{productName}</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <Label htmlFor="ssnNumber">SSN Number</Label>
                <Input
                  id="ssnNumber"
                  value={formData.ssnNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, ssnNumber: e.target.value })
                  }
                  placeholder="XXX-XX-XXXX"
                  required
                />
              </div>

              <div>
                <Label htmlFor="address">Street Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, state: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="NY">New York</SelectItem>
                      <SelectItem value="CA">California</SelectItem>
                      <SelectItem value="TX">Texas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input
                    id="zip"
                    value={formData.zip}
                    onChange={(e) =>
                      setFormData({ ...formData, zip: e.target.value })
                    }
                    maxLength={5}
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-lg py-6 mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing Payment..." : "Pay Now"}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By clicking "Pay Now", you agree to our Terms of Service and
                Privacy Policy.
              </p>
            </form>
          </CardContent>
        </div>
      </div>

      <Footer />
    </div>
  );
}
