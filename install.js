var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'MD5 Web Server',
  description: 'Runs the MD5 NodeJS Web Server.',
  script: 'C:\\nodejs\\md5Server.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();