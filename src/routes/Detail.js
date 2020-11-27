import React from "react";
import "../Detail.css"

class Detail extends React.Component {
    componentDidMount() {
        const {location, history } = this.props;

        if(location.state == undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;

        if(location.state) {
            return (
                <div className="container">
                        <span className="detail__title">{ location.state.title } </span>
                </div>
            )
        } else {
            return null;
        }

        // return (
        //     <span>{ location.state.title }</span>
        // );
    };
}

export default Detail;