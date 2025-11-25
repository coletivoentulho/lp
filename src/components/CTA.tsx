import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Gift, Mail } from "lucide-react";
import { useState } from "react";

export function CTA() {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Obrigado por se inscrever! Em breve você receberá novidades em ${email}`);
    setEmail("");
  };
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-600">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
          <Gift className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-4xl lg:text-5xl text-white mb-6">
          Ganhe 10% de Desconto na Primeira Compra!
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Inscreva-se na nossa newsletter e receba ofertas exclusivas, dicas de cuidados com sapos e novidades sobre novos produtos!
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="flex-1 relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="pl-10 h-12 bg-white"
            />
          </div>
          <Button 
            type="submit" 
            size="lg" 
            className="bg-gray-900 hover:bg-gray-800 h-12"
          >
            Quero Desconto!
          </Button>
        </form>
        
        <p className="text-sm text-white/70 mt-4">
          Sem spam, prometemos! 🐸
        </p>
      </div>
    </section>
  );
}
