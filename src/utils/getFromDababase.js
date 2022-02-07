export const getFromDatabase = async (query) => {
  const API_URL = '../../../api/db.json'
  try {
    const response = await window.fetch(API_URL)
    const data = await response.json()
    return data[query]
  } catch (error) {
    console.log('Fetch Error', error)
  }
}
