"use client"

import type React from "react"

import { useState } from "react"
import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

interface BillingFormProps {
  productName: string
}

export default function BillingForm({ productName }: BillingFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call to process payment
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Payment Successful!",
        description: `Your application for ${productName} has been submitted. Redirecting to payment gateway...`,
      })

      // Simulate redirect to Stripe payment page
      setTimeout(() => {
        window.location.href = "https://stripe.com/checkout/success" // Replace with actual Stripe checkout URL
      }, 1500)
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <CardContent className="p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="address">Street Address</Label>
          <Input
            id="address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <Select onValueChange={(value) => setFormData({ ...formData, state: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="NY">New York</SelectItem>
                <SelectItem value="CA">California</SelectItem>
                <SelectItem value="TX">Texas</SelectItem>
                {/* Add more states as needed */}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="zip">ZIP Code</Label>
            <Input
              id="zip"
              value={formData.zip}
              onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
              maxLength={5}
              required
            />
          </div>
        </div>

        <div className="border-t pt-6 mt-6">
          <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
          <div>
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              id="cardNumber"
              type="text"
              value={formData.cardNumber}
              onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
              placeholder="XXXX XXXX XXXX XXXX"
              maxLength={19} // Max length for common card numbers with spaces
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <Label htmlFor="expiryDate">Expiry Date (MM/YY)</Label>
              <Input
                id="expiryDate"
                type="text"
                value={formData.expiryDate}
                onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                placeholder="MM/YY"
                maxLength={5}
                required
              />
            </div>
            <div>
              <Label htmlFor="cvc">CVC</Label>
              <Input
                id="cvc"
                type="text"
                value={formData.cvc}
                onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
                placeholder="XXX"
                maxLength={4}
                required
              />
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-6" disabled={isSubmitting}>
          {isSubmitting ? "Processing Payment..." : "Pay Now"}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          By clicking "Pay Now", you agree to our Terms of Service and Privacy Policy. Your payment will be securely
          processed.
        </p>
      </form>
    </CardContent>
  )
}
