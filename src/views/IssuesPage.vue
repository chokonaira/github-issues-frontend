<template>
  <div class="github-issues__container">
    <div class="github-issues__list-container">
      <div class="github-issues__list-wrapper">
        <div class="github-issues__list">
          <IssueCard />
        </div>
        <!-- <Spinner v-else/> -->
      </div>
    </div>
  </div>
</template>

<script>
import IssueCard from '@/components/IssueCard.vue';
// import Spinner from '@/components/Spinner.vue';

export default {
  components: {
    IssueCard,
    // Spinner,
  },
  setup() {
    return {};
  },
};
</script>
