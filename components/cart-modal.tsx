"use client"

import { useCart, useCartActions } from "@/lib/cart-context"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Minus, Plus, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function CartModal() {
  const { state } = useCart()
  const { closeCart, updateQuantity, removeItem } = useCartActions()

  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Dialog open={state.isOpen} onOpenChange={closeCart}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-xl font-serif">Your Cart</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={closeCart}
            className="h-6 w-6 rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-4">
          {state.items.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">Your cart is empty</p>
          ) : (
            <>
              {state.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 py-4 border-b">
                  <div className="relative h-16 w-12 flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-contain rounded"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm leading-tight">{item.title}</h3>
                    <div className="flex items-center space-x-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 p-0 h-auto"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}

              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex space-x-2 pt-4">
                <Link href="/cart" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent" onClick={closeCart}>
                    View Cart
                  </Button>
                </Link>
                <Link href="/checkout" className="flex-1">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={closeCart}>
                    Checkout
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
