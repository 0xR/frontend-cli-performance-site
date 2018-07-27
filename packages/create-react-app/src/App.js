import React from 'react';
import image from './marc-olivier-jodoin-291607-unsplash.jpg';

export default class App extends React.Component {
  state = { report: null };

  componentDidMount = () =>
    fetch('report.json')
      .then(res => res.json())
      .then(report => this.setState({ report }));

  formatNumber = number => (number ? number.toLocaleString() + ' ms' : 'null');

  render() {
    const { report } = this.state;
    return (
      <div>
        <header className="main-header">
          <h1>CLI performance metrics</h1>
        </header>
        <main>
          <img src={image} alt="cars" className="hero-image" />
          {report && (
            <table className="measurement-table">
              <thead>
                <tr>
                  <td />
                  <td>First meaningful paint</td>
                  <td>Visually complete</td>
                  <td>Time to intefractive</td>
                  <td>Loaded</td>
                </tr>
              </thead>
              <tbody>
                {report.map(test => (
                  <tr key={test.label}>
                    <td>{test.label} ms</td>
                    <td>
                      {this.formatNumber(test.metrics.first_meaningful_paint)}
                    </td>
                    <td>{this.formatNumber(test.metrics.visually_complete)}</td>
                    <td>{this.formatNumber(test.metrics.first_interactive)}</td>
                    <td>{this.formatNumber(test.metrics.loaded)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </main>
        <footer className="main-footer">
          Made with <span role="img">❤</span>️ @{' '}
          <a href="https://xebia.com/">Xebia</a>
        </footer>
        <style>{`
      main {
        flex: 1;
        max-width: 800px;
        margin: auto;
      }

      .main-header {
        text-align: center;
      }

      .hero-image {
        display: block;
      }

      .main-footer {
        height: 50px;
        text-align: center;
        font-size: 12px;
      }

      .measurement-table {
        margin: auto;
        width: 100%;
        border-spacing: 0;
        border-collapse: collapse;
      }

      .measurement-table thead {
        background-color: #6f3a6f;
      }

      .measurement-table thead {
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
  }
}
