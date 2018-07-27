<template>
  <table class="measurement-table">
    <thead>
      <tr>
        <tr>
          <td />
          <td>First meaningful paint</td>
          <td>Visually complete</td>
          <td>Time to intefractive</td>
          <td>Loaded</td>
        </tr>
      </tr>
    </thead>
    <tbody>
      <tr v-bind:key="row.label" v-for="row in report">
        <th><a v-bind:href="row.url">{{row.label}}</a></th>
        <td>{{formatNumber(row.metrics.first_meaningful_paint)}}</td>
        <td>{{formatNumber(row.metrics.visually_complete)}}</td>
        <td>{{formatNumber(row.metrics.first_interactive)}}</td>
        <td>{{formatNumber(row.metrics.loaded)}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    props: ['report'],
    methods: {
      formatNumber: function (number) {
         return number ? number.toLocaleString() + ' ms' : 'null'
      }
    }
  };
</script>
<style>
</style>
