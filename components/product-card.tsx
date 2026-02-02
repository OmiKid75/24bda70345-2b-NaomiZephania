import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type ProductCardProps = {
  name: string
  price: number
  category: "electronics" | "clothing" | string
}

export function ProductCard({ name, price, category }: ProductCardProps) {
  const badgeVariant =
    category === "clothing" ? "secondary" : "default"

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xl">${price.toFixed(2)}</p>
        <Badge variant={badgeVariant}>{category}</Badge>
      </CardContent>
    </Card>
  )
}
