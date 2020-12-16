<template>
  <div class="report-container">
    <div class="report-card" v-for="(element) in data" :key="element.id">
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
          <tr  v-for="item in element.included" :key="item.measure_id">
            <td> {{item.location}} : {{item.metric}} </td>
            <td> {{item.min}} {{item.sign}}</td>
            <td> {{item.max}} {{item.sign}}</td>
            <td>{{item.avg}} {{item.sign}}</td>
            <td> {{item.mediana}} {{item.sign}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ReportCard',
  props: ['data'],
};
</script>
