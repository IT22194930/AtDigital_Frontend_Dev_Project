import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const Home = () => {
  const [expandedFaq, setExpandedFaq] = useState(0);

  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? -1 : index);
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="w-full flex flex-col lg:relative">
        {/* Hero Image */}
        <div 
          className="w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/img_andykelly0evhmvql9gunsplash_2.png')" }}
        >
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] xl:px-[80px] py-[200px] sm:py-[250px] lg:py-[314px]">
            {/* Empty space to show the background image */}
          </div>
          
          {/* Hero Content Box - Overlay on large screens */}
          <div className="hidden lg:block absolute bottom-0 left-0 w-full max-w-[1440px] mx-auto">
            <div className="ml-[80px] mb-[40px] max-w-[600px] xl:max-w-[630px]">
              <div className="bg-gradient-to-br from-[#1CBDDD] to-[#4dca79] p-[34px] xl:p-[40px] flex flex-col gap-[20px]">
                <h1 className="text-[48px] xl:text-[54px] font-inter font-bold leading-[48px] xl:leading-[54px] text-white capitalize ml-[6px]">
                  We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
                </h1>
                <div className="ml-[6px] mb-[8px]">
                  <Button 
                    variant="primary" 
                    size="medium"
                    className="rounded-[4px]"
                  >
                    GET FREE CONSULTATION
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Content Box - Below image on mobile/tablet */}
        <div className="w-full lg:hidden">
          <div className="w-full">
            <div className="bg-gradient-to-br from-[#1cbddd] to-[#4dca79] p-[24px] sm:p-[30px] flex flex-col gap-[20px]">
              <h1 className="text-[24px] sm:text-[36px] font-inter font-bold leading-[28px] sm:leading-[40px] text-white capitalize ml-[6px]">
                We crush your competitors, goals, and sales records - without the B.S.
              </h1>
              <div className="ml-[6px] mb-[8px]">
                <Button 
                  variant="primary" 
                  size="medium"
                  className="rounded-[4px]"
                >
                  Get free consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Web & Mobile App Development Section */}
      <section className="w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] xl:px-[80px] py-[40px] sm:py-[60px] lg:py-[80px]">
          <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-8 lg:gap-[100px] xl:gap-[120px] max-w-[1280px] mx-auto">
            <div className="w-full md:w-[45%] lg:w-[414px] xl:w-[450px] order-1 md:order-2 lg:order-1">
              <img 
                src="/images/img_image_2.png" 
                className="w-full h-auto max-w-[300px] md:max-w-full lg:max-w-[414px] xl:max-w-[450px] mx-auto" 
                alt="Web & Mobile App Development" 
              />
            </div>
            <div className="w-full md:w-[50%] lg:w-[50%] xl:w-[50%] flex flex-col gap-[18px] xl:gap-[22px] order-2 md:order-1 lg:order-2 text-center md:text-left lg:text-left">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[27px] xl:text-[30px] font-poppins font-semibold leading-[24px] sm:leading-[30px] lg:leading-[33px] xl:leading-[36px] text-[#4f46e5]">
                Web & Mobile App Development
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] font-inter font-normal leading-[17px] sm:leading-[18px] lg:leading-[19px] xl:leading-[21px] text-black">
                Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
              </p>
              <div className="flex justify-center md:justify-start lg:justify-start">
                <Button 
                  variant="primary" 
                  size="medium"
                  className="rounded-[4px] w-fit"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Digital Strategy Consulting Section */}
      <section className="w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] xl:px-[80px] py-[40px] sm:py-[60px] lg:py-[80px]">
          <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-8 lg:gap-[100px] xl:gap-[120px] max-w-[1280px] mx-auto">
            <div className="w-full md:w-[45%] lg:w-[414px] xl:w-[450px] order-1 md:order-1 lg:order-2">
              <img 
                src="/images/img_image_1.png" 
                className="w-full h-auto max-w-[300px] md:max-w-full lg:max-w-[414px] xl:max-w-[450px] mx-auto" 
                alt="Digital Strategy Consulting" 
              />
            </div>
            <div className="w-full md:w-[50%] lg:flex-1 xl:w-[50%] flex flex-col gap-[18px] xl:gap-[22px] order-2 md:order-2 lg:order-1 text-center md:text-left lg:text-left">
              <h2 className="text-[20px] sm:text-[24px] lg:text-[27px] xl:text-[30px] font-poppins font-semibold leading-[24px] sm:leading-[30px] lg:leading-[33px] xl:leading-[36px] text-[#4f46e5]">
                Digital Strategy Consulting
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] font-inter font-normal leading-[17px] sm:leading-[18px] lg:leading-[19px] xl:leading-[21px] text-black w-full lg:w-[82%] xl:w-[85%]">
                Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
              </p>
              <div className="flex justify-center md:justify-start lg:justify-start">
                <Button 
                  variant="primary" 
                  size="medium"
                  className="rounded-[4px] w-fit"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] xl:px-[80px] py-[40px] sm:py-[60px] lg:py-[74px] xl:py-[80px]">
          <div className="flex flex-col items-center">
            <h2 className="text-[20px] sm:text-[24px] lg:text-[27px] xl:text-[30px] font-poppins font-semibold leading-[30px] sm:leading-[35px] lg:leading-[41px] xl:leading-[45px] text-[#4f46e5] text-center mb-[18px] xl:mb-[22px]">
              Frequently asked questions
            </h2>
            
            <div className="w-full max-w-[846px] xl:max-w-[900px] flex flex-col gap-[14px] xl:gap-[16px]">
              {faqData?.map((faq, index) => (
                <div 
                  key={index}
                  className="w-full bg-[#faf7ff] rounded-[6px] p-[24px] xl:p-[28px]"
                >
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(index)}>
                    <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px] font-inter font-medium leading-[22px] sm:leading-[25px] lg:leading-[27px] xl:leading-[30px] text-[#4f46e5] pr-4">
                      {faq?.question}
                    </h3>
                    <img 
                      src={expandedFaq === index ? "/images/img_frame_35623.svg" : "/images/img_frame_35622.svg"}
                      className="w-[14px] h-[28px] flex-shrink-0" 
                      alt="Toggle FAQ" 
                    />
                  </div>
                  {expandedFaq === index && (
                    <div className="mt-[12px] xl:mt-[16px]">
                      <p className="text-[16px] sm:text-[17px] lg:text-[18px] xl:text-[19px] font-inter font-normal leading-[24px] sm:leading-[28px] lg:leading-[30px] xl:leading-[32px] text-[#6e6b8f]">
                        {faq?.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;