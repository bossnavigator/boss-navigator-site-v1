"use client"

import { useCart, useCartActions } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

export function CartIcon() {
  const { state } = useCart()
  const { toggleCart } = useCartActions()

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Button variant="outline" size="icon" className="relative bg-transparent" onClick={toggleCart}>
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Button>
  )
}
