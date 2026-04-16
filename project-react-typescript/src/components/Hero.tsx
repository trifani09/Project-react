export default function Hero() {
  return (
    <section
      className="relative h-[600px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://cdn.chemtradeasia.com/chemtradeasia-new/singapore/about-img.webp')",
      }}
    >
      {/* overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/60"></div>

      {/* content */}
      <div className="relative px-16 max-w-3xl text-white">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Reliable Global Supplier of <br /> Soda Ash Dense
        </h1>
        <p className="text-lg text-gray-200">
          Access premium-quality soda ash dense with reliable sourcing, expert
          guidance, and dedicated service across industries.
        </p>
      </div>
    </section>
  );
}
