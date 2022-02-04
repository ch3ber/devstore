export const ProductCard = (id, name, price, preview, description) => {
  const view = `
    <article class="product-card">
      <img src="${preview}" alt="description" />
      <div class="product-card__content">
        <div>
          <h2>${name}</h2>
          <p>${price}</p>
        </div>
        <p>${description}</p>
        <div class="product-card__buttons">
          <a class="product-card__button" href="/#/detail">Detail</a>
          <button class="product-card__button">Add to cart</button>
        </div>
      </div>
    </article>
  `
  return view
}
