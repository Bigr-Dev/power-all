import hero_bg3 from "@/assets/night.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <Image
          //   src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80"
          src={hero_bg3}
          priority
          alt="Industrial generator facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            Powering Africa's Future Industries
          </h1>
          <p className="text-xl text-gray-200 mb-8 text-justify">
            We ensure your business meets the growing demand for efficient and
            sustainable power on a continental scale. We design, fabricate,
            assemble generator sets based on your business needs, providing your
            business with a turnkey,plug and power solution.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/services/all"
              state={{ title: "Browse Products" }}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-md font-semibold transition"
            >
              Search for Products
            </Link>
            <a
              href="#"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-md font-semibold transition"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
