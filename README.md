![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)

# WayahNgopi Backend

---

## Table of Contents

- [Introduction](#introduction)
- [Configuration](#configuration)
- [Installation](#installation)
- [Other Dependencies](#Other_Dependencies)
- [License](#license)

---

## Introduction

WayahNgopi is point of sale for your choffee shop. Feel free to use and bought me coffee and cigarettes. Cheers.

---


## Configuration
<ol>
  <li>Basic Configuration</li>
  - Node.js - Download and Install [Node.js](https://nodejs.org/en/)
  - Postman - Download and Install [Postman](www.postman.com)
</ol>

---

## Installation
### Clone
```bash
$ git clone https://github.com/rifkiandriyanto/wayahNgopi-Backend
$ cd wayahNgopi-Backend
$ npm install

```
### Create Environment Variable
```bash
$ cp .env.example .env
$ nano .env
```
```bash
DB_HOST = "YOUR HOST"
DB_USER = "YOUR USER"
DB_PASSWORD = "YOUR PASSWORD"
DB_DATABASE = "YOUR DATABASENAME"
JWT_KEY = "secret key"
PORT = Your Port
DB_IP = Your IP
```
### Start Development Server
```bash
$ npm start
```
---

## Other_Dependencies

- [mysql](#)
- [crypto](#)
- [nodemon](#)
- [morgan](#)
- [body-parser](#)
- [dotenv](#)
- [jsonwebtoken](#)
- [cors](#)
- [helmet](#)
- [compression](#)

---

## License

© [Rifki Andriyanto](https://github.com/rifkiandriyanto/ " Rifki Andriyanto")

---