/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { CheckIcon, MinusIcon } from "@heroicons/react/solid";
import GeoButton from "../../Button";

// const tiers = [
//     { name: 'Basic', href: '#', priceMonthly: 9, description: 'Quis suspendisse ut fermentum neque vivamus non tellus.' },
//     {
//         name: 'Essential',
//         href: '#',
//         priceMonthly: 29,
//         description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
//     },
//     {
//         name: 'Premium',
//         href: '#',
//         priceMonthly: 59,
//         description: 'Orci volutpat ut sed sed neque, dui eget. Quis tristique non.',
//     },
// ]
// const sections = [
//     {
//         name: 'Features',
//         features: [
//             { name: 'Molestie lobortis massa.', tiers: { Basic: true, Essential: true, Premium: true } },
//             { name: 'Urna purus felis.', tiers: { Basic: true, Essential: true, Premium: true } },
//             { name: 'Tellus pulvinar sit dictum.', tiers: { Essential: true, Premium: true } },
//             { name: 'Convallis.', tiers: { Essential: 'Up to 20 users', Premium: 'Up to 50 users' } },
//         ],
//     },
//     {
//         name: 'Reporting',
//         features: [
//             { name: 'Adipiscing.', tiers: { Basic: true, Essential: true, Premium: true } },
//             { name: 'Eget risus integer.', tiers: { Essential: true, Premium: true } },
//             { name: 'Gravida leo urna velit.', tiers: { Premium: true } },
//             { name: 'Elementum ut dapibus mi feugiat cras nisl.', tiers: { Premium: true } },
//         ],
//     },
//     {
//         name: 'Support',
//         features: [
//             { name: 'Sit dignissim.', tiers: { Basic: true, Essential: true, Premium: true } },
//             { name: 'Congue at nibh et.', tiers: { Essential: true, Premium: true } },
//             { name: 'Volutpat feugiat mattis.', tiers: { Essential: true, Premium: true } },
//             { name: 'Tristique pellentesque ornare diam sapien.', tiers: { Premium: true } },
//         ],
//     },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PricingSection({ tiers, sections }) {
  return (
    <div className="bg-transparent">
      <div className="max-w-screen-xl mx-auto bg-transparent py-16 sm:py-24 sm:px-6 lg:px-8">
        {/* xs to lg */}
        <div className="max-w-2xl mx-auto space-y-16 lg:hidden">
          {tiers.map((tier, tierIdx) => (
            <section key={tier.name}>
              <div
                className={`${
                  tier.mostUsed ? "bg-secondary-100" : "transparent"
                } px-4 flex items-center flex-col`}
              >
                {tier.mostUsed && (
                  <div className="relative z-10 w-full mb-12">
                    <div className="absolute inset-x-0 top-0 transform translate-y-0">
                      <div className="flex justify-center transform -translate-y-1/2">
                        <span className="inline-flex rounded-full bg-green-100 px-4 py-1 text-sm leading-5 font-medium text-green-800">
                          Recommended
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <img src={tier.logo} alt="service logo" width={64} />
                <h2 className="text-xl leading-7 font-bold text-white">
                  {tier.name}
                </h2>
                <div className="mt-4">
                  <span className="text-sm leading-5 font-normal text-subtle-500">
                    Pricing starts at
                  </span>
                  <p>
                    <span className="text-4xl font-bold text-white">
                      ${tier.priceMonthly}
                    </span>{" "}
                    <span className="text-base font-medium text-subtle-500">
                      /mo
                    </span>
                  </p>
                </div>
                {/* <p className="mt-4 text-sm text-subtle-500">{tier.description}</p> */}
                {tier.trialAmount ? (
                  <GeoButton
                    label="Try now for 7 days for just $7"
                    size="sm"
                    labelClassName="text-sm leading-5 font-medium p-3"
                    linkButton
                  />
                ) : (
                  <GeoButton
                    label="Get Started"
                    size="sm"
                    labelClassName="text-sm leading-5 font-medium p-3"
                    linkButton
                  />
                )}
              </div>

              {sections.map((section) => (
                <table key={section.name} className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
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
                  <tbody className="divide-y divide-gray-200">
                    {section.features.map((feature) => (
                      <tr
                        key={feature.name}
                        className="border-t border-gray-200"
                      >
                        <th
                          className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                          scope="row"
                        >
                          {feature.name}
                        </th>
                        <td className="py-5 pr-4">
                          {typeof feature.tiers[tier.name] === "string" ? (
                            <span className="block text-sm text-gray-700 text-right">
                              {feature.tiers[tier.name]}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon
                                  className="ml-auto h-5 w-5 text-green-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <MinusIcon
                                  className="ml-auto h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {feature.tiers[tier.name] === true
                                  ? "Yes"
                                  : "No"}
                              </span>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}

              <div
                className={`${
                  tierIdx < tiers.length - 1 ? "py-5 border-b" : "pt-5"
                }
                                    border-t border-gray-200 px-4`}
              >
                <a
                  href={tier.href}
                  className="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >
                  Buy {tier.name}
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="hidden lg:block">
          <table className="w-full h-px table-fixed">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th
                  className="pb-4 px-6 text-sm font-medium text-gray-900 text-left"
                  scope="col"
                >
                  <span className="sr-only">Feature by</span>
                  <span>Plans</span>
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                    scope="col"
                  >
                    <div className="flex items-center flex-col">
                      {tier.mostUsed && (
                        <div className="relative z-10 w-full">
                          <div className="absolute inset-x-0 top-0 transform translate-y-0">
                            {/*<div className="flex justify-center transform -translate-y-1/2">*/}
                            {/*    <span className="inline-flex rounded-full bg-green-100 px-4 py-1 text-sm leading-5 font-medium text-green-800">*/}
                            {/*      Recommended*/}
                            {/*    </span>*/}
                            {/*</div>*/}
                          </div>
                        </div>
                      )}
                      <img
                        src={tier.logo}
                        alt="service logo"
                        width={64}
                        className="mt-10"
                      />
                      <span className="text-3xl leading-8 font-bold tracking-tight">
                        {tier.name}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-t border-gray-200 divide-y divide-gray-200">
              <tr>
                <th
                  className="py-8 px-6 text-sm font-medium text-gray-900 text-left align-top"
                  scope="row"
                >
                  Pricing
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="h-full py-8 px-6 align-top">
                    <div className="relative h-full table">
                      <p>
                        <span className="text-4xl font-bold text-gray-900">
                          ${tier.priceMonthly}
                        </span>{" "}
                        <span className="text-base font-medium text-gray-500">
                          /mo
                        </span>
                      </p>
                      <p className="mt-4 mb-16 text-sm text-gray-500">
                        {tier.description}
                      </p>
                      <a
                        href={tier.href}
                        className="absolute bottom-0 flex-grow block w-full bg-gray-800 border border-gray-800 rounded-md 5 py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                      >
                        Buy {tier.name}
                      </a>
                    </div>
                  </td>
                ))}
              </tr>
              {sections.map((section) => (
                <Fragment key={section.name}>
                  <tr>
                    <th
                      className="bg-gray-50 py-3 pl-6 text-sm font-medium text-gray-900 text-left"
                      colSpan={4}
                      scope="colgroup"
                    >
                      {section.name}
                    </th>
                  </tr>
                  {section.features.map((feature) => (
                    <tr key={feature.name}>
                      <th
                        className="py-5 px-6 text-sm font-normal text-gray-500 text-left"
                        scope="row"
                      >
                        {feature.name}
                      </th>
                      {tiers.map((tier) => (
                        <td key={tier.name} className="py-5 px-6">
                          {typeof feature.tiers[tier.name] === "string" ? (
                            <span className="block text-sm text-gray-700">
                              {feature.tiers[tier.name]}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon
                                  className="h-5 w-5 text-green-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <MinusIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {feature.tiers[tier.name] === true
                                  ? "Included"
                                  : "Not included"}{" "}
                                in {tier.name}
                              </span>
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-gray-200">
                <th className="sr-only" scope="row">
                  Choose your plan
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="pt-5 px-6">
                    <a
                      href={tier.href}
                      className="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                    >
                      Buy {tier.name}
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
