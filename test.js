var rcswitch = require('./index.js'); // May throw an error if /dev/gpiomem is not accessible
rcswitch.enableTransmit(7); // Use **BCM** pin 17
rcswitch.setRepeatTransmit(15); // Set number of repeat transmissions
rcswitch.send('1001011001101001010101011010010101010101010101010110100101010101')
console.log('great success')
