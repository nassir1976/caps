'use strict';


const event = require('./events.js');
const date = new Date();


function pickedUp(payload){
  setTimeout(() => {
  
    console.log(`EVENT: {event: 'pickup',${date}  {${payload.storeName}, ${payload.orderId},${payload.customerName},${payload.address},}`)
    console.log(`DRIVER: picked up ${payload.orderId}`);

    event.emit('in-transit', payload);
  }, 1000)
}

function transit(payload){
  console.log(`EVENT: { event: 'in-transit'  ${date} {${payload.storeName}, ${payload.orderId},${payload.customerName},${payload.address},}`)
}

function delivered(payload){
  setTimeout(() => {
    console.log(`DRIVER: delivered ${payload.orderId}`)
    event.emit('delivered', payload);
  }, 3000)
}




module.exports = {
  pickedUp: pickedUp,
  delivered: delivered,
  transit: transit}
