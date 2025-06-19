export function GoatFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative min-h-auto flex flex-col items-center justify-center text-center p-10">
      <div className="max-w-6xl mx-auto px-1 py-8 w-full">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="space-y-4 text-left md:w-1/2">
            <h3 className="text-lg font-semibold text-gray-900">Brand</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Building beautiful experiences with thoughtful design and clean code.
              Building beautiful experiences with thoughtful design and clean code.
              Building beautiful experiences with thoughtful design and clean code.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:w-1/2 justify-end">
            <div className="space-y-4 text-left min-w-[120px]">
              <h4 className="text-sm font-medium text-gray-900">Product</h4>
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Features
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Documentation
                </a>
              </nav>
            </div>
            <div className="space-y-4 text-left min-w-[120px]">
              <h4 className="text-sm font-medium text-gray-900">Company</h4>
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Blog
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Careers
                </a>
              </nav>
            </div>
          </div>
        </div>
        <hr className="my-6" />
        <div className="flex justify-center">
          <p className="text-sm text-gray-500">© {currentYear} Goat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

