import React from 'react'
import heroImage from '../../assets/images/hero_img.jpg'
import { Container, Button, Card, FreindsSection, FAQs } from '../index'
import {Link} from 'react-router-dom'
import { useState } from 'react'

export default function HeroSection(props) {
    
    const [isMobile,setIsMobile] = useState(false)

    return (
        
        <section className='pb-5 py-28'>
            
            <Container>
                
                <div className='relative rounded-xl overflow-hidden'>
                    {/* Overlay to make text readable */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    
                    <div className='rou'>
                        <img className='w-full h-52 sm:h-72 md:h-84 object-cover' src={heroImage} 
                        alt="Byte and Bite restaurant delicious hero section image showcasing a variety of meals" />
                    </div>
                    
                    <div className='absolute top-10 sm:top-28 left-8 sm:left-8 text-white flex flex-col gap-2 sm:gap-4 px-2'>
                        
                        <h1 className='text-primary font-bold text-4xl md:text-5xl'>Byte&Bite</h1>
                        
                        <p className='text-sm md:text-md'>The best place for delicious meals and unforgettable moments.</p>
                        
                        <Link to="/reservation">
                            <Button type='button' className='bg-primary text-sm md:max-w-36 text-center cursor-pointer'>
                                Reserve Now
                            </Button>
                        </Link>
                    
                    </div>

                </div>
                
            </Container>
        
        </section>
        
    )
}
