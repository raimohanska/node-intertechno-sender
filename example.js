var sender = require('./index.js'); // May throw an error if /dev/gpiomem is not accessible

sender.enableTransmit(18); // Use **BCM** pin 18
sender.setRepeatTransmit(5); // Set number of repeat transmissions
// Turn the first switch off. Switches 0..5 are supported.
sender.setState(0, false)
console.log('great success')
