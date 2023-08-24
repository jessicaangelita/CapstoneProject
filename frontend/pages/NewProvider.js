import React from 'react'
import { multistepform } from '@/components/multistepform'
import { AddProvider1 } from '@/components/AddProvider1';
import { AddProvider2 } from '@/components/AddProvider2';
import { AddProvider3 } from '@/components/AddProvider3';
import { AddProvider4 } from '@/components/AddProvider4';
import { useEffect } from 'react';

export const NewProvider = () => {
const {steps, currentStepIndex, step, isFirstStep, isLastStep, back, next} = multistepform([
    <AddProvider1/>, <AddProvider2/>, <AddProvider3/>, <AddProvider4/>
]);

  return (
    <div className='items-center justify-center flex md:flex'>
    <div className='bg-gray-100  w-fit shadow-2xl rounded-lg border-solid border-black p-4 mx-4 my-8'>
      <form>
        <div>
            {currentStepIndex+1} / {steps.length}
        </div>
        {step}
        <div className='mt-2 flex gap-2'>
            <button className='w-full text-white bg-gray-700 px-4 py-2 rounded-md my-6' type='button' onClick={next}>
                {isLastStep ? "Done" : "Next"}
            </button>
        </div>
      </form>
    </div>
    </div>
    
  )
}
export default NewProvider