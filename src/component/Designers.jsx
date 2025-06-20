import { useState, useEffect } from 'react'
import '../index.css'
import ListingCard from "./ListingCard";

function Designers() {

    const [designers, setDesigners] = useState([]);
    const [showShortlistedOnly, setShowShortlistedOnly] = useState(false);

    useEffect(() => {
    fetch('http://localhost:5000/api/designers')
      .then(res => res.json())
      .then(data => setDesigners(data))
      .catch(err => console.error("Error fetching designers:", err));
  }, []);

    const toggleShortlist = (id) => {
  fetch(`http://localhost:5000/api/designers/${id}/shortlist`, {
    method: 'POST',
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        setDesigners(prev =>
          prev.map(d => 
            d.id === id ? { ...d, isShortlisted: data.isShortlisted } : d
          )
        );
      }
    })
    .catch(err => console.error("Error toggling shortlist:", err));
};

    const filtered = showShortlistedOnly
        ? designers.filter(d => d.isShortlisted)
        : designers;




    return (
        <>
            <div className="w-[360px] h-[800px] left-[123px] top-[-2351px] mx-auto border shadow-md overflow-auto bg-[#FFFFFF] ">
                
                <div className="relative w-full pt-4 px-4 h-[72px] bg-white">
                    
                    <img src="/icons/logo-small 1.svg" alt="Logo" className="absolute left-[20px] top-[21px] w-[31px] h-[31px]" />

                    <h1 className="absolute left-[118px] top-[24px] w-[124px] h-[35px] text-center leading-[35px] font-normal text-[24px] tracking-normal font-chivo text-[#716966]">
                        EmptyCup
                    </h1>

                    <img src="/icons/three-dots-vertical 1.svg" alt="More" className="absolute w-[27px] h-[27px] top-[24px] left-[307px]" />
                </div>

                <div className="w-[360px] border-t border-[#D0D0D0]" style={{ borderWidth: '0.25px' }} />

                <div className="relative w-full">
                    <button
                        onClick={() => setShowShortlistedOnly(prev => !prev)}
                        className="absolute top-[15px] left-[242px] w-[42px] h-[46px]"
                    >
                        <img
                            src={showShortlistedOnly ? "/icons/bookmark-heart 1.svg" : '/icons/Group 10.png'}
                            className=' w-full h-full'
                        />
                    </button>

                    <button
                        className="absolute top-[15px] left-[16px] w-[34px] h-[42px]"
                    >
                        <img
                            src="/icons/Group 6.svg"
                            alt="Contact"
                            className="w-full h-full"
                        />
                    </button>

                    <button
                        className="absolute top-[17px] left-[77px] w-[27px] h-[40.5px]"
                    >
                        <img
                            src="/icons/Group 7.svg"
                            alt="Gallery"
                            className="w-full h-full"
                        />
                    </button>

                    <button
                        className="absolute top-[17px] left-[139px] w-[17px] h-[40.75px]"
                    >
                        <img
                            src="/icons/Group 8.svg"
                            alt="Maps"
                            className="w-full h-full"
                        />
                    </button>

                    <button
                        className="absolute top-[18px] left-[305px] w-[31px] h-[44px]"
                    >
                        <img
                            src="/icons/Group 9.svg"
                            alt="Sort"
                            className="w-full h-full"
                        />
                    </button>



                </div>
                {/* Designers List */}
                <div className="flex flex-col pt-[80px]">
                    {filtered.map((designer, index) => (
                        <ListingCard
                            key={index}
                            designer={designer}
                            onShortlistToggle={() => toggleShortlist(designer.id)}
                            background={index % 2 === 0 ? '#FFFCF2' : '#FFFFFF'}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Designers
