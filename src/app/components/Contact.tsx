import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-neutral-900">Get In Touch</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Ready to elevate your social media presence? Let's connect and discuss your project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6 text-neutral-900">Let's Connect</h3>
              <p className="text-neutral-700 text-lg leading-relaxed mb-8">
                I'm always excited to collaborate on new projects and help brands tell their stories in authentic and engaging ways. Whether you need a complete social media strategy or content creation support, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-neutral-900 text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-neutral-600">Email</div>
                  <div className="text-neutral-900">azraa.amod01@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-neutral-900 text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-neutral-600">Phone</div>
                  <div className="text-neutral-900">+27 79 953 1840</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-neutral-900 text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-neutral-600">Location</div>
                  <div className="text-neutral-900">Cape Town, South Africa</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg mb-4 text-neutral-900">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/azraa_amod?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-neutral-200 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/azraa-amod-5886522b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-neutral-200 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://twitter.com/azraa_amod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-neutral-200 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 border border-neutral-200">
            <form
              action="https://formsubmit.co/azraa.amod01@gmail.com"
              method="POST"
              target="hidden_iframe"
              onSubmit={(e) => {
                setIsSubmitted(true);
                const form = e.currentTarget;
                window.setTimeout(() => form.reset(), 150);
              }}
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="New message from portfolio website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-neutral-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-neutral-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-2 text-neutral-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-transparent"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-neutral-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-transparent resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
              >
                Send Message
              </button>

              {isSubmitted ? (
                <p className="text-sm text-green-700">Email was sent.</p>
              ) : null}
            </form>
            <iframe name="hidden_iframe" title="form-submit-target" className="hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}