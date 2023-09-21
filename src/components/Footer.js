import { AiOutlineTwitter, AiFillYoutube, AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
    const iconsTab = [
        { icon: <AiOutlineLinkedin /> },
        { icon: <AiOutlineTwitter /> },
        { icon: <AiFillYoutube /> },
      ];

    return (
        <>
        <footer className="bg-white">
          <div className="container mx-auto  py-[10rem]">
            {/* footer div all */}
            <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
              {/* logo side */}
              <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
                <img
                  src={"https://i.imgur.com/520zDfd.png"}
                  alt="footer_logo"
                  className="w-[18rem]"
                />
                <p className="text-[15px] font-medium text-[#646464]">
                  Take your experiences to the next level with our
                  comprehensive solutions designed to help you reach your Total Experience
                  goals.
                </p>
                {/* socials */}
                <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                  {iconsTab.map(({ icon }, index) => {
                    return (
                      <div
                        key={index}
                        className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] hover:text-white"
                        style={{ transition: "all 0.3s" }}
                      >
                        {icon}
                      </div>
                    );
                  })}
                </div>
                <p className="text-[16px] font-medium text-[#646464]">
                  Privacy Policy | © {new Date().getFullYear()} OpenText <br />{" "}
                  Design by{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.opentext.com/"
                  >
                    OpenText DX
                  </a>
                </p>
              </div>
  
              {/* middle div */}
              <div className="flex flex-col gap-8 relative">
                <p className="text-[22px] font-bold footer-main">Our Sessions</p>
  
                <span className="top-[33px] absolute w-[7rem] h-[4px] bg-blue-500"></span>
  
                <p className="text-[16px] hover:text-blue-500 cursor-pointer text-[#646464] font-medium hover:font-bold">
                  Experience Cloud
                </p>
                <p className="text-[16px] hover:text-blue-500 cursor-pointer text-[#646464] font-medium hover:font-bold">
                  Communications
                </p>
                <p className="text-[16px] hover:text-blue-500 cursor-pointer text-[#646464] font-medium hover:font-bold">
                  Media Management
                </p>
                <p className="text-[16px] hover:text-blue-500 cursor-pointer text-[#646464] font-medium hover:font-bold">
                  Insights
                </p>
                <p className="text-[16px] hover:text-blue-500 cursor-pointer text-[#646464] font-medium hover:font-bold">
                  opentext.ai
                </p>
              </div>
  
              {/* right div */}
              <div className="flex flex-col gap-8 relative mt-7 sm:mt-0">
                <p className="text-[22px] font-bold footer-main">Hours</p>
  
                <span className="top-[33px] absolute w-[7rem] h-[4px] bg-blue-500"></span>
  
                <p className="text-[16px]  text-[#646464] font-bold">
                  Monday - Thursday:
                </p>
                <p className="text-[16px] text-[#646464] font-medium">
                  9:00am - 21:00pm
                </p>
                <p className="text-[16px] text-[#646464] font-bold">Friday:</p>
                <p className="text-[16px] text-[#646464] font-medium">
                  9:00am - 17:00pm
                </p>
              </div>
  
              {/* middle div */}
              <span></span>
            </div>
          </div>
        </footer>
      </>
    )
}

export default Footer