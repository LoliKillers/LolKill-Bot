const axios = require('axios')
const cheerio = require('cheerio')

function InfoIklim() {
  return new Promise((resolve, reject) => {
    axios.get(`https://bmkg.go.id`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        let gambarr = []
 	$('#klimatologi > div > div.row.margin-bottom-30.md-margin-bottom-10 > div:nth-child(2) > div.img-mkg-home-bg > a > img').get().map((rest) => {
         gambarr.push($(rest).attr('data-original'))
         })
     let result = []
     for (let i = 0; i < gambarr.length; i++) {
          result.push({
               	thumb: gambarr[i]
          })
     }
            
        const res = {
            status: 200,
			      coder: '@ariasu.xyz',
            result: result
          }
          resolve(res)
      })
      .catch(reject)
  })
}

module.exports = { InfoIklim }