type Rating = {
  rate: any
  count: number
}

export type Product = {
  category: string
  description: string
  id: number
  price: number
  image: string
  rating: Rating
  title: string
}