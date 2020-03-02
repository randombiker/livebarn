import React from 'react';
import { useAsync } from 'react-async';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// fetch item data from this API

const loadData = async () =>
  await fetch(
    'https://2hsjstzo71.execute-api.us-east-1.amazonaws.com/prod/livebarn-interview-project'
  )
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());

// hard coded "detail" column info. I wasn't able to get the datat from the dynamic table.
// because of that, I was unable to finish the "search" part.

function Servers() {
  function handleClick(e, data) {
    document.getElementById('description').style.display = 'block';
    let a = 'Venue Name' + '<br>' + eval('data[0].venueName');
    let b = 'Surface Name' + '<br>' + eval('data[0].surfaceName');
    let d = 'Sport' + '<br>' + eval('data[0].sport');
    let c = 'Status' + '<br>' + eval('data[0].status');
    let f = 'Server IP' + '<br>' + eval('data[0].server.ip4');
    let description =
      a + '<br><br>' + b + '<br><br>' + c + '<br><br>' + d + '<br><br>' + f;
    document.getElementById('description').innerHTML = description;
    console.log(data[0]);
  }

  const { data, error, isLoading } = useAsync({ promiseFn: loadData });
  if (isLoading) return 'Loading...';
  if (error) return `Something went wrong: ${error.message}`;
  if (data)
    // The rendered component

    return (
      <div className="container">
        <div className="row">
          {/* "empty tab" and "data" buttons */}
          <div className="column">
            <div className="btn-group-vertical">
              <Link to="/">
                <button className="myButton  ">Empty Tab </button>
              </Link>

              <Link to="/Data">
                <button className="myButton  btn">Data</button>
              </Link>
            </div>
          </div>
          {/* dividing line */}
          <div className="line"></div>

          <div className="column searchBox">
            {/* search box */}

            <div className="form-group has-search row">
              <span className="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              ></input>
            </div>
            {/* "surfaces" and "servers" tabs */}
            <div className="row">
              <Link to="/Surfaces">
                <button className="btn2 ">Surfaces </button>
              </Link>

              <Link to="/Servers">
                <button className=" btn2focus">Servers </button>
              </Link>
            </div>

            {/* dynamically rendered table */}
            <div className="row ">
              <div className="column surface">
                <div>
                  {' '}
                  {console.log(data)}
                  <table className="table table-hover ">
                    <thead>
                      <tr>
                        <th className="tableStyleCol1">Ip4</th>
                        <th className="tableStyleCol2">Dns</th>
                      </tr>
                    </thead>
                  </table>
                  {data.map(
                    (item) => (
                      <table className="table table-hover">
                        <tbody>
                          <tr>
                            <th
                              onClick={(e) => handleClick(e, data)}
                              className="tableStyleCol1"
                            >
                              {item.server.ip4}
                            </th>
                            <th
                              onClick={(e) => handleClick(e, data)}
                              className="tableStyleCol2"
                            >
                              {item.server.dns}
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    ),
                    this
                  )}
                </div>
              </div>
              {/* dynamically rendered "detail" column */}
              <div className="column detail ">
                Detail
                <div id="description"></div>
              </div>
            </div>
            <div className="matched ">Matched: {data.length}</div>
          </div>
        </div>
      </div>
    );
}

export default Servers;
