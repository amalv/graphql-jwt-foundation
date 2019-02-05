# graphql-jwt-foundation

[![Greenkeeper badge](https://badges.greenkeeper.io/amalv/graphql-jwt-foundation.svg)](https://greenkeeper.io/)

Graphql foundation with JWT based authentication support

## Prerequisite

You need to set up and run a mysql server and add the configuration under `config/routes/database.js`

## Usage example 

- Install dependencies and start server:

```
yarn && yarn start
```

- Create user using REST API `register`end point:

```
curl -H "Content-Type: application/json" -X POST -d '{"email":"test@mail.com", "username": "foo", "password":"test","password2":"test"}' http://localhost:3000/rest/register
```

- Login user using REST API `login` end point:

```
curl -H "Content-Type: application/json" -X POST -d '{"email":"test@mail.com","password":"test"}' http://localhost:3000/rest/login
```

- Get user using GraphQL API:

```
curl -i -H "Content-Type:application/json" -H "Authorization: Bearer <token>" -X POST -d '{"query": "{user{id, username}}"}'  http://localhost:3000/graphql
```
 
 - Create a note for a user using GraphQL API:
 
 ```
 curl -i -H "Content-Type:application/json" -H "Authorization: Bearer <token>" -X POST -d '{"query": "mutation{createNote(userId:1,note:\"this is a note\"){id,userId,note}}"}' http://localhost:3000/graphql
 ```
 
 - Request user with its notes:
 
```
curl -i -H "Content-Type:application/json" -H "Authorization: Bearer <token>" -X POST -d '{"query": "{user{id, username, notes{id, note}}}"}'  http://localhost:3000/graphql
```



