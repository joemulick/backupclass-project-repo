// Include React
var React = require("react");
// var helpers = require('./utils/helper')

// Here we include all of the sub-components
var Child = require("./Child");

var Parent = React.createClass({

  // Here we set a generic state associated which tab is selected in the parent components
  getInitialState: function() {
    console.log(document.getElementById("unque-user-zip"))
    return {
      categories: "House"
    }
  },

  // componentDidMount: function() {
  //   // Get the latest saved.
  //   helpers.runHouse().then(function(response) {
  //     console.log(response);
  //     if (response !== this.state.saved) {
  //       console.log("saved", response.data);
  //       this.setState({ saved: response.data });
  //     }
  //   }.bind(this));
  // },

  handleClick: function(event) {

    this.setState({ categories: event.target.getAttribute('data-value') });

    console.log(this.state);

  },

  // Here we render the function
  render: function() {
    return (
        <div className="container-fluid parent">


        <div className="row col-md-12 button-row">

                <div className="btn btn-group-justified">
                    <a href="#" className="btn categories" data-value="House" onClick={this.handleClick}>House</a>
                    <a href="#" className="btn categories" data-value="Senate" onClick={this.handleClick}>Senate</a>
                    <a href="#" className="btn categories" data-value="House" onClick={this.handleClick}>State</a>
                    <a href="#" className="btn categories" data-value="House" onClick={this.handleClick}>Local</a>
                </div>

        </div>


      <Child clicks={this.state.categories} />

      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Parent;
