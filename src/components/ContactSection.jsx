// icons
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-300">
                    123 Power Avenue
                    <br />
                    Industrial District
                    <br />
                    Houston, TX 77001
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300">1-800-POWERGEN</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-300">sales@powergen-solutions.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="bg-white text-black rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Request Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Generator Size
                  </label>
                  <select className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500">
                    <option>10kW - 100kW</option>
                    <option>100kW - 1000kW</option>
                    <option>1000kW - 3000kW</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-md transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
