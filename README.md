# Customer-Sevice-Backend
# Problem Statement
Imagine a scenario where we have four customer service centers and each service center can
be assigned a certain number of maximum tickets( use 5 as the limit ).
When a user raises a ticket, each user ticket can be forwarded to any of the customer service
center. Each customer service center has a specific URL associated with it. But, we do not want
to expose the specific URLs for each customer service center to the customer, rather, we would
like to have one common URL.
Whenever a user raises a ticket, he/she should be given the common link, and the system
needs to figure out which specific customer center URL it needs to call (the one that’s less
busy). We need to keep track of the number of users who visit each of the service centers and
keep a rate limiter so that one service center is not bombarded with many service requests. We
need to keep track of the number of requests to each of the service centers.
1. Mutation to generate a new shortened URL for a group of four URLs.
2. Query to retrieve all the URLs in a group URL.
3. Query to fetch one random URL in a group and increment the visit count. If the limit for
all of them has been reached, a message should be returned saying “All our service
centers are busy, please try again later”.
4. Query to retrieve the URLs who’s limit has been reached.

Clone the repository 
              
         git clone https://github.com/Vaishalik07/Customer-Sevice-Backend.git
 
Go to the project folder and initialize the npm package

        npm init

Create a Graphql HTTP server middleware
          
        npm install --save express-graphql

Install the Nodemon tool to Auto restart the server once changes have been made
        
        npm install --save-dev nodemon

To execute :
        
       npm start

Go to your browser and you can see the graphql interface at

       localhost:4000/graphql

To retrieve all the services, type 
       
```graphql
 type ServiceUrl {
      name: String,
      url: String
}
          
 type groupUrl {
      name: [ServiceUrl]
}
 ``` 
 

getUrls - Retrieves all the service Urls </br>
getBusyUrls - Returns all the service providers that have reached their threshold limit </br>
getService - Generates the service address to which traffic will be forwarded </br>

```graphql
type Query {
   getUrls: [String],
   getBusyUrls: [String],
   getService: String
}
``` 

# Mutation
A Mutation is a way to modify server-side data as well.In Graphql, and operation that causes a write has to be sent using a Mutation. 

```graphql
type Mutation {
   post(url: [String]!): Link
}

type Link {
   url: String!
}
 ``` 

Screenshots

1. Retrieving all the Urls
![Alt Text](https://github.com/Vaishalik07/Customer-Sevice-Backend/blob/master/Screenshots/SS01.png)

2. Retrieve a Service Urls from the pool
![Alt Text](https://github.com/Vaishalik07/Customer-Sevice-Backend/blob/master/Screenshots/SS02.jpeg)

3. All services busy message
![Alt Text](https://github.com/Vaishalik07/Customer-Sevice-Backend/blob/master/Screenshots/SS03.jpeg)

4. Generating a tiny url for the combination of urls
![Alt text](https://github.com/Vaishalik07/Customer-Sevice-Backend/blob/master/Screenshots/SS04.jpeg)

5. Get all the Busy Urls
![Alt text](https://github.com/Vaishalik07/Customer-Sevice-Backend/blob/master/Screenshots/SS05.jpeg)


        
            
