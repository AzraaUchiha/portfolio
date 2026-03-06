import { ArrowRight, Download, Instagram, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const profileImageSrc = `${import.meta.env.BASE_URL}profile-photo.jpg`;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-neutral-100 text-neutral-700 text-sm">
              BA Communication Science Graduate
            </div>
            <h1 className="text-5xl md:text-6xl text-neutral-900">
              Social Media &<br />
              <span className="text-neutral-600">Content Marketing</span><br />
              Specialist
            </h1>
            <p className="text-xl text-neutral-600 max-w-xl">
              Creating engaging content and strategic campaigns that connect brands with their audiences across digital platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="px-6 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={20} />
              </button>
              <a
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                download="Aqeel-Majal-CV.pdf"
                className="px-6 py-3 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors flex items-center gap-2"
              >
                Download CV
                <Download size={20} />
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
              >
                Get In Touch
              </button>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.instagram.com/azraa_amod?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-neutral-200 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
              >
                <Instagram size={20} />
              </a>  
              <a
                href="https://linkedin.com/in/azraa-amod-5886522b3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-neutral-200 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:azraa.amod01@gmail.com"
                className="p-3 bg-white border border-neutral-200 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <ImageWithFallback
                src={profileImageSrc}
                alt="Profile photo"
                className="w-full h-[600px] object-cover"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-neutral-900 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}