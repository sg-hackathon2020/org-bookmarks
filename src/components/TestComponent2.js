import React, {Component} from "react";

class TestComponent2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id
        };

    }

    componentDidMount() {
        console.log(this.props);
    }


    render() {
        let showId = null;
        if (this.state.id) {
            return <div>{this.state.id}</div>
        }
        return (
            <div>
                {showId}
            </div>
        );
    }
}

TestComponent2.propTypes = {};

export default TestComponent2;