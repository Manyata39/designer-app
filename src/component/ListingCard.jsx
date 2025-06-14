import React from 'react'

const ListingCard = ({ designer, onShortlistToggle, background }) => {
  const { name, isShortlisted, projects, experience, price } = designer;
  return (
    <div className=" w-[360px] relative h-[284px] border-t gap-0 border-[#D7D7D7] flex"
      style={{
        backgroundColor: background,
        height: '284px',
        borderTopWidth: '0.25px',
        borderTopColor: '#D7D7D7',
      }}>

      <div className="w-[296px]  px-[30px] py-[30px] flex flex-col justify-start text-left">
        <h2 className="font-chivo font-normal text-[18px] leading-[100%] tracking-[0]  h-[21px] text-[#000000]">{name}</h2>

        <div className="flex items-center mt-1 w-[96px] h-[16px] top-[38px] left-[17px]">
          <img src="/icons/Group 1.svg" alt="Rating" className="" />

        </div>
        <p className="font-chivo font-normal text-[10px] leading-[100%] tracking-[0] text-[#000000] mt-[20px]">
          Passionate team of 4 designers working out of Bangalore with an experience of 4 years.
        </p>
        <div className="flex justify-between  text-[#000000] mt-[25px]">
          <div className="flex flex-col w-[47px] h-[37px] items-center leading-none">
            <span className="text-[24px] font-chivo font-semibold text-[#000000] leading-none m-0 p-0">{projects}</span>
            <span className="text-[10px] font-chivo text-[#000000]">Projects</span>
          </div>
          <div className="flex flex-col w-[47px] h-[37px] items-center leading-none">
            <span className="text-[24px] font-chivo font-semibold text-[#000000] leading-none">{experience}</span>
            <span className="text-[10px] font-chivo text-[#000000]">Years</span>
          </div>
          <div className="flex flex-col w-[47px] h-[37px] items-center leading-none">
            <span className="text-[24px] font-chivo font-semibold text-[#000000] leading-none">{price}</span>
            <span className="text-[10px] font-chivo text-[#000000]">Price</span>
          </div>
        </div>

        <div className="mt-[25px] font-chivo font-normal text-[16px] leading-[100%] w-[133px] h-[19px] tracking-[0] text-[#000000]">
          <p>+91 - 984532853</p>
          <p>+91 - 984532854</p>
        </div>
      </div>

      <div className="w-[1px] bg-[#D7D7D7] my-3"></div>

      <div className="w-[100px] flex flex-col items-center h-full justify-center px-2 gap-[40px] ">
        {/* Ignore Details, Hide, Report */}
        <div className='flex flex-col'>
        <button>
          <img src="/icons/arrow-right-short 1.svg" alt="Details" className="w-23px h-22px" />
        </button>
        <span className="text-[8px] w-[26px] h-[10px] font-chivo text-[#8D4337]">Details</span>
        </div>

        <div className='flex flex-col'>
        <button>
          <img src="/icons/eye-slash 1.svg" alt="Hide" className="w-[20px] h-[20px]" />
        </button>
        <span className="text-[8px] w-[26px] h-[10px] font-chivo text-[#8D4337]">Hide</span>
        </div>

        <div className='flex flex-col'>
        <button onClick={onShortlistToggle}>
          <img
            src={isShortlisted ? '/icons/bookmark-heart 2.svg' : '/icons/bookmark-heart 1.svg'}
            alt="shortlist"
            className="w-23px h-21px "
          />
        </button>
        <span className="text-[8px] w-[26px] h-[10px]  font-chivo text-[#8D4337]">shortlist</span>
        </div>

        <div className='flex flex-col'>
        <button>
          <img src="/icons/exclamation-circle 1.svg" alt="Report" className="w-[16px] h-[16px]" />
        </button>
        <span className="text-[8px] w-[26px] h-[10px] font-chivo text-[#8D4337]">Report</span>
        </div>

      </div>
    </div>
  );

};
export default ListingCard;


