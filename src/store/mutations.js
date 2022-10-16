// eslint-disable-next-line import/prefer-default-export
export const mutations = {
  SET_SPINNER(state) {
    state.isLoading = true;
  },
  ADD_ISSUES(state, payload) {
    state.isLoading = false;
    state.isIssuesFetched = true;
    state.issues = payload;
  },
  ADD_ISSUE(state, payload) {
    state.isLoading = false;
    state.isIssueFetched = true;
    state.issue = payload;
  },
  SET_ERRORS(state, payload) {
    state.isLoading = false;
    state.errors = payload.message;
  },
};
