import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <div className="search-bar ui segment" style={{marginTop: '10px'}}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="input">Video Search</label>
                        <input 
                            type="text" 
                            value={ this.state.term }
                            id="input"
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;