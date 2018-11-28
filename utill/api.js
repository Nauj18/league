var api = {
    getSummoner(name){
        var url = `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/`+name+`?api_key=RGAPI-944e32a5-beb8-45a6-b460-fedadd254fa5`;
        return fetch(url).then((res) => res.json());
    }
}

module.exports = api;