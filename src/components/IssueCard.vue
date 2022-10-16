<template>
  <ui-card outlined class="issues-card">
  <div
    v-if="issues.length>0"
    :class="[$tt('subtitle2'), 'issues-card__article-group-heading']">
    storyblok/<span class="issues-card__issues-query">storyblok</span>
  </div>
  <ui-list-divider></ui-list-divider>
    <div v-for="(item, index) in issues" :key="index">
      <router-link class="issues-card__navbar-link"
      :to="{ name: 'IssueDetailsPage', params: { issueNumber: item.number } }">
        <div v-ripple  class="issues-card__article">
          <div>
            <div class="issues-card__container">
              <ui-icon class="issues-card__article-icon" :size='18' dark>adjust</ui-icon>
              <h3 class="issues-card__article-title">
                Dependency is deprecated
              </h3>
            </div>
          </div>
            <p class="issues-card__issue-details">#100 opened on Aug 20 by chokonaira </p>
        </div>
      </router-link>
        <ui-list-divider></ui-list-divider>
    </div>
    </ui-card>
</template>
<script>
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const store = reactive({
      issues: [
        {
          number: 100,
          state: 'open',
          title: 'Dependency is deprecated',
          body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          user: {
            login: 'chokonaira',
            avatar_url: 'https://avatars.githubusercontent.com/u/38280567?v=4',
            type: 'User',
            url: 'https://api.github.com/users/chokonaira',
          },
        },
        {
          number: 100,
          state: 'open',
          title: 'Dependency is deprecated',
          body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          user: {
            login: 'chokonaira',
            avatar_url: 'https://avatars.githubusercontent.com/u/38280567?v=4',
            type: 'User',
            url: 'https://api.github.com/users/chokonaira',
          },
        },
        {
          number: 100,
          state: 'open',
          title: 'Dependency is deprecated',
          body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          user: {
            login: 'chokonaira',
            avatar_url: 'https://avatars.githubusercontent.com/u/38280567?v=4',
            type: 'User',
            url: 'https://api.github.com/users/chokonaira',
          },
        },
      ],
    });

    return {
      ...toRefs(store),
    };
  },
};
</script>
