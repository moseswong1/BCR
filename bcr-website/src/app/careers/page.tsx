import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Lightbulb, Zap, Award, Globe, Heart, Briefcase, TrendingUp, Code, Settings, Megaphone, DollarSign } from "lucide-react";

export const metadata = { title: "Careers" };

export default function CareersPage() {
  const departments = [
    {
      name: "Sales & Business Development",
      roles: ["Account Executive", "Business Development Manager", "Sales Support Specialist"],
      icon: "briefcase",
    },
    {
      name: "Trading & Analysis",
      roles: ["Senior Analyst", "Risk Management Specialist", "Market Researcher"],
      icon: "trending",
    },
    {
      name: "Technology",
      roles: ["Full Stack Developer", "DevOps Engineer", "QA Engineer"],
      icon: "code",
    },
    {
      name: "Operations",
      roles: ["Operations Manager", "Compliance Officer", "Customer Onboarding Specialist"],
      icon: "settings",
    },
    {
      name: "Marketing",
      roles: ["Digital Marketing Manager", "Content Strategist", "SEO Specialist"],
      icon: "megaphone",
    },
    {
      name: "Finance",
      roles: ["Financial Analyst", "Accountant", "Finance Manager"],
      icon: "dollar",
    },
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Comprehensive Health Benefits",
      description: "Medical, dental, and vision coverage for you and your family.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive environment.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Professional Development",
      description: "Continuous learning and career growth opportunities.",
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Flexible Work Arrangements",
      description: "Remote work options and flexible working hours.",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Competitive Compensation",
      description: "Attractive salary packages and performance bonuses.",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
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

  const faqs = [
    {
      q: "What is the hiring process like?",
      a: "Our process typically includes a phone screening, technical/skills assessment, interviews with team members, and final offer stage. Most positions complete this in 2-4 weeks.",
    },
    {
      q: "Do you offer internship programs?",
      a: "Yes! We offer paid internships for students across various departments. Check the careers portal for available positions.",
    },
    {
      q: "What is the work environment like?",
      a: "BCR is fast-paced, innovative, and collaborative. We value teamwork and provide tools and support for professional growth.",
    },
    {
      q: "Do you support remote work?",
      a: "Many of our positions offer remote or hybrid arrangements. Specific details depend on the role and department.",
    },
    {
      q: "What are the salary ranges?",
      a: "Compensation is competitive and commensurate with experience. Salary ranges are provided in each job posting.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Build Your Career at BCR
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl">
            Join a team of passionate professionals dedicated to revolutionizing global trading. We're looking for talented individuals who share our vision.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Departments & Open Roles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => {
              const iconMap: { [key: string]: React.ReactNode } = {
                briefcase: <Briefcase className="w-8 h-8 text-indigo-600" />,
                trending: <TrendingUp className="w-8 h-8 text-indigo-600" />,
                code: <Code className="w-8 h-8 text-indigo-600" />,
                settings: <Settings className="w-8 h-8 text-indigo-600" />,
                megaphone: <Megaphone className="w-8 h-8 text-indigo-600" />,
                dollar: <DollarSign className="w-8 h-8 text-indigo-600" />,
              };
              return (
              <Card key={idx} className="p-6 border-gray-200 hover:shadow-lg transition">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-100 mb-4">
                  {iconMap[dept.icon]}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{dept.name}</h3>
                <ul className="space-y-2 mb-6">
                  {dept.roles.map((role, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://www.seek.com.au/companies/bcr-bacera-co-164393999744024">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm">
                    View Openings
                    <ArrowRight className="ml-2 w-3 h-3" />
                  </Button>
                </a>
              </Card>
            );
            })}
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <Card key={idx} className="p-6 border-gray-200 bg-gradient-to-br from-indigo-50 to-blue-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Work at BCR?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="p-6 border-gray-200 hover:shadow-lg transition">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="p-6 border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-12 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center border-0">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Explore all open positions and apply today to become part of the BCR family.
          </p>
          <a href="https://www.seek.com.au/companies/bcr-bacera-co-164393999744024">
            <Button className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold">
              View All Positions
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </Card>
      </section>
    </main>
  );
}
