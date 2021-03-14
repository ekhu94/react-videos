import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
    state = { videos: [] };

    onSearchSubmit = async term => {
        const res = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: res.data.items });
        console.log(this.state.videos);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={ this.onSearchSubmit } />
            </div>
        );
    }
}

export default App;