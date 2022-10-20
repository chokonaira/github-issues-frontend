<template>
  <div class="github-issue__container">
    <Spinner v-if="isLoading"/>
    <IssueCards v-else
        :issue='issue'
        :formatIssueBodyText='formatIssueBodyText'/>
  </div>
</template>
<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Spinner from '@/components/Spinner.vue';
import dateFormatter from '@/helpers/dateFormatter';
import textFormatter from '@/helpers/textFormatter';
import IssueCards from '@/components/IssueCards.vue';

export default {
  components: { Spinner, IssueCards },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    onMounted(async () => {
      await store.dispatch('fetchIssue', { id: props.id });
    });

    store.dispatch('fetchIssue', { id: props.id });

    const isLoading = computed(() => store.state.isLoading);
    const isIssueFetched = computed(() => store.state.isIssueFetched);
    const issue = computed(() => store.state.issue);

    const formatIssueBodyText = computed(() => textFormatter(issue.value?.body));

    return {
      formatIssueBodyText,
      isLoading,
      isIssueFetched,
      issue,
      dateFormatter,
    };
  },
};
</script>
