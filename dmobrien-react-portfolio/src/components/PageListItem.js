import React from 'react';

export default function PageListItem(props){
    return (
        <li className="nav-item">
        <a
          href={props.pageUrl}
          onClick={() => props.handlePageChange(props.pageName)}
          className={props.isCurrentPage ? 'nav-link active' : 'nav-link'}
        >
          {props.pageName}
        </a>
      </li>
    )
}