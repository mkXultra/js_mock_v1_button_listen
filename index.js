const gpio = require('rpi-gpio').promise;

const buttonGpio = 16;
const ledGpio = 17;
const gpioToPinMap = {
  //gpio:pin
  2:3,
  3:5,
  4:7,
  5:29,

  6:31,
  7:26,
  8:24,
  9:21,
  10:19,

  11:23,
  12:32,
  13:33,
  14:8,
  15:10,

  16:37,
  17:11,
}
const LED_PIN = gpioToPinMap[ledGpio];
const BUTTON_PIN = gpioToPinMap[buttonGpio];

async function main(){
  await gpio.setup(LED_PIN, gpio.DIR_OUT);
  await gpio.setup(BUTTON_PIN, gpio.DIR_OUT);
  while (true) {
    await gpio.change(BUTTON_PIN);
    console.log('button pushed');
    console.log("main -> await gpio.read(LED_PIN)", await gpio.read(LED_PIN))
    await gpio.write(LED_PIN, !(await gpio.read(LED_PIN)));
  }
}

main()