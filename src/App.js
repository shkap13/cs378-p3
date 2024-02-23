import './App.css';
import React, { useState } from 'react';
import MenuContainer from './components/MenuContainer'
import HeadingItem from './components/HeadingItem';


import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];



const h_item = {
  capt_one: 'Real and Authentic Japanese Food',
  capt_two: 'Looks Good and Tastes Better',
};

function App() {
  const menu_items_with_quant = menuItems.map(item => ({...item, quantity: 0}));

  const [total_sum, set_total_sum] = useState(0);
  const [updated_menu_items, set_updated_menu_items] = useState(menu_items_with_quant);

  const calculate_sum = (updating_items) => {
    let sum = 0;
    updating_items.forEach((m_item) => {
      // console.log("price: " + m_item.price);
      // console.log("quantity: " + m_item.quantity);
      sum = sum + (m_item.price * m_item.quantity)
    });

    set_total_sum(sum);
  };

  const handle_quantity_update = (new_menu_item) => {

    set_updated_menu_items((updated_menu_items) => {
      // console.log("from handle_quantity_update, new quantity and new id: " + new_menu_item.quantity + " , " + new_menu_item.id);
      let index = updated_menu_items.findIndex((item) => item.id === new_menu_item.id);
      let updating_items = [...updated_menu_items];
      updating_items[index] = new_menu_item;

      // console.log(updating_items[index]);
      calculate_sum(updating_items);

      return updating_items;
    });
  };

  // const handle_quantity_update = (new_menu_item) => {
  //    console.log("from handle_quantity_update, new quantity and new id: " + new_menu_item.quantity + " , " + new_menu_item.id);
  //   let index = updated_menu_items.findIndex((item) => item.id === new_menu_item.id);
  //   let updating_items = [...updated_menu_items];
  //   updating_items[index] = new_menu_item;

  //    // console.log(updating_items[index]);
  //   calculate_sum(updating_items);
  //   set_updated_menu_items(updating_items);
  // };

  const handle_order = () => {
    alert("Your ordered has been processed with....")
  };

  const handle_clear = () => {
    set_updated_menu_items((updated_menu_items) => {
      // console.log("from handle_quantity_update, new quantity and new id: " + new_menu_item.quantity + " , " + new_menu_item.id);
      let updating_items = [...updated_menu_items];
      updating_items.forEach((m_item) => {
        m_item.quantity = 0;
      });
      
      set_total_sum(0);

      return updating_items;
    });
  };


  return (
    <div>
      {/* <Heading heading = {heading_item} /> */}
      <div className='head'> 
        <HeadingItem item={h_item} /> 
      </div>
      <div className="menu">
        {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
        <MenuContainer menu_items_array={updated_menu_items} handle_quantity_update={handle_quantity_update}/> 

      </div>
      <div className="cart">
      {/* <CartItem total_sum={total_sum} /> */}
          <div>
            <div className='cart_panel'>
                <h4>Subtotal: {total_sum} </h4>
                <button type='button' className='pill' onClick={handle_order}> Order </button>
                <button type='button' className='pill' onClick={handle_clear}> Clear All </button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
