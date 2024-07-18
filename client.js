import { Kafka } from "kafkajs";

export const kafkaClient = new Kafka({
  brokers: ["localhost:9092"],
  clientId: 'kafka-nodejs-app'
})

