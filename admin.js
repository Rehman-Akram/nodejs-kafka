import { kafkaClient } from "./client.js";

async function init () {
  const admin = kafkaClient.admin()
  console.log('Admin connecting...')
  admin.connect()
  console.log('Admin is connected...')
  await admin.createTopics({
    topics: [{
      topic: 'rider-updates',
      numPartitions: 2
    }]
  })
  console.log('Topics created successfully...')
  await admin.disconnect()
  console.log('Admin disconnected')
}

init()