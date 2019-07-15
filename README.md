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
        
       {getUrls}
       
```graphql
 type ServiceUrl {
      name: String,
      url: String
}
          
 type groupUrl {
      name: [ServiceUrl]
}
 ``` 
 
// add what each one of it performs

```graphql
type Query {
   getUrls: [String],
   getBusyUrls: [String],
   getService: String
}
``` 

// add mutation related info
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



        
            
