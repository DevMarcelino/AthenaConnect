import ProductCard from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, Search, ShoppingBag, Star } from 'lucide-react';

const products = [
  {
    id: '1',
    name: 'Handcrafted Jewelry Set',
    category: 'Fashion',
    price: 75.00,
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'jewelry necklace',
    seller: 'Elena Designs',
    rating: 4.5,
    reviews: 23,
    location: 'Athens, Greece',
  },
  {
    id: '2',
    name: 'Organic Skincare Kit',
    category: 'Beauty',
    price: 120.00,
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'skincare bottles',
    seller: 'Naturelle Beauty',
    rating: 4.8,
    reviews: 45,
    location: 'Online',
  },
  {
    id: '3',
    name: 'Business Coaching Session',
    category: 'Services',
    price: 250.00,
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'coaching consultation',
    seller: 'Sophia Coaching',
    rating: 5.0,
    reviews: 15,
    location: 'Remote',
  },
  {
    id: '4',
    name: 'Custom Web Design Package',
    category: 'Services',
    price: 800.00,
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'web design',
    seller: 'Digital Goddess',
    rating: 4.9,
    reviews: 30,
    location: 'Global',
  }
];

export default function MarketplacePage() {
  return (
    <div className="space-y-8">
      <div className="p-6 bg-card rounded-lg shadow">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Peer Marketplace</h1>
        <p className="text-muted-foreground mt-2">Discover products and services from fellow entrepreneurs.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 p-4 bg-card rounded-lg shadow">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input type="search" placeholder="Search products or services..." className="pl-10 w-full" />
        </div>
        <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="fashion">Fashion</SelectItem>
            <SelectItem value="beauty">Beauty</SelectItem>
            <SelectItem value="services">Services</SelectItem>
            <SelectItem value="home">Home Goods</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Rating</SelectItem>
            <SelectItem value="4+"><Star className="inline-block mr-1 h-4 w-4 text-yellow-400 fill-yellow-400" /> 4 Stars & Up</SelectItem>
            <SelectItem value="3+"><Star className="inline-block mr-1 h-4 w-4 text-yellow-400 fill-yellow-400" /> 3 Stars & Up</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="w-full md:w-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
         <Button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
          List Your Product
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
       {products.length === 0 && (
        <div className="text-center py-12">
          <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-2 text-xl font-semibold">No Products Found</h3>
          <p className="mt-1 text-muted-foreground">Try adjusting your filters or check back later.</p>
        </div>
      )}
    </div>
  );
}
