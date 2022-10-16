import { createStore } from 'vuex';
import { mutations } from '@/store/mutations';
import { actions } from '@/store/actions';

export default createStore({
  state: {
    isLoading: false,
    isIssuesFetched: false,
    isIssueFetched: false,
    errors: null,
    issues: [],
    issue: {},
  },
  mutations,
  actions,
});
