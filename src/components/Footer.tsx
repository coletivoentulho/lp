import { Facebook, Instagram, Twitter, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl mb-4">🐸 Sapo Fashion</div>
            <p className="text-gray-400">
              Moda com amor para seu melhor amigo anfíbio
            </p>
          </div>
          
          <div>
            <h3 className="mb-4">Produtos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Toucas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Calcinhas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Botinhas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kits Completos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4">Ajuda</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Envios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Sapo Fashion. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> para sapos especiais
          </p>
        </div>
      </div>
    </footer>
  );
}
