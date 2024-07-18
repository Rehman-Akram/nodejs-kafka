import {kafkaClient} from './client.js'

async function init() {
  
  const group = process.argv[2]
  const consumer = kafkaClient.consumer({groupId: group})
  
  await consumer.connect()

  await consumer.subscribe({topics: ['rider-updates'], fromBeginning: true})

  await consumer.run({
    eachMessage: async({topic, partition, message})  => {
      console.log(`${group}: [${topic}]: PART: ${partition}: `, message.value.toString())
    }
  })

}

init()

