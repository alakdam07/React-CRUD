# User REST API

### A simple REST API for querying and performing CRUD operations from this [REST Api site](https://reqres.in/).

## Project Goals

This project is meant to showcase a very simple CRUD implementation.

**Tachnology:**

- **App built on:** React tsx.
- **Dev dependencies:** react-router-dom and axios.

## Backlogs

- [x] Setup app
  - [x] Create React-app
  - [x] Install dependencies
  - [x] Use hooks
  - [x] use Axios' (GET, POST, PATCH, DELETE) Method
  - [x] For styling: [Materializecss CDN](https://materializecss.com/getting-started.html)
- [x] App deployment setup
  - [x] Create s3 bucket
  - [x] Set up s3 policy and static web hosting
  - [x] Deploy to s3 bucket
  - [x] App launched: [React-CRUD](http://fakeapicrud.s3-website-us-east-1.amazonaws.com/)

## Routes

Accepts requests at the following routes (replace `resource` with `users` or `movies`):

| Method | Path           | Description               |
| ------ | -------------- | ------------------------- |
| GET    | /api/users     | Users list                |
| GET    | /api/users/:id | Single user               |
| POST   | /api/login     | Login                     |
| POST   | /api/register  | Signup                    |
| POST   | /api/users     | Create user               |
| PATCH  | /api/users/:id | Update user's information |
| DELETE | /api/users/:id | Delete user               |

## Tech information

| Tech               | Version |
| ------------------ | ------- |
| React              | 16.13.0 |
| axios              | 0.19.2  |
| Materializecss CDN | 1.0.0   |

## Usage

```bash
$ git clone https://github.com/alakdam07/React-CRUD.git

$ npm install

$ npm start
```

## Author

[Alak Dam](http://www.alakdam.com/)

## License

This project is licensed under the MIT License
