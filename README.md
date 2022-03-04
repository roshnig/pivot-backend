# Pivot App

This app require codes from three diffrent repository.

### Repos

https://github.com/roshnig/pivot-frontend-teacher.git --teache
https://github.com/isle88/pivot-frontend --student
https://github.com/roshnig/pivot-backend.git --backend

### Hosted version

https://pivot-fe-presenter.netlify.app -- teacher
https://pivot-fe.netlify.app/ --student
https://rhs-pivot-backend.herokuapp.com/ --backend

### Description

The teacher frontend allows for viewing of the original presentation slides as static images, and control of polling. Students join via a QR code generated on the teacher frontend, which opens the student frontend for them and allows them to vote on polling questions. They receive feedback based on their answer, and the teacher can display the total results on the board.

### Technical Overview

Pivot starts from Google slides. Once you have installed the add-on, clicking the red “Enable responses” button adds the question data to the google slide document itself as a key:value pair using the SlidesApp Document Properties, where the key is the ObjectId of the current slide, and the value is stringified JSON containing the question data.
Upon clicking the ‘Present with Pivot’ button, static thumbnail images of the slides are grabbed using the Slides API. The saved question data is retrieved, and all is sent to our backend as a POST request. The response value is a 4 character alphanumeric randomly generated sessionId. This is appended to the teacher frontend url and is launched in a new window.
The teacher frontend now has the session id from the url params, and uses this to obtain the slide data as a GET request from the backend. This enables it to display the slide images and decide whether to allow polling, and what feedback to give to the audience upon answer submission. It also generates a QR code, allowing members of the audience to join.
The student frontend also takes the session Id from the params and gets the data from the server, to decide hw many response buttons to render and what feedback to give to students.

### How to use

Follow how to create the google apps script project which is included below.
From within the google apps script editor, activate the legacy editor (as of Mar-22 you require the legacy editor to test as a standalone add-on.) From the menu, go to Run -> Test as Add-on. Set installation config to installed and enabled. Create a new test ‘Latest Code’. Click test and select a google slides document. Once open, add the pivot sidebar from the Add-ons menu. You can use this to add question data to slides. When you are ready to present, clilck ‘Present with Pivot’. This launches the teacher frontend in a new tab/window. Click the session id code at the top right to reveal the QR code, through which the audience can join. Go to a question slide using the navigation buttons at the bottom left. Click start to receive responses. Click Stop to end polling. Click display results to see a pie chart of all results.

### Creating the google apps script project

```
npm install @google/clasp -g
```

With your google account:

```
clasp login
```

Create a new apps script project

```
clasp create pivot
```

Upload to google apps script

```
clasp push
```

Edit in app script editor

```
clasp open

```

## Pivot-Backend

### Description

It seve as a backend for the pivot app. It receive and respond to requests from both frontend-teacher and frontend-student. Backend composed of a server, database, and google apps script. MongoDB serve as a database.

### Installation

Clone the backend from the repo https://github.com/roshnig/pivot-backend.git  
Run npm install. It will install node, express, mongoose, cors, dotenv, letter-id, socket-io, jest, nodemon and supertest.

### Running the backend

npm start command will start the backend.
