# Customer-Sevice-Backend

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
Add screenshots for request to response from your browser
// SS for all URLS
// SS for all busy URLS
// SS for no service available
// SS for generating a tinyurl

The above will randomly generate the urls to whom requests are being passed



        
            
