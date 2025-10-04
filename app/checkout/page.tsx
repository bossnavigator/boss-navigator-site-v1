"use client"

import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { CartIcon } from "@/components/cart-icon"

export default function CheckoutPage() {
  const { state } = useCart()

  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 7.5
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-serif font-bold text-emerald-800">Empowerment Books</h1>
              <p className="text-sm text-emerald-600">Transform Your Future</p>
            </div>
            <div className="flex items-center gap-4">
              <CartIcon />
              <Link href="/cart" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md">
                <ArrowLeft className="w-4 h-4 inline mr-2" />
                Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Success Banner */}
      <div className="bg-emerald-500 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center">✓ Customer matched zone 'US'</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">Billing Information</h2>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="firstName">First name *</Label>
                  <Input id="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last name *</Label>
                  <Input id="lastName" required />
                </div>
              </div>

              <div className="mb-4">
                <Label htmlFor="company">Company name (optional)</Label>
                <Input id="company" />
              </div>

              <div className="mb-4">
                <Label htmlFor="country">Country / Region *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="United States (US)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States (US)</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-4">
                <Label htmlFor="address">Street address *</Label>
                <Input id="address" placeholder="House number and street name" required />
              </div>

              <div className="mb-4">
                <Label htmlFor="apartment">Apartment, suite, unit, etc. (optional)</Label>
                <Input id="apartment" />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="city">Town / City *</Label>
                  <Input id="city" required />
                </div>
                <div>
                  <Label htmlFor="state">State *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="California" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ca">California</SelectItem>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="tx">Texas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <Label htmlFor="zip">ZIP Code *</Label>
                  <Input id="zip" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" required />
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="email">Email address *</Label>
                <Input id="email" type="email" required />
              </div>

              <div className="flex items-center space-x-2 mb-6">
                <Checkbox id="different-address" />
                <Label htmlFor="different-address">Ship to a different address?</Label>
              </div>

              <div>
                <Label htmlFor="notes">Order notes (optional)</Label>
                <textarea
                  id="notes"
                  className="w-full p-3 border rounded-md"
                  rows={4}
                  placeholder="Notes about your order, e.g. special notes for delivery."
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Your Order</h3>

              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">{item.title}</span>
                      <span className="text-slate-600 ml-2">× {item.quantity}</span>
                    </div>
                    <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-emerald-600">${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-emerald-600">${total.toFixed(2)}</span>
                </div>
              </div>
            </Card>

            {/* Payment Options */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Payment</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input type="radio" id="paypal" name="payment" defaultChecked />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>

                <div className="bg-slate-50 p-4 rounded">
                  <p className="text-sm text-slate-600">Pay via PayPal</p>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="radio" id="credit-card" name="payment" />
                  <Label htmlFor="credit-card">Credit/Debit Cards</Label>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">PayPal</Button>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3">Venmo</Button>
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3">Pay Later</Button>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg">
                  Place Order
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
