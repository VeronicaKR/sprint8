export const GetList = async(count) => {

    const url = `https://swapi.py4e.com/api/starships/?page=${count}`
    const resp = await fetch(url);
    const {results} = await resp.json()
  
    return results;
  }
  