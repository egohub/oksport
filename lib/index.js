const fetch = require('node-fetch');
const _ = require('lodash');

module.exports = {
    live : async () =>{
        try {
            const resp = await fetch('https://api.oksportserv.com/api/football/matches/ongoing',{
                method : 'POST',
                headers : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}
            });
            const response = await resp.json();
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    detail :async (id) => {
        try {
            const dataId = `match_id=${id}`
            const resp = await fetch(`https://api.oksportserv.com/api/football/matches/detail`,{
                method : 'POST',
                headers : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
                body : dataId
            });
            const response = await resp.json();
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    livestream : async () =>{
        try {
            const resp = await fetch('https://api.oksportserv.com/api/football/matches/ongoing',{
                method : 'POST',
                headers : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}
            });
            const response = await resp.json();
            const list = await response.data.list;
            const hasLive = _.filter(list, _.iteratee({'has_live' : 1}))
            //console.log(hasLive);
            const matchId = await Promise.all(
                hasLive.map((i) => fetch(`https://api.oksportserv.com/api/football/matches/detail`,{
                    method : 'POST',
                    headers : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
                    body : `match_id=${i.match_id}`
                }))
            );
            const matchJson = await Promise.all(matchId.map((j) => j.json()));
            const matches = _.map(matchJson , 'data')
            return matches;
        } catch (error) {
            console.log(error);
        }
    }
  };