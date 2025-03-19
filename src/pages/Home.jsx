import React from 'react'
import { HeroSection, Category, FreindsSection, FAQs } from '../components/index'


export default function Home(props) {
    
    return (
        <main>
            <HeroSection />
            <Category /> 
            <FreindsSection />
            <FAQs />
        </main>
    )
}
