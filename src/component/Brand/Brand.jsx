import React, { useState, useEffect } from 'react'
import axios from 'axios';
import BrandLogo from '../BrandLogo/BrandLogo';
import './brand.css'



const Brand = () => {
  const [brands, setBrands] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/forms/getdata')
      .then(response => {
        console.log('Fetched data:', response.data);
        const logosData = response.data

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
    <>
      <div>
        <marquee direction="left" scrollamount="20" className="marquee-container">
          <ul className='flex items-center unorder-list-container'>

            <img src="https://businesssphere.info/images/24.png" className="com-logo" />
            <img src="https://businesssphere.info/images/logo.png" className="com-logo" />
            <img src="https://businesssphere.info/images/20.png" className="com-logo" />
            <img src="https://businesssphere.info/images/19.png" className="com-logo" />
            <img src="https://businesssphere.info/images/25.jpeg" className="com-logo" />
            <img src="https://businesssphere.info/images/26.jpeg" className="com-logo" />

            {brands.map(eachCard => (
              <BrandLogo cardDetails={eachCard} key={eachCard.id} />
            ))}

          </ul>
        </marquee>


      </div>



    </>
  );
}

export default Brand;



//     useEffect(() => {
//         axios.get('http://localhost:5000/api/forms/getdata')
//             .then(response => {
//                 setUsers(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching the users:', error);
//                 setError('Error fetching the users');
//             });
//     }, []);

//     return (
//         <ul className='listed-member-ul-list-container'>
//             {users.map(eachCard => (
//                 <CardItem key={eachCard.id} cardDetails={eachCard} />
//             ))}
//         </ul>
//     );