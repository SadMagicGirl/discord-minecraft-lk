# Minecraft Discord LK


This is a simple, widely customizable discord bot that provides opportunities for registration and player skin/cloak management. This project is aimed primarily at private minecraft servers who want to get all the possibilities for registering players without the need to create a separate website


## Features

- Player account management. Registration, automatic generation and password recovery
- Uploading a cloak and skin for a player with support for HD versions
- Connecting to sql database


## Installation

DML requires [Node.js](https://nodejs.org/) v20+ to run.

Install the dependencies and start the server.

```sh
cd discord-minecraft-lk
npm i
```
Now install [PostgreSQL](https://www.postgresql.org/) and configure settings.json
Rename settings-sample.json to settings.json

```bash
mv settings-sample.json settings.json
```

You can run bot in dev mode or in normal mode by using this commands:

```
npm dev
npm start
```

## DML Configuration

For DML to work fully, you must configure settings.json

First, you must go to the discord developer portal and create a new bot. In the `"token"` field, add your bot's token. In the `"guild_id"` field, add the id of your discord server. In the `"bot_id"` field, add the id of your bot on the server.

```
    "discord": {
      "token": "discord-bot token",
      "guild_id": "1111111111111111111",
      "bot_id": "1111111111111111111"
    },
```
Secondly, create a postgres database and add its data to a sql block
```
    "sql": {
      "ip": "localhost",
      "port": "5432",
      "bd_name": "minecraft",
      "user": "postgres",
      "pass": "password",
      "logging": false
    },
```
After setting up your connection details ONLY ONCE to initialize the database you must:
1. Go to /src/sql/models/users.js
2. Uncomment Users.sync (Line number 37)
3. Run `npm dev`
4. After the program has started completely, stop the process by pressing Ctrl+C
5. Comment Users.sync again
6. And run the bot

This will be fixed in future versions! 

To configure skins and cloaks, set up directories in the corresponding blocks.

```
    "skins" : {
      "path": "./skins"
    },
    "cloaks" : {
      "path": "./cloaks"
    },
```
In the `"misc"` block you can further configure the bot.
`password_length` - max password length
`role_name` - The name of the role that players will receive after registration
`role_color` - Color of this role. In HEX
`avalible_skin_sizes` - Array of valid skin sizes. By default, both old and new skin formats are supported
```
    "misc": {
      "password_length": 10,
      "role_name": "Minecraft Player",
      "role_color": "#00f0a3",
      "avalible_skin_sizes": [
        "64x64",
        "128x128",
        "256x256",
        "512x512",
        "64x32",
        "128x64",
        "256x128",
        "512x256"
      ]
    },
```
In the `"admin"` block you can add the user-id of the bot administrators.
```
"admin": ["1111111111111111111"]
```
## Docker
Coming soon..
## License

MIT