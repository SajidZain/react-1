import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destination</h1>
        <div className="card__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src='/public/images/img-9.jpg'
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                    />
                     <CardItem 
                    src='/public/images/img-2.jpg'
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src='/public/images/img-9.jpg'
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                    />
                     <CardItem 
                    src='/public/images/img-2.jpg'
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                    />
                    <CardItem 
                    src='/public/images/img-2.jpg'
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                    />
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Cards