import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Tutora do Frederico",
    content: "Meu sapinho ficou ADORÁVEL com a touca de tricô! Ele nunca mais sentiu frio e virou celebridade no terrário. Recomendo muito!",
    rating: 5,
    avatar: "🐸"
  },
  {
    id: 2,
    name: "João Santos",
    role: "Tutor da Princesa Frog",
    content: "As botinhas impermeáveis são perfeitas! A Princesa adora passear na chuva agora. Qualidade excelente e entrega rápida!",
    rating: 5,
    avatar: "👑"
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Tutora do Sapo Cururu",
    content: "Comprei o kit completo e não me arrependo! Meu sapinho está muito elegante. O material é super confortável e seguro.",
    rating: 5,
    avatar: "💚"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-xl text-gray-600">
            Tutores satisfeitos com sapinhos ainda mais felizes!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar className="bg-emerald-100">
                    <AvatarFallback className="text-2xl">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
