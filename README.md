## Oksport

`npm install oksport`

### Get livescore matches

```js
const sport = require('oksport');
sport.live().then(data => console.log());

```
#### Response json

```json
{
  "list": [
    {
      "match_id": 3514155,
      "comp": "LAT D1",
      "competition_id": 293,
      "time": "09:30 pm",
      "home_team": "FK Liepaja",
      "home_logo": "https://cdn.sportnanoapi.com/football/team/066236dc007de501d84a4a146f7597a9.png",
      "away_team": "FK Valmiera",
      "away_logo": "https://cdn.sportnanoapi.com/football/team/ebface262b1584a91d0351d5c45f3e96.png",
      "home_score": "1",
      "away_score": "1",
      "follow": 0,
      "match_status": 2,
      "status": "72",
      "ing": "'",
      "show_score": 1,
      "intelligence": "",
      "has_predict": 0,
      "has_plan": 0,
      "has_live": 1
    },
    {
      "match_id": 3535101,
      "comp": "BLR D2",
      "competition_id": 297,
      "time": "09:30 pm",
      "home_team": "Naftan Novopolock",
      "home_logo": "https://cdn.sportnanoapi.com/football/team/64ce89d02cc5898473912ceb88178b99.png",
      "away_team": "FC Belshina Bobruisk",
      "away_logo": "https://cdn.sportnanoapi.com/football/team/70edc5978b5df5a357c1fabc0cc683d4.png",
      "home_score": "0",
      "away_score": "0",
      "follow": 0,
      "match_status": 2,
      "status": "75",
      "ing": "'",
      "show_score": 1,
      "intelligence": "",
      "has_predict": 0,
      "has_plan": 0,
      "has_live": 0
    },
    {
      "match_id": 3572384,
      "comp": "LAT D2",
      "competition_id": 294,
      "time": "09:30 pm",
      "home_team": "FK Auda Riga",
      "home_logo": "https://cdn.sportnanoapi.com/football/team/fcf70ea0bbeb4edca72cc304e75f4c98.jpg",
      "away_team": "Super Nova",
      "away_logo": "https://cdn.sportnanoapi.com/football/team/6ecfe734e6971ff83a4a3808b669d059.png",
      "home_score": "4",
      "away_score": "0",
      "follow": 0,
      "match_status": 2,
      "status": "72",
      "ing": "'",
      "show_score": 1,
      "intelligence": "",
      "has_predict": 0,
      "has_plan": 0,
      "has_live": 0
    },{
      ...
    }
  ]
}
```

#### Stream for soccer

```js
sport.livestream().then(data => console.log(data))
```
#### Response example

```json
 {
    "match_id": 3603337,
    "match_time": "Aug 04,2021 11:30pm",
    "comp_name": "International Club Friendly",
    "status": "HT",
    "ing": "",
    "follow": 0,
    "show_score": 1,
    "status_id": 3,
    "match_status": 2,
    "home_team_id": 10809,
    "home_team": "Leganes",
    "home_logo": "https://cdn.sportnanoapi.com/football/team/c983f36d9590fcb8c4762af81e9b095e.png",
    "home_score": "0",
    "home_half_score": "0",
    "away_team_id": 13389,
    "away_team": "Fuenlabrada",
    "away_logo": "https://cdn.sportnanoapi.com/football/team/89e52712fe526718216013a52d83be8e.png",
    "away_score": "0",
    "away_half_score": "0",
    "live_url": [
      {
        "url": "https://sportlive.oksportserv.com/live/6330d69bc7bd50bd/playlist.m3u8?txSecret=14509fb62459b63357442c7607be44c4&txTime=610ad45d",
        "name": "Live 1"
      }
    ]
  },
  {
    "match_id": 3600230,
    "match_time": "Aug 04,2021 10:30pm",
    "comp_name": "Russia Cup",
    "status": "ATE",
    "ing": "",
    "follow": 0,
    "show_score": 1,
    "status_id": 5,
    "match_status": 2,
    "home_team_id": 10429,
    "home_team": "Torpedo moskva",
    "home_logo": "https://cdn.sportnanoapi.com/football/team/d296c101daa88a51f6ca8cfc1ac79b50.gif",
    "home_score": "0",
    "home_half_score": "0",
    "away_team_id": 13071,
    "away_team": "SKA Khabarovsk",
    "away_logo": "https://cdn.sportnanoapi.com/football/team/30ca9ce3f25e8a430b25b27e776b9dc0.png",
    "away_score": "0",
    "away_half_score": "0",
    "live_url": [
      {
        "url": "https://sportlive.oksportserv.com/live/992917b5bfe6ef78/playlist.m3u8?txSecret=dcc34607778e2191dbe0b1724993e496&txTime=610ad4e3",
        "name": "Live 1"
      }
    ]
  }
```
### Detail for match

```js
sport.detail('3600230').then(data => console.log(data))

```

#### Example response

```json
{
    "match_id": 3600230,
    "match_time": "Aug 04,2021 10:30pm",
    "comp_name": "Russia Cup",
    "status": "ATE",
    "ing": "",
    "follow": 0,
    "show_score": 1,
    "status_id": 5,
    "match_status": 2,
    "home_team_id": 10429,
    "home_team": "Torpedo moskva",
    "home_logo": "https://cdn.sportnanoapi.com/football/team/d296c101daa88a51f6ca8cfc1ac79b50.gif",
    "home_score": "0",
    "home_half_score": "0",
    "away_team_id": 13071,
    "away_team": "SKA Khabarovsk",
    "away_logo": "https://cdn.sportnanoapi.com/football/team/30ca9ce3f25e8a430b25b27e776b9dc0.png",
    "away_score": "0",
    "away_half_score": "0",
    "live_url": [
      {
        "url": "https://sportlive.oksportserv.com/live/992917b5bfe6ef78/playlist.m3u8?txSecret=dcc34607778e2191dbe0b1724993e496&txTime=610ad4e3",
        "name": "Live 1"
      }
    ]
  }
  ```

  ### Async/Await

  ```js
  (async()=>{

    const sport = require('oksport');
    let stream = await sport.livestream();
    console.log("stream");
    console.log(stream);

    let live = await sport.live();
    console.log("live");
    console.log(live);

    let detail = await sport.detail('3600215');
    console.log('=== detail ===');
    console.log(detail);
})();
```
