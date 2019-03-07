const google = require('googleapis');
const key = 'AIzaSyATJhCcNYPLSwCFgf77CdMoVGAzZXBM85o';
const service = google.youtube({
    version: 'v3',
    auth: key
});



async function searchChannel (ctx, next) {
    try{
        let params = {
            part: 'snippet',
            type: 'channel',
            q: ctx.params.channel
        }
    
        let data = await service.search.list(params, (err, response) => {
            if (err) {
                console.log('The API returned an error: ' + err);
                ctx.body = err;
            }
        });
        ctx.body = data;
    }catch(e){
        console.log('Youtube API error:',e);
    }
    
}

async function getInformationAboutChannel(ctx, next){
    try{
        let params = {
            part: 'snippet,statistics',
            id: ctx.params.id
        }

        let data = await service.channels.list(params, (err, response) => {
            if (err) {
                console.log('The API returned an error: ' + err);
                ctx.body = err;
            }
        });

        ctx.body = data;
    }catch(e){
        console.log('Youtube API error:',e);
    }
}



module.exports = { searchChannel, getInformationAboutChannel };

