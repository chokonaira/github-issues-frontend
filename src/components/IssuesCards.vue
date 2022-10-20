<template>
  <ui-card outlined class="issues-card">
  <div
    v-if="issues.length>0"
    :class="[$tt('subtitle2'), 'issues-card__article-group-heading']">
    storyblok/<span class="issues-card__issues-query">storyblok</span>
  </div>
  <ui-list-divider></ui-list-divider>
    <div v-for="(issue, index) in issues" :key="index">
      <router-link class="issues-card__navbar-link"
      :to="{ name: 'IssueDetailsPage', params: { id: issue.id } }">
        <div v-ripple  class="issues-card__article">
          <div>
            <div class="issues-card__container">
              <ui-icon class="issues-card__article-icon" :size='18' dark>adjust</ui-icon>
              <h3 class="issues-card__article-title">
                {{ issue.title }}
              </h3>
            </div>
          </div>
            <p class="issues-card__issue-details">
              #{{issue.number}} opened on {{ dateFormatter(issue.updated_at )}}
              by {{ issue.user.login }} </p>
        </div>
      </router-link>
        <ui-list-divider></ui-list-divider>
    </div>
    </ui-card>
</template>
<script>
import dateFormatter from '@/helpers/dateFormatter';

export default {
  props: {
    issues: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {
      dateFormatter,
    };
  },
};
</script>
