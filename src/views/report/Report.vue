<template>
  <div class="report">
    <div class="loader" v-if="loading">
      <img src="/preloader.gif" alt="preloader">
    </div>
    <div v-else>
      <h1 class="report-title">IoT devices report</h1>
      <div class="report-wrapper" v-if="reports.length">
        <ReportCard :reports="reports"></ReportCard>
      </div>
      <ReportPlaceholder v-else></ReportPlaceholder>
    </div>
  </div>
</template>

<script>
import ReportCard from '@/views/report/partials/ReportCard.vue';
import ReportPlaceholder from '@/views/report/partials/ReportPlaceholder.vue';

export default {
  name: 'Report',
  components: {
    ReportCard,
    ReportPlaceholder,
  },
  data() {
    return {
      loading: false,
    };
  },

  methods: {
    async fetchData() {
      try {
        this.loading = true;
        await this.$store.dispatch('report/loadReports');
        this.loading = false;
      } catch (e) {
        this.loading = false;
      }
    },
  },

  computed: {
    reports() {
      return this.$store.getters['report/getReports'];
    },
  },

  async created() {
    await this.fetchData();
  },
};
</script>
