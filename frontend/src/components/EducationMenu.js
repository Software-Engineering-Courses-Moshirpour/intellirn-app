import React from 'react';
import EducationMenuList from './EducationMenuList';
import MenuCard from './MenuCard';

function EducationMenu() {
  return (
    <div className='row pt-3'>
      {EducationMenuList.map((menuItem) => {
        return <MenuCard key={menuItem['id']} {...menuItem} />;
      })}
    </div>
  );
}

export default EducationMenu;