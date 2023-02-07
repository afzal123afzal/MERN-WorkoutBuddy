# Workout Buddy - Workout tracker

## Table of contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Run](#run)
- [Technology](#technology)
- [Features](#features)


## Introduction

An interface to add and delete workouts 

NOTE: Please read the RUN section before opening an issue.

## Demo

![This is an image](/workoutBuddy.png)
## Run

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

- NODE_ENV: Specify the environment as development or production

- PORT: Specify the port Number

- MONGO_URI: MongoDB connection string to access database

After you've set these environmental variables in the .env file at the server folder of the project, and intsall node modules using  `npm install` in both server and client

Now run `npm run dev` in server to start the server and `npm start` in client and the application should work in the specified PORT

## Technology

The application is built with:

- Node.js 
- MongoDB
- Express 
- React.js
  - useContext to manage global state

## Features

- Add workout by specifying load and reps
- Delete workout



 Copyright 2022 © [Mohammed Afzal](https://github.com/afzal123afzal)
