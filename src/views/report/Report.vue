<template>
  <div class="report">
    <h1 class="report-title">IoT devices report</h1>
    <div class="report-wrapper">
      <ReportCard :data="data"></ReportCard>
    </div>
  </div>
</template>

<script>
import ReportCard from '@/views/report/partials/ReportCard.vue';

export default {
  name: 'Report',
  components: {
    ReportCard,
  },
  data() {
    return {
      data: {},
    };
  },

  methods: {
    fetchData() {
      fetch('https://run.mocky.io/v3/ea0aca4b-66c7-43ad-8e30-6b856f29a945', {
        method: 'GET',
      })
        .then((response) => {
          if (response.status !== 200) {
            return Promise.reject(new Error(response.statusText));
          }
          return Promise.resolve(response);
        })
        .then((response) => response.json())
        .then((response) => {
          this.data = response.data;
        })
        .catch((error) => {
          throw new Error(error);
        });
    },
  },

  mounted() {
    this.fetchData();
  },
};
</script>
