import { mount } from '@vue/test-utils';
import IssuesPage from '@/views/IssuesPage.vue';
import Spinner from '@/components/Spinner.vue';
import IssuesCards from '@/components/IssuesCards.vue';
import { createStore } from 'vuex';
import BalmUI from 'balm-ui';
import router from '../../src/router';

const issuesMock = [
  {
    id: '4',
    number: 838,
    state: 'open',
    title: 'Dependabot issue',
    body: '## body\r\n\r\nbody 1',
    created_at: '2022-09-23T11:12:00.000Z',
    updated_at: '2022-10-23T13:44:21.000Z',
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
    created_at: '2022-09-25T11:12:00.000Z',
    updated_at: '2022-10-25T13:44:21.000Z',
    user: {
      login: 'henry',
      avatar_url: 'https://avatars.gustavo2.com',
      type: 'User',
      url: 'https://avatars.gustavo2.com',
    },
  },
];

const store = createStore({
  state() {
    return {
      isLoading: false,
      issues: issuesMock,
    };
  },
  actions: {
    fetchIssues: jest.fn(),
  },
});

const factory = () => {
  const wrapper = mount(IssuesPage, {
    global: {
      plugins: [store, BalmUI, router],
    },
    propsData: {
      issues: issuesMock,
    },
  });
  wrapper.vm.$nextTick();
  return wrapper;
};

describe('Issues Page', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = factory();
    store.state.isLoading = false;
  });

  test('Issues Page mounts properly', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test('Spinner Component is mounted when isLoading is true', () => {
    store.state.isLoading = true;
    wrapper.findComponent(Spinner);
    expect(wrapper.exists()).toBe(true);
  });

  test('IssuesCards Component is not mounted when isLoading is false', () => {
    wrapper.findComponent(IssuesCards);
    expect(wrapper.exists()).toBe(true);
  });

  test('Issues Page IssuesCards Displays a element with Issue Title', () => {
    expect(wrapper.html()).toContain('storyblok');
  });

  test('Issues Page IssuesCards router links routes to a issue details page with the right Id path', () => {
    expect(wrapper.html()).toContain('href="/issues/4/"');
    expect(wrapper.html()).toContain('href="/issues/5/"');
  });

  test('Issues Page Displays a element with Issue Title', () => {
    expect(wrapper.html()).toContain('Dependabot issue');
    expect(wrapper.html()).toContain('Header Button not redirecting');
  });

  test('Issues Page Displays a element with Issue Number and the issue authors name', () => {
    expect(wrapper.html()).toContain('#838 opened on Oct 23 by gustavo');
    expect(wrapper.html()).toContain('#839 opened on Oct 25 by henry');
  });
});
