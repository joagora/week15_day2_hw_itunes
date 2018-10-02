import React, {Component} from 'react';
import Song from './Song.js';

class SongList extends Component {

  render() {
    console.log(this.props.songs);
    const songNodes = this.props.songs.map((song, index) => {

      return (<Song key={index} artist={song["im:name"].label} />)
    })
    return (

        <div>{songNodes}</div>

    )
  }

}

export default SongList;
