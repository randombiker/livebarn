import { connect } from 'react-redux';
import React, { Component } from 'react';

class UnconnectedSearch extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  handleQuery = (evt) => {
    this.props.dispatch({ type: 'query', q: evt.target.value });
  };

  render() {
    console.log('HEY', this.props);
    return (
      <div>
        <label>
          Search query
          <input
            type="text"
            onChange={this.handleQuery}
            value={this.props.query}
          />
        </label>
      </div>
    );
  }
}
const mapStateToProps = (st) => {
  return {
    query: st.searchQuery,
  };
};
let Search = connect(mapStateToProps)(UnconnectedSearch);
export default Search;
