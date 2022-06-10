import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import styles from "./pricingSlider.module.scss";
import "rc-slider/assets/index.css";
import { CheckIcon } from "@heroicons/react/outline";
import GeoButton from "../Button";
import mockedData from "../../mocks2";
import { utilsService } from "../../services";
import dataCenter from '@public/images/icons/icon-datacenter-big.svg';
import { DataCenterTrial } from '@components/LandingSections/Home/dataCenterForm';

const UnitTypes = {
  /* 'RESIDENTIAL-UNMETERED': 'Threads', */
  "RESIDENTIAL-PRIVATE": "Ports",
  "RESIDENTIAL-PREMIUM": "Gigabytes",
};

const getStaticData = (service) => {
  return mockedData.productsSlider.pricing.tiers.find((t) => t.value === service);
};

const defaultTab = "RESIDENTIAL-PREMIUM";
const PricingSlider = ({ products }) => {
  const getSevice = (service, plan) => {
    const data = products[service];
    if (data) {
      return products[service].find((t) => t.name === plan);
    }
  };

  const getMarks = (service, plan) => {
    const data = products[service];
    const marks = {};
    if (data) {
      data.map((d, idx) => {
        const val = d?.transform_usage?.divide_by;
        marks[idx + 1] = utilsService.formattingNumber(
          service === "RESIDENTIAL-PREMIUM" ? val / 1000 : val
        );
      });
    }

    return marks;
  };

  const getPrice = (service, planIndex) => {
    const data = products[service];
    if (data && planIndex !== undefined) {
      return data[planIndex - 1]?.amount;
    }
    return 0;
  };

  const [activeTab, setActiveTab] = useState(defaultTab);
  const [sliderValue, setSliderValue] = useState(0);
  const [marks, setMarks] = useState(getMarks(defaultTab));
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true)
  }


  useEffect(() => {
    setMarks(getMarks(activeTab));
    setSliderValue(Object.keys(getMarks(activeTab))[0]);
  }, [activeTab, products]);

  const features = getStaticData(activeTab || defaultTab).features;
  const trialAmount = getStaticData(activeTab || defaultTab).trialAmount;

  const getUnitValue = () => {
    return marks[sliderValue];
  };
  return (
    <div
      className={`${styles.container} bg-white rounded-md md:w-11/12 shadow-2xl hidden md:block px-12 py-8`}
    >
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setSliderValue={setSliderValue}
        products={products}
      />
      {
        activeTab === "DATACENTER" ? (
          <div className="flex justify-center items-center pt-16 pb-20 flex-col">
            <div><img src={dataCenter}></img></div>
            <div className="mt-5 mb-16 font-semibold text-3xl	text-background-high">Datacenter Proxies Launching Soon.</div>
            <GeoButton className="mb-5" label={`Free Beta Testing Now Available`} onClick={() => openModal()} />
            <GeoButton
              redirectUrl="/datacenter-proxies/"
              linkButton
              label="Learn more"
              variant="transparent"
              buttonClassName="text-primary-base"
              size="sm"
            />
            <DataCenterTrial
              showModal={showModal}
              setShowModal={setShowModal}
            ></DataCenterTrial>
          </div>
        ) : (
            <>
              <div className="flex flex-col justify-center align-center items-center mt-8 mb-16">
                <h2 className="text-secondary-100 text-5xl leading-none font-bold">
                  {getUnitValue()}
                </h2>
                <h3 className="text-secondary-300 leading-7 font-normal">
                  {UnitTypes[activeTab]}
                </h3>
              </div>
              <div className={`${styles.sliderContainer}`}>
                <div className="m-auto">
                  <PriceSliderComponent
                    marks={marks}
                    sliderValue={sliderValue}
                    setSliderValue={setSliderValue}
                  />
                </div>
              </div>
              <div
                className={`w-full flex flex-col items-center lg:flex-row lg:justify-center`}
              >
                <div className="w-2/5 flex flex-col items-center">
                  <span className="mb-8">
                    <span className="text-4xl leading-none font-bold text-secondary-100">
                      $
              {utilsService.formattingNumber(
                      getPrice(activeTab, sliderValue) / 100
                    )}
                    </span>
                    <span className="ml-2">/mo</span>
                  </span>
                  <span className="mb-8">
                    {trialAmount ? (
                      <GeoButton
                        label={`Start $${trialAmount} trial for 7 days`}
                        linkButton
                      />
                    ) : (
                        <GeoButton label={`Get Started`} linkButton />
                      )}
                  </span>
                  <span className="border-t border-gray-200 pt-5 text-sm leading-5 font-medium mb-10">
                    Need some help deciding?
            <span className="text-primary-base ml-1">
                      <a href="/contact/" target="_blank" rel="noopener noreferrer">
                        Get in touch
              </a>
                    </span>
                  </span>
                </div>
                <div className="w-1/2 ">
                  <ul role="list" className="space-y-2">
                    {features.map((item) => (
                      <li key={item} className="flex">
                        <CheckIcon
                          className="flex-shrink-0 w-5 h-5 text-green-500"
                          aria-hidden="true"
                        />
                        <span className="ml-2 text-subtle-500">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )
      }
    </div>
  );
};

const PriceSliderComponent = ({ sliderValue, setSliderValue, marks }) => {
  const marksArr = Object.keys(marks);
  const max = parseInt(marksArr[marksArr.length - 1]);
  const min = parseInt(marksArr[0]);
  return (
    <Slider
      marks={marks}
      // dots={false}
      step={null}
      min={min}
      max={max}
      value={sliderValue}
      onChange={(val) => setSliderValue(val)}
      trackStyle={[{ backgroundColor: "#42CB99", height: 10, width: 30 }]}
      handleStyle={{
        backgroundColor: "#42CB99",
        borderColor: "#EDEEEF",
        height: 33,
        width: 33,
        marginTop: -10,
        borderWidth: 5,
      }}
      railStyle={{ backgroundColor: "#EDEEEF", height: 10 }}
      dotStyle={{
        display: "none",
      }}
      className={styles.geoSlider}
    />
  );
};

const Tabs = ({ setActiveTab, activeTab, products }) => {
  return (
    <div>
      {/*<div className="sm:hidden">*/}
      {/*  <label htmlFor="tabs" className="sr-only">*/}
      {/*    Select a tab*/}
      {/*  </label>*/}
      {/*  /!* Use an "onChange" listener to redirect the user to the selected tab URL. *!/*/}
      {/*  <select*/}
      {/*    id="tabs"*/}
      {/*    name="tabs"*/}
      {/*    className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"*/}
      {/*    // defaultValue={mockedData.residentialUnmetered.pricing.tiers.find((tab) => tab.current).name}*/}
      {/*    onChange={(e) => setActiveTab(e.target.value)}*/}
      {/*  >*/}
      {/*    {mockedData.products.pricing.tiers.map((tab) => {*/}
      {/*      const current = tab.name === activeTab;*/}
      {/*      return (*/}
      {/*        <option key={tab.name} name={tab.name} value={tab.name}>*/}
      {/*          {tab.name}*/}
      {/*        </option>*/}
      {/*      );*/}
      {/*    })}*/}
      {/*  </select>*/}
      {/*</div>*/}
      {/* Desktop */}
      <div className={`sm:block flex`}>
        <div className="flex justify-center">
          <nav
            className={`flex space-x-4 justify-center bg-support1-base ${styles.tabs}`}
            aria-label="Tabs"
          >
            {mockedData.productsSlider.pricing.tiers.map((tab) => {
              const current = tab.value === activeTab;
              return (
                <a
                  key={tab.value}
                  className={`cursor-pointer flex items-center justify-center ${
                    styles.tab
                  } ${
                    current
                      ? "bg-white text-gray-800"
                      : "text-gray-600 hover:text-gray-800"
                  }
                                'px-3 py-2 font-medium text-sm rounded-md'`}
                  aria-current={current ? "page" : undefined}
                  onClick={(e) => setActiveTab(tab.value)}
                >
                  <img src={tab.logo} alt="service logo" width={28} />
                  <span className="ml-2">{tab.name}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PricingSlider;
