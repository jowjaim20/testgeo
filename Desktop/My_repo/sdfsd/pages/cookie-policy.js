import React from 'react';
import GeoHead from '@components/Head';
import CookiePage from '@components/LegalLinks/cookie';

export default function Cookie() {
  return (
    <>
      <GeoHead
        title='Geonode Cookie Policy'
        description='The Geonode website uses cookies. They are placed by the software that operates on our servers, and by software operated by third parties.'
      />
      <CookiePage></CookiePage>
      {/* <div id='cookiefirst-policy-page'></div>
      <div>
        This cookie policy has been created and updated by{' '}
        <a href='https://cookiefirst.com'>CookieFirst.com</a>.
      </div> */}
    </>
  );
}
