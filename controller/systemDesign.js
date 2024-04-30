//  to scale up server
// add more resorces , ugrade CPU - vertical 
// replica - horizontal -> load balaner to manage load on server using round robin 

// CDN - loadbalanacer  hit nearest server 

  
// rest api  -> client to server -> request and response 
// graphql - >  give whatever you need fetch data based on request
// /grpc basically setup between server to server
// grpc if using grpc to interect with client and server , we use buffer instead of json
//  sharding keep half data in other places , in replica  we uses leader that take write queries and than change in to follower(that take read queries only)

// web sockets 
//  server to  



// kafka
// basically for async communication , event base communication   
// keeps messages default 7 days
 

// cluster k andar multiple broker , broker k andar multiple topics

//  topics = feed where record are published
//  broker - n number of broker in kafka closer ,managed by zookeeperf , data of 1 broker in keep in another broker to make kafka fault torence