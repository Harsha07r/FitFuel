import React from 'react'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0F1629' }} className="pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand col */}
          <div className="col-span-1 md:col-span-2">

            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div
                style={{ backgroundColor: '#2563EB' }}
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2L4.09 12.97H11L10 22l8.91-10.97H13L13 2z" />
                </svg>
              </div>
              <span className="font-bold text-2xl" style={{ color: '#FFFFFF' }}>FitFuel</span>
            </div>

            {/* Tagline */}
            <p className="max-w-sm mb-8 leading-relaxed text-sm" style={{ color: '#8899BB' }}>
              Empowering student fitness with accessible, affordable, and authentic supplements. Your campus health partner.
            </p>

            {/* Social icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Instagram"
                style={{ backgroundColor: '#1A2540', color: '#8899BB' }}
                className="hover:text-white transition-colors p-2.5 rounded-full"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 014.121 3.16c.636-.247 1.363-.416 2.427-.465C8.07 2.013 8.35 2 12.28 2h.035zm.845 2.167c-2.585.117-2.906.126-3.916.173-1.002.046-1.542.219-1.902.358a2.915 2.915 0 00-1.072.697 2.916 2.916 0 00-.697 1.072c-.14.36-.312.9-.358 1.902-.047 1.01-.056 1.33-.173 3.916l.001.075c.117 2.585.126 2.906.173 3.916.046 1.002.219 1.542.358 1.902a2.915 2.915 0 00.697 1.072 2.916 2.916 0 001.072.697c.36.14.9.312 1.902.358 1.01.047 1.33.056 3.916.173l.075.001c2.585-.117 2.906-.126 3.916-.173 1.002-.046 1.542-.219 1.902-.358a2.915 2.915 0 001.072-.697 2.916 2.916 0 00.697-1.072c.14-.36.312-.9.358-1.902.047-1.01.056-1.33.173-3.916l-.001-.075c-.117-2.585-.126-2.906-.173-3.916-.046-1.002-.219-1.542-.358-1.902a2.915 2.915 0 00-.697-1.072 2.916 2.916 0 00-1.072-.697c-.36-.14-.9-.312-1.902-.358-1.01-.047-1.33-.056-3.916-.173l-.075-.001zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.968a3.168 3.168 0 100 6.336 3.168 3.168 0 000-6.336zm5.336-3.768a1.309 1.309 0 110 2.618 1.309 1.309 0 010-2.618z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Twitter"
                style={{ backgroundColor: '#1A2540', color: '#8899BB' }}
                className="hover:text-white transition-colors p-2.5 rounded-full"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: '#FFFFFF' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Products', href: '#categories' },
                { label: 'How it Works', href: '#how-it-works' },
                { label: 'Support', href: '#' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: '#8899BB' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: '#FFFFFF' }}
            >
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#2563EB' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="text-sm" style={{ color: '#8899BB' }}>Serving University Campus &amp; Hostels</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#2563EB' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="text-sm" style={{ color: '#8899BB' }}>help@fitfuel.com</span>
              </li>
            </ul>

            {/* Info box */}
            <div
              className="mt-8 p-4 rounded-xl"
              style={{ backgroundColor: 'rgba(26,37,64,0.6)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p className="text-xs font-medium flex items-start gap-1.5" style={{ color: '#93C5FD' }}>
                <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#2563EB' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
                Deliveries scheduled daily at 6 PM at the Main Gate.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-2"
          style={{ borderTop: '1px solid #1A2540' }}
        >
          <p className="text-sm" style={{ color: '#4A5880' }}>© 2023 FitFuel. All rights reserved.</p>
          <p className="text-xs" style={{ color: '#2E3D5E' }}>Not affiliated with university administration.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer