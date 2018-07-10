import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp2';

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = 'Mike';
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

// ------------

