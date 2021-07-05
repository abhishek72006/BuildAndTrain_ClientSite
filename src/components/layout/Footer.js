import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>
          <h7>About us</h7>
          <div className="footer-top space-between text-xxs">
          <h8><br></br>Build And Train is a platform for aspiring civil engineers and for all enthusiastic youths who desire to work <br></br>with, and for the community, along with others who share the same purview.</h8>     
            <FooterSocial />
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <FooterNav />
            <div className="footer-copyright">Made by <a href="https://cruip.com">BuildAndTrain</a>. All right reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;