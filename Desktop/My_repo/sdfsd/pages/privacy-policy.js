import React from 'react';
import GeoHead from '@components/Head';
import PrivacyPage from '@components/LegalLinks/privacy';

export default function Privacy() {
  return (
    <>
      <GeoHead
        title='Geonode Privacy Policy'
        description='Privacy Policy describes how your personal information is collected, used, and shared when you visit from Geonode.'
      />
      <PrivacyPage></PrivacyPage>
    </>
  );
}
