
import { FoodCard } from "./FoodCard";

const MENU_ITEMS = [
  {
    id: 1,
    title: "Classic Burger",
    description: "Juicy beef patty with fresh vegetables",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, and basil",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Caesar Salad",
    description: "Crispy romaine with classic Caesar dressing",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Pasta Carbonara",
    description: "Creamy pasta with pancetta and parmesan",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Chicken Alfredo",
    description: "Grilled chicken with creamy alfredo sauce on fettuccine",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Veggie Wrap",
    description: "Fresh vegetables and hummus in a whole wheat wrap",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&h=400&fit=crop"
  },
  {
    id: 7,
    title: "Fish & Chips",
    description: "Beer-battered cod with crispy fries and tartar sauce",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=500&h=400&fit=crop"
  },
  {
    id: 8,
    title: "Chocolate Brownie",
    description: "Rich chocolate brownie with vanilla ice cream",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=500&h=400&fit=crop"
  }
];

export const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated menu featuring the finest ingredients and
            flavors from around the world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENU_ITEMS.map((item) => (
            <FoodCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
