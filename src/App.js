import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => {
        const {
            data: {
                 data: { movies }
                }
            } = await axios.get("https://yts.mx/api/v2/list_movies.json");
        console.log(movies);
        this.setState({movies, isLoading: false});
    }

    componentDidMount() {
        this.getMovies();
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
