export const GetList = async() => {

    const url = `https://swapi.py4e.com/api/starships/`
    const resp = await fetch(url);
    const {results} = await resp.json()
  
    const list = results.map(item => ({
     name: item.name,
     model: item.model,
    }));
    console.log(list);
    return list;
  }
  