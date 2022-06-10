import React from 'react';
import PageHeader from '@components/PageHeaderV2';
import DarkSection from '@components/DarkSection';
import mockData from '@mockdata/location';
import { utilsService } from '../../services';
import styles from '../../styles/location.module.scss';
import ApiIntegration from '@components/ApiIntegration';
import Features from '@components/LandingSections/Features';
import BackgroundLines from '@components/BackgroundLines/index';
import GeoButton from '@components/Button';
import GeoHead from '@components/Head';

const divideArray = () => {
  let newArray = [];
  let size = Math.ceil(mockData.countries.length / 6);
  for (var i = 0; i < mockData.countries.length; i += size) {
    newArray.push(mockData.countries.slice(i, i + size));
  }

  return newArray;
};

const LocationPage = () => {
  return (
    <div className=''>
      <GeoHead
        title='Geonode Proxy Locations'
        description='With millions of proxies from 150+ countries around the globe, we offer the largest pool of the highest-quality and most unique IPs.'
      />

      <DarkSection>
        <div className='darkbg'>
          <BackgroundLines />
          <PageHeader darkMode>
            <div className='relative flex flex-col md:flex-row items-center gap-16 py-16'>
              <div className='w-full sm:w-8/12 md:text-left'>
                <h1>
                  <span className='mt-1 block text-4xl leading-10 tracking-tight font-bold lg:text-5xl'>
                    <span className='block text-gray-50'>
                      {mockData.header.title}
                    </span>
                  </span>
                </h1>
                <p className='mt-3 text-lg font-normal leading-7 text-subtle-300 sm:mt-5 md:text-xl'>
                  {mockData.header.description}
                </p>
                <div className='mt-8 text-left lg:mx-0'>
                  <GeoButton linkButton label='Get started' />
                </div>
              </div>
              <div className='hidden md:block w-full relative lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
                <div className='relative mx-auto w-full rounded-lg'>
                  <div className='relative block w-full rounded-lg overflow-hidden'>
                    <img
                      className='w-full'
                      src={mockData.header.img}
                      alt={mockData.header.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          </PageHeader>
        </div>
      </DarkSection>

      <section className='bg-white'>
        <div className='max-w-screen-xl m-auto py-16 lg:py-32 text-gray-900 px-4'>
          <div className='relative space-y-32'>
            <TopLocations />
            <AllLocations />
          </div>
        </div>
      </section>

      {/* <section className='bg-white'>
				<ApiIntegration />
			</section> */}
      <section className='bg-white pb-24 md:pb-28 lg:pb-32'>
        <Features />
      </section>
    </div>
  );
};

const TopLocations = () => {
  return (
    <div>
      <div className='text-3xl leading-9 font-bold mb-12'>
        <h2>Top Locations</h2>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {mockData.topLocation.map((country, index) => (
          <a
            href={`/locations/${country.shortname}/`}
            key={index}
            target='_blank'
          >
            <div
              key={country.id}
              className={` ${styles.countryMain} relative w-5/6 px-6 py-5 flex items-center space-x-3 border border-transparent transition duration-700 ease-in-out hover:transition transform hover:border-support1-base hover:left-6 hover:scale-105 hover:shadow-lg rounded`}
            >
              <div className='flex-shrink-0'>
                {utilsService.countryFlag(country.code, 45)}
                {/* <img className='h-10 w-10' src={country.flag} alt='' /> */}
              </div>
              <div className='flex-1 min-w-0'>
                <div className='focus:outline-none'>
                  {/* <span className='absolute inset-0' aria-hidden='true' /> */}
                  <p className='text-base font-normal text-gray-500'>
                    {country.name}
                  </p>
                  {/* <p className='text-lg leading-6 font-medium text-gray-900 truncate'>
										{utilsService.formattingNumber(country.ips)} IPs
									</p> */}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const AllLocations = () => {
  return (
    <div>
      <div className='text-2xl leading-8 font-medium mb-10'>
        <h3>All Countries</h3>
      </div>
      <div className='relative hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        {mockData.countries.map((item, idx) => (
          <div className='flex flex-col mb-4 md:mb-0' key={idx}>
            <a
              href={`/locations/${item.shortname}/`}
              key={idx}
              target='_blank'
              className='p-1 md:p-0'
            >
              <div
                key={item.id}
                className={`${styles.countryMain} 
									flex flex-col justify-center relative 
									w-11/12 pl-3 border border-transparent transition 
									duration-700 ease-in-out hover:transition transform hover:border-support1-base 
									hover:left-6 hover:scale-105 hover:shadow-lg rounded`}
              >
                <div className='flex items-center space-x-3'>
                  <div className='flex-shrink-0'>
                    {utilsService.countryFlag(item.code, 30)}
                    {/* <img className='h-10 w-10' src={country.flag} alt='' /> */}
                  </div>
                  <span
                    style={{ textOverflow: 'ellipsis' }}
                    className='text-sm leading-6 font-medium text-gray-500 overflow-hidden whitespace-nowrap'
                  >
                    {item.name}
                  </span>
                </div>
                {/* <div className={`${styles.countrySub}`}>
										<span className='text-base leading-6 font-normal text-subtle-400 truncate'>
											{utilsService.formattingNumber(item.ips)} IPs
										</span>
									</div> */}
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className='relative flex flex-col md:hidden'>
        {divideArray().map((item, idx) => (
          <div className='flex mb-16 flex-wrap' key={idx}>
            {item.map((country, index) => (
              <a
                href={`/locations/${country.shortname}/`}
                key={index}
                style={{ width: '49%' }}
                target='_blank'
                className='p-1 md:p-0'
              >
                <div
                  key={country.id}
                  className={`${styles.countryMain} 
									flex flex-col justify-center relative 
									w-11/12 pl-3 border border-transparent transition 
									duration-700 ease-in-out hover:transition transform hover:border-support1-base 
									hover:left-6 hover:scale-105 hover:shadow-lg rounded`}
                >
                  <div className='flex items-center space-x-3'>
                    <div className='flex-shrink-0'>
                      {utilsService.countryFlag(country.code, 30)}
                      {/* <img className='h-10 w-10' src={country.flag} alt='' /> */}
                    </div>
                    <span
                      style={{ textOverflow: 'ellipsis' }}
                      className='text-sm leading-6 font-medium text-gray-500 overflow-hidden whitespace-nowrap'
                    >
                      {country.name}
                    </span>
                  </div>
                  {/* <div className={`${styles.countrySub}`}>
										<span className='text-base leading-6 font-normal text-subtle-400 truncate'>
											{utilsService.formattingNumber(country.ips)} IPs
										</span>
									</div> */}
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationPage;
