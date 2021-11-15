# Ocelot

Ocelot is a backend project created to serve and deploy an e-commerce clothing store. This is specifically the questions-answers microservice created for the application.

## Description

Ocelot was a project worked on by a team of 4 (Daniel Politis, Jeff Liu, Yingchen Bai and Andrew Hang). In this project I had the responsibility of creating a microservice for the questions and answers section of the page. </br>

The data was provided in CSV format and had to be cleaned to remove errors and allow for loading into the database. To do this I used the "csv-parse" node module in addition to some filesystem "fs" commands to read through every line of the several million entries. 

I used an express/node.js server in the MVC style to handle receiving data to and from a PostgreSQL server. Within my microservice I used 5 AWS EC2 instances to horizontally scale the project. One instance had an nginx server deployed to handle caching and horizontal scaling (least-connected). This server would distribute requests to 3 identical node servers, which all, in turn, connected to a PostgreSQL database. I used K6 testing software to test request throughput locally. I used indexing and optimized my queries to achieve throughput of around 800 requests per second on single server deployed locally. Then I used loader.io to test throughput after deploying. Overall, I was able to deploy the site and handle around 4500 requests per second with sub 1% error rates after optimization, horizontal scaling, and caching.

### Tech Stack
**Back-End:** Node.js, Express.js, PostgreSQL </br>
**Deployment:** AWS EC2 </br>
**Testing:** K6, Loader.io

## Getting Started

### Dependencies

| Dependency | Version|
| :-: | :-: | 
| csv-parse | 4.16.3 |
| express | 4.17.1 |
| morgan | 1.10.0 |
| nodemon | 2.0.13 |
| pg | 8.7.1 |
| pg-hstore | 2.3.4|
| eslint | 7.32.0 |
| eslint-config-airbnb-base | 14.2.1 |
| eslint-plugin-import | 2.24.2 |

### Installing
To deploy this node server on an ec2 instance follow these instructions ...

Launch an AWS ec2 instance
SSH into your ec2 instance using terminal
Setup the environment by running the following 2 commands

```
$ sudo apt-get update
$ sudo apt-get upgrade -y
```
Install node, npm, and git with the following commands
```
$ sudo apt-get install -y nodejs
$ sudo apt install npm
$ sudo apt-get install git
```
Clone the server file from git
```
git clone [insert github link here]
```
Change into the server file directory and run 
```
$ npm install
```

## Authors

Contributors names and contact info

**Daniel Politis** - [Github](https://github.com/danpolitis)

