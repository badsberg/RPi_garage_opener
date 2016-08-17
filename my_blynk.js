var Blynk = require('blynk-library');

if (!process.argv[2]) {
  console.log("Please specify auth token.");
  process.exit(1);
}

var blynk = new Blynk.Blynk(process.argv[2], options = {
  connector : new Blynk.TcpClient()
});

var GPIO = require('onoff').Gpio,
    port_switch_a = new GPIO(7, 'in','both'),
    port_switch_b = new GPIO(8, 'in','both'),
    relay_a = new GPIO(11, 'out'),
    relay_b = new GPIO(9, 'out');

var v1 = new blynk.VirtualPin(1);
var v2 = new blynk.VirtualPin(2);
//var v3 = new blynk.VirtualPin(3);
//var v4 = new blynk.VirtualPin(4);

port_switch_a.watch(function(err, state) {
  // check the state of the button
  // 1 == pressed, 0 == not pressed
  if(state == 1) {
    // turn LED on
    v1.write('1');
  } else {
    // turn LED off
    v1.write('0');
  }
});

port_switch_b.watch(function(err, state) {
  // check the state of the button
  // 1 == pressed, 0 == not pressed
  if(state == 1) {
    // turn LED on
    v2.write('1');
  } else {
    // turn LED off
    v2.write('0');
  }
});
