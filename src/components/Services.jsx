// next
import Image from "next/image";
import Link from "next/link";

// images
import solar from "@/assets/solar.jpg";
import generators from "@/assets/heavy_duty2.jpg";
import base from "@/assets/fuel_cooling.jpg";

const Services = async () => {
  const origin = process.env.API_ORIGIN;
  const res = await fetch(origin);
  const services = await res.json();

  return (
    <section className={"py-20  bg-white "}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Power Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item) => (
            <Link href={`/services/${item.id}`} key={item.id}>
              <div className=" bg-gray-50 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
                <Image
                  src={
                    (item.id === 1 && solar) ||
                    (item.id === 2 && generators) ||
                    (item.id === 3 && base)
                  }
                  alt={item.service_name}
                  className="bg-white  w-full h-48 object-cover rounded-t-lg shadow-sm"
                />
                <div className="p-6  ">
                  <h3 className="text-l font-bold mb-2">{item.service_name}</h3>

                  <p className="text-gray-600 text-pretty">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
