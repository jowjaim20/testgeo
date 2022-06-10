/* This example requires Tailwind CSS v2.0+ */
import React, {useState} from "react"
import { Fragment } from "react";
import GeoButton from "../../Button";
import uncheckedIcon from "@public/images/icons/unchecked.png";
import { CheckIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { DataCenterTrial } from '@components/LandingSections/Home/dataCenterForm';
import dataCenter from '@public/images/icons/icon-datacenter.svg';


const isDarkMode = (darkMode) => {
  return darkMode
    ? {
        backgroundColor: "bg-background-container",
        textColor: {
          heading: "text-support1-base",
          headingSmall: "text-white",
          normal: "text-subtle-300",
          value: "text-primary-50",
        },
        borderColor: "border-secondary-50",
      }
    : {
        backgroundColor: "bg-white",
        textColor: {
          heading: "text-secondary-100",
          headingSmall: "text-gray-900",
          normal: "text-subtle-400",
          value: "text-subtle-800",
        },
        borderColor: "border-subtle-100",
      };
};

export const Pricing = ({
  tiers,
  sections,
  darkMode = false,
  showHead = false,
  isDataCenter,
  isDesignChanged,
  mobileTiers,
  mobileSections
}) => {
  const {
    backgroundColor,
    textColor: { heading, headingSmall, normal, value },
    borderColor,
  } = isDarkMode(darkMode);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true)
  }

  const emptyFunc = () => {}

  return (
    <div className="bg-transparent">
      {showHead && (
        <div className="w-full sm:w-10/12 md:w-7/12">
          <h1 className="text-4xl md:text-6xl leading-none font-bold tracking-tight text-white mb-6">
            Pricing
          </h1>
          <p className="text-lg lg:text-xl leading-7 font-normal text-subtle-300">
            {
              isDataCenter ? `Choose an affordable plan that's packed with the best features for 
              engaging your audience, creating customer loyalty, and driving sales.` 
              : `We support data collection at any scale and for almost every use
              case. Need help figuring out what's best for you? Or need more than
              what you see here? `
            }
            {
              isDataCenter || (
                <Link href="/contact">
                <a className="text-support2-base cursor-pointer">Contact us.</a>
              </Link>
              )
            }
          </p>
        </div>
      )}

      <div className="max-w-screen-xl mx-auto bg-transparent pt-8 sm:py-8">
        {/* xs to lg */}
        <MobileView
          tiers={mobileTiers}
          sections={mobileSections}
          darkMode={darkMode}
          heading={heading}
          headingSmall={headingSmall}
          normal={normal}
          openModal={() => openModal()}
          emptyFunc={() => emptyFunc()}
          value={value}
          isDataCenter={isDataCenter}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
        />

        {/* lg+ */}
        <div className="hidden lg:flex">
          <table className={`h-px table-fixed ${isDesignChanged ? "w-3/4" : "w-full"}`}>
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr className="space-x-4">
                <th
                  className={`${isDataCenter ? "w-1/4" : isDesignChanged ? "w-1/3" : ""} py-12 pr-4 text-lg leading-6 font-normal text-left`}
                  scope="col"
                >
                  <span className="sr-only">Feature by</span>
                  <span
                    className={`text-lg leading-7 font-semibold ${headingSmall}`}
                  ></span>
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className={`${isDesignChanged ? "w-1/3" : "w-1/4"} py-12 px-4 text-lg leading-6 font-medium text-subtle-900 text-left`}
                    scope="col"
                  >
                    <div className="flex items-center flex-col">
                      {/* {tier.mostUsed && !darkMode && (
												<div className='relative w-full'>
													<div className='absolute inset-x-0 -top-12 transform translate-y-0'>
														<div className='flex justify-center transform -translate-y-1/2'>
															<span className='inline-flex rounded-full bg-green-100 px-4 py-1 text-sm leading-5 font-medium text-green-800'>
																Recommended
															</span>
														</div>
													</div>
												</div>
											)} */}
                      <div className="flex flex-row">
                        <div>
                          <img src={tier.logo} alt="service logo" width={64} />
                        </div>
                        <div className="flex flex-col justify-center ml-4">
                          {!darkMode && (
                            <span
                              className={`text-sm leading-5 font-normal ${normal}`}
                            ></span>
                          )}

                          <span
                            className={`text-3xl leading-8 font-bold tracking-tight ${heading}`}
                          >
                            {tier.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  className={`${normal} py-8 text-sm leading-6 text-left align-top`}
                  scope="row"
                  rowSpan="2"
                ></th>
                {tiers.map((tier, idx) => (
                  <td
                    rowSpan="2"
                    key={tier.name}
                    className={`h-full px-6 text-center`}
                  >
                    <div className="relative h-full w-full table mb-6">
                      <span
                        className={`text-sm leading-5 font-normal ${normal}`}
                      >
                        {isDataCenter || tier.changedDesign ? "per IP" : "Pricing starts for "} 
                        {
                          isDataCenter || tier.changedDesign || (
                            <span className="font-semibold">{tier.usage}</span>
                          )
                        } 
                      </span>
                      <p className="mb-6 mt-4">
                        <span
                          className={`text-4xl leading-10 font-bold ${headingSmall}`}
                        >
                          ${tier.priceMonthly}
                        </span>
                        <span className={`text-base font-medium ${normal}`}>
                          {isDataCenter ? "/m" : "/mo"}
                        </span>
                      </p>
                      <div className="w-full">
                        {tier.trialAmount ? (
                          <GeoButton
                            label={`${isDataCenter || tier.changedDesign ? "Free Beta Testing Now Available" : "Get started for only $7"}`}
                            size="sm"
                            labelClassName="text-sm leading-5 font-medium p-3"
                            linkButton={isDataCenter ? false : true}
                            onClick={isDataCenter ? openModal : emptyFunc}
                            buttonClassName="w-full"
                          />
                        ) : (
                          <GeoButton
                            label={`${isDataCenter || tier.changedDesign ? "Free Beta Testing Now Available" : "Get Started"}`}
                            size="sm"
                            labelClassName="text-sm leading-5 font-medium p-3"
                            linkButton={isDataCenter ? false : true}
                            onClick={isDataCenter ? openModal : emptyFunc}
                            buttonClassName="w-full"
                          />
                        )}
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
              {sections.map((section) => (
                <Fragment key={section.name}>
                  <tr style={{ borderBottom: "2px solid transparent" }}>
                    <th
                      className={`text-lg leading-7 font-semibold text-left ${headingSmall}`}
                      scope="colgroup"
                    >
                      {section.name}
                    </th>
                  </tr>
                  {section.features.map((feature, index) => (
                    <tr
                      key={feature.name}
                      className={`border-t ${borderColor}`}
                    >
                      <th
                        className={`${normal} py-3 px-6 text-base font-normal text-left `}
                        scope="row"
                      >
                        {feature.name}
                      </th>
                      {tiers.map((tier, idx) => (
                        <td key={tier.name} className={`py-3 px-6 `}>
                          <span
                            className={`block text-base text-left leading-6 font-normal ${value} `}
                          >
                            {typeof feature.tiers[idx] === "string" ? (
                              feature.tiers[idx]
                            ) : feature.tiers[idx] ? (
                              <CheckIcon
                                className="flex-shrink-0 w-5 h-5 text-green-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <img src={uncheckedIcon}></img>
                            )}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th className="sr-only" scope="row">
                  Choose your plan
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="pt-5 px-6 text-center">
                    {tier.trialAmount ? (
                      <GeoButton
                        label={`${isDataCenter || tier.changedDesign ? "Free Beta Testing Now Available" : "Get started for only $7"}`}
                        size="sm"
                        labelClassName="text-sm leading-5 font-medium p-3"
                        linkButton={isDataCenter ? false : true}
                        onClick={isDataCenter ? openModal : emptyFunc}
                        buttonClassName="w-full"
                      />
                    ) : tier.changedDesign ? null : (
                      <GeoButton
                        label={`${isDataCenter || tier.changedDesign ? "Free Beta Testing Now Available" : "Get Started"}`}
                        size="sm"
                        labelClassName="text-sm leading-5 font-medium p-3"
                        linkButton={isDataCenter ? false : true}
                        onClick={isDataCenter ? openModal : emptyFunc}
                        buttonClassName="w-full"
                      />
                    )}
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>

          {
            isDesignChanged && (
              <table className="h-px table-fixed w-1/4 bg-white rounded-md" style={{boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"}}>
              <caption className="sr-only">Pricing plan comparison</caption>
              <thead>
                <tr className="space-x-4">
                    <th
                      key={`fg`}
                      className={`w-1/4 py-12 px-4 text-lg leading-6 font-medium text-subtle-900 text-left`}
                      scope="col"
                    >
                      <div className="flex items-center flex-col">
                        <div className="flex flex-row">
                          <div>
                            <img src={dataCenter} alt="service logo" width={64} />
                          </div>
                          <div className="flex flex-col justify-center ml-4">
                            {!darkMode && (
                              <span
                                className={`text-sm leading-5 font-normal ${normal}`}
                              ></span>
                            )}
  
                            <span
                              className={`text-3xl leading-8 font-bold tracking-tight ${heading}`}
                            >
                              Datacenter
                            </span>
                          </div>
                        </div>
                      </div>
                    </th>
                </tr>
              </thead>
              <tbody>
  
                      <div className="relative h-full w-full px-6 flex flex-col justify-center items-center">
                        <span
                          className={`text-sm leading-5 font-normal ${normal}`}
                        >
                          per IP 
                        </span>
                        <p className="mb-7 mt-4">
                          <span
                            className={`text-4xl leading-10 font-bold ${headingSmall}`}
                          >
                            $3
                          </span>
                          <span className={`text-base font-medium ${normal}`}>
                            {isDataCenter ? "/m" : "/mo"}
                          </span>
                        </p>
                        <div className="w-full">
                            <GeoButton
                              label="Join free beta testing →"
                              size="sm"
                              labelClassName="text-sm leading-5 font-medium p-3"
                              linkButton={isDataCenter ? false : true}
                              onClick={isDataCenter ? openModal : emptyFunc}
                              buttonClassName="w-full"
                            />
                             <GeoButton
                            redirectUrl="/datacenter-proxies/"
                            linkButton
                            label="Learn more"
                            className="flex justify-center mt-4"
                            variant="transparent"
                            buttonClassName="text-primary-base"
                            size="sm"
                            />
                        </div>
                      </div>
                   
                {sections.map((section) => (
                  <Fragment key={section.name}>
                    <tr style={{ borderBottom: "2px solid transparent" }}> </tr>
                    {section.features.map((feature, index) => (
                      <tr
                        key={feature.name}
                      >
                          <td key={'hhh'} className={`py-3 px-6 `}>
                            <span
                              className={`block text-base text-left leading-6 font-normal h-8 ${value} `}
                            >
                            </span>
                          </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
            )
          }
        </div>
      </div>
      <DataCenterTrial
        showModal={showModal}
        setShowModal={setShowModal}
      ></DataCenterTrial>
    </div>
  );
};

const MobileView = ({
  tiers,
  sections,
  darkMode,
  heading,
  headingSmall,
  normal,
  isDataCenter,
  value,
  backgroundColor,
  openModal,
  emptyFunc,
  borderColor,
}) => (
  <div className="max-w-2xl mx-auto space-y-12 lg:hidden">
    {tiers.map((tier, idx) => (
      <section key={tier.name} className="">
        <div
          className={`${backgroundColor} rounded-lg overflow-hidden shadow-lg`}
        >
          <div className="flex items-center justify-center p-8">
            {/* {tier.mostUsed && !darkMode && (
							<div className='relative lg: z-10 w-full mb-12'>
								<div className='absolute inset-x-0 top-0 transform translate-y-0'>
									<div className='flex justify-center transform -translate-y-1/2'>
										<span className='inline-flex rounded-full bg-green-100 px-4 py-1 text-sm leading-5 font-medium text-green-800'>
											Recommended
										</span>
									</div>
								</div>
							</div>
						)} */}
            <div>
              <img
                src={tier.logo}
                alt="service logo"
                style={{ "max-width": "fit-content" }}
                width={64}
              />
            </div>
            <div className="ml-4">
              {!darkMode && (
                <span className={`text-sm leading-5 font-normal ${normal}`}>
                  Residential proxies
                </span>
              )}
              <h2
                className={`text-3xl leading-8 font-bold tracking-tight ${heading}`}
              >
                {tier.name}
              </h2>
            </div>
          </div>

          <div className={`px-6 py-8`}>
            <div className="mt-4 text-center">
              <span className={`text-sm leading-5 font-normal ${normal}`}>
                Pricing starts at
              </span>
              <p className="mb-6 mt-4">
                <span
                  className={`text-4xl leading-10 font-bold ${headingSmall}`}
                >
                  ${tier.priceMonthly}
                </span>
                <span className={`text-base font-medium ${normal}`}>/mo</span>
              </p>
            </div>
            {/* Action Button */}
            <div className="space-y-4 text-center mb-8">
              {tier.trialAmount ? (
                <GeoButton
                  label={`${isDataCenter ? "Free Beta Testing Now Available" : "Get started for only $7"}`}
                  size="sm"
                  labelClassName="text-sm leading-5 font-medium p-3"
                  linkButton={isDataCenter ? false : true}
                  onClick={isDataCenter ? openModal : emptyFunc}
                  buttonClassName="w-full"
                />
              ) : (
                <GeoButton
                  label={`${isDataCenter ? "Free Beta Testing Now Available" : "Get Started"}`}
                  size="sm"
                  labelClassName="text-sm leading-5 font-medium p-3"
                  linkButton={isDataCenter ? false : true}
                  onClick={isDataCenter ? openModal : emptyFunc}
                  buttonClassName="w-full"
                />
              )}
              <div>
                <a
                  href="https://help.geonode.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-5 font-medium text-primary-base"
                >
                  Learn more
                </a>
              </div>
            </div>
            {/* Features */}
            <div>
              {sections.map((section) => (
                <table key={section.name} className="w-full">
                  <caption
                    className={`border-t-0 py-3 px-4 text-lg leading-7 font-semibold text-left ${headingSmall}`}
                  >
                    {section.name}
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.features.map((feature) => (
                      <tr
                        className={`border-t ${borderColor}`}
                        key={feature.name}
                      >
                        <th
                          scope="row"
                          className={` py-5 px-4 text-sm font-normal text-left ${normal}`}
                        >
                          {feature.name}
                        </th>
                        <td key={tier.name} className={`py-5 pr-4`}>
                          <span className={`block text-sm text-left ${value}`}>
                            {/* {feature.tiers[tierIdx]} */}
                            {typeof feature.tiers[idx] === "string" ? (
                              feature.tiers[idx]
                            ) : feature.tiers[idx] ? (
                              <CheckIcon
                                className="flex-shrink-0 w-5 h-5 text-green-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <img src={uncheckedIcon}></img>
                            )}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}
            </div>
          </div>
        </div>
      </section>
    ))}
  </div>
);
