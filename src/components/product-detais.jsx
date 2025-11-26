import React from 'react'

export const ProductDescription = () => {
  return (
    <div className=' mt-20'>
      <div className="flex gap-3 mb-4">
        <button className='rounded-sm bg-black text-white outline !text-xs !py-[6px] w-36'>Description</button>
      <button className='outline rounded-sm !text-xs !py-[6px] w-36'>Care Guide</button>
      <button className='outline rounded-sm !text-xs !py-[6px] w-36'>Size Guide</button>
        
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ut odio sunt dicta saepe voluptate hic quibusdam. Amet perspiciatis voluptas saepe ut voluptatibus sequi, odio quod exercitationem quia distinctio provident, in harum porro atque vitae asperiores, illo quisquam cupiditate aspernatur.</p>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ut odio sunt dicta saepe voluptate hic quibusdam. Amet perspiciatis voluptas saepe ut voluptatibus sequi, odio quod exercitationem quia distinctio provident, in harum porro atque vitae asperiores, illo quisquam cupiditate aspernatur.</p>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ut odio sunt dicta saepe voluptate hic quibusdam. Amet perspiciatis voluptas saepe ut voluptatibus sequi, odio quod exercitationem quia distinctio provident, in harum porro atque vitae asperiores, illo quisquam cupiditate aspernatur.</p>
      </div>
    </div>
  )
}
