import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import bugWindow from '@public/images/topWebScrapping/bugWindow.svg';
import bugWindowGreen from '@public/images/topWebScrapping/bugWindowGreen.svg';
import checkIcon from '@public/images/topWebScrapping/checkIcon.png';
import { mockData } from '@mockdata/webScrapping';
import PageHeader from '@components/PageHeaderV2';
import { companiesForSlider } from '@mockdata/webScrapping';
import { CameraIcon } from '@shared/svgIcons';
import BackgroundLines from '@components/BackgroundLines';
import GeoHead from '@components/Head';

import styles from './webScrapping.module.scss';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

function TopWebScrappingCompanies() {
  const [showDescription, setShowDescription] = useState(true);
  const [sections, setSections] = useState([]);
  const [activeHash, setActiveHash] = useState('');
  let ref = React.createRef();

  useEffect(() => {
    const spyScrolling = () => {
      var scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      const el = Object.keys(sections)
        .reverse()
        .find((key) => sections[key] <= scrollPosition);
      if (el) {
        setActiveHash(el);
      }
    };

    document.addEventListener('scroll', spyScrolling);
    return () => {
      document.removeEventListener('scroll', spyScrolling);
    };
  }, [sections, activeHash]);

  useEffect(() => {
    var section = document.querySelectorAll('.section');
    var sections = {};

    Array.prototype.forEach.call(section, function (e) {
      sections[e.id] = e.offsetTop;
    });

    setSections(sections);
  }, []);

  useEffect(() => {
    function checkIfElemIsPinned() {
      if (ref.current) {
        ref.current.classList.toggle(
          'is-sticky',
          ref.current.offsetTop <= window.scrollY - 120
        );
        setShowDescription(ref.current.classList.contains('is-sticky'));
      }
    }

    if (document && window) {
      document.addEventListener('scroll', checkIfElemIsPinned);
    }

    return () => {
      document.removeEventListener('scroll', checkIfElemIsPinned);
    };
  });

  return (
    <div className='relative'>
      <GeoHead
        title='🔥 Web Scraping Companies [2022 Best Web Scraping Company]'
        description='Articles about proxy service. Everything you wanted to know about proxies but you were affraid to ask! Geonodes blog is the best place to learn!'
      />
      <BackgroundLines lineColor='secondary' />

      <PageHeader noContent noBackground />
      <div className='max-w-screen-xl m-auto mt-2 md:mt-16 mb-80'>
        <div className='relative bg-white shadow rounded-lg mx-4'>
          <section className=''>
            <div className='max-w-screen-xl m-auto text-gray-50 pb-12 md:pb-24 lg:pb-32'>
              <div className='relative'>
                <div className='hidden sm:block'>
                  <div className='pt-8 pb-9'>
                    <div className='flex items-center justify-center flex-wrap py-16'>
                      <h2 className='text-background-bg text-4xl leading-10 font-bold text-center'>
                        Top Web Scraping Companies
                      </h2>
                    </div>
                  </div>
                </div>

                <div
                  className='bg-background-high w-full'
                  style={{ height: 250 }}
                >
                  <div className='flex justify-center p-8'>
                    <img
                      src={bugWindow}
                      className='block sm:hidden'
                      alt='bug-window'
                      title='bug-window'
                    />
                    <img
                      src={bugWindowGreen}
                      className='hidden sm:block'
                      alt='bug-window'
                      title='bug-window'
                    />
                  </div>
                </div>

                <div className='block sm:hidden absolute w-11/12 sm:w-2/3 transform top-1/2 right-1/2 translate-x-1/2 translate-y-1/4'>
                  <div className='bg-white pt-6 pb-6'>
                    <div className='flex items-center justify-center flex-wrap '>
                      <h2 className='text-background-bg text-3xl leading-9 font-bold text-center'>
                        Top Web Scraping Companies
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-8 md:mt-16 px-4 w-full md:w-2/3 md:m-auto'>
                <div className='block sm:hidden w-full mb-9'>
                  <div className='rounded-md bg-neonCarrot-50 p-4'>
                    <div className='flex'>
                      <div className='flex-shrink-0'>
                        <svg
                          className='h-5 w-5 text-neonCarrot-base'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                      <div className='ml-3 flex-1 md:flex md:justify-between'>
                        <p className='text-sm leading-5 font-medium text-neonCarrot-base'>
                          This page was last updated July 15th, 2021 to latest
                          details about scraping companies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className=''>
                    <dl className='space-y-10'>
                      <div>
                        <dt className='text-2xl leading-8 font-semibold text-background-high'>
                          What is Web Scraping?
                        </dt>
                        <dd className='mt-2 text-base leading-7 font-normal text-subtle-400'>
                          Web scraping is an easy and convenient way to gather
                          large amounts of data from different sources and
                          process it into actionable data in a short amount of
                          time. So instead of wasting your time searching for
                          keywords on search engines and manually inputting
                          data, you just use web scrapers which automatically
                          fetch and sort data from all over the internet.
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className='mt-6'>
                    <dl className='space-y-10'>
                      <div>
                        <dt className='text-2xl leading-8 font-semibold text-background-high'>
                          Why a Master List?
                        </dt>
                        <dd className='mt-2 text-base leading-7 font-normal text-subtle-400'>
                          Instead of a top 10, 20, or 30 list, a Master List of
                          Top Web Scraping Companies gives you a broader
                          selection. This list would contain all the top web
                          scraping companies selling all types of services from
                          browser extensions, software, DIY, or full service.
                          The Master List of Top Web Scraping Companies will
                          help you find the Web Scraping Company that fits your
                          needs and even more.
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className='mt-6'>
                    <dl className='space-y-10'>
                      <div>
                        <dt className='text-2xl leading-8 font-semibold text-background-high'>
                          How does it work??
                        </dt>
                        <dd className='mt-2 text-base leading-7 font-normal text-subtle-400'>
                          You might be wondering how web scrapers can find and
                          store such large amounts of data from a wide range of
                          websites in such a short amount of time. A web scraper
                          has two main parts, the crawler, which “crawls” or
                          browses the internet. Once it finds what it needs, the
                          scraper swoops in to get the data on the website.
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='sticky top-0' ref={ref}>
            <CompaniesContainer
              showDescription={showDescription}
              activeHash={activeHash}
              setActiveHash={(hash) => setActiveHash(hash)}
            />
          </section>
          <section className=''>
            <div className='max-w-screen-xl m-auto text-gray-50 mt-8 lg:mt-24 pb-28'>
              <div className='px-4 w-full md:w-2/3 md:m-auto'>
                {Object.keys(mockData).map((key) => {
                  return (
                    <ProductTemplate
                      key={key}
                      {...mockData[key]}
                    ></ProductTemplate>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

const ProductTemplate = (props) => {
  const { profile, products, pricing, features, pros } = props;

  return (
    <div className='-mt-44 lg:-mt-24'>
      <div
        className={`${profile.hash} pt-56 lg:pt-44 section`}
        id={profile.hash}
      >
        <div className='header mb-4'>
          <div className='flex mb-4 items-center'>
            <h2 className='text-4xl leading-10 font-bold text-secondary-base mr-12'>
              {profile.title}
            </h2>
            <div style={{ width: '130px' }}>
              <img
                src={profile.logo}
                alt={`${profile.hash} logo`}
                style={{ width: 'auto' }}
                title={`${profile.hash} logo`}
              />
            </div>
          </div>
          <div className='flex gap-6 flex-wrap'>
            {profile.contacts.map((c, idx) => (
              <div key={c.name} className='flex'>
                {!c.link ? (
                  <>
                    <img
                      src={c.logo}
                      className='object-contain'
                      alt='location marker'
                      title='location marker'
                    />
                    <span className='text-sm leading-5 font-medium text-subtle-400 ml-1.5'>
                      {c.name}
                    </span>
                  </>
                ) : (
                  <>
                    <a
                      href={c.link}
                      target='_blank'
                      className='flex justify-center'
                    >
                      <img
                        src={c.logo}
                        className='object-contain'
                        alt='location marker'
                        title='location marker'
                      />
                      <span className='text-sm hidden sm:block leading-5 font-medium text-subtle-400 ml-1.5'>
                        {c.name}
                      </span>
                    </a>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='header-content mb-6'>
          <div className='text-base leading-7 font-normal text-subtle-400 mb-6'>
            {profile.description.text.map((d, index) => (
              <p key={index}>{d}</p>
            ))}
          </div>
          {profile.description.img && (
            <div className='image-content'>
              <img
                src={profile.description.img}
                alt='image-1'
                title='image-1'
              />
              <div className='flex gap-2 mt-3'>
                {CameraIcon}
                <span className='text-sm leading-5 font-normal text-gray-500'>
                  Caption if needed
                </span>
              </div>
            </div>
          )}
        </div>

        <div className='product mb-6'>
          <div className='text-2xl leading-8 font-semibold text-secondary-100 mb-3'>
            <h3>Product</h3>
          </div>
          <div className='text-base leading-7 text-subtle-400'>
            {products.map((p, index) => (
              <div key={index} className='mt-4'>
                <div className='text-lg leading-8 font-medium underline text-primary-base mb-1'>
                  <h4>
                    {p.link && (
                      <a href={p.link} target='_blank'>
                        {p.name}
                      </a>
                    )}
                  </h4>
                </div>
                <div>
                  <p>
                    {p.description}
                    {/* Faucibus commodo massa rhoncus, volutpat.{' '}
									<b className='font-semibold'>Dignissim</b> sed{' '}
									<b className='font-semibold'> eget risus enim</b>. Mattis
									mauris semper sed amet vitae sed turpis id. Id dolor praesent
									donec est. Odio penatibus risus viverra tellus varius sit
									neque erat velit. Faucibus commodo massa rhoncus, volutpat.
									Dignissim sed eget risus enim.{' '}
									<b className='font-semibold underline text-primary-base'>
										{' '}
										Mattis mauris semper{' '}
									</b>{' '}
									sed amet vitae sed turpis id. */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='pricing mb-6'>
          <div className='text-2xl leading-8 font-semibold text-secondary-100 mb-3'>
            <h3>Pricing</h3>
          </div>
          <div className='text-base leading-7 font-normal text-subtle-400'>
            {pricing.map((item, index) => {
              return (
                <div key={index}>
                  <span className=''>{item.description}</span>
                  <ul role='list' className='list-disc list-inside'>
                    {item.data.map((p, index) => (
                      <li key={index}>{p}</li>
                    ))}
                  </ul>
                  {item.addInfo && (
                    <div className='italic mt-6'>{item.addInfo}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className='feature mb-6'>
          <div className='text-2xl leading-8 font-semibold text-secondary-100 mb-4'>
            <h3>Feature</h3>
          </div>
          <div className='text-base leading-7 font-normal text-subtle-400'>
            <ul
              role='list'
              className='list-disc list-inside grid grid-cols-1 md:grid-cols-2		'
            >
              {features.map((f, index) => (
                <li key={index}>{f}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='pros mb-6'>
          <div className='text-2xl leading-8 font-semibold text-secondary-100 mb-4'>
            <h3>Pros</h3>
          </div>
          <div className='text-base leading-7 font-normal text-subtle-400'>
            {pros.map((p, index) => (
              <div className='flex gap-4' key={index}>
                <img
                  className='object-contain'
                  src={checkIcon}
                  alt='check icon'
                  title='check icon'
                />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CompaniesContainer = (props) => {
  const router = useRouter();
  const [position, setPosition] = useState(0);
  const [activeHash, setActiveHash] = useState('');
  let scrollableRef = useRef(null);

  useEffect(() => {
    setActiveHash(props.activeHash);
    if (document) {
      const el = document.querySelector(`.company-card-${props.activeHash}`);
      setTimeout(() => {
        el?.scrollIntoView();
      }, 1000);
    }
  }, [props.activeHash, activeHash]);

  const onScroll = (offSet) => {
    setPosition((scrollableRef.current.scrollLeft += offSet));
  };

  const onClickHandler = (hash) => {
    setActiveHash(hash);
    router.push(`/blog/top-web-scraping-companies#${hash}`);
  };

  return (
    <div className='max-w-screen-xl m-auto'>
      <div className='w-11/12 m-auto bg-white'>
        <div className='relative border border-gray-200 rounded px-6 py-3 '>
          <div
            className={`${
              position > 0 ? 'block' : 'hidden'
            } absolute cursor-pointer z-10 ml-6 bg-white shadow rounded-full top-1/2 left-0 transform -translate-y-1/2`}
          >
            <span onClick={() => onScroll(-950)}>
              <ChevronLeftIcon className='h-8 w-8' />
            </span>
          </div>
          <div
            className={`flex gap-3 overflow-x-scroll scrollSection ${styles.campanyContainer}`}
            ref={scrollableRef}
          >
            {companiesForSlider.map((company) => (
              <div key={company.id}>
                <Card
                  {...company}
                  className={`company-card-${company.hash}`}
                  showDescription={props.showDescription}
                  onClick={(hash) => onClickHandler(hash)}
                  activeHash={activeHash}
                />
              </div>
            ))}
          </div>
          <div
            className={`${
              position < 8000 ? 'block' : 'hidden'
            } absolute cursor-pointer z-10 mr-6 bg-white shadow rounded-full top-1/2 right-0 transform -translate-y-1/2`}
          >
            <span onClick={() => onScroll(950)}>
              <ChevronRightIcon className='h-8 w-8' />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = (props) => {
  const {
    logo,
    info,
    hash,
    showDescription,
    onClick,
    activeHash,
    className = '',
  } = props;
  return (
    <div
      onClick={() => onClick(hash)}
      className={`${
        hash === activeHash && 'bg-support1-300'
      } card rounded-lg cursor-pointer hover:bg-support1-300 ${className}`}
    >
      <div
        className='card-body relative h-full p-3'
        style={{ width: 145, height: !showDescription ? 197 : 135 }}
      >
        <div className='card-header mb-3'>
          <img src={logo} alt='datahut logo' title='logo' />
        </div>
        <div className='card-description text-xs leading-4 text-gray-500 font-normal mb-3'>
          {!showDescription ? <p>{info}</p> : null}
        </div>
        <div className='card-action absolute bottom-0 mb-3'>
          <button
            type='button'
            className='inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopWebScrappingCompanies;
