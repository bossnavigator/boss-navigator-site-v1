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
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-serif font-bold text-primary">Empowerment Books</h1>
            <p className="text-sm text-muted-foreground">Transform Your Future</p>
          </div>
          <CartIcon />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge className="mb-4" variant="secondary">
          Financial Freedom & Business Success
        </Badge>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
          Build Your Empire with Proven Strategies
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
          Discover comprehensive guides designed to help you master credit, launch successful businesses, and achieve
          lasting financial independence.
        </p>
      </section>

      {/* Books Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <Card key={book.id} className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
              <div className={`h-48 bg-gradient-to-br ${book.coverColors} relative`}>
                <img
                  src={book.coverImage || "/placeholder.svg"}
                  alt={book.title}
                  className="w-full h-full object-cover mix-blend-overlay opacity-50"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">{book.title}</CardTitle>
                <CardDescription className="text-base font-medium text-foreground/80">{book.tagline}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-4">{book.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-sm">What You'll Learn:</h4>
                  <ul className="space-y-1">
                    {book.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{book.price}</span>
                  <Link href={`/books/${book.slug}`}>
                    <Button>Learn More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Empowerment Books. All rights reserved.</p>
          <p className="mt-2">Transform your future with proven strategies for success.</p>
        </div>
      </footer>
    </div>
  )
}
