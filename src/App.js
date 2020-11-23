import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    componentDidMount() {
        setTimeout(() => {
            // state 내의 값을 새롭게 추가할 수 있다.
            this.setState({ isLoading: false, book: true});
        }, 6000)
    }

    render() {
        const {isLoading} = this.state;

        return (
        <div>
          {isLoading ? "Loading.." : "We are ready"}
        </div>
        );
    }
}

export default App;
