
import React from "react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the story behind Munchies and our commitment to quality food and service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1565538420870-da08ff96a207?w=800&h=600&fit=crop" 
              alt="Our Restaurant" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Our Story</h3>
            <p className="text-gray-700">
              Munchies was founded in 2015 with a simple mission: to serve delicious food made from the freshest ingredients. 
              What started as a small food truck has grown into a beloved restaurant, but our commitment to quality remains unchanged.
            </p>
            <p className="text-gray-700">
              We source our ingredients from local farms and suppliers whenever possible, supporting our community while ensuring that 
              every dish we serve meets our high standards.
            </p>
            <h3 className="text-2xl font-semibold pt-4">Our Chef</h3>
            <p className="text-gray-700">
              Our head chef brings over 15 years of culinary experience to Munchies. Trained in classical techniques but passionate about 
              innovation, our chef creates dishes that are both familiar and exciting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
