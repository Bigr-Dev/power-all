// next
import Image from "next/image";

// images
import hero_bg3 from "@/assets/hero_bg3.png";

// icons
import { Factory, Wrench, CheckCircle } from "lucide-react";

const Fabrication = () => {
  return (
    <section id="fabrication" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Fabrication Excellence
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Image
              //   src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
              src={hero_bg3}
              alt="Manufacturing facility"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Factory className="w-8 h-8 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  State-of-the-Art Facility
                </h3>
                <p className="text-gray-600">
                  Our 500,000 sq ft facility equipped with advanced
                  manufacturing technology ensures precision and quality in
                  every generator we produce.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Wrench className="w-8 h-8 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Expert Assembly</h3>
                <p className="text-gray-600">
                  Skilled technicians with decades of experience ensure every
                  component is assembled to the highest standards.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Control</h3>
                <p className="text-gray-600">
                  Rigorous testing protocols and quality checks at every stage
                  of production guarantee reliability and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fabrication;
