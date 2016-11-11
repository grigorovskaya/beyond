import React from 'react';

export default class AddLocation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let input = document.getElementById('search');
    this.autoComplete = new google.maps.places.Autocomplete(input, {geocode: true});
  }

  handleSubmit(e) {
    e.preventDefault();
    let suggestedLocation = this.autoComplete.getPlace();
    this.props.saveLocation(suggestedLocation);
    // console.log(this.autoComplete.getPlace());
  }

  render() {
    return (
        <div>
          <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" id='search'/>
          <input type="submit"/>
          </form>
        </div>
      )
  }
}
