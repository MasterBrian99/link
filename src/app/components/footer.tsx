import { Quote } from "lucide-react"

export default function Footer() {
  const quotes = [
    "A free and open internet is not just a privilege, it's a right worth fighting for.",
    "Design is not just what it looks like and feels like. Design is how it works",
    "The details are not the details. They make the design.",
  ]

  return (
    <footer className="py-8 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {quotes.map((quote, index) => (
              <div key={index} className="flex items-start space-x-2">
                <Quote className="w-5 h-5 mt-1 text-gray-400" />
                <p className="text-sm text-gray-600">{quote}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Privacy Statement</h3>
            <p className="text-sm text-gray-600">
              We respect your privacy. This website does not collect, store, or process any personal data from visitors. Feel free to explore without concerns about data collection.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Pasindu Pramodya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}