"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { SelectControl } from "@/components/select-control"
import { SelectOption } from "@/types"

type Product = {
  id: number
  name: string
  price: number
  category: "electronics" | "clothing"
}

const products: Product[] = [
  { id: 1, name: "Smartphone", price: 699, category: "electronics" },
  { id: 2, name: "Laptop", price: 1299, category: "electronics" },
  { id: 3, name: "T-Shirt", price: 29, category: "clothing" },
  { id: 4, name: "Jacket", price: 99, category: "clothing" },
]

const categoryOptions: SelectOption[] = [
  { value: "all", label: "All Products" },
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
]

const sortOptions: SelectOption[] = [
  { value: "default", label: "Default" },
  { value: "low-high", label: "Price: Low to High" },
  { value: "high-low", label: "Price: High to Low" },
]

export default function HomePage() {
  const [filterCategory, setFilterCategory] = useState("all")
  const [sortBy, setSortBy] = useState("default")

  const filteredProducts = products.filter((product) => {
    if (filterCategory === "all") return true
    return product.category === filterCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "low-high") return a.price - b.price
    if (sortBy === "high-low") return b.price - a.price
    return 0
  })

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Products</h1>

        <div className="flex gap-6 flex-wrap">
          <SelectControl
            selectLabel="Category"
            value={filterCategory}
            onValueChange={setFilterCategory}
            options={categoryOptions}
          />

          <SelectControl
            selectLabel="Sort By"
            value={sortBy}
            onValueChange={setSortBy}
            options={sortOptions}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
