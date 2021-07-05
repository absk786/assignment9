# assignment9


# Project Title: Note Taker
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

![](/Users/abdulrehmankhalil/projects/P1/asignments/assignment9/Screen Shot 2021-07-05 at 7.59.31 AM.png)
## Name: Abdul

## [GitHub](https://github.com/absk786)

## Table of Contents:
* [Description](https://github.com/absk786/assignment7/blob/main/README.md#Description)
* [Installation](https://github.com/absk786/assignment7/blob/main/README.md#Installation)
* [Usage](https://github.com/absk786/assignment7/blob/main/README.md#Usage)
* [Licences](https://github.com/absk786/assignment7/blob/main/README.md#License)
* [Languages](https://github.com/absk786/assignment7/blob/main/README.md#Languages)
* [Features](https://github.com/absk786/assignment7/blob/main/README.md#Features)
* [Tests](https://github.com/absk786/assignment7/blob/main/README.md#Tests)
* [Contributors](https://github.com/absk786/assignment7/blob/main/README.md#Contributors)

-------------------------------------------------------------------------------------
### Description: 
* this is a project where we integrated a sever with the front end and the back end. It used html and api routes and CRUD methods to store data

### Installation: 
* nodemon, uuid
 
### Usage: 
* undefined

### Languages: 
* JavaScript,HTML,CSS,Node

### License:
* MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Features: 
* n/a

### Tests: 
* there are no tests for this app yet

### Contributors: 
* others are welcome to contribute

Questions
* any questions email me at rehmank11@gmail.com



------------------------
# 11 Express.js: Note Taker

## Your Task

Your challenge is to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end has already been created. It's your job to build the back end, connect the two, and then deploy the entire application to Heroku.

Before you start, clone [the starter code](https://github.com/coding-boot-camp/miniature-eureka).


## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```


## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```


## Mock-Up

The following images show the web application's appearance and functionality: 

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets/11-express-homework-demo-01.png)

![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.](./Assets/11-express-homework-demo-02.png)


## Getting Started

The application should have a `db.json` file on the back end that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).

## Bonus

You haven’t learned how to handle DELETE requests, but this application has that functionality in the front end. As a bonus, see if you can add the DELETE route to the application using the following guideline:

* `DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
