import { GraduationCap, Award, TrendingUp } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-neutral-900">About Me</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            A passionate communications professional dedicated to crafting compelling digital narratives
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Story */}
          <div className="space-y-6">
            <p className="text-lg text-neutral-700 leading-relaxed">
              I’m a freelance content creative with a BA in Communication Science, specialising in visually engaging and strategically aligned social media content. I’ve created sports-focused reels for runners, book review content, and art-driven posts for small businesses and individual brands.            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              My work blends storytelling, photography, videography, and thoughtful editing to produce content that feels cohesive, intentional, and impactful.             </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              With a background in Quality Assurance, I bring strong attention to detail and a structured, analytical mindset — ensuring every piece of content is not only aesthetic, but purposeful and performance-aware.            </p>
          </div>

          {/* Right - Stats/Highlights */}
          <div className="space-y-6">
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-900 text-white">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-neutral-900">Education</h3>
                  <p className="text-neutral-700">BA Communications Science</p>
                  <p className="text-neutral-600 text-sm">Graduated: 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-900 text-white">
                  <Award size={28} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-neutral-900">Certifications</h3>
                  <p className="text-neutral-700">The Complete Digital Marketing Guide</p>
                  <p className="text-neutral-700">Introduction to Artificial Intelligence (MDL-211)</p>
                  <p className="text-neutral-600 text-sm">Content Strategy | Analytics | Content Creation</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-900 text-white">
                  <TrendingUp size={28} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-neutral-900">Experience</h3>
                  <p className="text-neutral-700">Qa Analyst and Social Media</p>
                  <p className="text-neutral-600 text-sm">Across Multiple Industries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}