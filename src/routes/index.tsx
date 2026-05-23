import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CATEGORIES, products, type Category, type Tag } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import heroCar from "@/assets/hero-car.jpg";
import { Flame, Star, TrendingUp, ChevronRight, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VITRINE CARVA — Gadgets Automotivos com os Melhores Preços" },
      { name: "description", content: "Os melhores gadgets e acessórios automotivos da internet. Segurança, tecnologia, tuning, organização e limpeza para o seu carro." },
      { property: "og:title", content: "VITRINE CARVA — Gadgets Automotivos" },
      { property: "og:description", content: "Vitrine de gadgets automotivos com preços imbatíveis." },
    ],
  }),
  component: Index,
});

type Section = "all" | "mais-vendidos" | "promocao" | "recomendados";

function Index() {
  const [section, setSection] = useState<Section>("all");
  const [category, setCategory] = useState<Category | "all">("all");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSection = section === "all" || (p.tags ?? []).includes(section as Tag);
      const matchCategory = category === "all" || p.category === category;
      return matchSection && matchCategory;
    });
  }, [section, category]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#top" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-[image:var(--gradient-red)] shadow-[var(--shadow-red)]">
              <Zap className="h-5 w-5 text-primary-foreground" fill="currentColor" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">
              VITRINE <span className="text-primary">CARVA</span>
            </span>
          </a>
          <a
            href="#produtos"
            className="hidden rounded-md bg-[image:var(--gradient-red)] px-4 py-2 text-sm font-bold uppercase text-primary-foreground transition-all hover:shadow-[var(--shadow-red)] sm:inline-flex"
          >
            Ver Ofertas
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <img
          src={heroCar}
          alt="Carro esportivo preto com neon vermelho"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 md:py-40 lg:py-52">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Flame className="h-3.5 w-3.5" /> Novas ofertas todos os dias
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold uppercase leading-none tracking-tight md:text-7xl lg:text-8xl">
              VITRINE <span className="bg-[image:var(--gradient-red)] bg-clip-text text-transparent">CARVA</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground md:text-xl">
              Gadgets automotivos com os melhores preços da internet.
              Segurança, tecnologia e estilo para o seu carro.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#produtos"
                className="inline-flex items-center gap-2 rounded-md bg-[image:var(--gradient-red)] px-7 py-3.5 text-base font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-red)] transition-all hover:scale-105"
              >
                Ver Ofertas <ChevronRight className="h-5 w-5" />
              </a>
              <a
                href="#categorias"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-7 py-3.5 text-base font-bold uppercase tracking-wider text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
              >
                Categorias
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÕES ESPECIAIS */}
      <section id="produtos" className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Destaques</span>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase md:text-5xl">
            Encontre o produto certo
          </h2>
        </div>

        {/* TABS DE SEÇÃO */}
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          <SectionTab active={section === "all"} onClick={() => setSection("all")} icon={<Zap className="h-4 w-4" />}>
            Tudo
          </SectionTab>
          <SectionTab active={section === "mais-vendidos"} onClick={() => setSection("mais-vendidos")} icon={<TrendingUp className="h-4 w-4" />}>
            Mais Vendidos
          </SectionTab>
          <SectionTab active={section === "promocao"} onClick={() => setSection("promocao")} icon={<Flame className="h-4 w-4" />}>
            Em Promoção
          </SectionTab>
          <SectionTab active={section === "recomendados"} onClick={() => setSection("recomendados")} icon={<Star className="h-4 w-4" />}>
            Recomendados
          </SectionTab>
        </div>

        {/* CATEGORIAS */}
        <div id="categorias" className="mb-10 flex flex-wrap justify-center gap-2">
          <CategoryPill active={category === "all"} onClick={() => setCategory("all")} variant="red">
            Todas categorias
          </CategoryPill>
          {CATEGORIES.map((c) => (
            <CategoryPill
              key={c.id}
              active={category === c.id}
              onClick={() => setCategory(c.id)}
              variant={c.color}
            >
              {c.label}
            </CategoryPill>
          ))}
        </div>

        {/* GRID */}
        {filtered.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">
            Nenhum produto encontrado nesta combinação de filtros.
          </p>
        ) : (
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 lg:grid-cols-4 xl:grid-cols-5">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card mt-10">
        <div className="mx-auto max-w-7xl px-4 py-10 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[image:var(--gradient-red)]">
              <Zap className="h-4 w-4 text-primary-foreground" fill="currentColor" />
            </div>
            <span className="font-display text-lg font-bold">
              VITRINE <span className="text-primary">CARVA</span>
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Os melhores gadgets automotivos da internet · Participamos de programas de afiliados
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vitrine Carva. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionTab({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all ${
        active
          ? "bg-[image:var(--gradient-red)] text-primary-foreground shadow-[var(--shadow-red)]"
          : "border border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
      }`}
    >
      {icon}
      {children}
    </button>
  );
}

function CategoryPill({
  active,
  onClick,
  variant,
  children,
}: {
  active: boolean;
  onClick: () => void;
  variant: "red" | "dark";
  children: React.ReactNode;
}) {
  const dot = variant === "red" ? "bg-primary" : "bg-foreground/70";
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
        active
          ? "border border-primary bg-primary/15 text-foreground"
          : "border border-border bg-secondary text-muted-foreground hover:border-primary/60 hover:text-foreground"
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${dot}`} />
      {children}
    </button>
  );
}
