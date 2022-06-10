import React, { useState } from "react";
import Link from "next/link";
import styles from "./footerLanding.module.scss";
import { footerEnums } from './enums';

const FooterMobile = () => {
  const [toggleOpen, setToggleOpen] = useState ({
    toggleUseCases: false,
    toggleAbout: false,
    toggleDevelopers: false,
    toggleLegal: false,
    toggleAccount: false,
    togglePartnerPrograms: false,
    toggleSocial: false,
    toggleTools: false,
  })

  const toggleHandler = (name) => {
    const currentState = toggleOpen[name]
    setToggleOpen({
      ...toggleOpen,
      [name]: !currentState
    })
  }

  return (
    <div
    className={`${styles.mainContent} flex w-full justify-between flex-row flex-nowrap`}
  >
    <div
      className={`${styles.footerMenu} flex w-full justify-between flex-row flex-nowrap`}
    >
      <div>
        <ul className={styles.list}>
          <li>
            <div className="flex justify-between" onClick={() => toggleHandler('toggleUseCases')}>
              <div className="flex justify-between capitalize text-subtle-200 text-lg font-semibold font-fontFamily-body	">Products</div>
              <div className={styles.openMenu}>
                +
              </div>
            </div>
          </li>
          {
            toggleOpen.toggleUseCases && (
              <>
               {footerEnums.products.map(i => {
                 return (
                  <li key={i.label}>
                    <Link href={i.link}>{i.label}</Link>
                  </li>
                 )
               })}
              </>
            )
          }

        </ul>
      </div>
      <div>
        <ul className={styles.list}>
          <li>
            <div className="flex justify-between" onClick={() => toggleHandler('toggleAbout')}>
              <div className="flex justify-between capitalize text-subtle-200 text-lg font-semibold font-fontFamily-body	">Use Cases</div>
              <div className={styles.openMenu}>+</div>
            </div>
          </li>
          {
            toggleOpen.toggleAbout && (
              <>
                {footerEnums.useCases.map(i => {
                  return (
                    <li key={i.label}>
                      <Link href={i.link}>{i.label}</Link>
                    </li>
                  )
                })}
              </>
            )
          }
        </ul>
      </div>
      <div>
        <ul className={styles.list}>
          <li>
            <div className="flex justify-between" onClick={(e) => toggleHandler('toggleDevelopers')}>
              <div className="flex justify-between capitalize text-subtle-200 text-lg font-semibold font-fontFamily-body	">Company</div>
              <div className={styles.openMenu}>+</div>
            </div>
          </li>
           {
             toggleOpen.toggleDevelopers && (
              <>
                {footerEnums.company.map(i => {
                  return (
                    <li key={i.label}>
                      <Link href={i.link}>{i.label}</Link>
                    </li>
                  )
                })}
              </>
             )
           }
        </ul>
      </div>
      <div>
        <ul className={styles.list}>
          <li>
            <div className="flex justify-between" onClick={(e) => toggleHandler('toggleTools')}>
              <div className="flex justify-between capitalize text-subtle-200 text-lg font-semibold font-fontFamily-body	">Resources</div>
              <div className={styles.openMenu}>+</div>
            </div>
          </li>
           {
             toggleOpen.toggleTools && (
               <>
                {footerEnums.resources.map(i => {
                  return(
                    <li key={i.label}>
                      <Link href={i.link} target="_blank">{i.label}</Link>
                    </li>
                  )
                })}
               </>
             )
           }
        </ul>
      </div>
      <div>
        <ul className={styles.list}>
          <li>
            <div className="flex justify-between" onClick={() => toggleHandler('toggleLegal')}>
              <div className="flex justify-between capitalize text-subtle-200 text-lg font-semibold font-fontFamily-body	">Programs</div>
              <div className={styles.openMenu}>+</div>
            </div>
          </li>
            {
              toggleOpen.toggleLegal && (
                <>
                  {footerEnums.programs.map(i => {
                    return (
                      <li key={i.label}>
                        <Link href={i.link}>{i.label}</Link>
                      </li>
                    )
                  })}
                </>
              )
            }
        </ul>
      </div>
      <div>
        <ul className={styles.list}>
          <li>
            <div className="flex justify-between"  onClick={() => toggleHandler('toggleAccount')}>
              <div className="flex justify-between capitalize text-subtle-200 text-lg font-semibold font-fontFamily-body	">Tools</div>
              <div className={styles.openMenu}>+</div>
            </div>
          </li>
          {
            toggleOpen.toggleAccount && (
              <>
                {footerEnums.tools.map(i => {
                  return (
                    <li key={i.label}>
                      <a href={i.link} target="_blank" rel="noopener noreferrer">{i.label}</a>
                    </li>
                  )
                })}
              </>
            )
          }
        </ul>
      </div>
      <div>
        <div>
          <ul className={styles.list}>
            <li>
              <div className="flex justify-between" onClick={() => toggleHandler('togglePartnerPrograms')}>
                <div className="flex justify-between capitalize text-subtle-200 text-lg font-semibold font-fontFamily-body	">Legal Links</div>
                <div className={styles.openMenu}>+</div>
              </div>
            </li>
            {
              toggleOpen.togglePartnerPrograms && (
                <>
                  {footerEnums.legalLinks.map(i => {
                    return (
                      <li key={i.label}>
                        <Link href={i.link}>{i.label}</Link>
                      </li>
                    )
                  })}
                </>
              )
            }
          </ul>
        </div>
        <ul className={styles.listLast}>
          <li>
            <div className="flex justify-between" onClick={() => toggleHandler('toggleSocial')}>
              <div className="flex justify-between capitalize text-subtle-200 text-lg font-semibold font-fontFamily-body">Top Locations</div>
              <div className={styles.openMenu}>+</div>
            </div>
          </li>
          {
            toggleOpen.toggleSocial && (
              <>
                {footerEnums.topLocations.map(i => {
                  return (
                    <li key={i.label}>
                      <Link href={i.link}>{i.label}</Link>
                    </li>
                  )
                })}
              </>
            )
          }
        </ul>
      </div>
    </div>
  </div>
  )
}

export default FooterMobile
