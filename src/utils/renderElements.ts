export const renderInHtml = async (
  component: string,
  renderId: string
): Promise<void> => {
  const renderElement: HTMLElement = document.getElementById(renderId)!
  renderElement.innerHTML = component
}
