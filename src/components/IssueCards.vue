<template>
  <div class="issue-card">
      <button class="issue-card__back-link" @click="$router.back()">
        <ui-icon>west</ui-icon>
      </button>
      <h2 class="issue-card__title">{{issue.title}}
        <span class="issue-card__number">#{{issue.number}}</span>
      </h2>
      <div class="issue-card__open-wrapper">
        <span class="issue-card__open">
          <ui-icon class="issue-card__open-icon" :size='18' light>adjust</ui-icon>
          {{ issue.state }}
        </span>
        <p><span class="issue-card__issues-query">{{issue?.user.login}} </span>
          commented on {{ dateFormatter(issue.updated_at ) }}</p>
     </div>
      <ui-list-divider></ui-list-divider>
      <div class="issue-card__card-wrapper">
        <img :src='issue?.user.avatar_url' class="issue-card__reporter-image"
          alt="issue reporter avatar" />
        <ui-card outlined class="issue-card__card">
          <div class="issue-card__subtitle timeline-comment--caret" :class="[$tt('subtitle2'),
          'issues-card__article-group-heading']">
            <span class="issue-card__issues-query">{{issue?.user.login}}
            </span> commented on {{ dateFormatter(issue.updated_at ) }}
          </div>
          <ui-list-divider></ui-list-divider>
          <div class="issue-card__body">
            <p v-html="formatIssueBodyText"></p>
          </div>
        </ui-card>
      </div>
    </div>
</template>
<script>
import dateFormatter from '@/helpers/dateFormatter';

export default {
  props: {
    issue: {
      type: Object,
      required: true,
    },
    formatIssueBodyText: {
      type: String,
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
