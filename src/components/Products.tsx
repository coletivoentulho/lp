import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const products = [
  {
    id: 1,
    name: "Touca de Tricô",
    description: "Touca quentinha e estilosa para seu sapinho",
    price: "R$ 39,90",
    image: "https://images.unsplash.com/photo-1743531061790-321008885052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aW55JTIwaGF0JTIwbWluaWF0dXJlfGVufDF8fHx8MTc2NDEwNTk3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    badge: "Mais Vendido"
  },
  {
    id: 2,
    name: "Calcinha Confortável",
    description: "Proteção e conforto com estilo",
    price: "R$ 29,90",
    image: "https://images.unsplash.com/photo-1761439099134-e64b1e803135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGVkJTIwY2xvdGhlcyUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc2NDEwNTk3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    badge: null
  },
  {
    id: 3,
    name: "Botinhas Impermeáveis",
    description: "Para passeios em qualquer clima",
    price: "R$ 49,90",
    image: "https://images.unsplash.com/photo-1542649076-141c398aca0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZyb2clMjBuYXR1cmV8ZW58MXx8fHwxNzY0MTA1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    badge: "Novo"
  },
  {
    id: 4,
    name: "Kit Completo Premium",
    description: "Touca, calcinha e botinhas combinando",
    price: "R$ 99,90",
    image: "https://images.unsplash.com/photo-1755978595406-02221624b9de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcm9nJTIwcGV0JTIwY3V0ZXxlbnwxfHx8fDE3NjQxMDU5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    badge: "Oferta"
  }
];

export function Products() {
  return (
    <section id="produtos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Nossa Coleção Especial
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Produtos feitos com carinho e materiais seguros para o bem-estar do seu sapinho
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.badge && (
                    <Badge className="absolute top-4 right-4 bg-emerald-600">
                      {product.badge}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="mb-2">{product.name}</CardTitle>
                <CardDescription className="mb-4">
                  {product.description}
                </CardDescription>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="text-2xl text-emerald-600">
                  {product.price}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Adicionar ao Carrinho
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
