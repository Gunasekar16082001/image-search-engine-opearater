import React, { Component } from "react";
import SearchEnginInput from "./SearchEnginInput";
import axios from "axios";
import ImageList from "./ImageList";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  async onSearchSubmit(entry) {
    const response = await axios.get(
      `https://pixabay.com/api/?key=34359604-4a2d5ea487229f09c873cbaba&q=${entry}&image_type=photo&pretty=true`
    );
    console.log(response.data.hits);
    this.setState({ images: response.data.hits });
  }
  render() {
    return (
      <div className="ui container" style={{ margin: "30px" }}>
        <SearchEnginInput onSearchSubmit={this.onSearchSubmit} />
        Thay are {this.state.images.length} images 
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default Home;
