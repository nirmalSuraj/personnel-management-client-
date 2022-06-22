import React, { MouseEventHandler } from 'react';
import { Log } from '../../class/Service/Log';
import { IDataPaginate, Ipaginte, IwithData, links } from '../../Interface/Data/Idata';
import { IgetEmployeeType } from '../../Interface/Generale/Generale';


interface props {
  pagination:links[],
  paginate:Function
}

const Pagination = ({pagination,paginate}:props)=>{

  const getPageLink:MouseEventHandler<HTMLButtonElement> = (e)=>{
    e.preventDefault();
    let  url = "";
    if(e.currentTarget.value.length ){
    const page =e.currentTarget.value.toString().split("?");
    const pageNumber =page[1];
    const explodeUrl = page[0].split("/");
      url = explodeUrl[explodeUrl.length-1]+"?"+pageNumber;
  }

    paginate(url)
  }
 
 
return (
  <div className="d-flex justify-content-center mt-5">
<nav aria-label="Page navigation example">
  <ul className="pagination">

    {pagination.map(e =>{ return (<li className="page-item"><button className="page-link" value={e.url==null? "":e.url} onClick={getPageLink} >
      {e.label == "&laquo; Previous" && "Previous"}
      {e.label !== "&laquo; Previous" && e.label !== "Next &raquo;" && e.label }
      {e.label == "Next &raquo;" && "Next"}
      </button></li>) })}
  
  </ul>

</nav>
</div>
);

}

export default Pagination;