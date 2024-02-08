import React from 'react';
import "../App.css";



// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ item }) => {
    const img_location = "./images/" + item.imageName
    return (
    <div className="container mb-2">
        <body>
            <div className="row mb-5">

            </div>

            <div className="row mb-2">
                <div className="col-5 d-flex justify-content-center text-center">
                <img src={img_location} alt="" className="img-fluid my-image"/>
                </div>

                <div className="col-7">
                <div className="row">
                    <div className="food-title">
                    <h3> {item.title}</h3>
                    </div>

                    <div className="food-description">
                    <p> {item.description} </p>
                    </div>

                    <div className="col-6">
                    <div className="price">
                        <p>{item.price}</p>
                    </div>
                    </div>

                    <div className="col-6">
                    <button type="button" className="btn btn-success">Add</button>
                    </div>

                </div>
                </div>

            </div>
        </body>

    </div>
    );
};


export default MenuItem;
