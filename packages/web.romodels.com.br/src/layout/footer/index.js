import React, { Fragment } from 'react';

import './style/footer.css';

// const footerStyle = {
//   backgroundColor: 'purple',
//   fontSize: '20px',
//   color: 'white',
//   borderTop: '1px solid /E7E7E7',
//   textAlign: 'center',
//   padding: '20px',
//   position: 'fixed',
//   left: '0',
//   bottom: '0',
//   height: '60px',
//   width: '100%'
// };

// const phantomStyle = {
//   display: 'block',
//   padding: '20px',
//   height: '60px',
//   width: '100%'
// };

export function Footer({ children }) {
  return (
    <Fragment>
      <footer className='footer'>
        <div className='container bottom_border'>
          <div className='row'>
            <div className=' col-sm-4 col-md col-sm-4  col-12 col'>
              <h5 className='headin5_amrc col_white_amrc pt2'>Find us</h5>
              <p className='mb10'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s
              </p>
              <p>
                <i className='fa fa-location-arrow' /> 9878/25 sec 9 rohini 35{' '}
              </p>
              <p>
                <i className='fa fa-phone' /> +91-9999878398{' '}
              </p>
              <p>
                <i className='fa fa fa-envelope' /> info@example.com{' '}
              </p>
            </div>

            <div className=' col-sm-4 col-md  col-6 col'>
              <h5 className='headin5_amrc col_white_amrc pt2'>Quick links</h5>
              <ul className='footer_ul_amrc'>
                <li>
                  <a href='http://kalarikendramdelhi.com'>Image Rectoucing</a>
                </li>
                <li>
                  <a href='http://kalarikendramdelhi.com'>Clipping Path</a>
                </li>
                <li>
                  <a href='http://kalarikendramdelhi.com'>Hollow Man Montage</a>
                </li>
                <li>
                  <a href='http://kalarikendramdelhi.com'>Ebay & Amazon</a>
                </li>
                <li>
                  <a href='http://kalarikendramdelhi.com'>Hair Masking/Clipping</a>
                </li>
                <li>
                  <a href='http://kalarikendramdelhi.com'>Image Cropping</a>
                </li>
              </ul>
            </div>

            <div className=' col-sm-4 col-md  col-6 col'>
              <h5 className='headin5_amrc col_white_amrc pt2'>Quick links</h5>
              <ul className='footer_ul_amrc'>
                <li>
                  <a href='http://kalarikendramdelhi.com'>Remove Background</a>
                </li>
                <li>
                  <a href='http://kalarikendramdelhi.com'>Shadows & Mirror Reflection</a>
                </li>
                <li>
                  <a href='http://kalarikendramdelhi.com'>Logo Design</a>
                </li>
                <li>
                  <a href='http://kalarikendramdelhi.com'>Vectorization</a>
                </li>
                <li>
                  <a href='http://kalarikendramdelhi.com'>Hair Masking/Clipping</a>
                </li>
                <li>
                  <a href='http://kalarikendramdelhi.com'>Image Cropping</a>
                </li>
              </ul>
            </div>

            <div className=' col-sm-4 col-md  col-12 col'>
              <h5 className='headin5_amrc col_white_amrc pt2'>Follow us</h5>

              <ul className='footer_ul2_amrc'>
                <li>
                  <a href='/'>
                    <i className='fab fa-twitter fleft padding-right' />{' '}
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing...<a href='/'>https://www.lipsum.com/</a>
                  </p>
                </li>
                <li>
                  <a href='/'>
                    <i className='fab fa-twitter fleft padding-right' />{' '}
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing...<a href='/'>https://www.lipsum.com/</a>
                  </p>
                </li>
                <li>
                  <a href='/'>
                    <i className='fab fa-twitter fleft padding-right' />{' '}
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing...<a href='/'>https://www.lipsum.com/</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='container'>
          <ul className='foote_bottom_ul_amrc'>
            <li>
              <a href='http://kalarikendramdelhi.com'>Home</a>
            </li>
            <li>
              <a href='http://kalarikendramdelhi.com'>About</a>
            </li>
            <li>
              <a href='http://kalarikendramdelhi.com'>Services</a>
            </li>
            <li>
              <a href='http://kalarikendramdelhi.com'>Pricing</a>
            </li>
            <li>
              <a href='http://kalarikendramdelhi.com'>Blog</a>
            </li>
            <li>
              <a href='http://kalarikendramdelhi.com'>Contact</a>
            </li>
          </ul>
          <p className='text-center'>
            Copyright @2017 | Designed With by <a href='/'>Your Company Name</a>
          </p>

          <ul className='social_footer_ul'>
            <li>
              <a href='http://kalarikendramdelhi.com'>
                <i className='fab fa-facebook-f' />
              </a>
            </li>
            <li>
              <a href='http://kalarikendramdelhi.com'>
                <i className='fab fa-twitter' />
              </a>
            </li>
            <li>
              <a href='http://kalarikendramdelhi.com'>
                <i className='fab fa-linkedin' />
              </a>
            </li>
            <li>
              <a href='http://kalarikendramdelhi.com'>
                <i className='fab fa-instagram' />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </Fragment>
  );
}
