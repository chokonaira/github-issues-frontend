## Github Issues

A Vue app leveraging the [Gihub API](https://docs.github.com/en/rest), where users can view all Github Issues for the StoryBlok repositoty and can view details of a specific issues and see some details like, the username of the reporter, the issue number, th issue body, the issue status etc. 

#### Github Actions CI Badges

[![Node.js CI](https://github.com/chokonaira/github-issues-frontend/actions/workflows/build.yml/badge.svg)](https://github.com/chokonaira/github-issues-frontend/actions/workflows/build.yml)

### Heroku Frontend URL
- https://henry-git-issues.herokuapp.com/

#### Project setup
- Start the backend rails server on `Port 3000`

- This project uses `yarn`
- Run `yarn install` from the root to install all dependencies
- Add `.env` in the project root directory and copy and paste the content of `.env.example`
- Run `yarn serve`
- The frontend app should be running and accessible via `http://localhost:3001/ `

#### Run test
- Ensure the backend server is running on `Port 3000`
- Run `yarn test:unit`

#### Run build
- Run `yarn build`

### Lints and fixes files
- Run `yarn lint --fix`

## Documentation
#### Website Routes
- View all issues from database - `/`
- View a specific Issue details page - `/issues/:id`

#### Server Endpoints (localhost)
- View all issues - `http://localhost:3000/issues.json`
- View a specific issue details - `http://localhost:3000/issues/:id.json`

#### Github URL Base
- Fetch all Issues from storyBlok repository - `https://api.github.com/repos/storyblok/storyblok/issues`


#### Core Technology & tools
##### Scaffolding and development
- [Vue CLI](https://cli.vuejs.org/guide/) 
- [Vue 3](https://v3.vuejs.org/guide/migration/introduction.html#overview) 
- [Vue Composition Api](https://v3.vuejs.org/guide/composition-api-introduction.html)
- [Vuex](https://vuex.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Express](https://expressjs.com/)
##### API Request
- [Axios](https://www.npmjs.com/package/axios)

##### Testing
- [Vue Test Utils](https://vue-test-utils.vuejs.org/)

##### Component Library & Styling
- [SCSS](https://sass-lang.com/)
- [BalmUI](https://material.balmjs.com/#/)

##### Devops - CI/CD
- [Github actions](https://github.com/features/actions)
- [Heroku](https://dashboard.heroku.com/)
