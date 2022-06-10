import React, { useState, useRef } from 'react';
import { affiliateApiService } from '@services/index';

import mockedData from '../../../mocks2';
import styles from './affiliate.module.scss';
import earningWays from '@public/images/icons/earning-ways.svg';
import whyJoin from '@public/images/icons/group.png';
import PageHeader from '../../PageHeaderV2';
import background from '@public/images/backgrounds/affiliate-cover.jpg';
import bg from '@public/images/backgrounds/features-bg.jpg';

import { Switch } from '@headlessui/react';
import GeoButton from '../../Button';
import ReCAPTCHA from 'react-google-recaptcha';

import { useForm } from 'react-hook-form';
import { PhoneNumberWrapper } from '@components/PhoneWrapper';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const formState = {
  agree: false,
  firstName: '',
  lastName: '',
  email: '',
  website: '',
  description: '',
  companySize: 0,
  phoneNumber: '',
};

export default function AffiliatePage() {
  const affiliateFormRef = useRef(null);
  const recaptchaRef = useRef({});
  const [isLoading, setIsLoading] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
  const [isAgreeError, setIsAgreeError] = useState('');
  const [isSubmitError, setSubmitError] = useState('');

  const executeScroll = () => scrollToRef(affiliateFormRef);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    setError,
    clearErrors,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: formState,
  });

  const onChange = (e) => {
    if (typeof e === 'boolean') {
      setIsAgree(!isAgree);
      return;
    }
  };

  const onSubmit = async (form) => {
    if (!isAgree) {
      return setIsAgreeError('Please agree to Privacy and Cookie Policy');
    }

    setIsLoading(true);
    const recaptchaValue = await recaptchaRef.current.executeAsync();

    const payload = {
      ...form,
      companySize: parseInt(form.companySize),
      'g-recaptcha-response': recaptchaValue,
    };
    delete payload.agree;

    await affiliateApiService
      .post('', payload)
      .then(({ data }) => {
        if (data.data) {
          if (data.data.errors.length !== 0) {
            setSubmitError(data.data.errors[0].err_msg);
          } else {
            reset();
            setIsAgree(false);
            setIsAgreeError('');
            setSubmitError('');
            alert('Sucessfully sent! Please wait for our team to contact you.');
          }
        }

        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setSubmitError(err.err);
        if (recaptchaRef.current) recaptchaRef.current.reset();
      });
  };

  const onChangeRecaptcha = (value) => {};

  return (
    <div className='relative affiliate' id=''>
      <div className={`${styles.cover} relative`}>
        <div className='relative'>
          <div
            className='absolute coverage h-full'
            style={{
              overflow: 'visible',
              transform: 'skewY(-6deg)',
              height: '115%',
              backgroundSize: 'cover',
              top: '-220px',
              backgroundPosition: "bottom",
              backgroundImage: `url(${background})`,
            }}
          ></div>

          <div
            className='absolute w-full h-full'
            style={{
              overflow: 'visible',
              transform: 'skewY(-6deg)',
              transformOrigin: '26% 0',
              height: '70px',
              bottom: '-25px',
              background:
                'linear-gradient(89.57deg, #7C3AED 0.02%, #4F09C6 99.94%)',
            }}
          ></div>
          <PageHeader darkMode>
            <div className='relative text-gray-50'>
              <div className='max-w-screen-xl mx-auto'>
                <h1 className='text-left sm:text-center leading-10 text-3xl sm:text-4xl md:text-6xl font-bold text-subtle-50'>
                  Get 30% On All Referrals
                </h1>
                <p
                  className={` text-subtle-300 mt-5 text-left sm:text-center text-lg`}
                >
                  Recommend our packages to other businesses and receive 30%
                  commissons on all their purchases
                </p>
              </div>
              <div className='flex items-center justify-center mt-12 '>
                <button
                  type='button'
                  className='flex items-center w-full sm:w-auto justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-base focus:outline-none'
                  onClick={executeScroll}
                >
                  Join our affiliate program
                </button>
              </div>
              <div
                className={`grid grid-cols-1 lg:grid-cols-3 mx-auto w-full sm:w-1/2 lg:w-full gap-16 py-32`}
              >
                {mockedData.affiliateProgram.map((p) => (
                  <div
                    key={p.title}
                    className={`relative bg-white shadow-sm flex flex-col items-center text-center text-white  ${styles.container}`}
                  >
                    <img src={p.icon} className={styles.img}></img>
                    <div className={`mb-5 mt-6 ${styles.title}`}>{p.title}</div>
                    <div className={`text-support1-base`}>{p.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </PageHeader>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${bg})`, height: '100%', backgroundSize: "contain" }}
        className='w-full'
      >
        <section className='mt-6 max-w-screen-xl mx-auto pt-12 px-8 lg:px-4 sm:px-4 pb-28'>
          <div
            className={`flex items-center	justify-between pb-12 flex-col-reverse lg:flex-row`}
          >
            <div className={`${styles.joinUs} w-full sm:w-11/12`}>
              <h2 className='mb-4 leading-10 text-4xl font-bold text-background-high sm:text-4xl'>
                Why should you join us
              </h2>
              <div className={`text-subtle-400 text-lg	`}>
                We provide premium services and products at very affordable
                rates. Our business is an easy sell and there is a high demand
                for our packages. If you want to earn more money with zero
                financial capital commitment, this program is for you.
              </div>
              <button
                type='button'
                className='flex mt-6 items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-base focus:outline-none'
                onClick={executeScroll}
              >
                Join now for free!
              </button>
            </div>
            <div className='mb-12 md:mb-0'>
              <img src={whyJoin}></img>
            </div>
          </div>
          <div className={`flex flex-wrap justify-between gap-8`}>
            {mockedData.affiliateJoinReasons.map((el) => {
              return (
                <div className={`${styles.joinUsReason}`} key={el.title}>
                  <div className={`mb-2.5 text-background-high font-bold `}>
                    {el.title}
                  </div>
                  <div className={`text-subtle-400`}>{el.description}</div>
                </div>
              );
            })}
          </div>
        </section>

        <section className={`mt-6 max-w-screen-xl mx-auto px-4 pb-24 `}>
          <div
            className={`items-center justify-between flex flex-col lg:flex-row pb-16`}
          >
            <div className='mb-10 lg:mb-16 mr-12 '>
              <img src={earningWays}></img>
            </div>
            <div className={`${styles.joinUs}`}>
              <h2
                className={`mb-4 leading-10 text-4xl font-bold text-subtle-50 sm:text-4xl ${styles.earningTitle} `}
              >
                About earning and ways to get paid
              </h2>
              <div
                className={`${styles.darkDescription} text-subtle-400 text-xl`}
              >
                On signing up, you will be given a referral code and a link.
                When your referrals make any purchase using your link, you get
                paid a commission of 30%. Continue to receive commissions each
                time your referral renews or upgrades their use package.
              </div>
              <button
                type='button'
                className='flex mt-6 items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-base focus:outline-none'
                onClick={executeScroll}
              >
                Join now for free!
              </button>
            </div>
          </div>
          <div className={`flex flex-wrap gap-6`}>
            {mockedData.earningWays.map((el) => {
              return (
                <div className={`${styles.joinUsReason}`} key={el.title}>
                  <div className={`mb-2 text-base leading-6 font-semibold`}>
                    {el.title}
                  </div>
                  <div
                    className={`text-base leading-6 font-normal text-subtle-400`}
                  >
                    {el.description}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className='max-w-screen-xl mx-auto px-4'>
          <div ref={affiliateFormRef} className='mt-6 max-w-xl mx-auto pb-24 md:pb-28 lg:pb-32 w-106'>
            <form
              method='POST'
              className='bg-white py-6 px-4 sm:p-12 shadow-xl py flex flex-col'
              onSubmit={handleSubmit((val) => onSubmit(val))}
            >
              <div className='col-span-2 text-xl sm:text-2xl font-black mb-12'>
                Join now for free! We will respond to your request within 24
                hours
              </div>
              <div className="flex mb-5 flex-col sm:flex-row justify-between">

              <div className="sm:mr-3" >
                <label
                  htmlFor='firstName'
                  className='block text-base font-semibold text-background-high'
                >
                  First name
                </label>
                <div className='mt-1'>
                  <input
                    {...register('firstName', {
                      required: 'First name is required',
                    })}
                    type='text'
                    name='firstName'
                    id='firstName'
                    className='py-3 px-4 block w-full shadow-sm text-secondary-100 focus:ring-teal-500 focus:border-teal-500 border-gray-100 rounded-md'
                  />
                  <div className='text-xs py-2 text-red-500'>
                    {errors.firstName?.message && errors.firstName?.message}
                  </div>
                </div>
              </div>
              <div className="sm:ml-3" >
                <label
                  htmlFor='lastName'
                  className='block text-base font-semibold text-background-high'
                >
                  Last name
                </label>
                <div className='mt-1'>
                  <input
                    {...register('lastName', {
                      required: 'Last name is required',
                    })}
                    type='text'
                    name='lastName'
                    id='lastName'
                    className='py-3 px-4 block w-full shadow-sm text-secondary-100 focus:ring-teal-500 focus:border-teal-500 border-gray-100 rounded-md'
                  />
                  <div className='text-xs py-2 text-red-500'>
                    {errors.lastName?.message && errors.lastName?.message}
                  </div>
                </div>
              </div>
              
              </div>
              <div className='sm:col-span-2 mb-5 '>
                <label
                  htmlFor='email'
                  className='block text-base font-semibold text-background-high'
                >
                  Email
                </label>
                <div className='mt-1'>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                    })}
                    id='email'
                    name='email'
                    type='email'
                    className='py-3 px-4 block w-full shadow-sm text-secondary-100 focus:ring-teal-500 focus:border-teal-500 border-gray-100 rounded-md'
                  />
                  <div className='text-xs py-2 text-red-500'>
                    {errors.email?.message && errors.email?.message}
                  </div>
                </div>
              </div>
              <div className='sm:col-span-2 mb-5'>
                <PhoneNumberWrapper
                  {...{
                    control,
                    setError,
                    clearErrors,
                    errors,
                    size: 'sm',
                    isRequired: true,
                    defaultValue: getValues('phoneNumber'),
                  }}
                />
              </div>
              <div className='sm:col-span-2 mb-5'>
                <label
                  htmlFor='website'
                  className='block text-base font-semibold text-background-high'
                >
                  Company Website
                </label>
                <div className='mt-1 flex rounded-md shadow-sm'>
                  <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-100 bg-gray-50 text-gray-500 sm:text-sm'>
                    http://
                  </span>
                  <input
                    {...register('website', {
                      required: 'Company website is required',
                    })}
                    name='website'
                    type='text'
                    className='flex-1 min-w-0  py-3 px-4 block w-full shadow-sm text-secondary-100 border-gray-100 rounded-none rounded-r-md'
                    placeholder='www.example.com'
                  />
                </div>
                <div className='text-xs py-2 text-red-500'>
                  {errors.website?.message && errors.website?.message}
                </div>
              </div>
              <div className={`sm:col-span-2 mb-5`}>
                <label
                  htmlFor='companySize'
                  className='block text-base font-semibold text-background-high'
                >
                  Company size
                </label>
                <input
                  {...register('companySize', {
                    required: 'Full name is required',
                  })}
                  type='number'
                  name='companySize'
                  id='companySize'
                  className='py-3 px-4 border-1 border-gray-100 text-secondary-100 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md'
                />
                <div className='text-xs py-2 text-red-500'>
                  {errors.companySize?.message && errors.companySize?.message}
                </div>
              </div>
              <div className='sm:col-span-2'>
                <div className='flex justify-between'>
                  <label
                    htmlFor='description'
                    className='block text-base font-semibold text-background-high'
                  >
                    What would you like help with?
                  </label>
                </div>
                <div className='mt-1'>
                  <textarea
                    {...register('description', {
                      required: 'Description is required',
                    })}
                    id='description'
                    name='description'
                    rows={4}
                    className='py-3 px-4 block w-full shadow-sm text-secondary-100 focus:ring-teal-500 focus:border-teal-500 border-gray-100 rounded-md'
                    aria-describedby='description-max'
                  />
                  <div className='text-xs py-2 text-red-500'>
                    {errors.description?.message && errors.description?.message}
                  </div>
                </div>
              </div>

              <div className='sm:col-span-2'>
                <div className='flex items-center flex-col sm:flex-row items-baseline'>
                  <div className='flex-shrink-0 flex mx-2 sm:mx-1 my-3 sm:my-0'>
                    <Switch
                      style={{ height: 24 }}
                      checked={isAgree}
                      onChange={onChange}
                      className={` ${
                        isAgree ? 'bg-primary-base' : 'bg-gray-200'
                      } mr-2 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none`}
                    >
                      <span className='sr-only'>Agree to policies</span>
                      <span
                        aria-hidden='true'
                        style={{ height: 20 }}
                        className={` ${
                          isAgree ? 'translate-x-5' : 'translate-x-0'
                        } inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                      />
                    </Switch>
                  </div>

                  <div className='ml-3'>
                    <span className='text-sm text-gray-500'>
                      By selecting this, you agree to the{' '}
                      <a href='/privacy-policy/'>
                        <span className='text-sm font-medium text-primary-base underline'>
                          Privacy Policy
                        </span>
                      </a>{' '}
                      and{' '}
                      <a href='/cookie-policy/'>
                        <span className='text-sm font-medium text-primary-base underline'>
                          Cookie Policy
                        </span>
                      </a>
                    </span>
                  </div>
                </div>
                <div className='text-xs py-2 text-red-500'>
                  {isAgreeError && isAgreeError}
                </div>
              </div>

              <div className='sm:col-span-2'>
                <div className='text-xs py-2 text-red-500'>
                  {isSubmitError && isSubmitError}
                </div>
                <GeoButton
                  isLoading={isLoading}
                  label="Let's talk"
                  buttonClassName='w-full'
                  labelClassName='text-sm leading-5 font-medium p-3'
                  type='submit'
                />
              </div>
              <div className=''>
                <ReCAPTCHA
                  size='invisible'
                  ref={recaptchaRef}
                  sitekey='6LccwXscAAAAAKy7qRaD3uhtu2ruAR_drOTXQ4Gs'
                  onChange={onChangeRecaptcha}
                />
              </div>
            </form>
          </div>
        </section>
      </div>
      <style jsx>{`
        .coverage {
          width: 100%;
          background: rgb(21, 29, 46);
        }
      `}</style>
    </div>
  );
}
