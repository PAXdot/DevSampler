export interface Product {
  id: number
  title: string
  description: string
  price: number
  originalPrice: number
  rating: number
  reviews: number
  image: string
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Wireless Headphones',
    description: 'Premium noise-cancelling experience',
    price: 349.0,
    originalPrice: 399.0,
    rating: 5,
    reviews: 121,
    image: 'https://cdn.21st.dev/assets/localized/64badf7aabda0b9630b87020ffb6095cb858ccbcf66b355c2aa08b1063954d3b.svg',
  },
  {
    id: 2,
    title: 'Smart Watch',
    description: 'Health and fitness companion',
    price: 399.0,
    originalPrice: 449.0,
    rating: 5,
    reviews: 156,
    image: 'https://cdn.21st.dev/assets/localized/64badf7aabda0b9630b87020ffb6095cb858ccbcf66b355c2aa08b1063954d3b.svg',
  },
  {
    id: 3,
    title: 'Laptop Pro',
    description: 'Power and performance redefined',
    price: 1299.0,
    originalPrice: 1499.0,
    rating: 5,
    reviews: 89,
    image: 'https://cdn.21st.dev/assets/localized/64badf7aabda0b9630b87020ffb6095cb858ccbcf66b355c2aa08b1063954d3b.svg',
  },
  {
    id: 4,
    title: 'RGB Keyboard',
    description: 'Mechanical RGB backlit keyboard',
    price: 159.0,
    originalPrice: 199.0,
    rating: 5,
    reviews: 92,
    image: 'https://cdn.21st.dev/assets/localized/64badf7aabda0b9630b87020ffb6095cb858ccbcf66b355c2aa08b1063954d3b.svg',
  },
  {
    id: 5,
    title: 'Gaming Monitor',
    description: '144Hz refresh rate display',
    price: 699.0,
    originalPrice: 799.0,
    rating: 5,
    reviews: 78,
    image: 'https://cdn.21st.dev/assets/localized/64badf7aabda0b9630b87020ffb6095cb858ccbcf66b355c2aa08b1063954d3b.svg',
  },
  {
    id: 6,
    title: 'Smartphone Pro',
    description: 'Pro camera system, ProMotion',
    price: 999.0,
    originalPrice: 1099.0,
    rating: 5,
    reviews: 245,
    image: 'https://cdn.21st.dev/assets/localized/64badf7aabda0b9630b87020ffb6095cb858ccbcf66b355c2aa08b1063954d3b.svg',
  },
]