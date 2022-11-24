const express = require("express");

const app = express()

// const SerialPort = require('serialport');

// const SerialPort = require('serialport') 
// const { Readline } = require('@serialport/parser-readline');

const { ReadlineParser } = require('@serialport/parser-readline')


// SerialPort.list((err, ports) => {
//     console.log(ports)                
// })



const { SerialPort } = require('serialport')

const port = new SerialPort({
    path: 'COM5',
    baudRate: 9600,
  })

  let datax;

  const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))


  parser.on('data', (data) => {
    
    datax = data.toString();
    console.log(datax);
  });

  app.get('/getData', (req, res) => {
    console.log("hi");
    res.send({"data": data});
 });
 app.post('/getData2', (req, res) => {
    console.log("hi");
    res.send(datax);
 });

 app.listen(4000);

    // port.on('readable', function () {
    //     console.log('Data:', port.read().toString())
    //   })
      
      // Switches the port into "flowing mode"
    //   port.on('data', function (data) {
    //     console.log('Data:', data.toString())
    //   })
      
      // Pipe the data into another stream (like a parser or standard out)
    //   const lineStream = port.pipe(new Readline())


// const port = new SerialPort({path: 'USB\\VID_10C4&PID_EA60\\0001', baudRate: 9600 });
// const parser = port.pipe(new Readline({ delimiter: '\n' }));
// // Read the port data
// port.on("open", () => {
//   console.log('serial port open');
// });
// parser.on('data', data =>{
//   console.log('got word from arduino:', data);
// });




// C:\Users\hp\Desktop\New folder>serialport-list -f json
// [{"path":"COM4","manufacturer":"Microsoft","pnpId":"BTHENUM\\{00001101-0000-1000-8000-00805F9B34FB}_LOCALMFG&005D\\8&EEC2183&0&40C62A9CEBCA_C00000000","friendlyName":"Standard Serial over Bluetooth link (COM4)"},{"path":"COM3","manufacturer":"Microsoft","pnpId":"BTHENUM\\{00001101-0000-1000-8000-00805F9B34FB}_LOCALMFG&0000\\8&EEC2183&0&000000000000_00000000","friendlyName":"Standard Serial over Bluetooth link (COM3)"},{"path":"COM5","manufacturer":"Silicon Laboratories","serialNumber":"0001","pnpId":"USB\\VID_10C4&PID_EA60\\0001","locationId":"Port_#0003.Hub_#0001","friendlyName":"Silicon Labs CP210x USB to UART Bridge (COM5)","vendorId":"10C4","productId":"EA60"}]