import React, {Component} from 'react';
import SearchBar from 'material-ui-search-bar'

class Search extends Component {
    constructor(props) {
        super(props);

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

        this.state={
            inputValue: ''
        };
    }

    onChangeHandler(value){
        this.setState({inputValue:value});
    }

    onSubmitHandler(){
        this.props.handler(this.state.inputValue);
        this.setState({inputValue:''});
    }

    render() {

        return (
            <SearchBar
                     onChange={this.onChangeHandler}
                     onRequestSearch={this.onSubmitHandler}
                     value={this.state.inputValue}
                     style={{
                             margin: '0 auto',
                             maxWidth: 800
                           }}
            />
        );
    }
}

export default Search;