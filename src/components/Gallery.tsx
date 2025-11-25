import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1755978595406-02221624b9de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcm9nJTIwcGV0JTIwY3V0ZXxlbnwxfHx8fDE3NjQxMDU5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Sapinho com touca",
    span: "col-span-2 row-span-2"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1542649076-141c398aca0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZyb2clMjBuYXR1cmV8ZW58MXx8fHwxNzY0MTA1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Sapinho na natureza",
    span: "col-span-1 row-span-1"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1761439099134-e64b1e803135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGVkJTIwY2xvdGhlcyUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc2NDEwNTk3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Acessórios tricotados",
    span: "col-span-1 row-span-1"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1743531061790-321008885052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aW55JTIwaGF0JTIwbWluaWF0dXJlfGVufDF8fHx8MTc2NDEwNTk3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Touca miniatura",
    span: "col-span-1 row-span-1"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1755978595406-02221624b9de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcm9nJTIwcGV0JTIwY3V0ZXxlbnwxfHx8fDE3NjQxMDU5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Sapinho feliz",
    span: "col-span-1 row-span-1"
  }
];

export function Gallery() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Galeria de Fofuras
          </h2>
          <p className="text-xl text-gray-600">
            Veja nossos clientes sapinhos arrasando no estilo!
          </p>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className={`${image.span} overflow-hidden rounded-2xl group cursor-pointer`}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
