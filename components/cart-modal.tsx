"use client"

import { useCart, useCartActions } from "@/lib/cart-context"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Minus, Plus, X } from "lucide-react"
import Link from "next/link"

export function CartModal() {
  const { state } = useCart()
  const { closeCart, updateQuantity, removeItem } = useCartActions()

  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Dialog open={state.isOpen} onOpenChange={closeCart}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Your Cart</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          {state.items.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-4 max-h-[400px] overflow-y-auto">
                {state.items.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b pb-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 p-0 h-auto"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 bg-transparent" onClick={closeCart}>
                    <Link href="/cart">View Cart</Link>
                  </Button>
                  <Button className="flex-1" onClick={closeCart}>
                    <Link href="/checkout">Checkout</Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
