import React, { useState } from 'react';
import "../App.css";



// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ item , handle_quantity_update}) => {
    const img_location = "./images/" + item.imageName
    // const [count, setCount] = useState(0)

    const add_count = () => {
        // console.log("updated from add !!");
        // console.log("count is now: " + count);
        handle_quantity_update({
            id: item.id, 
            title: item.title, 
            description: item.description, 
            imageName: item.imageName,
            price: item.price,
            quantity: (item.quantity+1)
        });
        // setCount(count+1);
    };

    const dec_count = () => {
        // console.log("updated form dec!");
        // console.log("count is now: " + count);
        if(item.quantity > 0){
            handle_quantity_update({
                id: item.id, 
                title: item.title, 
                description: item.description, 
                imageName: item.imageName,
                price: item.price,
                quantity: (item.quantity-1)
            });
            // setCount(count-1);
        }

    };

    // const reset_count = () => {
    //     setCount(0);
    // }

    return (
        <div className="container mb-2">
            <div>
                <div className="row mb-5">

                </div>

                <div className="row mb-2">
                    <div className="col-5 d-flex justify-content-center text-center">
                    <img src={img_location} alt={item.description} className="img-fluid my-image"/>
                    </div>

                    <div className="col-7">
                        <div className="row">
                            <div className="food-title">
                            <h3> {item.title}</h3>
                            </div>

                            <div className="food-description">
                            <p> {item.description} </p>
                            </div>

                            <div className="col-5">
                                <div className="food-price">
                                    <p>{item.price}</p>
                                </div>
                            </div>

                            <div className="col-7" style={{display: 'flex', alignItems:'center', justifyContent: 'space-evenly'}}>
                                <button type="button" className="addrm" onClick={dec_count}>-</button>
                                <h4 style={{fontFamily: 'Geneva', display: 'flex'}}>{item.quantity}</h4>
                                <button type="button" className="addrm" onClick={add_count}>+</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};


export default MenuItem;
