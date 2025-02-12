
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { PlusCircle, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface FoodCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const FoodCard = ({ id, title, description, price, image }: FoodCardProps) => {
  const { addItem, items, updateQuantity, removeItem } = useCart();

  const cartItem = items.find(item => item.id === id);

  const handleAddToCart = () => {
    addItem({ id, title, price });
    toast.success(`Added ${title} to cart`);
  };

  const handleUpdateQuantity = (newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      toast.success(`Removed ${title} from cart`);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between items-center">
        <span className="text-lg font-semibold">${price.toFixed(2)}</span>
        {!cartItem ? (
          <Button size="sm" className="rounded-full" onClick={handleAddToCart}>
            <PlusCircle className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        ) : (
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => handleUpdateQuantity(cartItem.quantity - 1)}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center font-medium">{cartItem.quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => handleUpdateQuantity(cartItem.quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
