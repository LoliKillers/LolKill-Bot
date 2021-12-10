const cfonts = require('cfonts')

const banner = cfonts.render(('self bot|whatsapp'), {
    font: 'simple',
    color: 'system',
    align: 'center',
    gradient: ['red', 'magenta'],
    lineHeight: 2
})

module.exports = banner