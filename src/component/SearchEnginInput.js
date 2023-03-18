import React from "react";

class SearchEnginInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entry: "" };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.entry);
  };

  render() {
    return (
      <div className="ui segment">
        {/* <h1>IMAGE SEARCH ENGINE</h1> */}
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <div className="ui massive icon input">
              <input
                className=""
                type="text"
                placeholder="Image search engine..."
                onChange={(event) =>
                  this.setState({ entry: event.target.value })
                }
                value={this.state.entry}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchEnginInput;
