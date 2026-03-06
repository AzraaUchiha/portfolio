import { Megaphone, PenTool, BarChart3, Users, Heart, Target } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Strategy",
    description: "Developing comprehensive strategies tailored to your brand's goals and target audience across all major platforms.",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Crafting engaging copy, visuals, and multimedia content that tells your brand's story and drives engagement.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Tracking performance metrics and translating data into actionable insights to optimize campaign effectiveness.",
  },
  {
    icon: Users,
    title: "Community Management",
    description: "Building and nurturing engaged communities through authentic interaction and responsive communication.",
  },
  {
    icon: Heart,
    title: "Brand Voice Development",
    description: "Establishing a consistent, authentic brand voice that resonates with your audience and builds loyalty.",
  },
  {
    icon: Target,
    title: "Campaign Management",
    description: "Planning and executing multi-platform campaigns from concept to completion with measurable results.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-neutral-900">Services & Expertise</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Comprehensive social media and marketing solutions to elevate your brand's digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 hover:shadow-md transition-shadow border border-neutral-200"
            >
              <div className="mb-4">
                <div className="inline-flex p-3 bg-neutral-100 text-neutral-900">
                  <service.icon size={28} />
                </div>
              </div>
              <h3 className="text-xl mb-3 text-neutral-900">{service.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-3xl text-center mb-12 text-neutral-900">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Instagram",
              "TikTok",
              "LinkedIn",
              "Facebook",
              "Twitter/X",
              "Pinterest",
              "Canva",
              "CapCut",
              "Hootsuite",
              "Google Analytics",
              "Meta Business Suite",
              "Content Strategy",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white px-4 py-3 border border-neutral-200 text-center hover:border-neutral-900 hover:text-neutral-900 transition-colors text-neutral-700"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}