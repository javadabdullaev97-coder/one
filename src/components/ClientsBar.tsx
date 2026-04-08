"use client";

const clients = [
  "Artel Electronics",
  "UzAuto Motors",
  "Hamkorbank",
  "Ucell",
  "Orient Group",
  "Coca-Cola Uzbekistan",
  "Nestlé Central Asia",
  "Hilton Tashkent",
  "PwC Uzbekistan",
  "Deloitte Central Asia",
  "EBRD",
  "IFC",
];

export default function ClientsBar() {
  return (
    <section className="py-14 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="tracking-luxury text-white/30 text-center mb-10">
          Trusted by leading organizations
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="marquee-track">
          {/* Two copies for seamless loop */}
          {[0, 1].map((copy) => (
            <div key={copy} className="marquee-items" aria-hidden={copy === 1}>
              {clients.map((name) => (
                <span
                  key={name}
                  className="mx-8 md:mx-12 text-sm md:text-base font-light tracking-[0.1em] text-white/30 hover:text-white transition-colors duration-300 whitespace-nowrap uppercase select-none cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
