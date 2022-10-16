<template>
  <div class="github-issue__container">
    <div class="github-issue__list">
      <button class="github-issue__back-link" @click="$router.back()">
        <ui-icon>west</ui-icon>
      </button>
      <h2 class="github-issue__title">{{issue.title}}
        <span class="github-issue__number">#{{issue.number}}</span>
      </h2>
      <ui-list-divider></ui-list-divider>
      <div class="github-issue__card-wrapper">
        <img :src='issue?.user.avatar_url' class="github-issue__reporter-image"
          alt="issue reporter avatar" />
        <ui-card outlined class="github-issue__card">
          <div class="github-issue__subtitle timeline-comment--caret" :class="[$tt('subtitle2'),
          'issues-card__article-group-heading']">
            <span class="issues-card__issues-query">{{issue.user.login}}</span> commented on Aug 15
          </div>
          <ui-list-divider></ui-list-divider>
          <div class="github-issue__body">
            <p v-html="formatIssueBodyText"></p>
          </div>
        </ui-card>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, reactive, toRefs } from 'vue';

export default {
  components: {},
  setup() {
    const store = reactive({
      issue: {
        number: 100,
        state: 'open',
        title: 'Dependency is deprecated',
        body: "**The issue occurs while working with:** (check one with \"x\")   \r\n- [x] *app.storyblok.com (CMS - Interface)*   \r\n- [ ] *api.storyblok.com (CMS - Content Delivery API)*\r\n- [ ] *mapi.storyblok.com (CMS - Management API)*\r\n- [ ] *capi.storyblok.com (Commerce - API)*     \r\n- [ ] *Commerce - Interface*   \r\n- [ ] *Other:* <!-- => If you've got an issue with on of our boilerplates or themes - please create an issue in the specific repo -->\r\n\r\n**Current behavior:**\r\nWhen you are in the blok editing menu and you click inside, drag the mouse out of the box and unclick outside the box (the regular movent to select a text) the menu closes. \r\n\r\n**Expected behavior:**\r\nIt should not close when you are unclick outside the menu",
        url: 'https://api.github.com/repos/storyblok/storyblok/issues/848',
        user: {
          login: 'chokonaira',
          avatar_url: 'https://avatars.githubusercontent.com/u/38280567?v=4',
          type: 'User',
          url: 'https://api.github.com/users/chokonaira',
        },
      },
    });

    const formatIssueBodyText = computed(() => {
      const linebreak = /(\r\n-|\n-|\r)/g;
      const bold = /\*\*(.*?)\*\*/gm;
      const italics = /\*(.*?)\*/gm;
      const checked = /\[\x\]/g;

      return store.issue.body
        .replace(linebreak, '<br />')
        .replace(bold, '<b>$1</b>')
        .replace(italics, '<i>$1</i>')
        .replace(checked, '<input checked type="checkbox">');
    });

    return {
      ...toRefs(store),
      formatIssueBodyText,
    };
  },
};
</script>
