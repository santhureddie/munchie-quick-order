
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-32 animate-fade-up">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Delicious Food,
            <br />
            <span className="text-primary">Delivered to You</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the finest selection of meals from top local restaurants,
            delivered right to your doorstep.
          </p>
          <Button
            size="lg"
            className="rounded-full px-8 animate-slide-up-fade"
            onClick={() => navigate("/order")}
          >
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};
