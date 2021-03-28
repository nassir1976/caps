

'use strict';
const event = require('./events.js');

const storeName = 'tana'


setInterval(() => {
  event.emit('pickup', {storeName: storeName, orderId: Math.random()*1000, customerName: 'nassir', address: '1615 19th ave.'})
}, 5000)

function delivered(payload){
  console.log(`VENDOR: thank you for the service ${payload.orderId}`);
  console.log(`EVENT {event: delivered, {${payload.storeName}, ${payload.orderId},${payload.customerName},${payload.address},}`)
}

module.exports = {
  delivered: delivered}
