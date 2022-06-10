import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Typography, Grid } from "@material-ui/core";
import dynamic from "next/dynamic";
import styles from "../styles/proxyChecker.module.scss";
import ProxyCheckerTable from "@components/v1/ProxyCheckerTable/proxyCheckerTable";
import axios from "axios";

const HeaderFreeProxy = dynamic(
  import("@components/v1/FreeProxyHeader/freeProxyHeader")
);
import ProxyCheckerFilters from "@components/v1/ProxyChecker/proxyCheckerFilters";
import GeoHead from "@components/Head";

export default function ProxyChecker() {
  const [showTable, setShowTable] = useState(false);
  const [error, setError] = useState(undefined);
  const [checkedNumber, setCheckedNumber] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [checking, setChecking] = useState(false);
  const [checkedProxies, setCheckiedProxies] = useState([]);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [proxiesToCheck, setProxiesToCheck] = useState([]);
  const [filters, setFilters] = useState({
    filter_speed: "",
    filter_protocol: {
      http: false,
      https: false,
      socks4: false,
      socks5: false,
    },
    filter_anonymity: "",
    filterPort: "",
    filter_result: "",
    sortedField: "country",
    sortedType: "",
    publish_proxy: "no",
  });

  const dataValidation = (value) => {
    let regIPPort =
      /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]):[0-9]+$/;
    let userPass =
      /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]):[0-9]+:([A-Za-z0-9\!\"\#\$\%\&\'\№\(\)\*\+\,\-\.\|\/\:\;\<\>\=\?\@\[\]\{\}\\\^\_\`\~]+):([A-Za-z0-9\!\"\#\$\%\&\'\№\(\)\*\+\,\-\.\|\/\:\;\<\>\=\?\@\[\]\{\}\\\^\_\`\~]+)$/;
    let regPortValid = regIPPort.test(value);
    let userPassValiud = userPass.test(value);
    if (regPortValid || userPassValiud) {
      return "";
    }

    return "Please check the format again.";
  };

  const startChecking = () => {
    setCheckedNumber(0);
    setProxiesToCheck([]);
    setCheckiedProxies([]);
    let proxies = textAreaValue.split(" ");
    let filtered = proxies.filter((el) => el.length !== 0);
    let ipPortSeparated = filtered.map((el) => {
      return {
        ip: el.split(":")[0],
        port: el.split(":")[1],
        ip_info: {},
      };
    });

    let errors = filtered.map((el) => dataValidation(el));
    if (errors.includes("Please check the format again.")) {
      setError("Please check the format again.");
      setShowTable(false);
      return;
    }

    setChecking(true);
    setDisabled(true);
    setShowTable(true);
    setError("");
    setProxiesToCheck(ipPortSeparated);
    setCheckiedProxies(ipPortSeparated);
    createRequests(ipPortSeparated);
  };

  const createRequests = (ipPortSeparated) => {
    let requests = ipPortSeparated.map((el, index) => {
      let request = new URL(
          `https://proxylist.geonode.com/api/check-proxy?ip=${el.ip}&port=${el.port}`
        ),
        params = {};

      filters.filter_speed !== "" &&
        (params.filter_speed = filters.filter_speed);
      filters.filter_anonymity !== "" &&
        (params.filter_anonymity = filters.filter_anonymity);
      filters.filter_result !== "" &&
        (params.filter_result = filters.filter_result);
      filters.publish_proxy !== "" &&
        (params.publish_proxy = filters.publish_proxy);
      let filter_protocol = Object.keys(filters.filter_protocol).filter(
        (key) => filters.filter_protocol[key]
      );

      filter_protocol.length && (params.filter_protocol = filter_protocol);

      Object.keys(params).forEach((key) => {
        if (key === "filter_protocol") {
          request.searchParams.append(
            "filter_protocol",
            filter_protocol.toString()
          );
          return;
        }

        return request.searchParams.append(key, params[key]);
      });

      return axios
        .get(request)
        .then((result) => {
          setCheckedNumber((prev) => prev + 1);
          let checkedProxy = result.data.data;
          return {
            ...el,
            ...checkedProxy,
            protocols: checkedProxy.protocols.filter((proxy) => {
              return proxy.status;
            }),
          };
        })
        .then((result) => {
          setCheckiedProxies((prevProxies) => {
            const nextProxies = [...prevProxies];

            nextProxies[index] = result;

            return nextProxies;
          });

          return result;
        })
        .catch((e) => {
          setCheckiedProxies((prevProxies) => {
            const nextProxies = [...prevProxies];
            nextProxies[index] = {
              ip: nextProxies[index].ip,
              port: nextProxies[index].port,
              is_valid: false,
              protocols: [{ protocol: "-", speed: 0, response_time: 0 }],
              ip_info: {
                status: "failed",
                country: "-",
              },
            };
            return nextProxies;
          });

          throw e;
        });
    });

    Promise.allSettled(requests).then((results) => {
      setCheckiedProxies((prevProxies) => {
        let newProxies = [...prevProxies];

        if (Object.values(filters.filter_protocol).includes(true)) {
          newProxies = newProxies.filter((proxy) => {
            return proxy.protocols.length > 0;
          });
        }

        if (filters.filter_result === "valid") {
          newProxies = newProxies.filter((proxy) => {
            return proxy.is_valid === true;
          });
        } else if (filters.filter_result === "invalid") {
          newProxies = newProxies.filter((proxy) => {
            return proxy.is_valid === false;
          });
        }

        if (filters.filter_speed === "fast") {
          newProxies = newProxies.filter((proxy) => {
            return proxy.protocols
              ? proxy.protocols[0].speed >= 1 &&
                  proxy.protocols[0]?.speed <= 250
              : null;
          });
        } else if (filters.filter_speed === "medium") {
          newProxies = newProxies.filter((proxy) => {
            return proxy.protocols
              ? proxy.protocols[0].speed > 251 &&
                  proxy.protocols[0]?.speed <= 800
              : null;
          });
        } else if (filters.filter_speed === "slow") {
          newProxies = newProxies.filter((proxy) => {
            return proxy.protocols ? proxy.protocols[0].speed > 801 : null;
          });
        }
        return newProxies;
      });

      if (results) {
        setChecking(false);
        setDisabled(false);
      }
    });
  };

  return (
    <div>
      <GeoHead
        title="🤖Free Proxy List"
        description="Residential Proxies" //This "unmetered" in text needs to be asked!!
      />

      <Grid style={{ backgroundColor: "#181a40" }}>
        {/* Google Tag Manager (noscript)  */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WFJR5DV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript)  */}
        <div className={styles.viewMore}>
          View on desktop for more proxy filters
        </div>
        <HeaderFreeProxy />
        <main className={`${styles.homepage} max-w-screen-xl mx-auto px-4`}>
          <Grid className={`${styles.section1} mb-60`}>
            <div style={{ height: "35%" }} className={styles.cover}></div>
            <Grid
              className={styles.container}
              container
              direction="row"
              wrap="nowrap"
              justify="space-between"
              alignItems="center"
            >
              <Grid className={styles.mainContent}>
                <div className={styles.proxyCheckerWrapper}>
                  <Typography variant="h1" className={styles.title}>
                    The Most Advanced Free Proxy Checker
                  </Typography>
                  <Typography className={styles.subtitle}>
                    Up to 100 proxies can be checked at once. <br></br> If
                    public proxy, enter{" "}
                    <span style={{ color: "#e0a3a7" }}>IP:PORT</span>. If
                    private, enter{" "}
                    <span style={{ color: "#e0a3a7" }}>IP:PORT:USER:PASS</span>.
                  </Typography>
                </div>
                <textarea
                  style={{ border: `${error ? "1px solid #EF5A92" : "none"}` }}
                  placeholder="Your proxy list here"
                  className={styles.textareaProxyChecker}
                  value={textAreaValue}
                  onChange={(e) => {
                    setTextAreaValue(e.target.value);
                  }}
                ></textarea>
              </Grid>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  textAlign: "left",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <ProxyCheckerFilters
                  disabled={disabled}
                  checking={checking}
                  error={error}
                  startChecking={startChecking}
                  filters={filters}
                  setFilters={setFilters}
                ></ProxyCheckerFilters>
                <ProxyCheckerTable
                  checking={checking}
                  checkedNumber={checkedNumber}
                  checkedProxies={checkedProxies}
                  checkedProxies={checkedProxies}
                  proxiesToCheck={proxiesToCheck}
                  showTable={showTable}
                  setFilters={setFilters}
                  filters={filters}
                ></ProxyCheckerTable>
              </div>
            </Grid>
          </Grid>
        </main>
        {/* <Footer freeProxy={true} title="Ready to grab the limited deal?" /> */}
      </Grid>
    </div>
  );
}
