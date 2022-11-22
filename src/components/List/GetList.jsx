export const GetList = async() => {

    const url = `https://swapi.py4e.com/api/starships/`
    const resp = await fetch(url);
    const {results} = await resp.json()
  
    return results;
  }
  