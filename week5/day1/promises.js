// a promise is an action you take and wait on an expected result
// it will either be what you wanted or not
// resolve or reject
// async
const functionName = async ()=> {
    const url = "https://pokeapi.co/api/v2/pokemon"
    const response = await fetch(url)
    const json = await response.json()
}