import React, {useRef} from "react"
import { Button } from '@material-ui/core';
import styles from "./ipVersion.module.scss"

const IpVersion = ({title, ip}) => {
  const ipRef = useRef(null);

  const copyToClipboard = () => {
    const copyText = ipRef.current.textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  return (
    <div className={styles.ipWrapper}>
      <div className={styles.ipTitle}>{title}</div>
       <div id="ip" ref={ipRef} className={styles.ip}>{ip}</div>
      <div>
        <Button onClick={copyToClipboard} className={styles.copyBtn}>Copy</Button>
      </div>
    </div>
  )
}

export default IpVersion