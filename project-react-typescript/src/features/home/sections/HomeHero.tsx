export default function HomeHero() {
  return (
    <section
      className="relative h-[520px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://cdn.chemtradeasia.com/product-websites/betapinene/home-bn.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>


      <div className="relative z-10 container mx-auto h-full flex items-center px-4">
        <div className="w-full md:w-7/12 py-0 sm:py-8 md:py-0">
          <div>
            <h1 className="text-white text-[32px] font-semibold leading-tight md:text-[50px] md:leading-normal">
              Reliable Global Supplier of Soda Ash Dense
            </h1>
            <p className="text-white mt-3 mb-5 text-[14px] leading-[24px] md:text-[16px] md:leading-[29px] md:mt-[10px] md:mb-[20px]">
              Access premium-quality soda ash dense with reliable sourcing,
              expert guidance, and dedicated service across industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
