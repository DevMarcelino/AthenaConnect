import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, ShoppingCart, MessageSquare } from 'lucide-react';

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  imageHint?: string;
  seller: string;
  rating: number;
  reviews: number;
  location: string;
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative h-56 w-full">
          <Image
            src={product.imageUrl}
            alt={product.name} // Alt text permanece dinâmico, mas o conteúdo de product.name será traduzido na origem
            layout="fill"
            objectFit="cover"
            data-ai-hint={product.imageHint}
          />
          <Badge variant="secondary" className="absolute top-2 right-2 bg-opacity-80 backdrop-blur-sm">{product.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg mb-1 text-primary">{product.name}</CardTitle>
        <p className="text-sm text-muted-foreground mb-2">Vendido por {product.seller}</p>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
          <span className="ml-1 text-xs text-muted-foreground">({product.reviews} avaliações)</span>
        </div>
        <p className="text-lg font-semibold text-accent">R${product.price.toFixed(2).replace('.', ',')}</p>
        <div className="flex items-center text-xs text-muted-foreground mt-1">
            <MapPin className="mr-1 h-3 w-3" />
            <span>{product.location}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex flex-col sm:flex-row gap-2">
        <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
          <ShoppingCart className="mr-2 h-4 w-4" /> Adicionar ao Carrinho
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <MessageSquare className="mr-2 h-4 w-4" /> Contatar Vendedor
        </Button>
      </CardFooter>
    </Card>
  );
}
