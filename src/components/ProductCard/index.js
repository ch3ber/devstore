export const ProductCard = (id, name, price, preview, description) => {
  const view = `
    <article class="product-card" data-id=${id} >
      <img src="${preview}" alt="description" class="product-card__preview" />
      <div class="product-card__content">
        <div>
          <h2 class="product-card__name">${name}</h2>
          <p class="product-card__price">$${price}</p>
        </div>
        <p class="product-card__description">${description}</p>
        <div class="product-card__buttons">
          <a class="product-card__button" href="/#/detail">Detail</a>
          <button class="product-card__button product-card__button--add">Add to cart</button>
        </div>
      </div>
    </article>
  `
  return view
}
