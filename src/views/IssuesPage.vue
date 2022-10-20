<template>
  <div class="github-issues__container">
    <div class="github-issues__list-container">
      <div class="github-issues__list-wrapper">
        <div class="github-issues__list">
          <Spinner v-if='isLoading'/>
          <IssuesCards v-else :issues='issues'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Spinner from '@/components/Spinner.vue';
import IssuesCards from '@/components/IssuesCards.vue';

export default {
  components: {
    IssuesCards,
    Spinner,
  },
  setup() {
    const store = useStore();

    onMounted(async () => {
      await store.dispatch('fetchIssues');
    });

    const isLoading = computed(() => store.state.isLoading);
    const isIssuesFetched = computed(() => store.state.isIssuesFetched);
    const issues = computed(() => store?.state.issues);

    return {
      isLoading,
      isIssuesFetched,
      issues,
    };
  },
};
</script>
