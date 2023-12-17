import React from 'react';

const Pageheader = ({title, path}) => {
    return (
        <div className='py-20 mt-3 bg-indigo-50  rounded flex items-center justify-center'>
            <div className=''>
                <h2 className='text-3xl text-blue font-bold text-center mb-1'>{title} </h2>
                <p className='text-sm text-center'><a href="">Home</a> / {path}</p>
            </div>
        </div>
    );
};

export default Pageheader;