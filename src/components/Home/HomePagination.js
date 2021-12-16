import React from 'react';

const HomePagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='container'>
                <nav className='help__box3'>
                    <ul className='help__box3-list'>
                        {pageNumbers.map(number => (
                            <li className='help__box3-pagNumber'  key={number} style={{display: (pageNumbers.length==1) ? 'none' : 'block'}}
                                onClick={() => paginate(number)}>
                                    {number}
                            </li>
                        ))}
                    </ul>
                </nav>
        </div>
    );
};

export default HomePagination;

