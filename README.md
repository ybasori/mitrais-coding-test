# Mitrais Coding Test

The Backend uses PHP - Codeigniter 3 and the database uses MySQL.


The Frontend uses ReactJS.


## Backend Installation

Requirement:
- Php 7.2 or Greater
- Composer

```bash
cd server
composer install
```

## Backend Configuration

import database from db directory then configure file server/application/config/database.php

```php
$db['default'] = array(
    'dsn'    => '',
    'hostname' => 'localhost',
    'username' => 'root',
    'password' => '',
    'database' => 'mitrais_test',
    'dbdriver' => 'mysqli',
    'dbprefix' => '',
    'pconnect' => FALSE,
    'db_debug' => TRUE,
    'cache_on' => FALSE,
    'cachedir' => '',
    'char_set' => 'utf8',
    'dbcollat' => 'utf8_general_ci',
    'swap_pre' => '',
    'encrypt' => FALSE,
    'compress' => FALSE,
    'stricton' => FALSE,
    'failover' => array(),
    'save_queries' => TRUE
);
```

change hostname, username, password, database that suits your server engine.

configure cors in server/application/config/rest.php 

```php
$config['allowed_cors_origins'] = ['http://localhost:3000'];
```

change "http://localhost:3000" that suits your frontend.

## Frontend Installation

Requirement:

- NPM
- yarn

```bash
cd client
yarn install
```

## Frontend Configuration

client/src/_utils/Api.js

```javascript
import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost/server/api/v1"
});

```

change baseURL value that suits your API URL

## Get Started

```bash
cd client
yarn start
```

