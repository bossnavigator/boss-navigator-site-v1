"use client"

import { useCart, useCartActions } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

export function CartIcon() {
  const { state } = useCart()
  const { toggleCart } = useCartActions()

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Button variant="outline" size="icon" onClick={toggleCart} className="relative bg-transparent">
      <ShoppingCart className="h-4 w-4" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Button>
  )
}
