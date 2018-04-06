export default () => (
  <div>
    <header className="main-header">
      <h1>CLI performance metrics</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem.
      </p>
    </header>
    <table className="measurement-table">
      <thead>
        <tr>
          <td />
          <td>
            <a href="https://angular-cli-dot-ruben-oostinga-speeltuin.appspot.com/">
              Angular
            </a>
          </td>
          <td>
            <a href="https://create-react-app-dot-ruben-oostinga-speeltuin.appspot.com/">
              React
            </a>
          </td>
          <td>
            <a href="https://vue-cli-default-dot-ruben-oostinga-speeltuin.appspot.com/">
              VueJS
            </a>
          </td>
          <td>
            <a href="https://polymer-2-application-dot-ruben-oostinga-speeltuin.appspot.com/">
              Polymer
            </a>
          </td>
          <td>
            <a href="https://nextjs-dot-ruben-oostinga-speeltuin.appspot.com/">
              NextJS
            </a>
          </td>
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
    <footer className="main-footer">
      Made with ❤️ @ <a href="https://xebia.com/">Xebia</a>
    </footer>
    <style jsx>{`
      main {
        flex: 1;
        max-width: 800px;
        margin: auto;
        padding: 50px 0 0;
      }

      .main-header {
        margin-bottom: 50px;
        text-align: center;
      }

      .main-footer {
        height: 50px;
        text-align: center;
        font-size: 12px;
      }

      .measurement-table {
        margin: auto;
        border: 1px solid #eeeeee;
        border-spacing: 0;
        border-collapse: collapse;
      }

      .measurement-table thead {
        background-color: #6f3a6f;
      }

      .measurement-table thead a {
        color: #fff;
      }

      .measurement-table tr {
        border-bottom: 1px solid #eeeeee;
      }

      .measurement-table td {
        padding: 10px 20px;
        text-align: center;
      }

      .measurement-table td:first-child {
        text-align: left;
      }
    `}</style>
    <style global jsx>{`
      body,
      html {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;
        font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
      }
    `}</style>
  </div>
);
