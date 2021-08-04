(async()=>{

    const help = require('./lib/index')
    let stream = await help.livestream();
    console.log("stream");
    console.log(stream);

    let live = await help.live();
    console.log("live");
    console.log(live);

    let detail = await help.detail('3600215');
    console.log('=== detail ===');
    console.log(detail);
})();

const sport = require('./lib/index')

// For live playing all matches
sport.live().then(data => console.log());

// For stream
sport.livestream().then(data => console.log(data[0]))

// For detail
sport.detail('3600230').then(data => console.log(data))
