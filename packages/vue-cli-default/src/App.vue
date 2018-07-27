<template>

    <main>
      <header class="main-header">
        <img src="marc-olivier-jodoin-291607-unsplash.jpg" alt="cars" className="hero-image" />
        <h1>CLI performance metrics</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
      </header>

      <Table :report="report" />
    </main>
</template>

<script>
  import Table from './components/Table';
  import './main.css';

  export default {
    name: 'app',
    components: {
      Table
    },
    data() {
      return {
        report: []
      }
    },
    async created() {
      this.report = await (await fetch('report.json')).json();
    }
  }
</script>

<style>
  div {
    height: 100%;
  }
  p {
    width: 800px;
  }
</style>
