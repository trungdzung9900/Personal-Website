import React from 'react'
import '../../App'
import HeroSection from '../../components/hero/HeroSection'
import Card from '../../components/CardSkill/Card'
import Career from '../../components/Career/Career'
import Information from '../../components/information/Information'
import Footer from '../../components/footer/Footer'
function Home(){
    return(
    <>
    <HeroSection/>
    <Information/>
    <Card/>
    <Career/>
    <Footer/>
    </>
    )
}
export default Home 