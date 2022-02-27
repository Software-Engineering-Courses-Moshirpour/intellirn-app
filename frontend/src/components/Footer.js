import React from 'react';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer-top'>
        <div className='container'>
          <div className='row  justify-content-center'>
            <div className='col-lg-6'>
              <p>
                <b>IntelliRN.</b> We live to care.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container footer-bottom clearfix'>
        <div className='copyright'>
          &copy; Copyright{' '}
          <strong>
            <span>IntelliRN</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className='credits'>
          Made possible by <b>eNno</b> template from{' '}
          <a href='https://bootstrapmade.com/' target={'_blank'}>
            BootstrapMade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
