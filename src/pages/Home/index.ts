import { Layout } from '../../components/Layout'
import { ProductCard } from '../../components/ProductCard'
import { getFromDatabase } from '../../utils/getFromDababase'

export const Home = async (): Promise<string> => {
  const products = await getFromDatabase('products')

  const view = `
      <div class="mb-10 mt-14">
        <h1 class="text-xl font-bold text-center">Products</h1>
        <p class="text-center">Encuentra los productos mas populares de mascotas aqui</p>
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
