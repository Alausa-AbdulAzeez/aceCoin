import React from 'react'
import './homepage.scss'
import verifiedCheck from '../../assets/verified-badge.svg'
import mastercard from '../../assets/mc_symbol.svg'
import dots from '../../assets/dots.svg'
import closeIcon from '../../assets/close.svg'
import { RiPencilFill } from 'react-icons/ri'
import OrderDetails from '../../components/orderDetails/OrderDetails'

const Homepage = () => {
  return (
    <div className='wrapper'>
      <div className='close-btn'>
        <img src={closeIcon} alt='close' />
      </div>

      <div className='left'>
        <div className='form'>
          <header className='form-header'>
            <div className='logo'>
              <span className='logo-circle'></span>
              <h1>
                AceCoin<span className='lean'>Pay</span>
              </h1>
            </div>
            <div className='timer'>
              <span className='timer-box'>0</span>
              <span className='timer-box'>1</span>
              <span className='timer-divider'>:</span>
              <span className='timer-box'>1</span>
              <span className='timer-box'>9</span>
            </div>
          </header>
          <section className='form-body'>
            <form>
              <div className='input-group'>
                <div className='header'>
                  <div className='description'>
                    <h2 className='title'>card number</h2>
                    <p className='desc'>
                      Enter the 15-digit card number on the card
                    </p>
                  </div>
                  <button className='edit'>
                    <RiPencilFill className='pen' />

                    <span className='btn-desc'>Edit</span>
                  </button>
                </div>
                <div className='main'>
                  <img
                    src={mastercard}
                    alt='mastercardLogo'
                    className='leading-icon'
                  />

                  <input
                    type='text'
                    placeholder='2412   -   7512   -   3412   -   3456'
                    className='inputClass'
                  />

                  <img
                    src={verifiedCheck}
                    alt='verifiedCheckIcon'
                    className='trailing-icon'
                  />
                </div>
              </div>
              <div className='input-group __col'>
                <div className='header'>
                  <div className='description'>
                    <h2 className='title'>CVV number</h2>
                    <p className='desc'>
                      Enter the 3 or 4 digit number on the card
                    </p>
                  </div>
                </div>
                <div className='main'>
                  <input type='text' placeholder='327' />
                  <img src={dots} alt='dots' className='trailing-icon' />
                </div>
              </div>
              <div className='input-group __col'>
                <div className='header'>
                  <div className='description'>
                    <h2 className='title'>expiry date</h2>
                    <p className='desc'>
                      Enter the expiration date of the card
                    </p>
                  </div>
                </div>
                <div className='grp'>
                  <div className='main __date'>
                    <input type='text' placeholder='09' />
                  </div>
                  <span className='divider'>/</span>
                  <div className='main __date'>
                    <input type='text' placeholder='22' />
                  </div>
                </div>
              </div>
              <div className='input-group __col'>
                <div className='header'>
                  <div className='description'>
                    <h2 className='title'>password</h2>
                    <p className='desc'>Enter your Dynamic password</p>
                  </div>
                </div>
                <div className='main'>
                  <input type='password' placeholder='******' />
                  <img src={dots} alt='dots' className='trailing-icon' />
                </div>
              </div>
              <div className='btn-submit'>pay now</div>
            </form>
          </section>
        </div>
      </div>
      <div className='right'>
        <OrderDetails />
      </div>
    </div>
  )
}

export default Homepage
