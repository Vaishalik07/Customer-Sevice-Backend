var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
var randomstring = require("randomstring");

var urlArr = ['https://www.youtube.com/watch?v=SsvfqKuJJJg', 'https://www.youtube.com/watch?v=Z8mIF80_osM', 'https://www.youtube.com/watch?v=p8OhEKfv5_Q','https://www.youtube.com/watch?v=wESIAWuD4GE']

var constPrefix = "tiny.com/r/"

var GeneratedTinyURLs = []

//function to generate a random tiny url
var randomUrl = function(){
 url = constPrefix + randomstring.generate(3);
 GeneratedTinyURLs.push(url)
 return url
}

//Map to store urls and request count 
var requestMap = new Map([[urlArr[0] ,5],
                        [urlArr[1] ,5],
                        [urlArr[2] ,5],
                        [urlArr[3] ,5]
]);

//function to distribute requests randomly within the set
var distributeLoad = function(min, max){
  var random = Math.random() * (+max - +min) + +min;
  random = Math.floor(random);
  return random;
}

//Function to keep count of the free Urls to whom load can be distributed 
var getService = function() {
  var free = [];
  for (var [key, value] of requestMap) {
      if(value != 0)
      {
        free.push(key);
      }

  }
  if(free.length == 0){
    return "All our Servers are busy, try again later !";
  }
  var serve = distributeLoad(0, free.length - 1);       //distribute load func only within the free urls
  var url = free[serve];        //Service url generated
  requestMap.set(url, requestMap.get(url) - 1);    //Decrements the availability value in the Map  
  console.log(url + "---" + requestMap.get(url))
  return url;

}

var getBusyUrls = function(){                     //Function to get values of all the busy Urls
  var iAmBusy = []
  //Iterates through the Map to check for the busy Urls
  for (var [key, value] of requestMap) {
      if(value == 0)
      {
        iAmBusy.push(key);
      }
}
return iAmBusy;
}

var shortenedUrl = "www.tinyurl.com/abc"

// GraphQL schema
var schema = buildSchema(`

  type ServiceUrl {
    name: String,
    url: String
  }

  type groupUrl {
    name: [ServiceUrl]
  }

  type Query {
        getUrls: [String],
        getBusyUrls: [String],
        getService: String
    }

  type Mutation {
        post(url: [String]!): Link
    }

  type Link {
      url: String!
      }

`);


var getUrls = function() {
   return urlArr
}


var addUrls = function(newUrl) {
  if(!urlArr.includes(newUrl))
  {
    urlArr.push({"url": newUrl, "shortUrl": getShortUrl(newUrl)})
  }
  else {

  }
}

var post = function() {
  const link = {
    url: randomUrl,
  }
  
  return link
}

var root = {
    getUrls: () => getUrls(),
    addUrls: (url) => addUrls(url),
    getBusyUrls: () => getBusyUrls(),
    getService: () => getService(),
    post: () => post(),
};

// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
