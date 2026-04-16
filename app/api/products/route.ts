const products = [
  {
    id: 1,
    title: "Pearl Necklace",
    price: 99.99,
    image: "https://example.com/pearl-necklace.jpg",
  },
  {
    id: 2,
    title: "Pearl Earrings",
    price: 49.99,
    image: "https://example.com/pearl-earrings.jpg",
  },
  {
    id: 3,
    title: "Pearl Bracelet",
    price: 79.99,
    image: "https://example.com/pearl-bracelet.jpg",
  },
]

export async function GET() {
  return Response.json(products);
}