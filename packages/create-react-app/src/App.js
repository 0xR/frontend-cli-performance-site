import React, { Component } from 'react';
import './App.css';
import report from './report.json';

const MeasurementRow = ({ metric }) => (
  <tr>
    <td>{metric}</td>
    {Object.keys(report).map(key => (
      <td>
        {
          report[key].metrics.find(({ description }) => description === metric)
            .displayValue
        }
      </td>
    ))}
  </tr>
);

export default () => (
  <div>
    <main>
      <header className="main-header">
        <h1>CLI performance metrics</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
      </header>
      <table className="measurement-table">
        <thead>
        <tr>
          <td />
          {Object.keys(report).map(key => (
            <td>
              <a
                href={`https://${key}-dot-ruben-oostinga-speeltuin.appspot.com`}
              >
                {report[key].name}
              </a>
            </td>
          ))}
        </tr>
        </thead>
        <tbody>
        {report[Object.keys(report)[0]].metrics.map(({ description }) => (
          <MeasurementRow metric={description} />
        ))}
        </tbody>
      </table>
    </main>
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
