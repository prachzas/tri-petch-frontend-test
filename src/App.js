import './App.css';
import football from './images/footballer.png'
import basketball from './images/basketball.png'
import path45 from './images/path45.png'
import rectangle34 from './images/rectangle34.png'
import rectangle34drop from './images/rectangle34drop.png'
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useWindowSize } from "@uidotdev/usehooks";

function App() {
  const size = useWindowSize();
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (size.width <= 414) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [size.width])

  return (
    <div className='relative overflow-hidden'>
      <img alt='football-img' src={football} className='z-20 absolute w-[200px] h-[281px] right-[50px] top-[70px] md:w-[498px] md:h-[699px] md:top-[121px] md:-left-[161px] lg:w-[678px] lg:h-[950px] lg:left-[175px] lg:top-[35px]' />
      <img alt='basketball-img' src={basketball} className='z-20 absolute w-[302px] h-[249px] top-[681px] right-[15px] md:w-[691px] md:h-[568px] md:top-[852px] md:-right-[254px] lg:w-[991px] lg:h-[815px] lg:top-[898px] lg:right-[125px]' />
      <img alt='line-img' src={path45} className='h-[197.90px] w-[178.23px] top-[82.91px] right-[72.75px] z-10 absolute md:top-[140px] md:-left-[28.91px] lg:w-[265px] lg:h-[311px] lg:top-[960px] lg:left-[1464px]' />
      <img alt='line-img' src={path45} className='z-10 absolute top-[790px] left-[52px] w-[106px] h-[123px] md:w-[178px] md:h-[207px] md:top-[1115.89px] md:left-[500px] lg:w-[262px] lg:h-[304px] lg:top-[1335px] lg:left-[989px]' />
      <img alt='line-img' src={path45} className='z-10 absolute top-[712px] left-[203px] w-[76px] h-[89px] md:hidden' />
      <img alt='plus-icon-img' src={rectangle34} className='top-[90px] left-[74px] z-10 absolute md:top-[111px] md:left-[51px] lg:hidden' />
      <img alt='plus-icon-img' src={rectangle34} className='z-10 absolute top-[705px] left-[71px] md:top-[924px] md:left-[533px] lg:top-[1029px] lg:left-[1098px]' />
      <img alt='plus-drop-icon-img' src={rectangle34drop} className='top-[81px] left-[52px] z-10 absolute md:top-[102px] md:left-[29px] lg:hidden' />
      <img alt='plus-drop-icon-img' src={rectangle34drop} className='z-10 absolute top-[690px] left-[47px] md:top-[941px] md:left-[555px] lg:top-[1046px] lg:left-[1120px]' />

      {isMobile &&
        <div className='h-[296px]'>
          <p className='md:mt-[81px] lg:mt-6 lg:text-[90px] text-[#E7E7E7] md:mg-[42px] lg:mb-[59px] text-[50px] pl-[18px]'>ATHLETS</p>
        </div>
      }

      {isMobile &&
        <Carousel showArrows={false} showStatus={false}>
          <div className='h-[284px] p-[18px] bg-[#F5F4F9]'>
            <div className='flex gap-[10px] mt-[72px] items-center'>
              <div>
                <p className='text-sm tracking-[1.5px] rounded-xl'>01</p>
                <div className='bg-[#603EBE] w-[19px] h-[5px] rounded-[2.5px]'></div>
              </div>
              <p className='text-[28px] text-[#C2C2C2]'>CONNECTION</p>
            </div>
            <p className='text-left text-[15px]'>Connect with coaches directly, you can ping coaches to view profile.</p>
          </div>

          <div className='h-[284px] bg-[#F5F4F9] p-[18px]'>
            <div className='flex gap-[10px] mt-[72px] items-center'>
              <div>
                <p className='text-sm tracking-[1.5px] rounded-xl'>02</p>
                <div className='bg-[#603EBE] w-[19px] h-[5px] rounded-[2.5px]'></div>
              </div>
              <p className='text-[28px] text-[#C2C2C2]'>COLLABORATION</p>
            </div>
            <p className='text-left text-[15px]'>Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.</p>
          </div>

          <div className='h-[284px] bg-[#F5F4F9] p-[18px]'>
            <div className='flex gap-[10px] mt-[72px] items-center'>
              <div>
                <p className='text-sm tracking-[1.5px] rounded-xl'>03</p>
                <div className='bg-[#603EBE] w-[19px] h-[5px] rounded-[2.5px]'></div>
              </div>
              <p className='text-[28px] text-[#C2C2C2]'>GROWTH</p>
            </div>
            <p className='text-left text-[15px] '>Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc </p>
          </div>

        </Carousel>
      }

      {isMobile &&
        <div className='h-[296px] mt-[19px'>
          <p className='md:mt-[81px] lg:mt-6 lg:text-[90px] text-[#E7E7E7] md:mg-[42px] lg:mb-[59px] text-[50px] pl-[18px]'>PLAYERS</p>
        </div>
      }

      {isMobile &&
        <Carousel showArrows={false} showStatus={false}>
          <div className='h-[238px] bg-[#F5F4F9] p-[18px]'>
            <div className='flex gap-[10px] mt-[72px] items-center mb-[20px]'>
              <div>
                <p className='text-sm tracking-[1.5px] rounded-xl'>01</p>
                <div className='bg-[#603EBE] w-[19px] h-[5px] rounded-[2.5px]'></div>
              </div>
              <p className='text-[28px] text-[#C2C2C2]'>CONNECTION</p>
            </div>
            <p className='text-left text-[15px]'>Connect with talented athlete directly, you can watch their
              skills through video showreels directly from Surface 1.</p>
          </div>

          <div className='h-[238px] bg-[#F5F4F9] p-[18px]'>
            <div className='flex gap-[10px] mt-[72px] items-center mb-[20px]'>
              <div>
                <p className='text-sm tracking-[1.5px] rounded-xl'>02</p>
                <div className='bg-[#603EBE] w-[19px] h-[5px] rounded-[2.5px]'></div>
              </div>
              <p className='text-[28px] text-[#C2C2C2]'>COLLABORATION</p>
            </div>
            <p className='text-left text-[15px]'>Work with recruiter to increase your chances of finding
              talented athlete.</p>
          </div>

          <div className='h-[238px] bg-[#F5F4F9] p-[18px]'>
            <div className='flex gap-[10px] mt-[72px] items-center mb-[20px]'>
              <div>
                <p className='text-sm tracking-[1.5px] rounded-xl'>03</p>
                <div className='bg-[#603EBE] w-[19px] h-[5px] rounded-[2.5px]'></div>
              </div>
              <p className='text-[28px] text-[#C2C2C2]'>GROWTH</p>
            </div>
            <p className='text-left text-[15px]'>Save your time, recruit proper athlets for your team.</p>
          </div>

        </Carousel>
      }

      {!isMobile &&
        <>
          <div className='h-[296px] md:h-[377px] lg:h-[345px] bg-white'>
            <div className='lg:w-[1440px] mx-auto md:w-full md:pr-[30.8px]'>
              <div className='lg:grid md:grid grid-cols-2 sm:w-full'>
                <div className='col-start-2 col-span-1'>
                  <p className='md:mt-[81px] lg:mt-6 text-[90px] text-[#E7E7E7] md:mg-[42px] lg:mb-[59px] pl-[18px]'>ATHLETS</p>
                  <div className='flex gap-[10px] md:mb-[21px] lg:mb-[31px] items-center'>
                    <div>
                      <p className='text-lg tracking-[1.5px] rounded-xl'>01</p>
                      <div className='bg-[#603EBE] w-[19px] h-[5px] rounded-[2.5px]'></div>
                    </div>
                    <p className='text-4xl text-[#C2C2C2]'>CONNECTION</p>
                  </div>
                  <p className='lg:text-xl md:text-lg'>Connect with coaches directly, you can ping coaches to view profile.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='md:h-[235px] lg:h-[256px] bg-[#F5F4F9]'>
            <div className='lg:w-[1440px] mx-auto md:w-full md:pr-[30.8px]'>
              <div className='grid grid-cols-2'>
                <div className='col-start-2 col-span-1'>
                  <div className='flex gap-[10px] mb-[21px] items-center md:mt-[30px]  lg:mt-[53px]'>
                    <div>
                      <p className='text-lg tracking-[1.5px] rounded-xl'>02</p>
                      <div className='bg-[#603EBE] w-[19px] h-[5px] rounded-[2.5px]'></div>
                    </div>
                    <p className='text-4xl text-[#C2C2C2]'>COLLABORATION</p>
                  </div>
                  <p className='text-xl md:text-lg'>Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='md:h-[207px] lg:h-[297px] bg-[#5E3DB3]'>
            <div className='lg:w-[1440px] mx-auto md:w-full md:pr-[30.8px]'>
              <div className='grid grid-cols-2'>
                <div className='col-start-2 col-span-1'>
                  <div className='flex gap-[10px] mb-[21px] items-center md:mt-[30px] lg:mt-[80px]'>
                    <div>
                      <p className='text-lg tracking-[1.5px] rounded-xl'>03</p>
                      <div className='bg-[#FFFFFF] w-[19px] h-[5px] rounded-[2.5px]'></div>
                    </div>
                    <p className='text-4xl text-[#C2C2C2]'>GROWTH</p>
                  </div>
                  <p className='lg:text-xl text-white md:text-lg'>Resources and tools for you to get better as a student Athelte.
                    Access to training classes, tutor sessions, etc </p>
                </div>
              </div>
            </div>
          </div>

          <div className='md:h-[374px] lg:h-[485px] bg-white'>
            <div className='lg:w-[1440px] mx-auto md:w-full md:pl-[30.8px]'>
              <div className='grid grid-cols-2'>
                <div className='col-start-1 col-span-1'>
                  <p className='md:mt-[51px] lg:mt-[124px] text-[90px] text-[#E7E7E7] md:mb-[34px] lg:mb-[68px]'>PLAYERS</p>
                  <div className='flex gap-[10px] mb-[21px] items-center'>
                    <div>
                      <p className='text-lg tracking-[1.5px] rounded-xl'>01</p>
                      <div className='bg-[#603EBE] w-[19px] h-[5px] rounded-[2.5px]'></div>
                    </div>
                    <p className='text-4xl text-[#C2C2C2]'>CONNECTION</p>
                  </div>
                  <p className='lg:text-xl md:text-lg'>Connect with talented athlete directly, you can watch their
                    skills through video showreels directly from Surface 1.</p>
                </div>
              </div>
            </div>
          </div>


          <div className='md:h-[235px] lg:h-[245px] bg-[#F5F4F9]'>
            <div className='lg:w-[1440px] mx-auto md:w-full md:pl-[30.8px]'>
              <div className='grid grid-cols-2'>
                <div className='col-start-1 col-span-1'>
                  <div className='lg:mt-[52px] md:mt-[51px] flex gap-[10px] mb-[21px] items-center'>
                    <div>
                      <p className='text-lg tracking-[1.5px] rounded-xl'>02</p>
                      <div className='bg-[#603EBE] w-[19px] h-[5px] rounded-[2.5px]'></div>
                    </div>
                    <p className='text-4xl text-[#C2C2C2]'>COLLABORATION</p>
                  </div>
                  <p className='lg:text-xl md:text-lg'>Work with recruiter to increase your chances of finding
                    talented athlete.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='md:h-[207px] lg:h-[268px] bg-[#090C35]'>
            <div className='lg:w-[1440px] mx-auto md:w-full md:pl-[30.8px]'>
              <div className='grid grid-cols-2'>
                <div className='col-start-1 col-span-1'>
                  <div className='flex gap-[10px] mb-[21px] items-center md:mt-[44px] lg:mt-[87px]'>
                    <div>
                      <p className='text-lg text-[#8F6BE8] tracking-[1.5px] rounded-xl'>03</p>
                      <div className='bg-[#FFFFFF] w-[19px] h-[5px] rounded-[2.5px]'></div>
                    </div>
                    <p className='text-4xl text-[#C2C2C2]'>GROWTH</p>
                  </div>
                  <p className='lg:text-xl text-white md:text-lg'>Save your time, recruit proper athlets for your team. </p>
                </div>
              </div>
            </div>
          </div>
        </>
      }

    </div>
  );
}

export default App;
