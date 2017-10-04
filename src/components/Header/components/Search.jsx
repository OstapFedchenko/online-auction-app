import React, {Component} from 'react';
import {FormGroup, InputGroup, Button, FormControl, InputGroupAddon} from 'react-bootstrap';

class Search extends Component {

    render() {

        return (
            <FormGroup>
                <InputGroup bsSize="small">
                    <FormControl type="text"/>
                    <InputGroup.Button>
                        <Button>Find..</Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>
        );
    }
}

export default Search;