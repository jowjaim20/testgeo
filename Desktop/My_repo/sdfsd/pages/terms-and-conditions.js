import React from 'react';
import GeoHead from '@components/Head';
import TermsConditionPage from '@components/LegalLinks/terms-and-conditions';

export default function TermsCondition() {
  return (
    <>
      <GeoHead
        title='Geonode Terms and Conditions'
        description='Please read these Terms and our Privacy Statement. Using the Website, you are consenting to be bound by the current Terms and our Privacy Statement.'
      />
      <TermsConditionPage></TermsConditionPage>
    </>
  );
}
