var Blynk = require('blynk-library');

if (!process.argv[2]) {
  console.log("Please specify auth token.");
  process.exit(1);
}

var blynk = new Blynk.Blynk(process.argv[2], options = {
  connector : new Blynk.TcpClient()
});

var GPIO = require('onoff').Gpio,
    port_switch = new GPIO(7, 'in','both');

var v9 = new blynk.VirtualPin(9);

port_switch.watch(function(err, state) {

  // check the state of the button
  // 1 == pressed, 0 == not pressed
  if(state == 1) {
    // turn LED on
    v9.write('1');
  } else {
    // turn LED off
    v9.write('0');
  }
});
