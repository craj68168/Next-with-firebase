import React from 'react'
import "../styles/test.module.css"
import Image from "next/image"
import Destination1 from "../assets/Destination1.png";
const Test = () => {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div>
            <h1>Flexbox</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia dolores minima dicta optio quidem, nemo tenetur possimus fugiat similique quibusdam,
              quam aliquam nostrum explicabo mollitia. Illum deserunt vitae numquam at.</p>
          </div>
          <Image src={Destination1} />
        </div>
      </header>
      <section className='boxes'>
        <div className='container'>
          <div className='box'>
            <h1>This is boxes icons</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quae dolor laudantium incidunt
              praesentium corrupti doloremque cupiditate. Ab, dicta at debitis deserunt ducimus vel facilis voluptatum culpa recusandae autem repudiandae.</p>
          </div>
          <div className='box'>
            <h1>This is boxes icons</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quae dolor laudantium incidunt
              praesentium corrupti doloremque cupiditate. Ab, dicta at debitis deserunt ducimus vel facilis voluptatum culpa recusandae autem repudiandae.</p>
          </div>
          <div className='box'>
            <h1>This is boxes icons</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quae dolor laudantium incidunt
              praesentium corrupti doloremque cupiditate. Ab, dicta at debitis deserunt ducimus vel facilis voluptatum culpa recusandae autem repudiandae.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Test