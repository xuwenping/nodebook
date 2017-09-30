'use strict'
var fs = require('fs');
var veggieTray = ['carrots', 'celery', 'olives'];
fd = fs.openSync('veggie.txt', 'w');
while (veggieTray.length) {
  veggie = veggieTray.pop() + " ";
  bytes = fs.writeSync(fd, veggie, null, null);
  console.log("Wrote %s %dbyte", veggie, bytes);
}
bytes = bytes + 1;
console.log("X %d", bytes);
fs.closeSync(fd);
