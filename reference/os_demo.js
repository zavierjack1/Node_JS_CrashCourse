const os  = require('os')

//Platform
console.log(os.platform());

//CPU architecture
console.log(os.arch());

//CPU Core Info
console.log(os.cpus());

//Free mem
console.log(os.freemem());

//Total mem
console.log(os.totalmem());

//home dir
console.log(os.homedir());

//Up time (in seconds by default)
console.log(os.uptime()/60/60);