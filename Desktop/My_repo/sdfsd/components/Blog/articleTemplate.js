import React from 'react';
import GeoHead from '@components/Head';
import BackgroundLines from '@components/BackgroundLines';
import PageHeader from '@components/PageHeaderV2';
import BlogHeader from '@components/Blog/Header';

const ArticleTemplate = ({
  children,
  title,
  headTitle,
  headDescription,
  publishedDate,
}) => {
  return (
    <div className='relative'>
      <GeoHead title={headTitle} description={headDescription} />
      <BackgroundLines lineColor='secondary' />
      <PageHeader noContent noBackground />
      <div className='max-w-screen-xl m-auto pt-2 md:pt-16 pb-48'>
        <section className='relative bg-white shadow rounded-lg mx-4 pb-16'>
          <div className='text-center font-normal text-base text-subtle-400 leading-7 py-4'>
            Publishing Date: {publishedDate}
          </div>
          <BlogHeader title={title} />
          {children}
        </section>
      </div>
    </div>
  );
};

export default ArticleTemplate;
