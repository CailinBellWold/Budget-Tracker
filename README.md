# 19 PWA Homework: Online/Offline Budget Trackers

[![License: MIT](https://img.shields.io/github/license/CailinBellWold/Team-Profile-Generator?style=plastic)](https://opensource.org/licenses/MIT)

## Description 

Add functionality to an existing Budget Tracker application to allow for offline access and functionality.

### Motivation

Gaining skills to allow user of my apps to use offline functionality will allow users to access their information any time, improving overall app functionality.

### Learning Targets
Build out the manifest, service-worker and db files need to create a progressive web app (PWA). Continue to develop skills working with Mongo/Mongoose and deploying to Heroku while hosting the database on MongoDB Atlas.

## Table of Contents
- [Core Objectives Met](#Core)
- [Technologies Used](#Technologies)
- [Local Installation & Usage](#Local)
- [Deployed App](#Deployed)
- [Demo](#Demo)
- [License](#MIT)
- [Questions](#Questions)

## Core Objectives Met

1. When a user is on Budget App without an internet connection AND they input a withdrawal or deposit, the transactions will be shown on the page and added to their transaction history when their connection is back online.
2. The app is built using a MongoDB database.
3. The app is deployed to Heroku.

## Technologies Used 
- Heroku
- JavaScript
- Mongo
- [MongoDB Atlas] (https://www.mongodb.com/cloud/atlas)
- Mongoose
- Node.js
- [NPM Express.js Package](https://www.npmjs.com/package/express)
- [NPM Express-Session Package](https://www.npmjs.com/package/express-session)
- [NPM dotenv Package](https://www.npmjs.com/package/dotenv)
- [NPM nodemon Package](https://www.npmjs.com/package/nodemon)

## Local Installation & Usage

To use this app, you will need a MongoDB account, and to have the app installed on your machine. Documentation with installation instructions are available [here.](https://docs.mongodb.com/manual/installation/) 

STEP 1

    1.1 Clone this Budget-Tracker repo to your machine.

STEP 2

From your terminal, run:

    2.1 mongo

STEP 3

From a second terminal window, run:

    3.1 npm i
    3.2 npm run watch

STEP 4

From the modern browser of your choice, visit:

    4.1 http://localhost:3000

## Deployed App

[This Budget Tracker app has been deployed on Heroku and is available here.](https://budget-tracker-cailin.herokuapp.com/)

## Demo

Link: [Budget-Tracker demo](https://drive.google.com/file/d/1ha4k0m_-weLcQlnftrIUmm4fSGk6Op_6/view)

SCREENSHOT: Homepage, containing funds both added and subtracted while on- and off-line.

![Budget Tracker Dashboard.](/public/images/Budget-Tracker-Screenshot.png)

## MIT License

&copy;2021 Cailin Bell Wold

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Questions
For inquiries, please contact [Cailin Bell Wold](https://github.com/CailinBellWold).