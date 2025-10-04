import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { CartIcon } from "@/components/cart-icon"

const faqData = [
  {
    category: "General Questions",
    questions: [
      {
        question: "Who are these books designed for?",
        answer:
          "Our books are specifically designed for individuals who are currently incarcerated or recently released and want to build a strong financial foundation. The strategies work for anyone looking to improve their credit, start a business, or gain financial independence.",
      },
      {
        question: "Can I really build credit while incarcerated?",
        answer:
          "Yes! Our 'Personal Credit Power Play' book provides proven strategies for building and repairing credit from behind bars, including working with family members to establish secured credit cards and disputing negative items on your credit report.",
      },
      {
        question: "Are these strategies legal and legitimate?",
        answer:
          "Absolutely. All strategies in our books are completely legal and follow established financial and business practices. We focus on ethical approaches to credit building, business formation, and entrepreneurship.",
      },
    ],
  },
  {
    category: "Book Content & Delivery",
    questions: [
      {
        question: "What format are the books available in?",
        answer:
          "Our books are available as digital downloads (PDF format) for immediate access, and physical copies can be mailed to correctional facilities that allow such deliveries. Digital versions include all worksheets and templates.",
      },
      {
        question: "Do the books include templates and forms?",
        answer:
          "Yes! Each book includes practical templates, sample letters, forms, and step-by-step worksheets. For example, the Credit Repair book includes dispute letter templates, and the Non-Profit book includes IRS form guidance.",
      },
      {
        question: "How current is the information?",
        answer:
          "All our books are updated regularly to reflect current laws, regulations, and best practices. The information is current as of 2024 and includes the latest strategies for credit building, business formation, and compliance requirements.",
      },
    ],
  },
  {
    category: "Implementation & Support",
    questions: [
      {
        question: "What if I need help implementing the strategies?",
        answer:
          "We provide email support for all book purchasers. You can contact us with specific questions about implementing the strategies, and we'll provide guidance within 24-48 hours.",
      },
      {
        question: "Can family members help with these strategies?",
        answer:
          "Yes! Many of our strategies involve family support, particularly for credit building and business formation. The books include scripts and guidance for family members to help you succeed.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "Results vary by strategy. Credit improvements can be seen in 30-90 days, business formation can be completed in 2-4 weeks, and the non-profit process typically takes 30-60 days for initial setup.",
      },
    ],
  },
  {
    category: "Pricing & Guarantees",
    questions: [
      {
        question: "Do you offer any guarantees?",
        answer:
          "We offer a 30-day money-back guarantee. If you're not satisfied with the content and strategies provided, we'll refund your purchase within 30 days.",
      },
      {
        question: "Are there bundle discounts available?",
        answer:
          "Yes! We offer a 25% discount when you purchase all 5 books together. This gives you a comprehensive toolkit for financial empowerment and business building.",
      },
      {
        question: "Can I get updates to the books?",
        answer:
          "Yes, when you purchase our books, you receive free updates for one year. We'll notify you when updated versions are available with new strategies or regulatory changes.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <h1 className="text-2xl font-serif font-bold text-emerald-800">Empowerment Books</h1>
              <p className="text-sm text-emerald-600">Transform Your Future</p>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Contact
              </Link>
              <CartIcon />
              <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* FAQ Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Find answers to common questions about our empowerment books and financial strategies.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {faqData.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-slate-800">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left font-semibold text-slate-700 hover:text-emerald-600">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-serif font-bold text-white mb-6">Still Have Questions?</h3>
          <p className="text-xl text-emerald-100 mb-8">
            Our support team is here to help you succeed. Get in touch and we'll respond within 24 hours.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3 text-lg">
              Contact Support
            </Button>
          </Link>
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
