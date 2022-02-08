export function loadListener (id, type, func) {
  const element = document.querySelector(`.${id}`)
  element.addEventListener(type, func)
}

export function loadListeners (id, type, func) {
  const elements = document.querySelectorAll(`.${id}`)
  elements.forEach(el => {
    el.addEventListener(type, func)
  })
}

export async function loadRecursiveListener ({ id, type = 'click', listenerFunc }) {
  loadListeners(id, type, async (event) => {
    await listenerFunc(event)
    loadRecursiveListener({ id, type, listenerFunc })
  })
}
