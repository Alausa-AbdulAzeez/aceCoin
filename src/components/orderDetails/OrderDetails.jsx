import React from 'react'
import './orderDetails.scss'
import chip from '../../assets/chip.png'
import wifi from '../../assets/wifi.png'
import masterCard from '../../assets/mastercard-2.svg'
import docket from '../../assets/docket.png'
import apple from '../../assets/apple-13.svg'

const OrderDetails = () => {
  return (
    <div className='checkout'>
      <span className='blu'></span>
      <div className='credit-card'>
        <div className='credit-card__head'>
          <img src={chip} alt='chip' className='chip' />
          <img src={wifi} alt='wifi' className='wifi' />
        </div>
        <div className='credit-card__body'>
          <span className='holder'>jonathan micheal</span>
          <div className='card-digits'>
            <div className='hidden-digits'>
              <span className='circle'></span>
              <span className='circle'></span>
              <span className='circle'></span>
              <span className='circle'></span>
            </div>
            <span className='visible-digits'>3456</span>
          </div>
        </div>
        <div className='credit-card__footer'>
          <span className='expiry'>09/22</span>
          <img src={masterCard} alt='masterCard' className='logo' />
        </div>
        <div className='card__design'>
          <span className='inner'></span>
        </div>
      </div>
      <div className='checkout-details'>
        <div className='purchase-data'>
          <div className='data'>
            <span className='title'>company</span>
            <span className='value'>
              <img src={apple} alt='apple' />
              <span className='inner-text'>apple</span>
            </span>
          </div>
          <div className='data'>
            <span className='title'>order number</span>
            <span className='value'>
              <span className='inner-text'>1266201</span>
            </span>
          </div>
          <div className='data'>
            <span className='title'>product</span>
            <span className='value'>
              <span className='inner-text'>macbook air</span>
            </span>
          </div>
          <div className='data'>
            <span className='title'>VAT (20%)</span>
            <span className='value'>
              <span className='inner-text'>$100.00</span>
            </span>
          </div>
        </div>
        <div className='divider'>
          <div className='left'></div>
          <div className='right'></div>
        </div>
        <div className='purchase-total'>
          <div className='total'>
            <span className='desc'>You have to Pay</span>
            <div className='t-amount'>
              <h1 className='amount'>
                549<sub>.99</sub>
              </h1>
              <span className='symbol'>USD</span>
            </div>
          </div>
          <img src={docket} alt='docket' />
        </div>
      </div>
    </div>
  )
}

export default OrderDetails
