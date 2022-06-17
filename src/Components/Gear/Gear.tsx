import React from 'react';
import IShowHide from '../../Interface/IShow';


interface pull{
  hideShow :Function
}

const Gear = ({hideShow}:pull)=>{

  const changeStatus = ()=>{
    hideShow()
  }

return (<div className="gear-main" onClick={changeStatus}><div><i className="fa fa-gear float-left" style={{fontSize:"48px",color:"green"}}></i></div></div>
);

}

export default Gear;