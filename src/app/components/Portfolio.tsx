import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "Bookstagram",
    category: "Instagram Marketing",
    description: "I run a Books account on Instagram with 20K+ views, where I create engaging content that combines book reviews, literary discussions, and visually appealing aesthetics to foster a vibrant community of book lovers.",
    image: "/social-media-campaign.png",
    link: "https://www.instagram.com/azraa_reads?igsh=b3k4dzVvMHJmZ2Vn",
    tags: ["Instagram", "Copy Writing", "Analytics"],
  },
  {
    title: "Art account",
    category: "Instagram & Reels",
    description: "I run an art account on TikTok and Instagram, where I create visually engaging reels that showcase my artistic process, share creative insights, and connect with a community of art enthusiasts, driving significant engagement and growth.",
    image: "/art-account.jpg",
    link: "https://www.instagram.com/uchiha_baby?igsh=MWhtbG5zNnhxbXYwMA==",
    tags: ["Instagram", "Video Content", "Viral Marketing"],
  },
  {
    title: "Small IT company",
    category: "Brand Marketing",
    description: "I do the marketing and social media for a small IT company, where I develop and execute strategic marketing campaigns that enhance brand visibility, engage target audiences, and drive business growth in the competitive tech industry.",
    image: "/small-it-company.jpg",
    link: "https://www.instagram.com/triforgesolutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    tags: ["Strategy", "Brand Development", "Multi-Platform"],
  },
  {
    title: "Running group",
    category: "Visual Content",
    description: "I developed cohesive visual identity and content templates for a running group, ensuring consistent brand messaging across all platforms.",
    image: "/running-group.png",
    link: "https://www.instagram.com/slowandsteadycpt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    tags: ["Design", "Branding", "Templates"],
  },
  {
    title: "Personal accounts",
    category: "Strategic Planning",
    description: "I do content for personal accounts, where I create and implement strategic content plans that align with individual brand identities, enhance online presence, and foster meaningful engagement with target audiences.",
    image: "/personal-accounts.png",
    link: "https://www.instagram.com/daanyaalabrahams?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    tags: ["Planning", "SEO", "Content Strategy"],
  },
  {
    title: "Small business partnership",
    category: "Partnership Campaign",
    description: "I do social mnedia for a small business, where I develop and execute strategic marketing campaigns that enhance brand visibility, engage target audiences, and drive business growth in the competitive food industry.",
    image: "/small-business-partnership.png",
    link: "https://www.instagram.com/kw_cape_malay_treats?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    tags: ["Influencer Marketing", "Partnerships", "Campaign Management"],
  },
];

export function Portfolio() {
  const baseUrl = ((import.meta as any).env?.BASE_URL as string) || "/";

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-neutral-900">Portfolio</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            A showcase of successful campaigns and projects that drove real results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white overflow-hidden hover:shadow-md transition-all duration-300 border border-neutral-200"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src={`${baseUrl}${item.image.replace(/^\//, "")}`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white"
                    >
                      <ExternalLink size={20} className="text-neutral-900" />
                    </a>
                  ) : (
                    <div className="p-2 bg-white">
                      <ExternalLink size={20} className="text-neutral-900" />
                    </div>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="text-neutral-600 text-sm mb-2">{item.category}</div>
                <h3 className="text-xl mb-2 text-neutral-900">{item.title}</h3>
                <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-neutral-50 p-8 border border-neutral-200">
            <h3 className="text-2xl mb-3 text-neutral-900">Like what you see?</h3>
            <p className="text-neutral-600 mb-6 max-w-md">
              Let's collaborate on your next social media campaign and create something amazing together.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
