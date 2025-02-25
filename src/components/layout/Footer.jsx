import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="text-white container mx-auto px-4 py-8">
      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* New Business */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">New Business</h3>
          <div className="flex flex-col justify-between">
            <p className="block text-sm hover:opacity-70 transition-opacity">
              il7studiosbusiness@gmail.com
            </p>
            <p className="mt-4 text-sm">+91 7019619995 - India</p>
          </div>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex flex-col gap-2">
            <a
              href="http://www.linkedin.com/in/il7-studios-185ba4350"
              className="block text-sm hover:opacity-70 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/iL7studios"
              className="block text-sm hover:opacity-70 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://x.com/iL7Studios"
              className="block text-sm hover:opacity-70 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
            <a
              href="https://facebook.com/iL7Studios"
              className="block text-sm hover:opacity-70 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Studio */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Studio</h3>
          <div className="space-y-2">
            <p className="text-sm">A/B 9 ADDA,</p>
            <p className="text-sm">West Bengal,</p>
            <p className="text-sm">Asanol /</p>
            <p className="text-sm">713302, India</p>
          </div>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2025 il7 Studios Ltd.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm hover:opacity-70 transition-opacity">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm hover:opacity-70 transition-opacity">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}