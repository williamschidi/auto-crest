function Footer() {
  return (
    <footer
      className="bg-gradient-to-t from-gray-900 to-gray-800
 text-gray-300 pt-16"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <img
            src="/images/footerLogo.webp"
            className="w-32"
          />

          <p className="text-sm leading-relaxed">
            AutoCrest is a trusted car dealership offering
            quality vehicles, transparent pricing, and
            reliable after-sales support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">
              Browse Cars
            </li>
            <li className="hover:text-white cursor-pointer">
              About Us
            </li>
            <li className="hover:text-white cursor-pointer">
              Why Choose Us
            </li>
            <li className="hover:text-white cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Support
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">
              FAQs
            </li>
            <li className="hover:text-white cursor-pointer">
              Payment Options
            </li>
            <li className="hover:text-white cursor-pointer">
              After Sales Support
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li>📞 +234 XXX XXX XXXX</li>
            <li>✉️ info@autocrest.com</li>
            <li>📍 Enugu, Nigeria</li>
            <li className="text-green-400 font-semibold cursor-pointer">
              WhatsApp Us
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 mt-14 py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} AutoCrest. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
