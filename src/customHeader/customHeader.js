import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const customHeader = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">{props.title}</h1>
                <p className="lead">{props.description}</p>
                <hr className="my-2" />
            </Jumbotron>
        </div>
    );
};

export default customHeader;