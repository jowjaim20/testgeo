import React from 'react';
import GeoHead from '@components/Head';
import AffiliatePage from '@components/LandingSections/Affiliate';

export default function Affiliate() {
  return (
    <>
      <GeoHead
        title='🔥 Proxy Affiliate Program | Earn Up To 30% On All Referrals'
        description='We provide premium services and products at very affordable rates. Sign up for the program, make your first sale and earn commissions!'
      />
      <AffiliatePage></AffiliatePage>
    </>
  );
}
