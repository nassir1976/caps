'use strict';
const events = require('./events.js')
// require('./vendor.js')
// const event = require('./hub.js')


function handlePickup(payload){
  setTimeout(()=>{
    console.log(`pakagage.orderID} is on route.`);
    events.emit('in transit', payload)
  },1000)
  setTimeout(()=>{
    console.log('delevered to', payload.customer);
    events.emit('delivered', payload)
  },3000)

}
events.on('pickUp', handlePickup)

module.exports= handlePickup
