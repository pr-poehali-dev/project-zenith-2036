import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Ruler",
    title: "Индивидуальные размеры",
    description:
      "Шьём постельное бельё точно по вашим меркам. Нестандартная кровать, необычный матрас — для нас нет ограничений. Каждый комплект идеально подойдёт именно вам.",
  },
  {
    icon: "Leaf",
    title: "100% хлопок",
    description:
      "Используем только натуральные ткани — бязь, поплин, перкаль и сатин. Никакой синтетики. Приятные к телу, дышащие и гипоаллергенные материалы для здорового сна.",
  },
  {
    icon: "Scissors",
    title: "Качественный пошив",
    description:
      "Аккуратные швы, прочные нити и внимание к каждой детали. Наше бельё выдерживает сотни стирок и сохраняет первоначальный вид надолго.",
  },
  {
    icon: "Package",
    title: "Любая комплектация",
    description:
      "Простыни на резинке, пододеяльники, наволочки любых размеров. Соберите комплект именно так, как нужно вам — без навязанных вариантов.",
  },
  {
    icon: "Truck",
    title: "Доставка по России",
    description:
      "Отправляем заказы через популярные службы доставки по всей России. Быстро и надёжно доставим ваш заказ в любой уголок страны.",
  },
  {
    icon: "ShieldCheck",
    title: "Проверенные поставщики",
    description:
      "Работаем только с проверенными производителями тканей. За 14 лет работы мы отобрали лучших поставщиков, которым доверяем качество каждого метра.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наши преимущества
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Почему выбирают <span className="text-primary">ПОСТЕЛЬСАР</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Шьём постельное бельё на заказ с 2011 года. Индивидуальный подход к каждому клиенту и только натуральные ткани.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} size={24} />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
