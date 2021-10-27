import React from 'react';

const HomePagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='container'>
            <section className='pagination'>
                <nav className='pagination__container'>
                    <ul className='pagination__list'>
                        {pageNumbers.map(number => (
                            <li className='pagination__number'  key={number} style={{display: (pageNumbers.length==1) ? 'none' : 'block'}}
                                onClick={() => paginate(number)}>
                                    {number}
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>
        </div>
    );
};

export default HomePagination;

//style={{display: (selectedResult || !searchTerm || (!filteredResults.length && searchTerm)) ? 'none' : 'block'}}
//