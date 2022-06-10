import React from 'react';
import BlogPage from '@components/Companies/blog';
import GeoHead from '@components/Head';

export default function Blog() {
  return (
    <>
      <GeoHead
        title='2022 Blog | Geonode Proxy Guide'
        description='How to use proxies? Where to use proxies? All answers for all your questions are here!'
      />
      <BlogPage></BlogPage>
    </>
  );
}
