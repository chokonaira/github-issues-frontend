import { allIssuesUrl, aIssueUrl } from '@/helpers/urlBuilder';
import axiosConfig from '@/helpers/axiosConfig';

// eslint-disable-next-line import/prefer-default-export
export const actions = {
  async fetchIssues({ commit }) {
    try {
      commit('SET_SPINNER');

      const { data } = await axiosConfig(
        allIssuesUrl('storyblok', 'storyblok'),
      ).get();

      commit('ADD_ISSUES', data);
      return data;
    } catch (error) {
      commit('SET_ERRORS', error);
      return error;
    }
  },

  async fetchIssue({ commit }, { issueNumber }) {
    try {
      commit('SET_SPINNER');

      const { data } = await axiosConfig(
        aIssueUrl('storyblok', 'storyblok', issueNumber),
      ).get();

      commit('ADD_ISSUE', data);
      return data;
    } catch (error) {
      commit('SET_ERRORS', error);
      return error;
    }
  },
};
