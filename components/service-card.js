import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Calendar,
  RefreshCw,
  Filter,
  TrendingUp,
  BarChart,
  PhoneIncoming,
  PhoneOutgoing,
  MessageSquare,
  Mail,
  Users,
  Clock,
  Briefcase,
  ShoppingCart,
  Target,
  Globe,
  Shield,
  BarChart2,
} from "lucide-react"

export default function ServiceCard({ title, description, icon }) {
  const getIcon = () => {
    const iconProps = { className: "h-6 w-6" }

    switch (icon) {
      case "Phone":
        return <Phone {...iconProps} />
      case "Calendar":
        return <Calendar {...iconProps} />
      case "RefreshCw":
        return <RefreshCw {...iconProps} />
      case "Filter":
        return <Filter {...iconProps} />
      case "TrendingUp":
        return <TrendingUp {...iconProps} />
      case "BarChart":
        return <BarChart {...iconProps} />
      case "PhoneIncoming":
        return <PhoneIncoming {...iconProps} />
      case "PhoneOutgoing":
        return <PhoneOutgoing {...iconProps} />
      case "MessageSquare":
        return <MessageSquare {...iconProps} />
      case "Mail":
        return <Mail {...iconProps} />
      case "Users":
        return <Users {...iconProps} />
      case "Clock":
        return <Clock {...iconProps} />
      case "Briefcase":
        return <Briefcase {...iconProps} />
      case "ShoppingCart":
        return <ShoppingCart {...iconProps} />
      case "Target":
        return <Target {...iconProps} />
      case "Globe":
        return <Globe {...iconProps} />
      case "Shield":
        return <Shield {...iconProps} />
      case "BarChart2":
        return <BarChart2 {...iconProps} />
      default:
        return <Phone {...iconProps} />
    }
  }

  return (
    <Card className="group overflow-hidden border-none bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <CardContent className="p-6">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
          {getIcon()}
        </div>
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
