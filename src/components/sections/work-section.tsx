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
    direction: "left",
  },
  {
    number: "02",
    title: "Elden Ring",
    category: "Souls-like · Фэнтези",
    price: "1 299 ₽",
    oldPrice: null,
    direction: "right",
  },
  {
    number: "03",
    title: "Hollow Knight",
    category: "Инди · Метроидвания",
    price: "299 ₽",
    oldPrice: "499 ₽",
    direction: "left",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Каталог
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Популярные игры</p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {games.map((game, i) => (
            <GameCard key={i} game={game} index={i} isVisible={isVisible} />
          ))}
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
  game: { number: string; title: string; category: string; price: string; oldPrice: string | null; direction: string }
  index: number
  isVisible: boolean
}) {
  const [bought, setBought] = useState(false)

  const getRevealClass = () => {
    if (!isVisible) {
      return game.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-5 transition-all duration-700 hover:border-foreground/20 md:py-7 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="flex items-center gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {game.number}
        </span>
        <div>
          <h3 className="mb-1 font-sans text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
            {game.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50 md:text-sm">{game.category}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        <div className="text-right">
          <div className="font-sans text-lg font-light text-foreground md:text-2xl">{game.price}</div>
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
