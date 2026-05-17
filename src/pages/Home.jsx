import React from 'react';
import { 
  Home as HomeIcon, Image, Phone, Calendar, 
  Map, Info, Users, Trees, 
  ShoppingBag, Camera, MessageSquare, HelpCircle 
} from 'lucide-react';

import CardLink from '../components/CardLink'; 

export default function Home() {
  const linksDaGrid = [
    { id: 1, icone: HomeIcon, titulo: "Início", link: "/" },
    { id: 2, icone: Info, titulo: "Sobre o Sítio", link: "/sobre" },
    { id: 3, icone: Trees, titulo: "Nossa Fauna/Flora", link: "/natureza" },
    { id: 4, icone: Image, titulo: "Galeria de Fotos", link: "/galeria" },
    { id: 5, icone: ShoppingBag, titulo: "Produtos", link: "/produtos" },
    { id: 6, icone: Calendar, titulo: "Agendar Visita", link: "/agendamento" },
    { id: 7, icone: Map, titulo: "Como Chegar", link: "/localizacao" },
    { id: 8, icone: Users, titulo: "Quem Somos", link: "/equipe" },
    { id: 9, icone: Camera, titulo: "Eventos", link: "/eventos" },
    { id: 10, icone: MessageSquare, titulo: "Depoimentos", link: "/depoimentos" },
    { id: 11, icone: HelpCircle, titulo: "Dúvidas Frequentes", link: "/faq" },
    { id: 12, icone: Phone, titulo: "Fale Conosco", link: "/contato" },
  ];

  return (
    <div className="bg-sitio-100 min-h-screen py-12 px-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-sitio-texto mb-2">
        Sítio Bem-Viver
      </h1>
      <p className="text-slate-600 mb-10 text-center max-w-md">
        Selecione uma das opções abaixo para navegar pelo nosso espaço.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {linksDaGrid.map((item) => (
          <CardLink 
            key={item.id}
            Icone={item.icone} 
            titulo={item.titulo} 
            link={item.link} 
          />
        ))}
      </div>
    </div>
  );
}