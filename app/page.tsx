import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CartIcon } from "@/components/cart-icon"

const books = [
  {
    id: 1,
    title: "Personal Credit Mastery",
    tagline: "Step-by-step methods to position yourself for $100,000+ in available lines",
    description:
      "Personal Credit Mastery empowers you to build and rebuild your credit whether you're currently inside or recently released. This comprehensive guide provides practical strategies tailored to overcome unique challenges, helping you establish a solid financial foundation, qualify for loans, and achieve long-term financial independence.",
    benefits: [
      "Step-by-step methods for $100,000+ credit lines",
      "Strategies for building credit from challenging situations",
      "Practical financial foundation building",
      "Long-term financial independence planning",
    ],
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-OWpqUcUmQZdqevFDtO4mKZQOyE8Os4.jpeg",
    coverColors: "from-blue-600 to-indigo-500",
    price: "$100.00",
    slug: "personal-credit-mastery",
  },
  {
    id: 2,
    title: "Business Credit Masterclass",
    tagline: "How to get $250,000 in business credit at 0% interest (even with no business history)",
    description:
      "The Business Credit Masterclass offers a strategic roadmap to establish and enhance your company's credit profile. Designed for entrepreneurs seeking expert guidance, this plan helps you build strong, reliable business credit, unlocking better financing opportunities and improving your company's financial standing.",
    benefits: [
      "Get $250,000 in business credit at 0% interest",
      "Build credit even with no business history",
      "Strategic roadmap for company credit profile",
      "Better financing opportunities access",
    ],
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-RcZ2gnm9MtIDLoM8BG2uVbXJtappnq.jpeg",
    coverColors: "from-green-600 to-emerald-500",
    price: "$100.00",
    slug: "business-credit-masterclass",
  },
  {
    id: 3,
    title: "Credit Repair Business Playbook",
    tagline: "Step-by-step system to turn your credit skills into a six-figure business",
    description:
      "The Credit Repair Business Playbook offers a step-by-step system designed to help you turn your credit skills into a six-figure business. This expert guide walks you through each phase of building a successful credit repair service, from mastering essential techniques and acquiring clients to scaling operations and maximizing profits.",
    benefits: [
      "Turn credit skills into six-figure business",
      "Complete client acquisition strategies",
      "Operations scaling and profit maximization",
      "Essential credit repair techniques mastery",
    ],
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-H26dYU6Z8CnsSICSN3qoJPn8XaKOmy.jpeg",
    coverColors: "from-red-600 to-rose-500",
    price: "$100.00",
    slug: "credit-repair-business-playbook",
  },
  {
    id: 4,
    title: "Nonprofit Success Workbook",
    tagline: "From idea to IRS approval - The complete guide to building a nonprofit that changes lives",
    description:
      "From the initial concept to securing IRS approval, the Non-Profit Success Workbook guides you step-by-step to establish your organization confidently and compliantly. Designed to simplify complex processes, this workbook helps you navigate legal requirements with clear instructions and practical tools, ensuring your non-profit is built on a strong foundation.",
    benefits: [
      "Complete guide from idea to IRS approval",
      "Step-by-step legal compliance guidance",
      "Practical tools and clear instructions",
      "Strong foundation building strategies",
    ],
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-OmL12aXCtJ3Ox2T0STguZTIfLZIwse.jpeg",
    coverColors: "from-purple-600 to-violet-500",
    price: "$100.00",
    slug: "nonprofit-success-workbook",
  },
  {
    id: 5,
    title: "Trucking Business Blueprint",
    tagline: "Go from CDL to your first paid load - and own the trucking business that keeps the profits",
    description:
      "The Trucking Business Blueprint guides you step-by-step from obtaining your CDL to securing your first paid load. Designed for aspiring truckers, this practical plan helps you navigate licensing, business setup, and load acquisition efficiently—so you can start earning quickly and confidently in the trucking industry.",
    benefits: [
      "Complete CDL to first paid load guidance",
      "Business setup and licensing navigation",
      "Load acquisition strategies",
      "Quick and confident industry entry",
    ],
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9.jpg-85pSMsZZSbj6w1vUKngxirZwWYzlug.jpeg",
    coverColors: "from-orange-600 to-amber-500",
    price: "$100.00",
    slug: "trucking-business-blueprint",
  },
]

export default function HomePage() {
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
              <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
            Build Your Future with
            <span className="text-emerald-600 block">Financial Empowerment</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Proven strategies for credit building, business formation, and entrepreneurship. Start planning your success
            today with our comprehensive guide collection.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              ✓ Step-by-Step Guides
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              ✓ Real-World Templates
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              ✓ Proven Strategies
            </Badge>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-center text-slate-800 mb-12">Your Success Library</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <Card
                key={book.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg"
              >
                <div className="relative h-80 bg-slate-100">
                  <img
                    src={book.coverImage || "/placeholder.svg"}
                    alt={`${book.title} book cover`}
                    className="w-full h-full object-contain rounded-t-lg p-4"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-serif text-slate-800">{book.title}</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">{book.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {book.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-emerald-600">{book.price}</span>
                    <Link href={`/books/${book.slug}`}>
                      <Button className="bg-emerald-600 hover:bg-emerald-700">Get This Book</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-serif font-bold text-white mb-6">Ready to Transform Your Future?</h3>
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands who have already started building their path to financial freedom.
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3 text-lg">
            Get All 5 Books - Save 25%
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-2xl font-serif font-bold mb-4">Empowerment Books</h4>
          <p className="text-slate-400 mb-6">
            Providing practical financial education and business guidance for a brighter future.
          </p>
          <div className="flex justify-center gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
