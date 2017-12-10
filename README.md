# node-rcswitch-gpiomem

Controls my Intertechno outlets on Raspberry Pi / Node.js. 

Shameless frankenteinized fork of <https://github.com/n8henrie/node-rcswitch-gpiomem>.

## Requirements

- Like the c++ version of rcswitch, [WiringPi must be
  installed](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/)
  in order to compile.
- To work without root by way of `/dev/gpiomem` part to work, it should be run
  on Raspbian Jessie with [wiringPi >=
  2.29](wiringpi.com/wiringpi-update-to-2-29/)
- Both the data and the power Pins of the 315/433Mhz emitter must be connected
  to the RPi. Note the number of the ~~WiringPi data~~ BCM Pin. (see
  http://wiringpi.com/pins/)

## Usage

```javascript
var sender = require('node-intertechno-sender'); // May throw an error if /dev/gpiomem is not accessible
sender.enableTransmit(7); // Use **BCM** pin 17
sender.setRepeatTransmit(15); // Set number of repeat transmissions
sender.send('1001011001101001010101011010010101010101010101010110100101010101')
```

## API

### Configuration

#### `rcswitch.enableTransmit(int pin)`

Enable transmission on BCM `pin`. On Jessie should "just work". **NB:** if you to **not** want to use `/dev/gpiomem`, you'll need to first export the pin with the wiringPi `gpio` utility to avoid needing root.`

- `pin` - (Number) data Pin to use following [the WiringPi schema](http://wiringpi.com/pins/)

Return true if `pin` is an integer, false otherwise.

#### `rcswitch.disableTransmit()`

Disable transmission (set the pin to -1 which disable any following function call).

Return true.

#### `rcswitch.send(`char* codeWord`)`

- `codeWord` - (String) codeword. Can use this to send the **binary** RF code,
see: <http://n8henrie.com/2015/12/rf_pi>

Return true.
