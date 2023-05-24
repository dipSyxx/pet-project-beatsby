export type ProductsDataProps = {
  id: number
  title: string
  subtitle: string
  hrefImg: string
  index: number
}

export const ProductsData: ProductsDataProps[] = [
  {
    id: 42,
    title: 'Black',
    subtitle: 'N299K',
    hrefImg: 'product1',
    index: 1.3,
  },

  {
    id: 15,
    title: 'Red Black',
    subtitle: 'N299K',
    hrefImg: 'product2',
    index: 1.6,
  },

  {
    id: 62,
    title: 'Night Black',
    subtitle: 'N299K',
    hrefImg: 'product3',
    index: 1.9,
  },

  {
    id: 73,
    title: 'Blue',
    subtitle: 'N299K',
    hrefImg: 'product4',
    index: 2.2,
  },

  {
    id: 74,
    title: 'Twilight Gray',
    subtitle: 'N299K',
    hrefImg: 'product5',
    index: 2.5,
  },
]
