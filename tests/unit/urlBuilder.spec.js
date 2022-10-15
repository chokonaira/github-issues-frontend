import { allIssuesUrl, aIssueUrl } from '@/helpers/urlBuilder';

describe('urlBuilder.js', () => {
  it('contructs a url to search for all repositories', () => {
    const company = 'storyBlok';
    const repo = 'storyBlok';
    const builder = allIssuesUrl(company, repo);

    expect(builder).toEqual('https://api.github.com/repos/storyBlok/storyBlok/issues');
  });

  it('contructs a url to fetch a specific owners repository', () => {
    const company = 'storyBlok';
    const repo = 'storyBlok';
    const issueNumber = 800;
    const builder = aIssueUrl(company, repo, issueNumber);

    expect(builder).toEqual('https://api.github.com/repos/storyBlok/storyBlok/issues/800');
  });
});
