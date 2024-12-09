import ProductCard from './ProductCard';

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

export default function ProductList() {
  const products: Product[] = [
    {
      id: 1,
      name: 'Trenton modular sofa 3',
      price: '25000',
      image: '/1.png',
    },
    {
      id: 2,
      name: 'Granite dining table with dining chair',
      price: '25000',
      image: '/2.png',
    },
    {
      id: 3,
      name: 'Outdoor bar table and stool',
      price: '25000',
      image: '/3.png',
    },
    {
      id: 4,
      name: 'Plain console with teak mirror',
      price: '25000',
      image: '/4.png',
    },
  ];

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap w-full">
      <div className=" mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center"></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full justify-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
