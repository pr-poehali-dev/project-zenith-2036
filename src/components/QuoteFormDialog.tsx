import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface QuoteFormDialogProps {
  packageName?: string
  variant?: "default" | "outline"
  className?: string
  children?: React.ReactNode
}

export function QuoteFormDialog({ packageName, variant = "default", className, children }: QuoteFormDialogProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fabric: "",
    package: packageName || "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Quote form submitted:", formData)
    setOpen(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      fabric: "",
      package: packageName || "",
      message: "",
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className={className}>
          {children || "Рассчитать стоимость"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Рассчитать стоимость</DialogTitle>
          <DialogDescription>
            Заполните форму — мы рассчитаем стоимость и свяжемся с вами для уточнения деталей.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Имя *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ваше имя"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+7 900 123-45-67"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.ru"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fabric">Ткань</Label>
            <Select
              value={formData.fabric}
              onValueChange={(value) => setFormData({ ...formData, fabric: value })}
            >
              <SelectTrigger id="fabric">
                <SelectValue placeholder="Выберите ткань" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Бязь">Бязь</SelectItem>
                <SelectItem value="Поплин">Поплин</SelectItem>
                <SelectItem value="Перкаль">Перкаль</SelectItem>
                <SelectItem value="Сатин">Сатин</SelectItem>
                <SelectItem value="Не определился">Ещё не определился</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="package">Комплект *</Label>
            <Select
              value={formData.package}
              onValueChange={(value) => setFormData({ ...formData, package: value })}
            >
              <SelectTrigger id="package">
                <SelectValue placeholder="Что нужно сшить?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Простыня на резинке">Простыня на резинке</SelectItem>
                <SelectItem value="Полный комплект">Полный комплект</SelectItem>
                <SelectItem value="Индивидуальный">Индивидуальный заказ</SelectItem>
                <SelectItem value="Ещё не определился">Ещё не определился</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Размеры и пожелания *</Label>
            <Textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Укажите размеры матраса (длина × ширина × высота), количество наволочек и пододеяльников..."
              rows={4}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1">
              Отмена
            </Button>
            <Button type="submit" className="flex-1">
              Отправить заявку
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
