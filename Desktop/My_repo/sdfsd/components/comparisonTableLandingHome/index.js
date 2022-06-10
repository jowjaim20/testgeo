import { Grid, Button } from "@material-ui/core";
import styles from "./comparisonTableLandingHome.module.scss";
import mockedData from "../../../mocks";
import imgaRrow from "../../Images/comparosin-table/arrow-right.svg";
import FeatureSet from "./featureSet";
import { Globals } from "../../../shared/globals"

export default function ComparisonTableLandingHome() {
  return (
    <Grid>
      <div className={styles.featureComparisonBanner}>
        <div className={styles.sideBySideBar}>
          <h2 className={styles.nameContent}>
            All the perks of expensive proxy services with none of the
            downsides!
          </h2>
          <p className={styles.descriptionContent}>
            Unlike our competitors, we do not charge for bandwidth. We always
            provide you residential proxies without mixing in data center
            proxies. You'll get faster and more predictable results, every time.
          </p>
        </div>
        <Grid className={styles.tableWrapperContainer}>
          <Grid className={styles.tableComparison}>
            <div className={styles.logoPrice}>
              <div>Residential Proxy Providers</div>
              <div>Starting Price/month</div>
            </div>

            <div className={styles.logoPrice}>
              <div className={styles.logoImage}>
                <img src={mockedData.tableTdLogo[0].img}></img>
              </div>

              <div className={styles.logoPriceData}>
                <div className={styles.proxyCost}>
                  <span className={styles.proxyCostCurrency}>$</span>47
                </div>
                <div>
                  <a href="https://app.geonode.com/signup" target="_self">
                    <Button variant="contained" className={styles.getStarted}>
                      Get Started For Only ${Globals.trialPrice}
                      <img src={imgaRrow} alt="arrow" width={9} height={9} />
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.logoPriceOther}>
              <div className={styles.logoImage}>
                <img src={mockedData.tableTdLogo[1].img}></img>
              </div>
              <div className={styles.logoPriceData}>
                <div className={styles.proxyCost}>
                  <span className={styles.proxyCostCurrency}>$</span>75
                </div>
                <div className={styles.proxyCostperGB}>$15 per GB</div>
              </div>
            </div>

            <div className={styles.logoPriceOther}>
              <div className={styles.logoImage}>
                <img src={mockedData.tableTdLogo[4].img}></img>
              </div>
              <div>
                <div className={styles.proxyCost}>
                  <span className={styles.proxyCostCurrency}>$</span>249
                </div>
              </div>
            </div>

            <div className={styles.logoPriceOther}>
              <div className={styles.logoImage}>
                <img src={mockedData.tableTdLogo[2].img}></img>
              </div>
              <div className={styles.logoPriceData}>
                <div className={styles.proxyCost}>
                  <span className={styles.proxyCostCurrency}>$</span>300
                </div>
                <div className={styles.proxyCostperGB}>$15 per GB</div>
              </div>
            </div>

            <div className={styles.logoPriceOther}>
              <div className={styles.logoImage}>
                <img src={mockedData.tableTdLogo[3].img}></img>
              </div>
              <div className={styles.logoPriceData}>
                <div className={styles.proxyCost}>
                  <span className={styles.proxyCostCurrency}>$</span>500
                </div>
                <div className={styles.proxyCostperGB}>$12.50 per GB</div>
              </div>
            </div>
          </Grid>
          <Grid>
            <FeatureSet></FeatureSet>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
