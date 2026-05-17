import React from 'react';

export default function CardLink({ Icone, titulo, link }) {
  return (
    <a 
      href={link} 
      className="bg-sitio-300 hover:bg-sitio-500 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 border border-sitio-400 hover:border-sitio-500 transition-all duration-300 shadow-sm group transform hover:-translate-y-1"
    >
      {}
      <div className="p-4 bg-sitio-200 text-sitio-texto rounded-xl group-hover:scale-110 transition-transform">
        <Icone size={32} />
      </div>
      
      {}
      <span className="font-semibold text-sitio-texto text-lg">
        {titulo}
      </span>
    </a>
  );
}