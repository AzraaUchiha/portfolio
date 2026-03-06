export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h3 className="text-2xl">Azraa Amod</h3>
          <p className="text-neutral-400">
            Social Media & Content Marketing Specialist
          </p>
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} Azraa Amod. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}