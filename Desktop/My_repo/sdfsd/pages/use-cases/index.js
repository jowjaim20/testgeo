import React from 'react';
import PageHeader from '@components/PageHeaderV2';
import GeoHead from '@components/Head';
import UseCases from '@components/LandingSections/UseCases';
import ClientFeedback from '@components/ClientFeedback';

const UseCasesRootPage = () => {
  return (
    <div className='relative'>
      <GeoHead
        title='Proxy Use Cases | Understand the Benefits of Proxies '
        description='Where you can use proxies? Geonode will help you with that! Whatever your scraping needs, we have a solution for you!'
      />
      <PageHeader noContent noBackground />
      <section className='pt-16'>
        <div className='pb-4'>
          <UseCases />
        </div>
      </section>
    </div>
  );
};

export default UseCasesRootPage;
