This is a repo, where kafka is implemented as asynchronous communication between different applications (node js).

 # Pre-Requisites

 1. Node: 20.14.0
 2. Docker

 # Getting Started

 1. npm i 
 2. Install and run zookeeper server as service being used by kafka. Run command "docker run -p 2181:2181 zookeeper"
 3. Install and run confluentic/cp-kafka. Run command with environment variables "docker run -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=192.168.0.220:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.0.220:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka" . Here 192.168.0.220 is the private ip address of your system where it is being run.
 4. After setup completed, run producer be "node producer.js", it will ask you to input. For testing i have considered first word as name and second word as location. if location is north it will add data in first partition and remaining data will be in second partition.

