import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    render() {
        return (
            <div className="ui segment" style={{marginTop: '10px'}}>
                <form className="ui form">
                    <div className="field">
                        <label htmlFor="search-bar">Video Search</label>
                        <input 
                            type="text" 
                            value={ this.state.term }
                            id="search-bar"
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;