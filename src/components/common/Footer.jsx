import React from 'react';

const Footer = () => {
  const technologies = ['ReactJS', 'Gatsby', 'NextJS', 'NodeJS'];
  const services = ['Social media Marketing', 'Web & Mobile App Development', 'Data & Analytics'];

  return (
    <footer className="w-full bg-[#4f46e5] mt-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] py-[20px]">
        <div className="flex flex-col gap-[40px]">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 mt-[16px]">
            {/* Company Info Section */}
            <div className="flex flex-col gap-[20px] w-full lg:w-[32%]">
              {/* Logo */}
              <div className="flex gap-[14px] items-center">
                <img 
                  src="/images/img_layer_2.svg" 
                  className="w-[44px] h-[42px]" 
                  alt="AT Digital Logo" 
                />
                <img 
                  src="/images/img_group_94.svg" 
                  className="w-[166px] h-[48px]" 
                  alt="AT Digital Text" 
                />
              </div>
              
              {/* Company Description */}
              <p className="text-[16px] font-lato font-normal leading-[19px] text-white">
                Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
              </p>
            </div>

            {/* Technologies and Services Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-0 w-full lg:w-[40%]">
              {/* Technologies */}
              <div className="flex flex-col gap-[6px] w-full sm:w-[38%]">
                <h3 className="text-[21px] font-inter font-semibold leading-[26px] text-white mb-[6px]">
                  Our Technologies
                </h3>
                <div className="flex flex-col gap-[12px]">
                  {technologies?.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-[14px] font-inter font-medium leading-[17px] text-white capitalize"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="flex flex-col gap-[8px] w-full sm:w-[38%]">
                <h3 className="text-[21px] font-inter font-semibold leading-[26px] text-white">
                  Our Services
                </h3>
                <div className="flex flex-col gap-[12px]">
                  {services?.map((service, index) => (
                    <span 
                      key={index}
                      className="text-[14px] font-inter font-medium leading-[17px] text-white capitalize"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="flex flex-col gap-[6px] items-center w-full lg:w-[44%] mx-auto">
            {/* Divider Line */}
            <div className="w-full lg:w-[630px] h-[1px] bg-white"></div>
            
            {/* Legal Links */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-[16px] justify-center items-center mt-[8px]">
              <button className="text-[14px] font-inter font-medium leading-[17px] text-white capitalize hover:text-gray-200 transition-colors duration-200">
                Privacy Policy
              </button>
              <div className="hidden sm:block w-[1px] h-[16px] bg-white"></div>
              <button className="text-[14px] font-inter font-medium leading-[17px] text-white capitalize hover:text-gray-200 transition-colors duration-200">
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;