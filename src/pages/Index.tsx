import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"
import Icon from "@/components/ui/icon"

const members = [
  {
    rank: 1,
    name: "Бугор",
    score: 15840,
    kills: 1247,
    wins: 342,
    avatar: "https://cdn.poehali.dev/projects/054dbe53-9281-4f3d-85a6-2662da279a3b/bucket/c99ce4a7-5ea4-473d-a12f-3bb70f304a62.png",
    role: "Лидер",
    style: "Тактик",
    desc: "Хладнокровный командир. Никогда не теряет голову в бою — каждый шаг просчитан заранее. Клан держится на его авторитете и железной дисциплине.",
    stats: [
      { label: "Стиль", value: "Тактик" },
      { label: "Оружие", value: "Снайпер" },
      { label: "Девиз", value: "Без паники — только план" },
    ],
  },
  {
    rank: 2,
    name: "Ваня",
    score: 13200,
    kills: 1089,
    wins: 287,
    avatar: "https://cdn.poehali.dev/projects/054dbe53-9281-4f3d-85a6-2662da279a3b/bucket/699287b2-5b82-4c16-a673-b44b9be0030b.png",
    role: null,
    style: "Берсерк",
    desc: "Врывается первым, уходит последним. Маска скрывает лицо, но не ярость. Противники слышат его шаги — и уже поздно что-то делать.",
    stats: [
      { label: "Стиль", value: "Берсерк" },
      { label: "Оружие", value: "Дробовик" },
      { label: "Девиз", value: "Страх — это оружие" },
    ],
  },
  {
    rank: 3,
    name: "Демьян",
    score: 11750,
    kills: 934,
    wins: 251,
    avatar: "https://cdn.poehali.dev/projects/054dbe53-9281-4f3d-85a6-2662da279a3b/bucket/a86613af-4665-4a54-8a85-9a7e3ff02d6f.png",
    role: null,
    style: "Призрак",
    desc: "Тихий, быстрый, незаметный. Пока враг смотрит на Ваню — Демьян уже зашёл с фланга. Специалист по внезапным атакам и чистым выходам.",
    stats: [
      { label: "Стиль", value: "Призрак" },
      { label: "Оружие", value: "Пистолет-пулемёт" },
      { label: "Девиз", value: "Не виден — не убит" },
    ],
  },
]

const rankColors: Record<number, string> = {
  1: "text-yellow-400",
  2: "text-gray-300",
  3: "text-amber-500",
}

const rankBadge: Record<number, string> = {
  1: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
  2: "bg-gray-300/10 text-gray-300 border-gray-300/20",
  3: "bg-amber-600/10 text-amber-500 border-amber-600/20",
}

const rankLabel: Record<number, string> = {
  1: "LEGEND",
  2: "ELITE",
  3: "PRO",
}

const Index = () => {
  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[600px]">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
          <RotatingTextAccent />
        </main>

        {/* Карточки участников */}
        <section className="px-4 md:px-0 mt-8 mb-4">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Users" className="text-primary w-5 h-5" />
            <h2 className="text-foreground font-bold text-xl tracking-widest" style={{ fontFamily: "var(--font-montserrat)" }}>
              СОСТАВ КЛАНА
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {members.map((m) => (
              <div
                key={m.rank}
                className="relative rounded-2xl border border-border bg-card overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
                  backgroundSize: "30px 30px",
                }}
              >
                {/* Угловые плюсы */}
                <div className="absolute top-3 left-3 text-foreground opacity-30 text-2xl font-extralight leading-none">+</div>
                <div className="absolute top-3 right-3 text-foreground opacity-30 text-2xl font-extralight leading-none">+</div>

                {/* Ранг */}
                <div className="absolute top-4 right-8">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-mono font-bold border ${rankBadge[m.rank]}`}>
                    {rankLabel[m.rank]}
                  </span>
                </div>

                {/* Фото */}
                <div className="flex justify-center pt-10 pb-2">
                  <div className="w-40 h-40 rounded-2xl overflow-hidden border border-border bg-secondary">
                    <img
                      src={m.avatar}
                      alt={m.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Имя и роль */}
                <div className="px-6 pb-2 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className={`font-mono font-bold text-lg ${rankColors[m.rank]}`}>#{m.rank}</span>
                    <h3 className="text-foreground font-bold text-xl" style={{ fontFamily: "var(--font-montserrat)" }}>
                      {m.name}
                    </h3>
                  </div>
                  {m.role && (
                    <span className="text-primary font-mono text-xs tracking-widest uppercase">{m.role}</span>
                  )}
                </div>

                {/* Описание */}
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground font-mono text-xs leading-relaxed text-center">
                    {m.desc}
                  </p>
                </div>

                {/* Характеристики */}
                <div className="mx-6 mb-6 flex flex-col gap-1.5 border-t border-border pt-4">
                  {m.stats.map((s) => (
                    <div key={s.label} className="flex items-center justify-between gap-2">
                      <span className="text-accent font-mono text-xs">{s.label}</span>
                      <span className="text-foreground font-mono text-xs">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leaderboard */}
        <section
          id="leaderboard"
          className="relative rounded-4xl py-10 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border pb-20"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-50 text-5xl font-extralight font-sans leading-[0rem]">+</div>
          <div className="absolute top-8 right-8 text-foreground opacity-50 text-5xl font-sans leading-[0] font-extralight">+</div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-50 text-5xl font-sans font-extralight">+</div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-50 text-5xl font-sans font-extralight">+</div>

          <div className="px-6 md:px-16">
            <div className="flex items-center gap-3 mb-8">
              <Icon name="Trophy" className="text-primary w-6 h-6" />
              <h2 className="text-foreground font-bold text-2xl tracking-widest" style={{ fontFamily: "var(--font-montserrat)" }}>
                LEADERBOARD
              </h2>
              <span className="text-muted-foreground font-mono text-sm ml-2">— Сезон 1</span>
            </div>

            <div className="hidden md:grid grid-cols-[48px_1fr_140px_120px_120px_100px] gap-4 px-4 mb-3 text-muted-foreground font-mono text-xs tracking-widest uppercase">
              <span>#</span>
              <span>Игрок</span>
              <span className="text-right">Очки</span>
              <span className="text-right">Убийств</span>
              <span className="text-right">Побед</span>
              <span className="text-right">Ранг</span>
            </div>

            <div className="flex flex-col gap-2">
              {members.map((m) => (
                <div
                  key={m.rank}
                  className={`
                    grid grid-cols-[40px_1fr_auto] md:grid-cols-[48px_1fr_140px_120px_120px_100px]
                    gap-4 items-center px-4 py-4 rounded-xl border border-border
                    transition-all duration-200 hover:border-primary/40 hover:bg-primary/5
                    bg-primary/5 border-primary/20
                  `}
                >
                  <span className={`font-bold text-lg font-mono ${rankColors[m.rank]}`}>
                    {m.rank}
                  </span>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 overflow-hidden border border-border">
                      <img src={m.avatar} alt={m.name} className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-foreground font-mono font-semibold text-sm md:text-base">{m.name}</span>
                      {m.role && <span className="text-primary font-mono text-xs">{m.role}</span>}
                    </div>
                  </div>

                  <div className="text-right md:block">
                    <span className="text-primary font-bold font-mono text-sm md:text-base">
                      {m.score.toLocaleString("ru")}
                    </span>
                    <span className="md:hidden text-muted-foreground font-mono text-xs ml-1">pts</span>
                  </div>

                  <div className="hidden md:block text-right font-mono text-sm text-foreground/80">
                    {m.kills.toLocaleString("ru")}
                  </div>

                  <div className="hidden md:block text-right font-mono text-sm text-foreground/80">
                    {m.wins.toLocaleString("ru")}
                  </div>

                  <div className="hidden md:flex justify-end">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${rankBadge[m.rank]}`}>
                      {rankLabel[m.rank]}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs">
                <Icon name="Users" className="w-4 h-4 text-primary" />
                <span>{members.length} участника</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs">
                <Icon name="RefreshCw" className="w-4 h-4 text-primary" />
                <span>Обновляется вручную</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs">
                <Icon name="Shield" className="w-4 h-4 text-primary" />
                <span>Клан OCN</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Index
