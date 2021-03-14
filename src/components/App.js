import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onSearchSubmit = async term => {
        const res = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: res.data.items });
    }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={ this.onSearchSubmit } />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={ this.state.videos } onVideoSelect={ this.onVideoSelect } />
            </div>
        );
    }
}

export default App;