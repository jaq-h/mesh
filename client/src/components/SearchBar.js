import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      // hover: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleMouseHover = this.handleMouseHover.bind(this);


  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);
  }

  handleSubmit(event) {
   event.preventDefault();
   if(/\S/.test(this.state.value)){
    this.props.search(this.state.value);
  }
 }
 // handleMouseHover(){
 //    this.setState(state => ({
 //      hover: !state.hover
 //
 //    }));
 //  }

  // handleMouseHover() {
  //   this.setState(this.toggleHoverState);
  // }
  //
  // toggleHoverState(state) {
  //   return {
  //     hover: !state.hover,
  //   };
  // }




  render() {
    return (
      <form className="form"  onSubmit={this.handleSubmit}>
        <input className="input"  type="text" value={this.state.value} placeHolder="Search YouTube..." onChange={this.handleChange} />
      </form>
    );
  }
}

export default SearchBar;
