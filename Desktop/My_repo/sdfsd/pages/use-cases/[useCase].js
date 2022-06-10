import React from 'react';
import PageHeader from '@components/PageHeaderV2';
import GeoButton from '@components/Button';
import styles from './useCases.module.scss';
import mockedData from '../../mocks2';
import BackgroundLines from '@components/BackgroundLines';
import { ArrowRightIcon } from '@heroicons/react/solid';
import GeoHead from '@components/Head';

export async function getStaticPaths() {
  return {
    paths: [
      ...mockedData.allUseCases.tiers.map((item) => ({
        params: { useCase: item.id },
      })),
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const useCase = params.useCase;
  return { props: { useCase } };
}

const LandingPage = (props) => {
  const pageData = mockedData.allUseCases.tiers.find(
    (useCase) => useCase.id === props.useCase
  );
  console.log(pageData);
  return (
    <div className=' bg-contact'>
      <GeoHead
        title={pageData.metaTitle}
        description={pageData.metaDescription}
      />
      <div className={`relative	mx-auto border-r border-l border-support1-base`}>
        <BackgroundLines lineColor='secondary' />
        <section>
          <PageHeader noContent noBackground />
        </section>

        <section className='flex max-w-screen-xl flex-col md:flex-row mx-auto relative justify-between mt-16 md:mt-32 mb-4 md:mb-16 px-4'>
          <div className='justify-center flex flex-col mr-3 mb-14 md:mb-0'>
            <div className='mb-4 font-bold text-5xl max-w-lg text-background-high'>
              <h1>{pageData.name}</h1>
            </div>
            <div className='mb-12 text-subtle-400 w-full md:max-w-md text-base leading-6'>
              {pageData.description}
            </div>
            <div>
              <ButtonAction />
            </div>
          </div>
          <div className='flex justify-center md:mr-8'>
            <img className='w-full' src={pageData.img}></img>
          </div>
        </section>
        <section className=' relative pb-24 md:pb-28 lg:pb-32'>
          <div className='relative max-w-screen-xl mx-auto px-4'>
            <div className=' bg-white shadow rounded-lg'>
              <div className='max-w-full sm:max-w-3xl mx-auto pt-16	px-4'>
                {pageData.features.map((feature, index) => {
                  return (
                    <div className='mb-12' key={index}>
                      <div className='mb-4 text-4xl text-background-high font-bold'>
                        <h2>{feature.title}</h2>
                      </div>
                      <div
                        className='text-subtle-400 text-lg leading-8'
                        dangerouslySetInnerHTML={{
                          __html: feature.description,
                        }}
                      />
                      {feature.additionalDescription
                        ? feature.additionalDescription.map((desc, index) => {
                            return (
                              <div
                                key={index}
                                className='mt-4 text-subtle-400 text-lg leading-8	'
                              >
                                {desc.name}
                              </div>
                            );
                          })
                        : null}
                    </div>
                  );
                })}
                <div className='mb-12'>
                  <div className='mb-4 text-4xl text-background-high font-bold		'>
                    <h2>About Geonode Networks</h2>
                  </div>
                  <div className='text-subtle-400 mb-4 text-lg leading-8	'>
                    Geonode is a comprehensive and user-friendly proxy network
                    providing over 2 million IPs in many locations.
                  </div>
                  <div className='text-subtle-400 mb-4 text-lg leading-8	'>
                    You can use IPs from over 140 countries, including the
                    United States, United Kingdom, Australia, Russia, Europe &
                    more.
                  </div>
                  <div className='text-subtle-400 mb-4 text-lg leading-8	'>
                    We make data collection painless with our friendly staff and
                    helpful documentation. And we make it easy and fun with our
                    best-in-breed customer dashboard that gives you a bird’ eye
                    view of the most important metrics and results.
                  </div>
                </div>
                <div className='pb-24'>
                  <div className='mb-4 text-4xl text-background-high font-bold		'>
                    <h2>Why Geonode?</h2>
                  </div>
                  <div className='text-subtle-400 mb-4 text-lg leading-8	'>
                    Growing businesses worldwide trust Geonode for all their
                    data gathering needs. Our residential proxies are ethically
                    sourced, often refreshed, and easy to use. We offer proxy
                    plans to cover every legitimate use case.
                  </div>
                  <div className='text-subtle-400 text-lg leading-8	'>
                    Unlike many competitors, we have no monthly bandwidth
                    limits. We provide services,
                    depending on your requirements. Enjoy worldwide access with
                    fast and reliable connections. We are invested in your
                    success and ready to support you every step of the way.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ButtonAction = () => {
  return (
    <div className={`${styles.buttonContainer} flex`}>
      <GeoButton label='Get started' className='mr-4' linkButton />
      <a href='/pricing/' className='flex m-4 justify-center items-center'>
        <span className='text-primary-base text-sm leading-5 font-medium mr-1'>
          See pricing
        </span>
        <ArrowRightIcon className='h-4 w-4 text-primary-base' />
      </a>
    </div>
  );
};

export default LandingPage;
