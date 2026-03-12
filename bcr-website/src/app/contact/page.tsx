import Link from "next/link";
import { Phone, Mail, MessageCircle, MapPin, Clock, Globe, ChevronRight, Send } from "lucide-react";

export const metadata = { title: "Contact Us - Get in Touch with BCR" };

export default function ContactPage() {
  const contactMethods = [
    { icon: Phone, title: "Call Us", content: "+61 2 8459 8050", subtitle: "Available 24/5" },
    { icon: Mail, title: "Email Us", content: "info@bcr.com", subtitle: "Quick response within 24 hours" },
    { icon: MessageCircle, title: "Live Chat", content: "Chat with our team", subtitle: "Instant assistance available" }
  ];

  const offices = [
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
  ];

  const departments = [
    { department: "General Information", email: "info@bcr.com", description: "Account setup, general inquiries, and trading questions" },
    { department: "Sales & Support", email: "support@bcr.com", description: "Trading assistance, platform issues, and account support" },
    { department: "Marketing & Partnerships", email: "partnerships@bcr.com", description: "IB programs, affiliates, and business partnerships" },
    { department: "Compliance", email: "compliance@bcr.com", description: "Regulatory inquiries and compliance matters" }
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-[400px]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 text-sm font-medium text-yellow-400 mb-6">
              <MessageCircle className="w-4 h-4" />
              Customer Support
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              Contact Us
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Get in touch with our dedicated support team. Available 24/5 to assist you with any questions or concerns.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 px-6 py-3 font-semibold text-black transition-all shadow-lg shadow-yellow-500/25"
              >
                Send a Message
                <Send className="w-4 h-4" />
              </a>
              <a
                href="tel:+61284598050"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3 font-semibold text-white transition-all backdrop-blur-sm"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Contact Methods */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              Get in Touch
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Multiple Ways to Reach Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {contactMethods.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 text-center"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-yellow-600 font-semibold mb-1">{item.content}</p>
                <p className="text-sm text-slate-500">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              Our Offices
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Our Global Offices
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {offices.map((office, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold text-slate-900 mb-6">{office.location}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Address</p>
                      <p className="text-slate-700">{office.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Phone</p>
                      <a href={`tel:${office.phone}`} className="text-slate-700 hover:text-yellow-600 transition-colors">{office.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Email</p>
                      <a href={`mailto:${office.email}`} className="text-slate-700 hover:text-yellow-600 transition-colors">{office.email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Timezone</p>
                      <p className="text-slate-700">{office.timezone}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              Departments
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Department Contacts
            </h2>
            <p className="text-slate-600 mt-4">Reach out to the right department for faster assistance</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {departments.map((dept, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-yellow-300 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{dept.department}</h3>
                  <a href={`mailto:${dept.email}`} className="text-yellow-600 hover:text-yellow-700 text-sm font-semibold">{dept.email}</a>
                  <p className="text-slate-600 text-sm mt-1">{dept.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              Send a Message
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Get in Touch
            </h2>
          </div>

          <form className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all">
                <option>General Inquiry</option>
                <option>Account Support</option>
                <option>Trading Questions</option>
                <option>Partnership Opportunities</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
              <textarea 
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 px-6 py-4 font-semibold text-black transition-all shadow-lg shadow-yellow-500/25"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 sm:py-28">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to start trading?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Open an account in minutes and join thousands of traders worldwide
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 px-8 py-4 text-lg font-bold text-black transition-all shadow-lg shadow-yellow-500/25 hover:scale-105"
          >
            Open an Account
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
