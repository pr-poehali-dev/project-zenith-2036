import Icon from "@/components/ui/icon"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1.5">
        <Icon name="BedDouble" size={24} className="text-primary" />
        <span className="text-xl font-semibold tracking-tight">ПОСТЕЛЬСАР</span>
      </div>
    </div>
  )
}
