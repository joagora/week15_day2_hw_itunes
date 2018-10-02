import React, {Component} from 'react';

class Song extends Component {
  render() {
    console.log(this.props);
      if (!this.props) return null;
    return (
    <div>
      <p>{this.props.artist}</p>
    </div>
  )
}
}

export default Song;
