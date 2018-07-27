import React from 'react';
import report from './report.json';
import image from './marc-olivier-jodoin-291607-unsplash.jpg';

const MeasurementRow = ({ stack }) => (
  <tr>
    <td>
      <a href={`https://${stack}-dot-ruben-oostinga-speeltuin.appspot.com`}>
        {report[stack].name}
      </a>
    </td>
    {report[stack].metrics.map(({ displayValue }, i) => (
      <td key={i}>{displayValue}</td>
    ))}
  </tr>
);

export default () => (
  <div>
    <header className="main-header">
      <h1>CLI performance metrics</h1>
    </header>
    <main>
      <img src={image} alt="cars" className="hero-image" />
      <table className="measurement-table">
        <thead>
          <tr>
            <td />
            {report[Object.keys(report)[0]].metrics.map(
              ({ description }, i) => <td key={i}>{description}</td>
            )}
          </tr>
        </thead>
        <tbody>
          {Object.keys(report).map((stack, i) => (
            <MeasurementRow stack={stack} key={i} />
          ))}
        </tbody>
      </table>
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
