import React, {Component} from 'react';
import {FormGroup, InputGroup, Button, FormControl, InputGroupAddon} from 'react-bootstrap';

class Search extends Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);

        this.state = {
            input: ''
        };
    }

    onClickHandler(event){
        this.props.handler(this.state.input);
        this.setState({input:''});
    }

    onChangeHandler(event){
        this.setState({
            input: event.target.value
        });
    }

    render() {
        const {handler} = this.props;
        return (
            <FormGroup>
                <InputGroup bsSize="small">
                    <FormControl type="text" onChange={this.onChangeHandler}/>
                    <InputGroup.Button>
                        <Button onClick={this.onClickHandler}>Find..</Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>
        );
    }
}

export default Search;