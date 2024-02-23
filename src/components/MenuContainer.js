import React from 'react';
import MenuItem from './MenuItem';

const MenuContainer = ({menu_items_array, handle_quantity_update}) => {
    return (
        <div>
            {menu_items_array.map((m_item) => {
                return <MenuItem key={m_item.id} item={m_item} handle_quantity_update={handle_quantity_update} />
            })} 
        </div>
    );

};

export default MenuContainer;