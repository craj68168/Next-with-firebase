import React from 'react'
import styled from "styled-components"
import homeImage from "../assets/hero.png"
const Hero = () => {
    return (
        <Section id="hero">
            <div className='background'>
                <img src={homeImage} alt="img" />
            </div>
            <div className='content'>
                <div className='title'>
                    <h1>Travel to Explore</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aut vel, labore minus quis praesentium dicta delectus, molestiae accusantium ab aliquid explicabo repudiandae perferendis magnam nam ad minima facilis eius?</p>
                </div>
                <div className='search'>
                    <div className='container'>
                        <label>Where You want to go</label>
                        <input type="text" placeholder='Search Your Location' />
                    </div>
                    <div className='container'>
                        <label>Check In</label>
                        <input type="date"  />
                    </div>
                    <div className='container'>
                        <label>Check out</label>
                        <input type="date"  />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Hero

const Section = styled.div``