import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"
import { MagneticButton } from "@/components/magnetic-button"

const games = [
  {
    number: "01",
    title: "Cyberpunk 2077",
    category: "Ролевой экшен · Открытый мир",
    price: "699 ₽",
    oldPrice: "1 999 ₽",
  },
  {
    number: "02",
    title: "Grand Theft Auto V",
    category: "Экшен · Открытый мир",
    price: "999 ₽",
    oldPrice: null,
  },
  {
    number: "03",
    title: "Hollow Knight",
    category: "Инди · Метроидвания",
    price: "299 ₽",
    oldPrice: "499 ₽",
  },
  {
    number: "04",
    title: "Red Dead Redemption 2",
    category: "Приключение · Открытый мир",
    price: "1 499 ₽",
    oldPrice: null,
  },
  {
    number: "05",
    title: "The Witcher 3",
    category: "RPG · Фэнтези",
    price: "499 ₽",
    oldPrice: "1 299 ₽",
  },
  {
    number: "06",
    title: "Hades",
    category: "Рогалик · Экшен",
    price: "599 ₽",
    oldPrice: null,
  },
  {
    number: "07",
    title: "God of War",
    category: "Экшен · Мифология",
    price: "1 999 ₽",
    oldPrice: null,
  },
  {
    number: "08",
    title: "Stardew Valley",
    category: "Инди · Симулятор фермы",
    price: "249 ₽",
    oldPrice: "399 ₽",
  },
  {
    number: "09",
    title: "Dark Souls III",
    category: "Souls-like · Фэнтези",
    price: "799 ₽",
    oldPrice: "1 599 ₽",
  },
  {
    number: "10",
    title: "Baldur's Gate 3",
    category: "RPG · Фэнтези",
    price: "2 299 ₽",
    oldPrice: null,
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col px-6 pt-24 pb-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col h-full">
        <div
          className={`mb-6 shrink-0 transition-all duration-700 md:mb-8 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Каталог
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ {games.length} популярных игр</p>
        </div>

        <div
          className="overflow-y-auto flex-1 pr-2"
          style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.15) transparent" }}
        >
          <div className="space-y-1">
            {games.map((game, i) => (
              <GameCard key={i} game={game} index={i} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function GameCard({
  game,
  index,
  isVisible,
}: {
  game: { number: string; title: string; category: string; price: string; oldPrice: string | null }
  index: number
  isVisible: boolean
}) {
  const [bought, setBought] = useState(false)

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-4 transition-all duration-700 hover:border-foreground/25 md:py-5 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
      }`}
      style={{ transitionDelay: `${Math.min(index * 60, 400)}ms` }}
    >
      <div className="flex items-center gap-4 md:gap-6">
        <span className="w-8 shrink-0 font-mono text-xs text-foreground/30 group-hover:text-foreground/50">
          {game.number}
        </span>
        <div>
          <h3 className="font-sans text-lg font-light text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
            {game.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50">{game.category}</p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3 md:gap-6">
        <div className="text-right">
          <div className="font-sans text-base font-light text-foreground md:text-xl">{game.price}</div>
          {game.oldPrice && (
            <div className="font-mono text-xs text-foreground/40 line-through">{game.oldPrice}</div>
          )}
        </div>
        <MagneticButton
          size="sm"
          variant={bought ? "secondary" : "primary"}
          onClick={() => setBought(true)}
        >
          {bought ? "В библиотеке" : "Купить"}
        </MagneticButton>
      </div>
    </div>
  )
}