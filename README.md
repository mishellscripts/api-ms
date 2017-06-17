# API Microservices
Back end practice API projects - part of FCC back end web development certification curriculum
All of the microservices have been combined into a single website. 
Technologies used: Node.js, Express.js, MongoDB, HTML, CSS, Javascript.
> Demo: https://api-ms.glitch.me/

## Timestamp microservice 
From request date information from URL (i.e. ../{date}), checks whether the date in proper format. 
Then, responds with date information in unix and natural format. 

## Who am I?
Gets client information such as IP, language, OS from request packet header

## URL Shortener
Shorten a URL by generating a random number n from 1-10000 for a URL and storing it in a database (MongoDB). 
When there is a request for /{n}, redirects to the original URL page. Separate URL for this service: https://url-reduce.glitch.me/

## Image Search Abstraction Layer
Sends back image search data using google search custom search engine. 
Data presented depending on term and offset value obtained from input (i.e. ../{term}&offset={page number}). 
View the latest 10 search results at /latest. Separate URL for this service: https://isal.glitch.me/
