import { Footer } from '../../components/Footer'
import { ProductCard } from '../../components/ProductCard'
import { getFromDatabase } from '../../utils/getFromDababase'

export const Home = async () => {
  const products = await getFromDatabase('products')

  const view = `
    <div class="home-container">
      <h1 class="home-container__title">Products</h1>
      <p>Encuentra los productos mas populares de mascotas aqui</p>
      <main class="home-container__products">
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
    </div>
    ${Footer()}
  `
  return view
}
