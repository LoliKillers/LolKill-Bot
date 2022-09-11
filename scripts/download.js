const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/../.env` });
const axios = require('axios');
const unflatten = require('flat').unflatten;
const fs = require('fs')

;(async function getTranslations() {
  console.log('=> Mendapatkan pelokalan');
  const translations = (
    await axios.get('https://localizer.borodutch.com/localizations')
  ).data.filter((l) => {
    return l.tags.indexOf('lolkilbot') > -1;
  });
  console.log('=> Mendapat lokalisasi:');
  console.log(JSON.stringify(translations, undefined, 2));
  // Get flattened map
  const flattenedMap = {};
  translations.forEach((t) => {
    const key = t.key;
    const variants = t.variants.filter((v) => !!v.selected);
    flattenedMap[key] = variants.reduce((p, c) => {
      p[c.language] = c.text;
      return p;
    }, {});
  });
  console.log('=> Respons yang diterjemahkan:');
  console.log(flattenedMap);
  const unflattened = unflatten(flattenedMap);
  console.log('=> Peta terbalik dan tidak rata');
  console.log(unflattened);
  fs.writeFileSync(`${__dirname}/../helpers/localizations.js`, `module.exports = ${JSON.stringify(unflattened, undefined, 2)}`);
  console.log('=> Objek yang disimpan ke file');
})();
