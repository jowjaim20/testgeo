import React from "react";
import styles from "./proxyCheckerFilters.module.scss";
const ProxyCheckerFilters = ({ disabled, checking, filters, setFilters, startChecking, error }) => {

  return (
    <>
      <div className={styles.proxyCheckerContainer} style={{ margin: "0 20px 0 20px" }}>
        <div className={styles.filterWrapper}>
          <div className={styles.filterItemContainer}>
            <div className={styles.selectWrapper}>
              <span style={{ color: "#9D9EAA" }}>Test result</span>
              <div className={styles.mobileFilters} style={{ marginTop: "15px", display: "flex", flexWrap: "wrap" }}>
                <input type="checkbox" id="valid" name="valid" value="valid" checked={filters.filter_result === "valid"} onChange={(e) => { setFilters({ ...filters, filter_result: filters.filter_result === "valid" ? "" : "valid" }) }} />
                <label htmlFor="valid">Valid</label>
                <input type="checkbox" id="invalid" name="invalid" value="invalid" checked={filters.filter_result === "invalid"} onChange={(e) => { setFilters({ ...filters, filter_result: filters.filter_result === "invalid" ? "" : "invalid" }) }} />
                <label htmlFor="invalid">Invalid</label>
              </div>
            </div>

            <div className={styles.selectWrapper}>
              <span style={{ color: "#9D9EAA" }}>Proxy protocol</span>
              <div className={styles.protocolInputs}>
                <div>
                <input type="checkbox" id="http" name="http" value="http" checked={filters.filter_protocol.http} onChange={(e) => { setFilters({ ...filters, filter_protocol: { ...filters.filter_protocol, http: e.target.checked } }) }} />
                <label style={{marginBottom: "25px"}} htmlFor="http">HTTP</label>
                <input type="checkbox" id="https" name="https" value="https" checked={filters.filter_protocol.https} onChange={(e) => { setFilters({ ...filters, filter_protocol: { ...filters.filter_protocol, https: e.target.checked } }) }} />
                <label htmlFor="https">HTTPS</label>
                </div>
                <div>
                <input type="checkbox" id="socks4" name="socks4" value="socks4" checked={filters.filter_protocol.socks4} onChange={(e) => { setFilters({ ...filters, filter_protocol: { ...filters.filter_protocol, socks4: e.target.checked } }) }} />
                <label  style={{marginBottom: "25px"}} htmlFor="socks4">SOCKS4</label>
                <input type="checkbox" id="socks5" name="socks5" value="socks5" checked={filters.filter_protocol.socks5} onChange={(e) => { setFilters({ ...filters, filter_protocol: { ...filters.filter_protocol, socks5: e.target.checked } }) }} />
                <label htmlFor="socks5">SOCKS5</label>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.filterItemContainer}>
            <div className={styles.selectWrapper}>
              <span style={{ color: "#9D9EAA" }}>Speed</span>
              <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap" }} className={styles.mobileFilters} >
                <input type="checkbox" id="fast" checked={filters.filter_speed === "fast"} onChange={(e) => { setFilters({ ...filters, filter_speed: filters.filter_speed === "fast" ? "" : "fast" }) }} name="fast" value="fast" />
                <label htmlFor="fast">Fast</label>
                <input type="checkbox" id="medium" checked={filters.filter_speed === "medium"} onChange={(e) => { setFilters({ ...filters, filter_speed: filters.filter_speed === "medium" ? "" : "medium" }) }} name="medium" value="medium" />
                <label htmlFor="medium">Medium</label>
                <input type="checkbox" id="slow" checked={filters.filter_speed === "slow"} onChange={(e) => { setFilters({ ...filters, filter_speed: filters.filter_speed === "slow" ? "" : "slow" }) }} name="slow" value="slow" />
                <label htmlFor="slow">Slow</label>
              </div>
            </div>
            <div className={styles.selectWrapper}>
              <span style={{ color: "#9D9EAA" }}>Anonymity</span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10px",
                }}
              >
                <input type="checkbox" id="hia" name="hia" value="hia" checked={filters.filter_anonymity === "hia"} onChange={(e) => { setFilters({ ...filters, filter_anonymity: filters.filter_anonymity === "hia" ? "" : "hia" }) }} />
                <label htmlFor="hia">High anonymous proxy (HIA)</label>
                <input type="checkbox" id="anm" name="anm" value="anm" checked={filters.filter_anonymity === "anm"} onChange={(e) => { setFilters({ ...filters, filter_anonymity: filters.filter_anonymity === "anm" ? "" : "anm" }) }} />
                <label htmlFor="anm">Anonymous proxy server (ANM)</label>
                <input type="checkbox" id="noa" name="noa" value="noa" checked={filters.filter_anonymity === "noa"} onChange={(e) => {setFilters({ ...filters, filter_anonymity: filters.filter_anonymity === "noa" ? "" : "noa" }) }} />
                <label htmlFor="noa">Non anonymous proxy (NOA)</label>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.selectWrapper}>
          <input type="checkbox" id="notPublish" name="notPublish" checked={filters.publish_proxy === "no" ? false : true} onChange={(e) => { setFilters({ ...filters, publish_proxy: filters.publish_proxy === "yes" ? "no" : "yes" }) }} />
          <label style={{ color: "#F5F6FA", fontSize: "14px" }} htmlFor="notPublish">Do not publish my proxy list</label>
        </div>
  
          <button disabled={disabled} onClick={startChecking} className={styles.startCheckingButton}
          style={{
            backgroundColor: `${checking ? "#17182C" : "#5454D4"}`,
            color: `${checking ? "#A5A5A5" : "#FFFFFF"}`,
            }}>
            <span>
             {
             checking ? "Checking proxies..." : "Start checking"
             }
           </span>
            </button>

       <div style={{color: "#EF5A92", marginBottom: "40px"}}>{error}</div>
      </div>
    </>
  );
};

export default ProxyCheckerFilters;
