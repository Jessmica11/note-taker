# Note Taker App

## Application Resources

[GitHub Page]()

![Example Image/GIF of notes app]()

### Resources Used

[GUID/UUID in Javascript](https://www.geeksforgeeks.org/how-to-create-a-guid-uuid-in-javascript/)

### Challenges

At first it wasn't showing the saved notes off to the side of the page, so I fixed some of the coding. Then I think I had a mistype somewhere because then the save button didn't show at the top anymore. I also had to fix some of my file references in the server.js file.

Found this code online while trying to troubleshoot some errors: // Serve static files from the 'public' directory
app.use(express.static('public')); which is in the server.js file. Before adding this, the errors I was getting was related to showing HTML instead of json data.

Tried to write code for deleting a note, which is processed by the application but doesn't actually remove them from the fronend.

## Your Task

Your assignment is to modify starter code to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end has already been created. It's your job to build the back end, connect the two, and then deploy the entire application to Heroku.

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

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
