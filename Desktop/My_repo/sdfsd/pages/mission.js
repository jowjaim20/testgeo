import React from 'react';
import background from '@public/images/backgrounds/mission-background.webp';
import smallBackground from '@public/images/backgrounds/small-background.png';
import BackgroundLines from '@components/BackgroundLines';
import GeoHead from '@components/Head';
import GeoButton from '@components/Button';
import circle from '@public/images/backgrounds/globus.png';
import missionPic from '@public/images/backgrounds/mission.png';
import circeGreen from '@public/images/backgrounds/circle-green.png';
import PageHeader from '@components/PageHeaderV2';

const Mission = () => {
  const missionsAdvantages = [
    { name: 'Transparency' },
    { name: 'Community' },
    { name: 'Innovation' },
    { name: 'Results Orientation' },
  ];

  const facts = [
    // { data: '98%', name: 'Customer Satisfaction' },
    // { data: '24/7', name: 'Technical Support' },
    { data: '2M+', name: 'Proxies Globally' },
  ];
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className='relative bg-secondary-base mx-auto'
      >
        <GeoHead
          title='Geonode Mission'
          description='Together we can make the ideals of a free and fair internet possible once again. We power your business and help you realize your most ambitious goals!'
        />
        <div className='px-4'>
          <PageHeader darkMode noBackground noContent />
        </div>
        <div className='max-w-screen-xl m-auto items-center mx-auto mt-24 lg:mt-48 pb-24 lg:pb-32 relative px-4'>
          <div
            className='text-white max-w-4xl pt-16 px-12 lg:px-20 mb-32 xl:mb-64'
            style={{
              backgroundImage: `url(${smallBackground})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className='font-black text-5xl mb-6 '>
              <h1>
                Our mission is to bring the data revolution back to the people
              </h1>
            </div>
            <div className='text-lg	mb-20'>
              In a world full of Davids trying to build better products and
              provide excellent services to their customers, Big Tech Goliaths
              hold all the cards and the means to amass data. They are all that
              stand between us and a world where data is easily accessible to
              the ordinary user for better decision making.{' '}
            </div>
            <div>
              <GeoButton
                label='Get started for only $7'
                linkButton
                className='w-64	'
                buttonClassName='w-full'
              ></GeoButton>
            </div>
          </div>

          <div className='absolute bottom-0 left-0 transform translate-y-1/2 w-full z-10'>
            <div className='bg-white grid grid-cols-2 sm:flex z-10 shadow-lg rounded-lg justify-around sm:py-16 mx-4'>
              {missionsAdvantages.map((mission, index) => {
                return (
                  <div
                    key={index}
                    className='flex mt-4 sm:mt-0 text-center flex-col items-center'
                  >
                    <div className='mb-5'>
                      <img src={circeGreen}></img>
                    </div>
                    <div className='text-sm	md:text-lg leading-7 text-primary-400 font-medium px-1'>
                      {mission.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-screen-xl m-auto bg-white pb-24 relative px-4'>
        <BackgroundLines lineColor='teritiary' />
        <div className='relative mt-52'>
          <div className='max-w-xl pr-4'>
            <div className='uppercase text-support4-base mb-5'>geonode</div>
            <div className='mb-8 text-4xl'>
              <h2>This Is Who We Are</h2>
            </div>
            <div className='mb-6 text-xl text-subtle-400'>
              We have created an ecosystem in which all users can access and
              contribute to the data that will help them make decisions with
              confidence. We value building a community of like-minded
              individuals who hope to create real, positive change in this
              world.
            </div>
            <div className='text-xl	text-subtle-400'>
              We keep your lights on. We power your business and help you
              realize your most ambitious goals. We are geonode, and we believe
              in the service we provide to power the network of great
              businesses!
            </div>
          </div>
        </div>
      </div>

      <div className='relative bg-secondary-base flex justify-center pt-9'>
        <img src={circle}></img>
        <div
          className='max-w-screen-xl absolute w-full z-10'
          style={{ bottom: '-80px' }}
        >
          <div className='px-4'>
            <div className='flex justify-around bg-white  shadow-lg rounded-lg'>
              {facts.map((fact, index) => {
                return (
                  <div
                    key={index}
                    className='py-10 text-center flex flex-col items-center'
                  >
                    <div className='text-4xl lg:text-5xl leading-none text-support2-base font-bold mb-2'>
                      {fact.data}
                    </div>
                    <div className='text-lg text-primary-400 leading-6 font-medium'>
                      {fact.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white pb-48 relative'>
        <BackgroundLines lineColor='teritiary' />
        <div className='relative max-w-screen-xl mx-auto pt-24 lg:pt-48 px-4'>
          <div className='text-4xl mb-8 md:mb-16 lg:mb-24 max-w-2xl leading-10 font-normal'>
            <h2>
              Our mission is to bring the data revolution back to the people
            </h2>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-4'>
            <div className='mt-6 text-gray-500 text-lg leading-8 lg:max-w-lg	'>
              <p className='mb-6'>
                In a world full of Davids trying to build better products and
                provide excellent services to their customers, Big Tech Goliaths
                hold all the cards and the means to amass data. They are all
                that stand between us and a world where data is easily
                accessible to the ordinary user for better decision making.
              </p>
              <p className='mb-6'>That is where we come in!</p>
              <p className='mb-6 lg:mb-1'>
                Geonode is committed to providing every David with the slingshot
                and stones they need to compete with the biggest corporations.
              </p>
            </div>
            <div>
              <img src={missionPic}></img>
            </div>
            <div></div>
            <div className='mt-6 text-gray-500 text-lg leading-8 lg:max-w-lg	'>
              <p className='mb-6'>
                The internet was built with the hope that it would be the great
                equalizer. The ethics employed by modern corporations to collect
                data is questionable, and the competitive advantage they are
                compounding is an insurmountable advantage that will make the
                ideals of the internet a thing of the past.{' '}
              </p>
              <p className='mb-6'>
                We believe that the data revolution should be inclusive and not
                be left exclusively to big corporations, and we're here to put
                it back into everyone's hands!
              </p>
              <p>
                Our way of fighting for what we believe is by providing you with
                all the tools necessary for accessing this valuable asset
                anywhere on earth— shining a light so bright on the internet,
                making transparency possible again!
              </p>
            </div>
            <div className='mt-6 text-gray-500 text-lg leading-8 lg:max-w-lg	'>
              <p className='mb-6 '>
                We build tools to empower our customers to collect
                mission-critical web data that helps level the playing field in
                their respective industries. This ultimately democratizes and
                drives forward real innovation and a truly-free market.
              </p>
              <p className='mb-6 '>
                Our team’s commitment to you is to listen and build based on
                your needs and wants. We will build free services whenever
                possible and premium services at non-premium prices.{' '}
              </p>
              <p>
                Together we can make the ideals of a free and fair internet
                possible once again
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
