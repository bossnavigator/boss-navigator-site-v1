"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ShoppingCart, Minus, Plus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useCart } from "@/lib/cart-context"

export default function NonprofitSuccessWorkbookPage() {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const book = {
    id: "nonprofit-success-workbook",
    title: "Nonprofit Success Workbook",
    price: 100.0,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-OmL12aXCtJ3Ox2T0STguZTIfLZIwse.jpeg",
  }

  const handleAddToCart = () => {
    addToCart(book, quantity)
  }

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1))

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
              <Link href="/" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md">
                <ArrowLeft className="w-4 h-4 inline mr-2" />
                Back to Books
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Book Cover */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-OmL12aXCtJ3Ox2T0STguZTIfLZIwse.jpeg"
                alt="Nonprofit Success Workbook book cover"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-serif font-bold text-slate-800 mb-4">Nonprofit Success Workbook</h1>
              <p className="text-xl text-emerald-600 font-medium mb-6">
                From idea to IRS approval - The complete guide to building a nonprofit that changes lives
              </p>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold text-emerald-600">$100.00</span>
              </div>

              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed">
                  From the initial concept to securing IRS approval, the Non-Profit Success Workbook guides you
                  step-by-step to establish your organization confidently and compliantly. Designed to simplify complex
                  processes, this workbook helps you navigate legal requirements with clear instructions and practical
                  tools, ensuring your non-profit is built on a strong foundation. Empower your mission by turning your
                  vision into a recognized, tax-exempt entity with ease and assurance.
                </p>
              </div>
            </div>

            {/* Purchase Options */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <button onClick={decrementQuantity} className="px-4 py-2 text-slate-600 hover:bg-slate-100">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 border-x min-w-[60px] text-center">{quantity}</span>
                  <button onClick={incrementQuantity} className="px-4 py-2 text-slate-600 hover:bg-slate-100">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Button onClick={handleAddToCart} className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-lg py-3">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>

            {/* Key Features */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">What You'll Learn:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Complete guide from idea to IRS approval</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Step-by-step legal compliance guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Practical tools and clear instructions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Strong foundation building strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Turn your vision into a recognized, tax-exempt entity</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
