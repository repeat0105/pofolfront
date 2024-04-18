import React, { useEffect } from 'react';
import '../scss/mouseonehtml.scss';
import mouseone from '../jsjs/mouseone';


function MouseOneHtml() {
  useEffect(() => {
    mouseone();
  }, []);
    return (
        <div id="cursor" className="cursor">
        <div className="ring">
          <div>
            
          </div>
        </div>
        <div className="ring">
          <div>
    
          </div>		
        </div>
      </div>
    );
    
}


export default MouseOneHtml;