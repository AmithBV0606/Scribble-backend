## Building backend for Scribble using the latest version of Express.js

### Type Module : 
```js
import express from "express";
```

In order to import in above mentioned way, set the "type" key to "module" value in the 'package.json' file. Like shown below : 

```json
{
  "name": "server",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module", //Type module
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^5.0.1"
  }
}
```

**NOTE :**

1. To keep the server up and running use the following command
```bash
node --watch index.js
```

2. To set the environment variable :
```bash
node --env-file .env --watch index.js
```

3. Add an ip address under the "Network access" tab in cloud.mongodb.com :
```
0.0.0.0/0
```

Using this ip address we'll be able to connect to the MongoDB cluster. But after deploying we'll be adding the ip address of our server.