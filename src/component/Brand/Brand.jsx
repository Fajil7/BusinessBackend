import React, { useState, useEffect } from 'react'
import axios from 'axios';
import BrandLogo from '../BrandLogo/BrandLogo';



const Brand = () => {
  const [brands, setBrands] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data/brand')
      .then(response => {
        console.log('Fetched data:', response.data.msg);
        const logosData = response.data.msg

        setBrands(logosData);

      })
      .catch(error => {
        console.error('Error fetching the brands:', error);
        setError('Error fetching the brands');
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul className='flex'>
     
        {brands.map(eachCard => (
          <BrandLogo cardDetails={eachCard} key={eachCard.id} />
        ))}
      
    </ul>
  );
}

export default Brand;

