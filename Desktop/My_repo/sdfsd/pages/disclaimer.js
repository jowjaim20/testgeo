import React from 'react';
import GeoHead from '@components/Head';
import DisclaimerPage from '@components/LegalLinks/disclaimer';

export default function Disclaimer() {
  return (
    <>
      <GeoHead
        title='Geonode Disclaimer'
        description="If you require any more information or have any questions about our site's disclaimer, please feel free to contact us."
      />
      <DisclaimerPage></DisclaimerPage>;
    </>
  );
}
