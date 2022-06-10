import React from 'react';
import Navigation from '../Navigation/index';
import { hubspotService } from '@services/index';

export default function CookiePage() {
  return (
    <div className='bg-gray-50 px-5'>
      <Navigation />
      <div className='mx-auto pt-12 pb-24 md:pb-28 lg:pb-32 px-4 sm:pt-16 sm:px-6 lg:px-4 font-fontFamily-body'>
        <div className='max-w-4xl mx-auto p-4 sm:p-10 lg:p-24 text-lg text-subtle-400 bg-white '>
          <h1 className='text-4xl leading-10 tracking-tight font-bold text-center mb-12 text-black'>
            Cookie Policy
          </h1>
          <p className='mb-6'>
            The Geonode PTE LTD website uses cookies. They are placed by the
            software that operates on our servers, and by software operated by
            third parties whose services we use. When you first visit our
            website, we ask you whether you wish us to use cookies. If you
            choose not to accept them, we shall not use them for your visit
            except to record that you have not consented to their use for any
            other purpose.
          </p>
          <p className='mb-12'>
            If you choose not to use cookies or you prevent their use through
            your browser settings, you will not be able to use all the
            functionality of our website.
          </p>
          <h2 className='mb-6 text-black text-2xl font-bold'>
            We use cookies in the following ways:
          </h2>
          <ul className='mb-12 list-disc list-inside'>
            <li className='mb-3'>To track how you use our website</li>
            <li className='mb-3'>
              To record whether you have seen specific messages we display on
              our website
            </li>
            <li className='mb-3'>To keep you signed in our site</li>
            <li className='mb-3'>
              To record your answers to surveys and questionnaires on our site
              while you complete them
            </li>
            <li className='mb-6'>
              To record the conversation thread during a live chat with our
              support team
            </li>
          </ul>
          <h2 className='mb-6 text-black text-2xl font-bold'>
            Why we use cookies on our website
          </h2>
          <p className='mb-6'>
            Cookies are pieces of information that a website transfers to an
            individual’s computer hard drive for record keeping purposes.
            Cookies make using our Site easier by, among other things, saving
            your passwords and preferences for you. These cookies are restricted
            for use only on our Site, and do not transfer any personal
            information to any other party.
          </p>
          <p className='mb-12'>
            Most browsers are initially set up to accept cookies. You can,
            however, reset your browser to refuse all cookies or indicate when a
            cookie is being sent. Please consult the technical information
            relevant to your browser for instructions. If you choose to disable
            your cookies setting or refuse to accept a cookie, some parts of the
            Site may not function properly or may be considerably slower.
          </p>
          <h2 className='mb-6 text-black text-2xl font-bold'>
            Personal identifiers from your browsing activity
          </h2>
          <p className='mb-6'>
            Information about your computer hardware and software may be
            automatically collected by <strong>Geonode PTE LTD</strong>. This
            information can include: your IP address, browser type, domain
            names, access times and referring website addresses. This
            information is used for the operation of the service, to maintain
            quality of the service, and to provide general statistics regarding
            use of the <strong>Geonode PTE LTD</strong> website.
          </p>
          <p className='mb-6'>
            Requests by your web browser to our servers for web pages and other
            content on our website are recorded.
          </p>
          <p className='mb-6'>
            Our website record information such as your geographical location,
            your Internet service provider and your IP address. We also record
            information about the software you are using to browse our website,
            such as the type of computer or device and the screen resolution.
          </p>
          <p className='mb-12'>
            <strong>Geonode PTE LTD</strong> uses this information in aggregate
            to assess the popularity of the webpages on our website and how we
            perform in providing content to you.
          </p>
          <h2 className='mb-6 text-black text-2xl font-bold'>
            Use of re-marketing
          </h2>
          <p className='mb-6'>
            Re-marketing involves placing a cookie on your computer when you
            browse our website in order to be able to serve to you an advert for
            our services when you visit some other website.
          </p>
          <p className='mb-12'>
            Geonode PTE LTD may use a third party to provide us with
            re-marketing services from time to time. If so, then if you have
            consented to our use of cookies, you may see advertisements for our
            services on other websites.
          </p>
          <h2 className='mb-6 text-black text-2xl font-bold'>
            Contact information
          </h2>
          <p>
            If you would like to: access, correct, register a complaint, or
            simply want more information please{' '}
            <span
              className='text-lg text-link-200 cursor-pointer'
              onClick={() => hubspotService.openWidget()}
            >
              contact us
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
