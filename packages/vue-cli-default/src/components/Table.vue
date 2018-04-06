<template>
  <table class="measurement-table">
    <thead>
      <tr>
        <td></td>
        <td v-for="col in report['angular-cli'].metrics">{{col.description}}</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in report">
        <th>{{row.name}}</th>
        <td v-for="col in row.metrics">{{col.displayValue}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    props: ['report']
  };
</script>
<style>
</style>
