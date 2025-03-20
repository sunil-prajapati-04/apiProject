let url = 'https://api.currencyapi.com/v3/latest apikey=cur_live_FSrXMaICJJ5AoEatqA6zBh613uYi0OWTTWeck4q9';

async function changeCurr() {
    try {
        let res = await axios.get(url);
    console.log(res);
    } catch (error) {
        console.log("error-not found -",error);
    } 
}
changeCurr();