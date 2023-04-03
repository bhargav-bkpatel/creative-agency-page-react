import React from 'react'

import PropTypes from 'prop-types'

import './copyright.css'

const Copyright = (props) => {
  return (
    <div className={`copyright-copyright ${props.rootClassName} `}>
      <div className="copyright-max-width">
        <span className="copyright-text">
          <span className="copyright-text01">
            <span>
              © All rights reserved
             
            </span>
            
          </span>
          
            <span className="copyright-text04">@Bhargav.</span>
         
        
          
          
  
          <span className="copyright-text13">.</span>
        </span>
      </div>
    </div>
  )
}

Copyright.defaultProps = {
  rootClassName: '',
}

Copyright.propTypes = {
  rootClassName: PropTypes.string,
}

export default Copyright
