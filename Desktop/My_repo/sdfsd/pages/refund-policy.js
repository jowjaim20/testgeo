import React from 'react';
import GeoHead from '@components/Head';
import RefundPolicyPage from '@components/LegalLinks/refund-policy';

export default function Refund() {
  return (
    <>
      <GeoHead
        title='Geonode Refund Policy'
        description='If Geonode has not fulfilled its promise the refund will be issued!'
      />
      <RefundPolicyPage></RefundPolicyPage>
    </>
  );
}
