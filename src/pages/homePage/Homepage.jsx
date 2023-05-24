import React from 'react'
import './homepage.scss'

const Homepage = () => {
  return (
    <div className='wrapper'>
      <div class='close-btn'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='ionicon'
          viewBox='0 0 512 512'
        >
          <title>Close</title>
          <path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z' />
        </svg>
      </div>

      <div className='left'>
        <div className='form'>
          <header class='form-header'>
            <div class='logo'>
              <span class='logo-circle'></span>
              <h1>
                AceCoin<span class='lean'>Pay</span>
              </h1>
            </div>
            <div class='timer'>
              <span class='timer-box'>0</span>
              <span class='timer-box'>1</span>
              <span class='timer-divider'>:</span>
              <span class='timer-box'>1</span>
              <span class='timer-box'>9</span>
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
                    <svg
                      version='1.1'
                      id='Layer_1'
                      xmlns='http://www.w3.org/2000/svg'
                      // xmlns:xlink='http://www.w3.org/1999/xlink'
                      x='0px'
                      y='0px'
                      viewBox='0 0 512 512'
                      // xml:space='preserve'
                    >
                      <g>
                        <g>
                          <path
                            d='M311.18,78.008L32.23,356.958L0.613,485.716c-1.771,7.209,0.355,14.818,5.604,20.067
                                                c5.266,5.266,12.88,7.368,20.067,5.604l128.759-31.617l278.95-278.95L311.18,78.008z M40.877,471.123l10.871-44.271l33.4,33.4
                                                L40.877,471.123z'
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d='M502.598,86.818L425.182,9.402c-12.536-12.536-32.86-12.536-45.396,0l-30.825,30.825l122.812,122.812l30.825-30.825
                                                C515.134,119.679,515.134,99.354,502.598,86.818z'
                          />
                        </g>
                      </g>
                    </svg>
                    <span className='btn-desc'>Edit</span>
                  </button>
                </div>
                <div className='main'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='2.11676in'
                    height='1.5in'
                    viewBox='0 0 152.407 108'
                    className='leading-icon'
                  >
                    <g>
                      {/* <rect
                        width='152.407'
                        height='108'
                        style={{ fill: 'none' }}
                      /> */}
                      <g>
                        <rect
                          x='60.4117'
                          y='25.6968'
                          width='31.5'
                          height='56.6064'
                          style={{ fill: '#ff5f00' }}
                        />
                        <path
                          d='M382.20839,306a35.9375,35.9375,0,0,1,13.7499-28.3032,36,36,0,1,0,0,56.6064A35.938,35.938,0,0,1,382.20839,306Z'
                          transform='translate(-319.79649 -252)'
                          style={{ fill: '#eb001b' }}
                        />
                        <path
                          d='M454.20349,306a35.99867,35.99867,0,0,1-58.2452,28.3032,36.00518,36.00518,0,0,0,0-56.6064A35.99867,35.99867,0,0,1,454.20349,306Z'
                          transform='translate(-319.79649 -252)'
                          style={{ fill: '#f79e1b' }}
                        />
                        <path
                          d='M450.76889,328.3077v-1.1589h.4673v-.2361h-1.1901v.2361h.4675v1.1589Zm2.3105,0v-1.3973h-.3648l-.41959.9611-.41971-.9611h-.365v1.3973h.2576v-1.054l.3935.9087h.2671l.39351-.911v1.0563Z'
                          transform='translate(-319.79649 -252)'
                          style={{ fill: '#f79e1b' }}
                        />
                      </g>
                    </g>
                  </svg>

                  <input
                    type='text'
                    placeholder='2412   -   7512   -   3412   -   3456'
                    className='inputClass'
                  />
                  <img
                    src='assets/verified-badge.svg'
                    alt=''
                    className='trailing-icon'
                  />
                </div>
              </div>
              <div class='input-group __col'>
                <div class='header'>
                  <div class='description'>
                    <h2 class='title'>CVV number</h2>
                    <p class='desc'>
                      Enter the 3 or 4 digit number on the card
                    </p>
                  </div>
                </div>
                <div class='main'>
                  <input type='text' placeholder='327' />
                  <img src='assets/dots.svg' alt='' class='trailing-icon' />
                </div>
              </div>
              <div class='input-group __col'>
                <div class='header'>
                  <div class='description'>
                    <h2 class='title'>expiry date</h2>
                    <p class='desc'>Enter the expiration date of the card</p>
                  </div>
                </div>
                <div class='grp'>
                  <div class='main __date'>
                    <input type='text' placeholder='09' />
                  </div>
                  <span class='divider'>/</span>
                  <div class='main __date'>
                    <input type='text' placeholder='22' />
                  </div>
                </div>
              </div>
              <div class='input-group __col' />
              <div class='header'>
                <div class='description'>
                  <h2 class='title'>password</h2>
                  <p class='desc'>Enter your Dynamic password</p>
                </div>
              </div>
              <div class='main'>
                <input type='password' placeholder='******' />
                <img src='assets/dots.svg' alt='' class='trailing-icon' />
              </div>

              <button type='submit' class='btn-submit'>
                pay now
              </button>
            </form>
          </section>
        </div>
      </div>
      <div class='right'>
        <div class='checkout'>
          <span class='blu'></span>
          <div class='credit-card'>
            <div class='credit-card__head'>
              <img src='assets/chip.png' alt='' class='chip' />
              <img src='assets/wifi.png' alt='' class='wifi' />
            </div>
            <div class='credit-card__body'>
              <span class='holder'>jonathan micheal</span>
              <div class='card-digits'>
                <div class='hidden-digits'>
                  <span class='circle'></span>
                  <span class='circle'></span>
                  <span class='circle'></span>
                  <span class='circle'></span>
                </div>
                <span class='visible-digits'>3456</span>
              </div>
            </div>
            <div class='credit-card__footer'>
              <span class='expiry'>09/22</span>
              <img src='assets/mastercard-2.svg' alt='' class='logo' />
            </div>
            <div class='card__design'>
              <span class='inner'></span>
            </div>
          </div>
          <div class='checkout-details'>
            <div class='purchase-data'>
              <div class='data'>
                <span class='title'>company</span>
                <span class='value'>
                  <img src='assets/apple-13.svg' alt='' />
                  <span class='inner-text'>apple</span>
                </span>
              </div>
              <div class='data'>
                <span class='title'>order number</span>
                <span class='value'>
                  <span class='inner-text'>1266201</span>
                </span>
              </div>
              <div class='data'>
                <span class='title'>product</span>
                <span class='value'>
                  <span class='inner-text'>macbook air</span>
                </span>
              </div>
              <div class='data'>
                <span class='title'>VAT (20%)</span>
                <span class='value'>
                  <span class='inner-text'>$100.00</span>
                </span>
              </div>
            </div>
            <div class='divider'>
              <div class='left'></div>
              <div class='right'></div>
            </div>
            <div class='purchase-total'>
              <div class='total'>
                <span class='desc'>You have to Pay</span>
                <div class='t-amount'>
                  <h1 class='amount'>
                    549<sub>.99</sub>
                  </h1>
                  <span class='symbol'>USD</span>
                </div>
              </div>
              <img src='assets/docket.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
