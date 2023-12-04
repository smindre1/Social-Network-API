# Present List

By Shane Mindreau

## Description

This is a `Social Network API` using `NoSQL`.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Tests](#tests)

## Installation

- Clone the code.
- If it is not already setup, then install and setup [**MongooseDBCompass**](https://www.mongodb.com/products/tools/compass) so you can run a NoSQL database.
- Once you have MongooseDBCompass ready, open it up and compare the connection you are using with the connection currently setup in `/config/connection.js line 5`.
- To get the proper dependencies move into your code's directory and perform an `npm install` to download the necessary node modules.
- Once done you can perform a `Node server.js` command in the terminal to run the API locally.
- If you would like to seed the database perform a `utils/seed.js` command.

## Usage

The following video show the web application's appearance and functionality:

**[`Demo Video`](https://drive.google.com/file/d/1cIBZiOeb6yDll4cOLRFKkysbygRURhCU/view?usp=sharing)**

## API Route Endpoints:

### `USER Routes (POST|GET|PUT|DELETE)`

- `POST:`

  - `Endpoint:` /api/user/
    - `JSON Body Example:` {username: 'GuitarHero', email: 'stringShredder@gmail.com'}
    - `Purpose:` Creates a new User.

- `GET:`

  - `Endpoint:` /api/user/
    - `Purpose:` Gets all Users currently in the database as an Object Array.
  - `Endpoint:` /api/user/:userId/
    - `Purpose:` Gets one specific User based on the userId, but only if they exist in the database.

- `PUT:`

  - `Endpoint:` /api/user/:userId/
    - `JSON Body Example:` {username: 'GuitarVillain'}
    - `JSON Body Example:` {email: 'brokenStrings@gmail.com'}
    - `JSON Body Example:` {username: 'GuitarVillain', email: 'brokenStrings@gmail.com'}
    - `Purpose:` Updates a specific User's information based the JSON body sent.

- `DELETE:`
  - `Endpoint:` /api/user/:userId/
    - `Purpose:` Deletes a specific User, based on the user ID, from the database along with all their Thought model items.

### `FRIEND Routes (POST|DELETE)`

- `POST:`

  - `Endpoint:` /api/user/:userId/friends/friendId/
    - `JSON Body Example:` {username: 'GuitarHero', email: 'stringShredder@gmail.com'}
    - `Purpose:` Adds another User's id (friendID) to the main User's friend list/array.

- `DELETE:`
  - `Endpoint:` /api/user/:userId/friends/friendId/
    - `Purpose:` Removes a specific friend Id (A.K.A. a userId) from a specific User's friend list.

### `Thought Routes (POST|GET|PUT|DELETE)`

- `POST:`

  - `Endpoint:` /api/thoughts/
    - `JSON Body Example:` {thoughtText: 'I like Pandas!', username: 'Bobby'}
    - `Purpose:` Creates a new Thought and updates A User's thought array/list (located by the username).

- `GET:`

  - `Endpoint:` /api/thoughts/
    - `Purpose:` Gets all Thoughts currently in the database as an Object Array.
  - `Endpoint:` /api/thoughts/:thoughtId/
    - `Purpose:` Gets one specific Thought based on the thoughtId, but only if it exists in the database.

- `PUT:`

  - `Endpoint:` /api/thoughts/:thoughtId/
    - `JSON Body Example:` {thoughtText: 'I like PANDAS!!!!'}
    - `Purpose:` Updates a specific Thought's information based the JSON body sent.

- `DELETE:`
  - `Endpoint:` /api/thoughts/:thoughtId/
    - `Purpose:` Deletes a specific Thought, based on the thought ID, from the database.

### `REACTION Routes (POST|DELETE)`

- `POST:`

  - `Endpoint:` /api/thoughts/:thoughtId/reactions/
    - `JSON Body Example:` {reactionBody: 'I also like pandas!', username: 'GuitarVillain'}
    - `Purpose:` This creates a Reaction object which has it's Id listed in a specific Thought's reaction array.

- `DELETE:`
  - `Endpoint:` /api/thoughts/:thoughtId/reactions/:reactionId/
    - `Purpose:` Deletes a specific reaction object and removes it's reaction Id from it associated Thought object's listed reactions.

## Credits

For this project I utilized Node.js, using the npm packages:

- express: ^4.18.2
- mogoose: ^7.0.2

## License

MIT License

## Badges

N/A

## Features

- You can seed the database with the `utils/seed.js` command.
- This runs on NoSQL

## Tests

There currently are no tests set up for this app's code.
