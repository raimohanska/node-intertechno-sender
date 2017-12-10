var switches = [ 
  { on: '1001011001101001010101011010010101010101010101010110100101010101',
    off: '1001011001101001010101011010010101010101010101010110101001010101' },
  { on: '1001011001101001010101011010010101010101010101010110100101010110',
    off: '1001011001101001010101011010010101010101010101010110101001010110' },
  { on: '1001011001101001010101011010010101010101010101010110100101011001',
    off: '1001011001101001010101011010010101010101010101010110101001011001' },
  { on: '1001011001101001010101011010010101010101010101010110100101011010',
    off: '1001011001101001010101011010010101010101010101010110101001011010' },
  { on: '1001101001010110011001011001101010011001011010100110100110101001',
    off: '1001101001010110011001011001101010011001011010100110101010101001' },
  { on: '1001101001010110011001011001101010011001011010100110100110100110',
    off: '1001101001010110011001011001101010011001011010100110101010100110' } 
]

var rcswitch_gpiomem = require('bindings')('rcswitch-gpiomem');
module.exports = new rcswitch_gpiomem.RCSwitch();
module.exports.switches = switches
module.exports.setState = function(number, on) {
  this.send(switches[number][on ? 'on' : 'off'])
}
