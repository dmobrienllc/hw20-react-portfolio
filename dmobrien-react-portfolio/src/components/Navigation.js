import React from 'react';
import PageListItem from './PageListItem';

export default function Navigation({currentPage, handlePageChange}) {

    return (
        <ul className="nav nav-tabs">
            <PageListItem pageName="Home" pageUrl="#home" isCurrentPage={currentPage === 'Home' ? true: false} handlePageChange={handlePageChange} />
            <PageListItem pageName="Portfolio" pageUrl="#portfolio" isCurrentPage={currentPage === 'Portfolio' ? true: false} handlePageChange={handlePageChange} />
            <PageListItem pageName="Blog" pageUrl="#blog" isCurrentPage={currentPage === 'Blog' ? true: false} handlePageChange={handlePageChange} />
            <PageListItem pageName="Contact" pageUrl="#contact" isCurrentPage={currentPage === 'Contact' ? true: false} handlePageChange={handlePageChange} />
            <PageListItem pageName="Resume" pageUrl="#resume" isCurrentPage={currentPage === 'Resume' ? true: false} handlePageChange={handlePageChange} />
        </ul>
    )
}