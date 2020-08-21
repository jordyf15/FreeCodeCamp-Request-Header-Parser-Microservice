# Request Header Parser Microservice
For the second project of FreeCodeCamp's API and Microservices curriculum, we have to make a Request Header Parser Microservice with basic Node and basic Express.

## Live Demo on Repl
https://request-header-parser-microservice.jordyf15.repl.co/

## Test/User Stories
1. I can get the IP address, preferred languages (from header Accept-Language)
and system infos (from header User-Agent) for my device.

## Example Usage
[base url]/api/whoami

## Example Output
The output are JSON Object with the following key/value pairs:
1. ipaddress:"the ip address of the user"(String)
2. language:"The request header accept language"(String)
3. software: "The request header user-agent"(String)
Example:  
{"ipaddress":"::ffff:159.20.14.100","language":"en-US,en;q=0.5",
"software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}

## Technology Used
1. HTML
2. CSS
3. Javascript
4. Node.js version 12.16.3
5. Express version 4.17.1

## Note
The source code here and with the one on repl are slightly different in the listener part since they were host on different server. This one are on localhost and on port 3000. Other than that everything else is the same.