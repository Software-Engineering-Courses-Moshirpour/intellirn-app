import React, { useEffect, useState } from 'react';
import { useFetch } from '../helpers/useFetch';

const EducationMenuList = [
    {
      id: 1,
      head: 'Common Infections',
      url: '/education/common-infections',
      src: '/images/body_checkup.svg',
    },
    {
      id: 2,
      head: 'IV access',
      url: '/education/iv-access',
      src: '/images/consultancy.svg',
    },
    {
      id: 3,
      head: 'Medications',
      url: '/education/medications',
      src: '/images/pharmacy_store.svg',
    },
  ];

export default EducationMenuList;
