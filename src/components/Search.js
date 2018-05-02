import React, { Component } from "react";
import { browserHistory } from "react-router";

class Search extends Component {

  constructor(props) {
    super(props);
    this.debounce = this.debounce.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { term } = this.props;

    if (term) {
      this.searchInput.value = term;
    }
  }

  handleChange() {
    const searchTerm = this.searchInput.value;
    if (searchTerm) {
      browserHistory.push(`/artists/${searchTerm}`);
    }
  }

  debounce(fn, t) {
    let timer = null;
    return () => {
      const ctx = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.call(ctx);
      }, t);
    };
  }

  render() {
    return (
      <div className="search">
        <input
          type="text"
          ref={(input) => { this.searchInput = input }}
          onChange={this.debounce(this.handleChange, 800)}
          placeholder="Search your favorite artists" />
      </div>
    );
  }

}

export default Search;