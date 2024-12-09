import ShopCard from "./ShopCard";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

export default function ShopList() {
  const Shops: Product[] = [
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
    {
      id: 5,
      name: 'Grain coffee table',
        price: '25000',
      image: '/5.png',
    },
    {
      id: 6,
      name: 'Kent Coffee Table',
      price: '25000',
      image: '/6.png',
    },
    {
      id: 7,
      name: 'Reclaimed teak coffee table color 2',
      price: '25000',
      image: '/7.png',
    },
    {
      id: 8,
      name: 'Reclaimed teak coffee table ',
      price: '25000',
      image: '/8.png',
    },
    {
      id: 9,
      name: 'Plain Console',
      price: '25000',
      image: '/9.png',
    },
    {
      id: 10,
      name: 'Reclaimed teak Sideboard',
      price: '25000',
      image: '/10.png',
    },
    {
      id: 11,
      name: 'SJP 0825',
      price: '25000',
      image: '/11.png',
    },
    {
      id: 12,
      name: 'Bella chair and table',
      price: '25000',
      image: '/12.png',
    },
    {
      id: 13,
      name: 'Granite square side table',
      price: '25000',
      image: '/13.png',
    },
    {
      id: 14,
      name: 'Asgaard sofa',
      price: '25000',
      image: '/14.png',
    },
    {
      id: 15,
      name: 'Moya sofa three seater',
      price: '25000',
      image: '/15.png',
    },
    {
      id: 16,
      name: 'Outdoor sofa set',
      price: '25000',
      image: '/16.png',
    },
  ];

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap w-full">
      <div className=" mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center"></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full justify-center">
          {Shops.map((product) => (
            <ShopCard
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
