"use client"

import { useCart, useCartActions } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CartIcon } from "@/components/cart-icon"

export default function CartPage() {
  const { state } = useCart()
  const { updateQuantity, removeItem, clearCart } = useCartActions()

  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 7.5 : 0
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
              <Link href="/faq" className="text-emerald-600 hover:text-emerald-700 font-medium">
                FAQ
              </Link>
              <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Contact
              </Link>
              <CartIcon />
              <Link href="/" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md">
                <ArrowLeft className="w-4 h-4 inline mr-2" />
                Back to Books
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-slate-800 mb-2">Shopping Cart</h1>
          <p className="text-slate-600">Review your items before checkout</p>
        </div>

        {state.items.length === 0 ? (
          <Card className="p-12 text-center">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Your cart is empty</h2>
            <p className="text-slate-600 mb-6">Add some books to get started on your journey to financial freedom.</p>
            <Link href="/">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Browse Books</Button>
            </Link>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {state.items.map((item) => (
                <Card key={item.id} className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative h-24 w-16 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-contain rounded"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-800">{item.title}</h3>
                      <p className="text-emerald-600 font-medium">${item.price.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center">{item.quantity}</span>
                      <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 mt-1"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}

              <div className="flex justify-between items-center pt-4">
                <Button variant="outline" onClick={clearCart}>
                  Clear Cart
                </Button>
                <Link href="/">
                  <Button variant="outline">Continue Shopping</Button>
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Order Summary</h3>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Link href="/checkout">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-3">
                    Proceed to Checkout
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
