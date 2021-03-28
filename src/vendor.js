'use strict';

// const event = require ('./event.js')
 const events = require ('./events.js')
const store = process.env.STORE
const faker = require('faker')


setInterval(() => {
  
let entry = {
  store:store,
  orderID:faker.random.uuid(),
  customer:faker.name.findName(),
  address: `${faker.address.stateAbbr()}`
}
events.emit('pickUp',entry)
},5000)
events.on('delevered', (payload)=>{
  console.log('thank you appreciate it')
})
