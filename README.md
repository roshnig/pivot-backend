# Pivot
Pivot questions are diagnostic questions during a presentation that allow presenters to identify misconceptions. Pivot allows a presenter to attach response data to Google slides so that audience can vote and receive feedback. 

## Pivot-Backend Project



### Repos
https://github.com/isle88/pivot-frontend                       --student
https://github.com/roshnig/pivot-frontend-teacher.git          --teacher
https://github.com/roshnig/pivot-backend.git                   --backend

### Hosted version
https://rhs-pivot-backend.herokuapp.com/                       --backend
https://pivot-fe.netlify.app/                                 --student
https://pivot-fe-presenter.netlify.app                       -- teacher

### Install
npm init
npm install express socket.io cors
npm install nodemon -D
npm install --save mongoose


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

