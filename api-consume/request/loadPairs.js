//const apiUrl = 'https://api.steampowered.com/ISteamApps/GetAppList/v2/'
//const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto/'
const apiUrl = 'https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=221380'

fetch(apiUrl)
    .then( (data) => console.log(data.json) )