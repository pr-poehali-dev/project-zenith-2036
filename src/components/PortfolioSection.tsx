import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    title: "Комплект из бязи",
    category: "Бязь · 100% хлопок",
    image: "/placeholder.svg",
    description:
      "Прочная и практичная бязь — идеальный выбор для повседневного использования. Выдерживает частые стирки и сохраняет яркость расцветок.",
    tags: ["Простыня на резинке", "Пододеяльник", "Наволочки"],
  },
  {
    title: "Комплект из поплина",
    category: "Поплин · 100% хлопок",
    image: "/placeholder.svg",
    description:
      "Мягкая и гладкая ткань с лёгким блеском. Поплин приятен на ощупь и подходит для тех, кто ценит комфорт и долговечность.",
    tags: ["Простыня на резинке", "Пододеяльник", "Наволочки"],
  },
  {
    title: "Комплект из перкаля",
    category: "Перкаль · 100% хлопок",
    image: "/placeholder.svg",
    description:
      "Плотная ткань с бархатистой поверхностью. Перкаль не даёт усадки и долго сохраняет первоначальный вид после многочисленных стирок.",
    tags: ["Простыня на резинке", "Пододеяльник", "Наволочки"],
  },
  {
    title: "Комплект из сатина",
    category: "Сатин · 100% хлопок",
    image: "/placeholder.svg",
    description:
      "Премиальная ткань с шелковистым блеском. Сатин — выбор для тех, кто хочет роскошный сон и элегантный вид спальни.",
    tags: ["Простыня на резинке", "Пододеяльник", "Наволочки"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши ткани</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Работаем только с натуральным хлопком от проверенных поставщиков. Выберите ткань, которая подходит именно вам.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <span className="text-6xl opacity-60">🛏️</span>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{product.category}</p>
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
