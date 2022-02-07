export const Error404 = () => {
  const view = `
    <main class="error404-container">
      <div>
        <h1 class="error404-container__title">Error <span class="error404-container__title--number">404</span></h1>
        <p class="error404-container__description">No se encontró la página que buscas</p>
      </div>
    </main>
  `
  return view
}
