export const getFromDatabase = async (query) => {
  const apiUrl = '../../../api/db.json'
  try {
    const response = await window.fetch(apiUrl)
    const data = await response.json()
    return data[query]
  } catch (error) {
    console.log('Fetch Error', error)
  }
}
