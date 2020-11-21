import React from "react";
import PropTypes from "prop-types";

function Food({name, picture, rating}) {
    return <div>
        <h1>I like {name}</h1>
        <h4>{rating} / 5.0</h4>
        <img src={picture} alt={name}></img>
    </div>;
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
};

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.maangchi.com%2Frecipe%2F" +
                "chaesik-kimchi&psig=AOvVaw3o4m9il9C8An0tymqjdQ5h&ust=1606037866569000&source=i" +
                "mages&cd=vfe&ved=0CAIQjRxqFwoTCJCjtrark-0CFQAAAAAdAAAAABAD",
        rating: 4.0
    }, {
        id: 2,
        name: "Bab",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcooking.nytimes.com%2Frecipe" +
                "s%2F1019204-basic-stovetop-rice&psig=AOvVaw0hytN8HTDwyVdcV2OlHIi4&ust=16060378" +
                "88086000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjKksKrk-0CFQAAAAAdAAAAABAD",
        rating: 5.0
    }, {
        id: 3,
        name: "Rameon",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSh" +
                "in_Ramyun&psig=AOvVaw0tNC2Db8UKVDRGPVh_3p3A&ust=1606037903093000&source=images" +
                "&cd=vfe&ved=0CAIQjRxqFwoTCJCrp8irk-0CFQAAAAAdAAAAABAO",
        rating: 3.5
    }, {
        id: 4,
        name: "Cookie",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fjoyfoodsunshine.com%2Fthe-mo" +
                "st-amazing-chocolate-chip-cookies%2F&psig=AOvVaw3Z-IQbvKzaU_MGp_7aZL4E&ust=160" +
                "6037927932000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCT9tOrk-0CFQAAAAAdAAAAAB" +
                "AD",
        rating: 2.6
    }
]

function App() {
    return (
        <div className="App">
            <h1>
                Hello !
            </h1>
            {
                foodILike.map(
                    dish => <Food 
                    key={dish.id} 
                    name={dish.name} 
                    picture={dish.image} 
                    rating={dish.rating}/>
                )
            }
        </div>
    );
}

export default App;
