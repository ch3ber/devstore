export const getFromDatabase = async (query: string): Promise<unknown> => {
  const API_URL = '../../../api/db.json'

  return fetch(API_URL)
    .then((response) => response.json())
    .then((json) => json[query])
    .catch(() => console.error('Error fail to load content'))
}
