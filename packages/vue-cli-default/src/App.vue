<template>

    <main>
      <header class="main-header">
        <img src="logo.svg" alt="Xebia" />
        <h1>CLI performance metrics</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
      </header>

      <table class="measurement-table">
        <thead>
          <tr>
            <td></td>
            <td><a href="/">Angular</a></td>
            <td><a href="/">React</a></td>
            <td><a href="/">VueJS</a></td>
            <td><a href="/">Nuxt.js</a></td>
            <td><a href="/">Polymer</a></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lighthouse Performance</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>First Meaningful Paint</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>First Interactive</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </main>


</template>

<script>
  import './main.css';

  export default {
    name: 'app',
  }
</script>

<style>
  div {
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
