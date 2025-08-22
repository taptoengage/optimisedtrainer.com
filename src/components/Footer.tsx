import React from "react";

export default function Footer() {
  const links = [
    { label: "Features", href: "#" },
    { label: "Product", href: "#" },
    { label: "About", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#111] text-gray-200">
      {/* subtle divider above footer */}
      <div className="border-t border-white/10" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Brand + nav pills */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="text-xl font-semibold text-white">
            Optimised Trainer
          </div>

          <nav className="flex flex-wrap items-center gap-4 sm:gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-6 py-3 rounded-xl border border-white/25 text-gray-100 hover:bg-white/10 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* thin rule then copyright */}
        <hr className="mt-8 mb-6 border-white/10" />

        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Optimised Trainer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}