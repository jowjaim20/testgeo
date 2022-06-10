import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import mockedData from '../../../mocks2';
import UseCase from '../../UseCase/UseCase';
import styles from './useCases.module.scss';

export default function UseCases() {
  const [linkClicked, setLinkClicked] = useState('/use-cases/market-research/');

  //split array into 4 array
  const numsPerGroup = Math.ceil(mockedData.useCases.length / 6);
  // Create array based on number of groups
  const result = new Array(6)
    .fill('')
    .map((item, i) =>
      mockedData.useCases.slice(i * numsPerGroup, (i + 1) * numsPerGroup)
    );

  const getUsesCases = result.map((items, idx) => (
    <div
      key={idx}
      className='flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x'
    >
      {items.map((useCase, index) => {
        const { title, body, link, icon } = useCase;
        return (
          <div
            key={index}
            className={clsx(
              items.length === 3 ? 'sm:w-1/3' : 'sm:w-1/2',
              idx === 0 && index === 0
                ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                : '',
              idx === 0 && index === 2 ? 'sm:rounded-tr-lg' : '',
              idx === result.length - 1 && index === 0
                ? 'sm:rounded-bl-lg'
                : '',
              //   idx === result.length - 1 && index === 1
              //     ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
              //     : '',
              'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
              // 'w-full relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
            )}
          >
            <UseCase
              title={title}
              onClick={(link) => {
                setLinkClicked(link);
              }}
              body={body}
              isViolet={`/use-cases${link}` === linkClicked ? true : null}
              link={`/use-cases${link}`}
              icon={icon}
            />
          </div>
        );
      })}
    </div>
  ));

  return (
    <div
      id='use-cases'
      className={`${styles.useCases} max-w-screen-xl mx-auto px-4 pb-24 md:pb-28 lg:pb-32`}
    >
      <h1 className='text-4xl font-bold tracking-tight leading-10'>
        Use cases
      </h1>
      <p className={`${styles.description} mt-3 mb-12`}>
        Whatever your scraping needs, we have a solution for you. 24/7 support
        for our customers and best-in-class user dashboard make Geonode the most
        human-friendly proxy provider out there.
      </p>
      {/* <div className='rounded-lg divide-y overflow-hidden shadow flex flex-wrap mb-16 p-px'> */}
      {/* <div className='rounded-lg divide-y overflow-hidden shadow flex flex-wrap mb-16'> */}
      <div className='rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 flex flex-wrap sm:gap-px'>
        {getUsesCases}
      </div>
    </div>
  );
}
