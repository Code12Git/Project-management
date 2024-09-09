import React from 'react';
import RecipeReviewCard from '../../ui/Card';

const Action = () => {
    return (
        <div className='flex flex-col items-center justify-center max-w-7xl mx-auto px-4 py-8'>
            <p className='text-md md:text-lg text-center mb-2'>TRELLO IN ACTION</p>
            <h1 className='text-xl font-bold md:text-2xl text-center mb-6'>
                Workflows for any project, big or small
            </h1>
            <div className='w-full flex justify-center'>
                <RecipeReviewCard />
            </div>
        </div>
    );
}

export default Action;
