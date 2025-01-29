import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Button } from '../index'
import Haleem from "../../assets/images/Beef Haleem.jpg";



function card() {
  
  const cardItem = [
    {
      id: 1,
      name: 'Beef Haleem',
      price: 1500,
      description: 'A hearty stew with slow-cooked beef, lentils, spices, and topped with fried onions, fresh coriander, and lemon.',
      image: Haleem
  },
  {
      id: 2,
      name: 'Beef Haleem',
      price: 1500,
      description: 'A hearty stew with slow-cooked beef, lentils, spices, and topped with fried onions, fresh coriander, and lemon.',
      image: Haleem
  },
  {
    id: 3,
    name: 'Beef Haleem',
    price: 1500,
    description: 'A hearty stew with slow-cooked beef, lentils, spices, and topped with fried onions, fresh coriander, and lemon.',
    image: Haleem
},
{
  id: 4,
  name: 'Beef Haleem',
  price: 1500,
  description: 'A hearty stew with slow-cooked beef, lentils, spices, and topped with fried onions, fresh coriander, and lemon.',
  image: Haleem
},
{
  id: 5,
  name: 'Beef Haleem',
  price: 1500,
  description: 'A hearty stew with slow-cooked beef, lentils, spices, and topped with fried onions, fresh coriander, and lemon.',
  image: Haleem
},
  ]

  return (

    
    <section className="">
          
          <Container>

          <div className="flex flex-col gap-8">
            
            <div className="flex justify-between items-center flex-wrap gap-2">
              
              <h2 className="text-[1.2rem] font-medium md:font-semibold md:text-3xl lg:text-4xl">This Weeks Special!</h2>
              
              <Link to="/menu">
                <Button type="button" className="bg-primary text-sm font-medium w-32 sm:max-w-36 text-center 
                cursor-pointer hover:bg-amber-500  transition-transform duration-300 transform hover:scale-110">
                  View Full Menu
                </Button>
              </Link>
            
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-4">

               {cardItem.map((item) => (
                 
                <div key={item.id} className='flex gap-4 flex-col rounded-2xl shadow-md overflow-hidden 
                transition-transform duration-300 transform hover:scale-105'>
                 
                 <div>
                    <img className='w-full h-48 object-cover transition-transform duration-300 transform 
                    hover:scale-105'src={item.image} alt={item.name} />
                 </div>

                 <div className='px-4 pb-4 flex flex-col gap-3'>
                    
                    <div className='flex gap-4 flex-wrap justify-between items-center'>
                        <h3 className='font-medium'>{ item.name }</h3>
                        <p className='text-secondary text-sm'>Rs.{ item.price }</p>
                    </div>
                    
                    <p className='text-gray-600 text-sm'>{ item.description }</p>
                     <Link to={'/menu'}>
                        <Button type='button' className='bg-primary text-sm font-medium w-32 sm:max-w-36 
                        text-center cursor-pointer'>Order now</Button>
                     </Link>
                 
                 </div>
             
                </div>
              
               ))}

           </div>
          
          </div>

      </Container>
      
      </section>
      
    
  );
}

export default card;
