// 📝 EDITE ESTE ARQUIVO PARA GERENCIAR PRODUTOS
// Adicione, remova ou altere imagem, link, descrição e categorias.

export type Category =
  | "seguranca"
  | "tecnologia"
  | "estetica"
  | "organizacao"
  | "limpeza";

export type Tag = "mais-vendidos" | "promocao" | "recomendados";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
  category: Category;
  tags?: Tag[];
  price?: string;
  oldPrice?: string;
}

export const CATEGORIES: { id: Category; label: string; color: "red" | "dark" }[] = [
  { id: "seguranca", label: "Segurança Automotiva", color: "red" },
  { id: "tecnologia", label: "Tecnologia Automotiva", color: "dark" },
  { id: "estetica", label: "Estética / Tuning", color: "red" },
  { id: "organizacao", label: "Organização Interna", color: "dark" },
  { id: "limpeza", label: "Limpeza e Cuidados", color: "red" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Câmera Veicular Full HD 1080p",
    description: "Dash cam com visão noturna, sensor de impacto e gravação contínua. Proteção total ao volante.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    link: "https://www.amazon.com.br",
    category: "seguranca",
    tags: ["mais-vendidos", "recomendados"],
    price: "R$ 189,90",
    oldPrice: "R$ 299,90",
  },
  {
    id: "2",
    name: "Alarme Automotivo com Controle",
    description: "Sistema antifurto com sirene 120dB e dois controles. Instalação simples e segurança máxima.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    link: "https://www.amazon.com.br",
    category: "seguranca",
    tags: ["promocao"],
    price: "R$ 149,00",
    oldPrice: "R$ 219,00",
  },
  {
    id: "3",
    name: "Carregador Veicular Turbo USB-C",
    description: "Carregamento rápido 60W com dupla saída. Compatível com iPhone, Android e tablets.",
    image: "https://images.unsplash.com/photo-1601999921765-2fbb14a9c2b8?w=800&q=80",
    link: "https://www.amazon.com.br",
    category: "tecnologia",
    tags: ["mais-vendidos"],
    price: "R$ 79,90",
  },
  {
    id: "4",
    name: "Suporte Veicular Magnético",
    description: "Fixação ultra forte para celular. Encaixe instantâneo e visualização perfeita do GPS.",
    image: "https://images.unsplash.com/photo-1607854680025-781ba0089cf9?w=800&q=80",
    link: "https://www.amazon.com.br",
    category: "tecnologia",
    tags: ["recomendados", "promocao"],
    price: "R$ 49,90",
    oldPrice: "R$ 89,90",
  },
  {
    id: "5",
    name: "Fita LED RGB Interna para Carro",
    description: "Iluminação interna com app e controle. Transforme seu painel em uma máquina de tuning.",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
    link: "https://www.amazon.com.br",
    category: "estetica",
    tags: ["mais-vendidos", "promocao"],
    price: "R$ 59,90",
    oldPrice: "R$ 119,90",
  },
  {
    id: "6",
    name: "Película de Proteção para Faróis",
    description: "Filme antiarranhão e antiamarelamento. Mantém os faróis cristalinos por anos.",
    image: "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?w=800&q=80",
    link: "https://www.amazon.com.br",
    category: "estetica",
    tags: ["recomendados"],
    price: "R$ 39,90",
  },
  {
    id: "7",
    name: "Organizador de Porta-Malas Dobrável",
    description: "Divisórias reforçadas para manter tudo no lugar. Compacto e resistente até 25kg.",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    link: "https://www.amazon.com.br",
    category: "organizacao",
    tags: ["promocao"],
    price: "R$ 69,90",
    oldPrice: "R$ 99,90",
  },
  {
    id: "8",
    name: "Organizador de Banco Multiuso",
    description: "Bolsos para celular, garrafas e documentos. Mantenha o interior do carro impecável.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    link: "https://www.amazon.com.br",
    category: "organizacao",
    tags: ["mais-vendidos"],
    price: "R$ 45,00",
  },
  {
    id: "9",
    name: "Aspirador Veicular Portátil 12V",
    description: "Sucção potente direto do acendedor. Limpa estofados, painel e cantos difíceis.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80",
    link: "https://www.amazon.com.br",
    category: "limpeza",
    tags: ["recomendados", "mais-vendidos"],
    price: "R$ 129,90",
    oldPrice: "R$ 199,90",
  },
  {
    id: "10",
    name: "Kit Cera Cristalizadora Premium",
    description: "Brilho espelhado de concessionária. Proteção contra UV, chuva e arranhões leves.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80",
    link: "https://www.amazon.com.br",
    category: "limpeza",
    tags: ["promocao", "recomendados"],
    price: "R$ 89,90",
    oldPrice: "R$ 149,90",
  },
  {
    id: "11",
    name: "GPS Veicular Rastreador Tempo Real",
    description: "Localização precisa via app 24h. Bloqueio remoto e histórico de trajetos.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    link: "https://www.amazon.com.br",
    category: "seguranca",
    tags: ["recomendados"],
    price: "R$ 249,00",
  },
  {
    id: "12",
    name: "Adaptador Bluetooth Automotivo",
    description: "Conecte seu som antigo ao celular. Música, GPS e ligações em alta qualidade.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    link: "https://www.amazon.com.br",
    category: "tecnologia",
    tags: ["mais-vendidos", "promocao"],
    price: "R$ 35,90",
    oldPrice: "R$ 69,90",
  },
];
