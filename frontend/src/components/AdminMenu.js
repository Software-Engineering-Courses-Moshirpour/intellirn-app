import React from 'react';
import AdminMenuList from './AdminMenuList';
import MenuCard from './MenuCard';

function AdminMenu() {
  return (
    <div className='row pt-3'>
      {AdminMenuList.map((menuItem) => {
        return <MenuCard key={menuItem['id']} {...menuItem} />;
      })}
    </div>
  );
}

export default AdminMenu;
