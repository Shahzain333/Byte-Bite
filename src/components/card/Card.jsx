import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from '../Button'
import Card1 from "../../assets/img/Grill.jpg";
import Card2 from "../../assets/img/salad.jpg";
import Card3 from "../../assets/img/head_chef.jpg";
import Container from "../Container";

function card() {
  
  const cardItem = [
    {
      id: 1,
      name: 'Beef Haleem',
      price: 1500,
      description: 'A hearty stew with slow-cooked beef, lentils, spices, and topped with fried onions, fresh coriander, and lemon.',
      image: Card1
  },
  {
      id: 2,
      name: 'Beef Haleem',
      price: 1500,
      description: 'A hearty stew with slow-cooked beef, lentils, spices, and topped with fried onions, fresh coriander, and lemon.',
      image: Card2
  },
  {
    id: 3,
    name: 'Beef Haleem',
    price: 1500,
    description: 'A hearty stew with slow-cooked beef, lentils, spices, and topped with fried onions, fresh coriander, and lemon.',
    image: Card2
},
{
  id: 4,
  name: 'Beef Haleem',
  price: 1500,
  description: 'A hearty stew with slow-cooked beef, lentils, spices, and topped with fried onions, fresh coriander, and lemon.',
  image: Card2
},
{
  id: 5,
  name: 'Beef Haleem',
  price: 1500,
  description: 'A hearty stew with slow-cooked beef, lentils, spices, and topped with fried onions, fresh coriander, and lemon.',
  image: Card2
},
  ]

  return (
      
      // <Container>
        
      //   {/* <div className="flex ml-[-16px] mt-4 md:flex-row sm:flex-col md:space-x-4 font-serif ">
        
      //     <div className="w-[30%] border border-gray-300 rounded-2xl p-4">
        
      //       <div className="p-2">

      //         {cardItem.map((card) => (
      //           <div key={card.id}>
      //             <h1 className="text-4xl font-bold mb-6">{card.title}</h1>
      //             <img className="mb-2" src={card.image} alt="Menu Image1" />
      //             <p className="text-xl font-serif mt-4 mb-4">
      //               {card.description}
      //             </p>
      //             <NavLink to={card.link} className="font-serif text-xl text-primary hover:underline hover:underline-offset-8 cursor-pointer">
      //               {card.link_description}
      //             </NavLink>
      //           </div>
                
      //         ))}
        
      //       </div>
        
      //     </div>

      
      //   </div> */}
      // </Container>

      <Container>
       
        <section>

          <div className="py-8 flex flex-col gap-8">
            
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

        </section>
      
      </Container>
    
  );
}

export default card;
