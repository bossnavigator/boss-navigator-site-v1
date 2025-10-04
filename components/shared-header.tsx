import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CartIcon } from "@/components/cart-icon"

export function SharedHeader() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex flex-col">
            <h1 className="text-2xl font-serif font-bold text-emerald-800">Empowerment Books</h1>
            <p className="text-sm text-emerald-600">Transform Your Future</p>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/faq" className="text-emerald-600 hover:text-emerald-700 font-medium">
              FAQ
            </Link>
            <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Contact
            </Link>
            <CartIcon />
            <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
