import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"
import Icon from "@/components/ui/icon"

const members = [
  { rank: 1, name: "ShadowKnight", score: 15840, kills: 1247, wins: 342, badge: "👑" },
  { rank: 2, name: "NightFury", score: 13200, kills: 1089, wins: 287, badge: "🥈" },
  { rank: 3, name: "IronWolf", score: 11750, kills: 934, wins: 251, badge: "🥉" },
  { rank: 4, name: "PhantomX", score: 9400, kills: 812, wins: 198, badge: null },
  { rank: 5, name: "StormBreaker", score: 8600, kills: 743, wins: 176, badge: null },
  { rank: 6, name: "CryptoViper", score: 7300, kills: 654, wins: 155, badge: null },
  { rank: 7, name: "BlackMamba", score: 6100, kills: 589, wins: 132, badge: null },
  { rank: 8, name: "QuantumRift", score: 5200, kills: 478, wins: 108, badge: null },
]

const rankColors: Record<number, string> = {
  1: "text-yellow-400",
  2: "text-gray-300",
  3: "text-amber-600",
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
                    ${m.rank <= 3 ? "bg-primary/5 border-primary/20" : "bg-background/40"}
                  `}
                >
                  <span className={`font-bold text-lg font-mono ${rankColors[m.rank] ?? "text-muted-foreground"}`}>
                    {m.rank}
                  </span>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-lg flex-shrink-0">
                      {m.badge ?? <Icon name="User" className="w-4 h-4 text-muted-foreground" />}
                    </div>
                    <span className="text-foreground font-mono font-semibold text-sm md:text-base">{m.name}</span>
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
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-mono font-bold
                      ${m.rank === 1 ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20" :
                        m.rank === 2 ? "bg-gray-300/10 text-gray-300 border border-gray-300/20" :
                        m.rank === 3 ? "bg-amber-600/10 text-amber-500 border border-amber-600/20" :
                        "bg-secondary text-muted-foreground border border-border"}
                    `}>
                      {m.rank === 1 ? "LEGEND" : m.rank === 2 ? "ELITE" : m.rank === 3 ? "PRO" : "MEMBER"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs">
                <Icon name="Users" className="w-4 h-4 text-primary" />
                <span>{members.length} участников</span>
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
