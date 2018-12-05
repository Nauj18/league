var api = {

    /*
    [
        {
        "profileIconId": 558,
        "name": "Dr Nauj",
        "puuid": "6dPMZuqtQ_Z3Zl_dvE3ltd_VR4dPziWZaJ3IdWoo7vYYsLMIPANlM1sNYEKMHJAbfy4l-m66ETfJgg",
        "summonerLevel": 79,
        "accountId": "aKNUrBRIeg5ljSYNTuywBKlMCXMmP-TksqMHlc6Z0YlWT_o",
        "id": "yE1ZtweZZmDCg9p0PA7VLLurxCJP0xGECCUNpVcCSxhk4Vw",
        "revisionDate": 1543740169000
        }
    ]
    */

    getSummoner(name){
        var url = `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/`+name+`?api_key=RGAPI-20b022cb-837c-4d8f-b3e6-f6c044603945`;
        return fetch(url).then((res) => res.json());
    },


    /*
    [
        {
            "queueType": "RANKED_SOLO_5x5",
            "summonerName": "Dr Nauj",
            "hotStreak": false,
            "wins": 77,
            "veteran": false,
            "losses": 57,
            "rank": "IV",
            "leagueName": "Heimerdinger's Privateers",
            "inactive": false,
            "freshBlood": false,
            "leagueId": "dc2c39f0-97b9-11e8-b3c4-c81f66cf2333",
            "tier": "GOLD",
            "summonerId": "yE1ZtweZZmDCg9p0PA7VLLurxCJP0xGECCUNpVcCSxhk4Vw",
            "leaguePoints": 70
        }
    ]
    */


    getRankInfo(id){
        var url2 = `https://na1.api.riotgames.com/lol/league/v4/positions/by-summoner/`+id+`?api_key=RGAPI-20b022cb-837c-4d8f-b3e6-f6c044603945`;
        return fetch(url2).then((res) => res.json());
    }
}

module.exports = api;