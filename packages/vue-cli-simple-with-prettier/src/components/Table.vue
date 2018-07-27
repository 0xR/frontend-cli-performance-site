<template>
  <table class="measurement-table">
    <thead>
      <tr>
        <td></td>
        <td v-bind:key="heading" v-for="heading in headings">{{heading}}</td>
      </tr>
    </thead>
    <tbody>
      <tr v-bind:key="row.name" v-for="row in report">
        <th>{{row.name}}</th>
        <td v-bind:key="col.displayValue" v-for="col in row.metrics">{{col.displayValue}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    computed: {
      headings() {
        return Object.values(this.report).length ? Object.values(this.report)[0].metrics.map(d => d.description) : [];
      }
    },
    props: ['report']
  };
</script>
<style>
</style>
