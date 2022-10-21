import { mount } from '@vue/test-utils';
import IssueDetailsPage from '@/views/IssueDetailsPage.vue';
import Spinner from '@/components/Spinner.vue';
import IssueCards from '@/components/IssueCards.vue';
import { createStore } from 'vuex';
import BalmUI from 'balm-ui';

jest.mock('@/helpers/textFormatter', () => jest.fn().mockImplementation(() => 'hello world'));

const issueMock = {
  id: '1',
  number: 838,
  state: 'open',
  title: 'Dependabot issue',
  body: '## body\r\n\r\nbody',
  created_at: '2022-09-21T11:12:00.000Z',
  updated_at: '2022-10-20T13:44:21.000Z',
  user: {
    login: 'gustavo',
    avatar_url: 'https://avatars.gustavo.com',
    type: 'User',
    url: 'https://avatars.gustavo.com',
  },
};

const store = createStore({
  state() {
    return {
      isLoading: false,
      issue: issueMock,
    };
  },
  actions: {
    fetchIssue: jest.fn(),
  },
});

const factory = () => {
  const wrapper = mount(IssueDetailsPage, {
    global: {
      plugins: [store, BalmUI],
    },
    propsData: {
      id: '1',
    },
  });
  wrapper.vm.$nextTick();
  return wrapper;
};

describe('IssueDetails Page', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = factory();
    store.state.isLoading = false;
  });

  test('IssueDetails Page mounts properly', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test('Spinner Component is mounted when isLoading is true', () => {
    store.state.isLoading = true;
    wrapper.findComponent(Spinner);
    expect(wrapper.exists()).toBe(true);
  });

  test('IssueCards Component is not mounted when isLoading is false', () => {
    wrapper.findComponent(IssueCards);
    expect(wrapper.exists()).toBe(true);
  });

  test('IssueDetails Page takes a props of Id', () => {
    expect(wrapper.props()).toEqual({ id: '1' });
  });

  test('IssueDetails Page Displays a element with Issue Title', () => {
    expect(wrapper.html()).toContain('Dependabot issue');
  });

  test('IssueDetails Page Displays a element with Issue Number', () => {
    expect(wrapper.html()).toContain('#838');
  });

  test('IssueDetails Page Displays a element with Issue state', () => {
    expect(wrapper.html()).toContain('open');
  });

  test('IssueDetails Page Displays a element with Issue user\'s avatar_url src path ', () => {
    expect(wrapper.html()).toContain('src="https://avatars.gustavo.com"');
  });

  test('IssueDetails Page Displays a element with Issue user\'s username', () => {
    expect(wrapper.html()).toContain('gustavo');
  });

  test('IssueDetails Page Displays a element with Issue comments date in the right formatted text', () => {
    expect(wrapper.html()).toContain('commented on Oct 20');
  });

  test('IssueDetails Page Displays a element with Issue body text in the right formatted text', () => {
    expect(wrapper.html()).toContain('hello world');
  });
});
