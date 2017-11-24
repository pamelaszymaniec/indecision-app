class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>

                <h2>Put your life in the hands of computer</h2>
            </div>

        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}


class Option extends React.Component {
    render() {
        return (
            <div>
                <p>Option component here</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

const jsx = (
    <div>

        <Header/>
        <Action/>
        <Option/>
        <AddOption/>

    </div>
);


ReactDOM.render(jsx, document.getElementById('app'));