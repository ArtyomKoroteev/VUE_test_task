<template>
  <div class="report-container">
    <div class="report-card" v-for="(element) in reports" :key="element.id">
      <span class="report-card--device">{{element.device}}</span>
      <span class="report-card--time">{{element.time}}</span>
      <table class="report-card--table">
        <thead class="report-card--table-head">
          <tr>
            <th>Location : Metric</th>
            <th>Min</th>
            <th>Max</th>
            <th>Avg</th>
            <th>Median</th>
          </tr>
        </thead>
        <tbody class="report-card--table-body">
          <tr  v-for="report in element.included" :key="report.measure_id">
            <td> {{report.location}} : {{report.metric}} </td>
            <td> {{report.min}} {{report.sign}}</td>
            <td> {{report.max}} {{report.sign}}</td>
            <td>{{report.avg}} {{report.sign}}</td>
            <td> {{report.mediana}} {{report.sign}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ReportCard',
  props: ['reports'],
};
</script>
