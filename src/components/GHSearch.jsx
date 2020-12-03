import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';
import axios from 'axios';

class GHSearch extends Component {
  state = {
    search: "",
  };

  async search() {
    let response = await axios.get("https://api.github.com/search/users?");
    this.setState({ search: response.data });
  };

  componentDidMount() {
    this.search();
  };

  render() {
    
  <>
    <Input type="text" name="search" placeholder="Input GH username"/>
    <Button name="search">Search</Button>
    return{ this.setState.search.search}
  </>
  };
}

export default GHSearch;
