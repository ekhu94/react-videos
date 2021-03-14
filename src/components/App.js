import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {

    onSearchSubmit = async term => {
        const res = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        console.log(res.data.items);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={ this.onSearchSubmit } />
            </div>
        );
    }
}

export default App;