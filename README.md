## Github Issues

A Vue app leveraging the [Gihub API](https://docs.github.com/en/rest), where users can view all Github Issues for the StoryBlok repositoty and can view details of a specific issues and see some details like, the username of the reporter, the issue number, th issue body, the issue status etc. 

#### Github Actions CI Badges

[![Node.js CI](https://github.com/chokonaira/github-issues-frontend/actions/workflows/build.yml/badge.svg)](https://github.com/chokonaira/github-issues-frontend/actions/workflows/build.yml)

### Heroku Frontend URL
- https://henry-git-issues.herokuapp.com/

#### Project setup
- Start the backend rails server on `Port 3000`
- Run `yarn install` to install all dependencies
- Add `.env` in the project root directory and copy and paste the content of `.env.example`
- Run `yarn serve`
- The frontend app should be running and accessible via `http://localhost:3001/ `

#### Run test
- Run `yarn test:unit`
