import { Layout } from '@components/Layout'
import { ProductCard } from '@components/ProductCard'
import { ComponentView } from '@models/component'
import { getFromDatabase } from '@utils/getFromDababase'

export const Home = async (): Promise<ComponentView> => {
  const products = await getFromDatabase('products')

  const view = `
      <div class="mb-10 mt-14">
        <h1 class="text-2xl font-bold text-center text-sky-600"><span class="mr-3"><i class="fa-solid fa-chart-line"></i></span>Top Products</h1>
        <p class="text-center">The best-selling products this month. The best products for software developers</p>
      </div>
      <main class="flex flex-wrap gap-10 px-10 justify-center">
        ${products
          .map((product) =>
            ProductCard(
              product.id,
              product.name,
              product.price,
              product.preview,
              product.description
            )
          )
          .join('')}
      </main>
  `
  return Layout(view)
}
