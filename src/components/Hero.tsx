import { Button } from "./ui/button";
import { Sparkles, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm text-emerald-700">Moda exclusiva para anfíbios</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl text-gray-900">
              Roupinhas Adoráveis para Seu <span className="text-emerald-600">Sapinho</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl">
              Descubra a coleção mais fofa de toucas, calcinhas, botinhas e acessórios feitos especialmente para deixar seu sapinho ainda mais estiloso!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700"
                onClick={scrollToProducts}
              >
                <Heart className="w-5 h-5 mr-2" />
                Ver Coleção
              </Button>
              <Button size="lg" variant="outline">
                Saiba Mais
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Sapos felizes</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div>
                <div className="text-3xl text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Conforto garantido</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div>
                <div className="text-3xl text-gray-900">⭐⭐⭐⭐⭐</div>
                <div className="text-sm text-gray-600">Avaliação</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1755978595406-02221624b9de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcm9nJTIwcGV0JTIwY3V0ZXxlbnwxfHx8fDE3NjQxMDU5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sapinho fofo"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-2xl">
                🐸
              </div>
              <div>
                <div className="text-sm text-gray-900">Novo!</div>
                <div className="text-xs text-gray-600">Coleção de Inverno</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
