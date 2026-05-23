import type { Product } from "@/data/products";
import { ExternalLink } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-red)]">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.oldPrice && (
          <span className="absolute left-2 top-2 rounded bg-primary px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
            Oferta
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-3">
        <h3 className="line-clamp-2 text-sm font-bold leading-tight text-foreground">{product.name}</h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-xs text-muted-foreground">{product.description}</p>
        {product.price && (
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-base font-bold text-primary">{product.price}</span>
            {product.oldPrice && (
              <span className="text-xs text-muted-foreground line-through">{product.oldPrice}</span>
            )}
          </div>
        )}
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-2.5 inline-flex items-center justify-center gap-1.5 rounded-md bg-[image:var(--gradient-red)] px-3 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-all hover:brightness-110 hover:shadow-[var(--shadow-red)]"
        >
          Ver Oferta <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
