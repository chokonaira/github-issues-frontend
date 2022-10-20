import axiosConfig from '@/helpers/axiosConfig';

// eslint-disable-next-line import/prefer-default-export
export const actions = {
  async fetchIssues({ commit }) {
    try {
      commit('SET_SPINNER');

      const { data: { issues } } = await axiosConfig(`${process.env.VUE_APP_BASE_URL}.json`).get();

      commit('ADD_ISSUES', issues);
    } catch (error) {
      commit('SET_ERRORS', error);
      return error;
    }
  },

  async fetchIssue({ commit }, { id }) {
    try {
      commit('SET_SPINNER');

      const { data: { issue } } = await axiosConfig(`${process.env.VUE_APP_BASE_URL}/${id}.json`).get();

      commit('ADD_ISSUE', issue);
    } catch (error) {
      commit('SET_ERRORS', error);
      return error;
    }
  },
};
