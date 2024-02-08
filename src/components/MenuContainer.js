import React from 'react';
import MenuItem from './MenuItem';

const MenuContainer = ({menu_items_array}) => {
    return (
        <div>
            {menu_items_array.map((m_item) => {
                return <MenuItem key={m_item.id} item={m_item} />
            })} 
        </div>
    );

};

export default MenuContainer;