import store from '@/store';
import { actions } from '@/store/actions';
import axiosConfig from '@/helpers/axiosConfig';
import MockAdapter from 'axios-mock-adapter';

describe('store', () => {
  it('intitial store state', () => {
    const state = {
      isLoading: false,
      isIssuesFetched: false,
      isIssueFetched: false,
      errors: null,
      issues: [],
      issue: {},
    };

    expect(store.state).toEqual(state);
  });

  describe('mutations', () => {
    it('adds issues list to the state', () => {
      const issues = [{ id: 1 }, { id: 2 }];

      expect(store.state.issues).toEqual([]);
      expect(store.state.isIssuesFetched).toEqual(false);

      store.commit('ADD_ISSUES', issues);

      expect(store.state.issues).toEqual(issues);
      expect(store.state.isIssuesFetched).toEqual(true);
    });

    it('adds a single issue with details to the state', () => {
      const issue = { id: 1 };

      expect(store.state.issue).toEqual({});
      expect(store.state.isIssueFetched).toEqual(false);

      store.commit('ADD_ISSUE', issue);

      expect(store.state.issue).toEqual(issue);
      expect(store.state.isIssueFetched).toEqual(true);
    });

    it('sets errors to the state', () => {
      const errors = { message: 'error' };

      expect(store.state.errors).toEqual(null);

      store.commit('SET_ERRORS', errors);

      expect(store.state.errors).toEqual(errors.message);
    });
  });

  describe('actions', () => {
    describe('Fetch Repository Issues', () => {
      const commit = jest.fn();
      const mockAdapter = new MockAdapter(axiosConfig(`${process.env.VUE_APP_BASE_URL}.json`));

      it('Successfull https request that returns a list all open issues matching a repository', async () => {
        const issuesData = [
          {
            id: '4',
            number: 838,
            state: 'open',
            title: 'Dependabot issue',
            body: '## body\r\n\r\nbody 1',
            user: {
              login: 'gustavo1',
              avatar_url: 'https://avatars.gustavo2.com',
              type: 'User',
              url: 'https://avatars.gustavo2.com',
            },
          },
          {
            id: '5',
            number: 839,
            state: 'open',
            title: 'Header Button not redirecting',
            body: '## body\r\n\r\nbody 2',
            user: {
              login: 'henry',
              avatar_url: 'https://avatars.gustavo2.com',
              type: 'User',
              url: 'https://avatars.gustavo2.com',
            },
          },
        ];

        const payload = mockAdapter.onGet()
          .reply(200, issuesData);

        await actions.fetchIssues({ commit });

        expect(payload.handlers.get[0][4]).toEqual(issuesData);
        expect(commit).toHaveBeenCalledWith('SET_SPINNER');
      });

      it('dispatches fetchIssues action with error', async () => {
        const errorMessage = 'Error occurred';

        const payload = mockAdapter.onGet()
          .reply(400, errorMessage);

        await actions.fetchIssues({ commit });

        expect(payload.handlers.get[0][4]).toEqual(errorMessage);
        expect(commit).toHaveBeenCalledWith('SET_SPINNER');
      });
    });

    describe('Fetch Specific Repository Issue details', () => {
      const commit = jest.fn();
      const id = '1';
      const mockAdapter = new MockAdapter(axiosConfig(`${process.env.VUE_APP_BASE_URL}/${id}.json`));

      it('Successfull https request that returns details of a specific issue matching its Id ', async () => {
        const issueData = [
          {
            id: '1',
            number: 838,
            state: 'open',
            title: 'Dependabot issue',
            body: '## body\r\n\r\nbody 1',
            user: {
              login: 'gustavo1',
              avatar_url: 'https://avatars.gustavo2.com',
              type: 'User',
              url: 'https://avatars.gustavo2.com',
            },
          },
        ];

        const payload = mockAdapter.onGet()
          .reply(200, issueData);

        await actions.fetchIssue({ commit }, { id });

        expect(payload.handlers.get[0][4]).toEqual(issueData);
        expect(commit).toHaveBeenCalledWith('SET_SPINNER');
      });

      it('dispatches fetchIssue action with error', async () => {
        const errorMessage = 'Error occurred';

        const payload = mockAdapter.onGet()
          .reply(400, errorMessage);

        await actions.fetchIssue({ commit }, { id });

        expect(payload.handlers.get[0][4]).toEqual(errorMessage);
        expect(commit).toHaveBeenCalledWith('SET_SPINNER');
      });
    });
  });
});
