'use strict';
 

const events = require ('./events.js')
require('./vendor.js')
require('./driver.js')

events.on('pickUp', sendMessage)
events.on('in-transit', sendMessage)
events.on('delevered', sendMessage)

function sendMessage(payload){
  console.log(`Hub Event: ${json.stringify(payload)}`);
}
module.exports ={
  sendMessage
}
