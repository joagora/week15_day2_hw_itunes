import React, {Component} from 'react';
import SongList from '../components/SongList.js';

class SongBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({songs: data.feed.entry})
    });

    request.send();

  }

  render() {
    return (
      <div>
        <h2>Top 20 Itunes songs</h2>
        <SongList songs={this.state.songs}/>
      </div>
    )
  }
}

export default SongBox;
