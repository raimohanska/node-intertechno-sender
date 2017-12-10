var sender = require('./index.js'); // May throw an error if /dev/gpiomem is not accessible

sender.enableTransmit(7); // Use **BCM** pin 7
sender.setRepeatTransmit(15); // Set number of repeat transmissions
sender.send(sender.switches[0].on)
console.log('great success')
