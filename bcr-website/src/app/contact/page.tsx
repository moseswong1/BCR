export const metadata = { title: "Contact Us - Get in Touch with BCR" };

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#070B0F]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-400 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
              Customer Support
              <span className="h-1 w-1 rounded-full bg-cyan-400" />
              24/5 Assistance
            </p>

            <h1 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Contact Us
            </h1>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              Get in touch with our dedicated support team. Available 24/5 to assist you with any questions or concerns.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFD400] px-5 py-3 text-sm font-semibold text-black hover:brightness-95"
              >
                Send a Message
              </a>
              <a
                href="tel:+61284598050"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Support / Get in Touch
        </div>

        <div className="mt-8 space-y-12">
          {/* Contact Info Overview */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Multiple Ways to Reach Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "📞",
                  title: "Call Us",
                  content: "+61 2 8459 8050",
                  subtitle: "Available 24/5"
                },
                {
                  icon: "✉️",
                  title: "Email Us",
                  content: "info@bcr.com",
                  subtitle: "Quick response within 24 hours"
                },
                {
                  icon: "💬",
                  title: "Live Chat",
                  content: "Chat with our team",
                  subtitle: "Instant assistance available"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-lg p-6 border border-cyan-200">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-slate-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-700 font-medium mb-1">{item.content}</p>
                  <p className="text-sm text-slate-600">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Office Locations */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Our Global Offices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  location: "Sydney Headquarters",
                  address: "Level 18, Suite 3, 201 Elizabeth Street, Sydney NSW 2000, Australia",
                  phone: "+61 2 8459 8050",
                  email: "sydney@bcr.com",
                  timezone: "AEDT (UTC+11)"
                },
                {
                  location: "Melbourne Office",
                  address: "447 Collins Street, Melbourne VIC 3000, Australia",
                  phone: "+61 2 8459 8050",
                  email: "melbourne@bcr.com",
                  timezone: "AEDT (UTC+11)"
                }
              ].map((office, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">{office.location}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Address</p>
                      <p className="text-slate-700">{office.address}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Phone</p>
                      <p className="text-slate-700"><a href={`tel:${office.phone}`} className="hover:text-cyan-600">{office.phone}</a></p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Email</p>
                      <p className="text-slate-700"><a href={`mailto:${office.email}`} className="hover:text-cyan-600">{office.email}</a></p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Timezone</p>
                      <p className="text-slate-700">{office.timezone}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Department Contacts */}
          <section className="bg-slate-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Department Contacts</h2>
            <p className="text-slate-700 mb-6">Reach out to the right department for faster assistance:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  department: "General Information",
                  email: "info@bcr.com",
                  description: "Account setup, general inquiries, and trading questions"
                },
                {
                  department: "Sales & Support",
                  email: "support@bcr.com",
                  description: "Trading assistance, platform issues, and account support"
                },
                {
                  department: "Marketing & Partnerships",
                  email: "marketing@bcr.com",
                  description: "Partnership opportunities, promotions, and events"
                },
                {
                  department: "Compliance & Legal",
                  email: "compliance@bcr.com",
                  description: "Regulatory inquiries and compliance documentation"
                }
              ].map((dept, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6">
                  <h3 className="font-semibold text-slate-900 text-lg mb-2">{dept.department}</h3>
                  <a href={`mailto:${dept.email}`} className="text-cyan-600 hover:text-cyan-700 font-medium mb-3 block">{dept.email}</a>
                  <p className="text-slate-600 text-sm">{dept.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Form */}
          <section id="contact-form" className="bg-white border border-slate-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
            <p className="text-slate-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-slate-900 mb-2">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-slate-900 mb-2">
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="+61 2 8459 8050"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
                  Subject <span className="text-red-600">*</span>
                </label>
                <select
                  id="subject"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select a subject...</option>
                  <option value="trading">Trading Support</option>
                  <option value="account">Account Inquiry</option>
                  <option value="technical">Technical Issue</option>
                  <option value="compliance">Compliance</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-sm text-slate-600">
                  I agree to receive communications from BCR and have read the <a href="/privacy" className="text-cyan-600 hover:text-cyan-700 underline">Privacy Policy</a>.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFD400] hover:brightness-95 text-black font-semibold py-3 rounded-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Social Media & Support Hours */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cyan-50 rounded-lg p-8 border border-cyan-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Connect With Us</h3>
              <p className="text-slate-700 mb-6">Follow BCR on social media for updates, market insights, and trading tips.</p>
              <div className="flex gap-4">
                {[
                  { name: "Facebook", icon: "f", url: "#" },
                  { name: "Twitter", icon: "𝕏", url: "#" },
                  { name: "Instagram", icon: "📷", url: "#" },
                  { name: "LinkedIn", icon: "in", url: "#" }
                ].map((social, idx) => (
                  <a key={idx} href={social.url} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-cyan-100 transition-colors" title={social.name}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 rounded-lg p-8 border border-emerald-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Support Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 font-medium">Monday - Friday</span>
                  <span className="text-slate-600">24 Hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 font-medium">Saturday</span>
                  <span className="text-slate-600">24 Hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 font-medium">Sunday</span>
                  <span className="text-slate-600">Closed</span>
                </div>
                <p className="text-xs text-slate-600 mt-4 pt-4 border-t border-slate-300">
                  Response times may vary based on inquiry complexity. Critical issues are prioritized.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Preview */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: "How long does account setup take?",
                  a: "Most accounts are verified within 24 hours. You can start trading immediately after approval."
                },
                {
                  q: "What are your support hours?",
                  a: "We offer 24/5 support (Monday-Saturday). Email inquiries are responded to within 24 hours."
                },
                {
                  q: "How can I reset my password?",
                  a: "Use the 'Forgot Password' link on the login page. Reset instructions will be sent to your email."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept bank transfers, credit/debit cards, and several e-wallet methods for deposits."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-2">{faq.q}</h4>
                  <p className="text-slate-700 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
