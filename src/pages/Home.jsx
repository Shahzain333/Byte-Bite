import React from 'react'
import Header from '../components/header/Header'
import { HeroSection, Card, FreindsSection, FAQs } from '../components'


export default function Home(props) {
    
    return (
        <main>
            <HeroSection />
            <Card /> 
            <FreindsSection />
            <FAQs />
        </main>
    )
}
