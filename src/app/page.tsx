import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Tag from './components/Tag'

export default function Home() {
  return (
    <div>
      <Navbar/>
        <>
        {/* Parent container */}
          <div className=' px-24 py-[120px]'>
            {/* Container-1 */}
            <div className=' flex justify-start gap-28'>
                <div className=' w-[45%] '>
                <Tag className=' mb-[43px] w-fit' title={'CREATIVE VISION'}/>
                <h2 style={{lineHeight:'35px'}} className=' text-[#FF9037] text-[24px] font-bold'>
                Many people imagine... <br />
                Some ideate... <br />
                But, few have the dedication to pursue their imagination into reality…... We DO!!!
                </h2>
                <p style={{lineHeight:'26px'}} className=' text-[15px] text-[#404046] text-justify my-4 '>
                  We are a team of technology experts and process consultants in <span className=' font-semibold'>
                  Waste Management, Healthcare, Recycling, Business Automation and Enterprise Resource Planning.
                  </span> We are a highly collaborative and supportive team, coming together on every single project to ensure our clients get the very best out of each of us. Making a difference counts and it’s at the forefront of our minds on every proposal we undertake.
                  <br />
                  <br />
                </p>
                <p style={{lineHeight:'26px'}} className=' text-[15px] text-[#404046] text-justify my-4'>
                  Our imagination gave birth to revolutionary concepts, which have today <br /> been channelized into unique products aimed at consumers and enterprises.
                </p>
                <p className=' mb-4'>
                  <br />
                  <br />
                </p>
                </div>
                <div className=' w-[45%]  '>
                  <Image unoptimized className=' w-full h-fit' src={'https://codeland.in/wp-content/uploads/2023/04/Group-47258.png'} alt='not found' width={100} height={100}/>
                </div>
            </div>

            {/* Container-2 */}
            <div className=' flex justify-center items-center gap-28 '>
                <div className=' w-[45%] '>
                  <Image unoptimized className=' w-full h-full' src={'https://codeland.in/wp-content/uploads/2023/04/Group-47258.png'} alt='not found' width={100} height={100}/>
                </div>
                <div className=' w-[45%] '>
                <Tag className=' w-fit mb-10' title={'HISTORY'}/>
                <h2 style={{lineHeight:'35px'}} className=' my-5 text-[#FF9037] text-[24px] font-bold'>
                  Growing String Since 2011
                </h2>
                <p style={{lineHeight:'26px'}} className=' text-[15px] text-[#404046] text-justify mb-4'>
                  <strong>CodeLand InfoSolutions was formed in 2011</strong> by like-minded individuals with the passion and determination to transform their imagination into reality.  We are located in India’s IT capital, Bangalore.
                </p>
                <p style={{lineHeight:'26px'}} className=' text-[15px] text-[#404046] text-justify mb-4'>
                  With the drive to continue its success as a product company, CodeLand aims to become one of the leading product companies in the software industry, by pursuing the path of imagination, ideation, execution and creation. 
                </p>
                <p style={{lineHeight:'26px'}} className=' text-[15px] text-[#404046] text-justify font-semibold mb-4'>
                  The future is full of exciting possibilities with products powered by CodeLand.
                </p>
                </div>
            </div>
            {/* Container-3 */}
            <div className=' mt-10'>
              <Tag title='TIMELINE' className=' w-fit mb-10'/>
              <div className=' flex flex-col justify-center gap-10 items-center'>
                <h1 style={{lineHeight:'60px'}} className='text-[24px] font-[700] mb-5 '>Our Story So far.....</h1>
                <Image unoptimized className=' w-[60%] h-full' alt='not found' width={100} height={100} src={'https://codeland.in/wp-content/uploads/2023/04/Timeline-v1.21-1179x1536.png'}/>
              </div>
            </div>
          </div>
        </>
      <Footer/>
    </div>
  )
}
