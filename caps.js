'use strict';
 

const event = require('./events.js');
const vendor = require('./vendor.js');
const driver = require('./driver.js');
const storeName = 'tana'

setInterval(() => {
  event.emit('pickup', {storeName: storeName, orderId: Math.random()*1000, customerName: 'nassir', address: '1615 19th ave.'})
}, 5000)


event.on('pickup', driver.pickedUp);
event.on('in-transit', driver.transit); 
event.on('in-transit', driver.delivered);
event.on('delivered', vendor.delivered);

