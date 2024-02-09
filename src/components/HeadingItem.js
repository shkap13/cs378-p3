import React from 'react';
import "../App.css";


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const HeadingItem = ({ item }) => {
    const img_location = "./images/" + item.imageName
    return (
        <div className='container'>
            <div className="container">
                <div className="row mb">
                    <div className="col-12 d-flex justify-content-center text-center">
                    <img src="./images/title.png" alt="Tastes Like Tokyo with Sakura Tree" className="img-fluid"/>
                    </div>
                </div>

                <div className="row mb-3">

                </div>
            </div>

            <div className="unique-title"> 
                <div className="row mb-1">
                    <div className="col-12 d-flex justify-content-center text-center">
                        <h3>{item.capt_one}</h3>
                    </div>
                </div>
            </div>

            <div className="other-title">
                <div className="row mb-3">
                    <div className="col-12 d-flex justify-content-center text-center">
                        <h3>{item.capt_two}</h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeadingItem;
