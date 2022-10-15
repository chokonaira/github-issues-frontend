// A helper to help build heroku url with needed dynamic parameters

export const allIssuesUrl = (company, repo) => `https://api.github.com/repos/${company}/${repo}/issues`;
export const aIssueUrl = (company, repo, issueNumber) => `https://api.github.com/repos/${company}/${repo}/issues/${issueNumber}`;
