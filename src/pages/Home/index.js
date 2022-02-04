import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { ProductCard } from "../../components/ProductCard";
import { getFromDatabase } from "../../utils/getFromDababase";
import { LoggedNav } from "../../components/LoggedNav";
import { user } from "../../login";

export const Home = async () => {
  console.log("home --- " + user.getUserAuth());
  const products = await getFromDatabase("products");

  const view = `
    <div class="home-container">
      <h1 class="home-container__title">Products</h1>
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
          .join("")}
        ${Footer()}
      </main>
    </div>
  `;
  return view;
};
