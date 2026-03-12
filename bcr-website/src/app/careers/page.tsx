import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowRight, 
  Users, 
  Lightbulb, 
  Zap, 
  Award, 
  Globe, 
  Heart, 
  Briefcase, 
  TrendingUp, 
  Code, 
  Settings, 
  Megaphone, 
  DollarSign,
  ChevronRight,
  MapPin,
  Building2
} from "lucide-react";

export const metadata = { title: "Careers | BCR" };

export default function CareersPage() {
  const departments = [
    {
      name: "Sales & Business Development",
      roles: ["Account Executive", "Business Development Manager", "Sales Support Specialist"],
      icon: Briefcase,
      color: "yellow",
    },
    {
      name: "Trading & Analysis",
      roles: ["Senior Analyst", "Risk Management Specialist", "Market Researcher"],
      icon: TrendingUp,
      color: "green",
    },
    {
      name: "Technology",
      roles: ["Full Stack Developer", "DevOps Engineer", "QA Engineer"],
      icon: Code,
      color: "blue",
    },
    {
      name: "Operations",
      roles: ["Operations Manager", "Compliance Officer", "Customer Onboarding Specialist"],
      icon: Settings,
      color: "purple",
    },
    {
      name: "Marketing",
      roles: ["Digital Marketing Manager", "Content Strategist", "SEO Specialist"],
      icon: Megaphone,
      color: "pink",
    },
    {
      name: "Finance",
      roles: ["Financial Analyst", "Accountant", "Finance Manager"],
      icon: DollarSign,
      color: "orange",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Comprehensive Health Benefits",
      description: "Medical, dental, and vision coverage for you and your family.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive environment.",
    },
    {
      icon: Lightbulb,
      title: "Professional Development",
      description: "Continuous learning and career growth opportunities.",
    },
    {
      icon: Zap,
      title: "Flexible Work Arrangements",
      description: "Remote work options and flexible working hours.",
    },
    {
      icon: Award,
      title: "Competitive Compensation",
      description: "Attractive salary packages and performance bonuses.",
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Work across multiple international offices.",
    },
  ];

  const values = [
    {
      title: "Integrity",
      description: "We operate with transparency and honesty in all our dealings.",
    },
    {
      title: "Excellence",
      description: "We strive for the highest standards in everything we do.",
    },
    {
      title: "Innovation",
      description: "We embrace new ideas and technologies to stay ahead.",
    },
    {
      title: "Client-First",
      description: "We prioritize our clients' success above everything else.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 sm:py-28">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
            <Users className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-400">Join Our Team</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Build Your Career at
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500"> BCR</span>
          </h1>
          <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
            Join a dynamic team of financial professionals dedicated to providing exceptional trading experiences. 
            We&apos;re always looking for talented individuals to help shape the future of online trading.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="h-14 px-8 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold text-lg rounded-xl shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all hover:scale-105 inline-flex items-center"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Location badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {["Sydney", "Melbourne", "Singapore", "London"].map((city) => (
              <div key={city} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-white">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              <span className="text-xs font-semibold tracking-widest text-yellow-600 uppercase">Our Values</span>
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              What We Stand For
            </h2>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div 
                key={idx}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-center hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-slate-900">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              <span className="text-xs font-semibold tracking-widest text-yellow-600 uppercase">Benefits</span>
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Why Work With Us
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We invest in our people with comprehensive benefits and a supportive culture
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-yellow-600" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              <span className="text-xs font-semibold tracking-widest text-yellow-600 uppercase">Departments</span>
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Explore Opportunities
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Find your perfect role across our various departments
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-yellow-300 hover:shadow-xl transition-all"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
                      <dept.icon className="w-6 h-6 text-slate-700 group-hover:text-yellow-600 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{dept.name}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {dept.roles.map((role, roleIdx) => (
                      <div 
                        key={roleIdx}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-yellow-50 transition-colors cursor-pointer group/role"
                      >
                        <span className="text-sm text-slate-700">{role}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover/role:text-yellow-600 group-hover/role:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at BCR */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-yellow-500" />
                <span className="text-xs font-semibold tracking-widest text-yellow-500 uppercase">Life at BCR</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                A Culture of Growth & Excellence
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                At BCR, we believe that our people are our greatest asset. We foster an environment where innovation thrives, 
                collaboration is encouraged, and every team member has the opportunity to make a meaningful impact.
              </p>
              
              <div className="space-y-4">
                {[
                  "Regular team building events and social activities",
                  "Mentorship programs for career development",
                  "State-of-the-art office facilities",
                  "Wellness programs and gym memberships"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image placeholder grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 flex items-center justify-center">
                  <Building2 className="w-12 h-12 text-yellow-500/50" />
                </div>
                <div className="h-32 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <Users className="w-8 h-8 text-slate-500" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-32 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-slate-500" />
                </div>
                <div className="h-48 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 flex items-center justify-center">
                  <Globe className="w-12 h-12 text-yellow-500/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border border-yellow-200 mb-6">
            <Zap className="w-4 h-4 text-yellow-600" />
            <span className="text-sm font-semibold text-yellow-700">Ready to Join?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Take the Next Step in Your Career
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Send us your resume and we&apos;ll be in touch if there&apos;s a match. We&apos;re always looking for exceptional talent.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="h-14 px-10 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold text-lg rounded-xl shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all hover:scale-105 inline-flex items-center"
            >
              View All Positions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline"
              className="h-14 px-10 border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-lg rounded-xl transition-all"
              asChild
            >
              <Link href="/contact">Contact HR</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
