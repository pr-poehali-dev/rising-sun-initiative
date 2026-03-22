import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"
import { MagneticButton } from "@/components/magnetic-button"

const games = [
  {
    number: "01",
    title: "Cyberpunk 2077",
    category: "Ролевой экшен · Открытый мир",
    genre: "Экшен",
    price: "699 ₽",
    oldPrice: "1 999 ₽",
    cover: "https://cdn.poehali.dev/projects/dedab9ad-ff78-4789-9e70-320738f5c046/files/421301af-0d39-4c90-a70e-5a4cc191e4fc.jpg",
  },
  {
    number: "02",
    title: "Grand Theft Auto V",
    category: "Экшен · Открытый мир",
    genre: "Экшен",
    price: "999 ₽",
    oldPrice: null,
    cover: "https://cdn.poehali.dev/projects/dedab9ad-ff78-4789-9e70-320738f5c046/files/c08d0ea9-d7d7-4890-b6b4-f3c75e732031.jpg",
  },
  {
    number: "03",
    title: "Hollow Knight",
    category: "Инди · Метроидвания",
    genre: "Инди",
    price: "299 ₽",
    oldPrice: "499 ₽",
    cover: "https://cdn.poehali.dev/projects/dedab9ad-ff78-4789-9e70-320738f5c046/files/75b7a7bc-75c5-4573-a7b0-0ad6ebb8e4ac.jpg",
  },
  {
    number: "04",
    title: "Red Dead Redemption 2",
    category: "Приключение · Открытый мир",
    genre: "Приключения",
    price: "1 499 ₽",
    oldPrice: null,
    cover: "https://cdn.poehali.dev/projects/dedab9ad-ff78-4789-9e70-320738f5c046/files/3cc7f819-f913-4485-b2b5-84d6e3b2dcd7.jpg",
  },
  {
    number: "05",
    title: "The Witcher 3",
    category: "RPG · Фэнтези",
    genre: "RPG",
    price: "499 ₽",
    oldPrice: "1 299 ₽",
    cover: "https://cdn.poehali.dev/projects/dedab9ad-ff78-4789-9e70-320738f5c046/files/3004c828-2af8-488d-a6ea-c422b0ab91ca.jpg",
  },
  {
    number: "06",
    title: "Hades",
    category: "Рогалик · Экшен",
    genre: "Инди",
    price: "599 ₽",
    oldPrice: null,
    cover: "https://cdn.poehali.dev/projects/dedab9ad-ff78-4789-9e70-320738f5c046/files/b9ee4107-d07f-4a30-aede-1f6407dbceb2.jpg",
  },
  {
    number: "07",
    title: "God of War",
    category: "Экшен · Мифология",
    genre: "Экшен",
    price: "1 999 ₽",
    oldPrice: null,
    cover: "https://cdn.poehali.dev/projects/dedab9ad-ff78-4789-9e70-320738f5c046/files/24b478da-c677-495c-8782-fdcca7a82477.jpg",
  },
  {
    number: "08",
    title: "Stardew Valley",
    category: "Инди · Симулятор фермы",
    genre: "Инди",
    price: "249 ₽",
    oldPrice: "399 ₽",
    cover: "https://cdn.poehali.dev/projects/dedab9ad-ff78-4789-9e70-320738f5c046/files/bef1b58b-dc28-4fd8-a34d-8ec51e1dd354.jpg",
  },
  {
    number: "09",
    title: "Dark Souls III",
    category: "Souls-like · Фэнтези",
    genre: "RPG",
    price: "799 ₽",
    oldPrice: "1 599 ₽",
    cover: "https://cdn.poehali.dev/projects/dedab9ad-ff78-4789-9e70-320738f5c046/files/7982d143-3b94-4d57-9841-25cbd40d3665.jpg",
  },
  {
    number: "10",
    title: "Baldur's Gate 3",
    category: "RPG · Фэнтези",
    genre: "RPG",
    price: "2 299 ₽",
    oldPrice: null,
    cover: "https://cdn.poehali.dev/projects/dedab9ad-ff78-4789-9e70-320738f5c046/files/e8ad9b30-a142-4feb-80c5-b2645e67d95e.jpg",
  },
]

const genres = ["Все", "Экшен", "RPG", "Инди", "Приключения"]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [activeGenre, setActiveGenre] = useState("Все")

  const filtered = activeGenre === "Все" ? games : games.filter((g) => g.genre === activeGenre)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col px-6 pt-24 pb-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col h-full">
        <div
          className={`mb-4 shrink-0 transition-all duration-700 md:mb-6 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Каталог
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ {filtered.length} игр</p>
        </div>

        {/* Фильтры */}
        <div
          className={`mb-4 flex shrink-0 flex-wrap gap-2 transition-all duration-700 md:mb-6 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setActiveGenre(genre)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-all duration-300 ${
                activeGenre === genre
                  ? "border-foreground/60 bg-foreground/15 text-foreground backdrop-blur-md"
                  : "border-foreground/15 text-foreground/50 hover:border-foreground/30 hover:text-foreground/80"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        <div
          className="overflow-y-auto flex-1 pr-2"
          style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.15) transparent" }}
        >
          <div className="space-y-1">
            {filtered.map((game, i) => (
              <GameCard key={game.number} game={game} index={i} isVisible={isVisible} />
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
  game: { number: string; title: string; category: string; genre: string; price: string; oldPrice: string | null; cover: string }
  index: number
  isVisible: boolean
}) {
  const [bought, setBought] = useState(false)

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-3 transition-all duration-500 hover:border-foreground/25 md:py-4 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
      }`}
      style={{ transitionDelay: `${Math.min(index * 60, 400)}ms` }}
    >
      <div className="flex items-center gap-3 md:gap-5">
        <span className="w-6 shrink-0 font-mono text-xs text-foreground/30 group-hover:text-foreground/50">
          {game.number}
        </span>
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg md:h-14 md:w-14">
          <img
            src={game.cover}
            alt={game.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div>
          <h3 className="font-sans text-base font-light text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-xl">
            {game.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50">{game.category}</p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3 md:gap-6">
        <div className="text-right">
          <div className="font-sans text-base font-light text-foreground md:text-lg">{game.price}</div>
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
