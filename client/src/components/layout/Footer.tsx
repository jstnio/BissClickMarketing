import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <a className="text-2xl font-bold text-primary">BissClick</a>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Transforming businesses through innovative digital marketing solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#digital">
                  <a className="text-sm text-gray-600 hover:text-primary">
                    Digital Marketing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services#social">
                  <a className="text-sm text-gray-600 hover:text-primary">
                    Social Media
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services#content">
                  <a className="text-sm text-gray-600 hover:text-primary">
                    Content Strategy
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-sm text-gray-600 hover:text-primary">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <a className="text-sm text-gray-600 hover:text-primary">
                    Portfolio
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-gray-600 hover:text-primary">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} BissClick. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
