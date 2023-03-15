


import { useState, useEffect } from "react";

import { Alert } from "react-bootstrap";
import { isVariableDeclarationList } from "typescript";


export function Alertshow (arrs : any)   {
  const [isHide, setIsHide] = useState(false);

  //console.log(arrs[0],arrs[1],arrs,typeof(arrs))

  const str1  = arrs.arrs.msgtype

  const str2 = arrs.arrs.msg

  //const str2 = arrs[1]

  //setTimeout(() => setIsHide(false), 5000);

//   setTimeout(() => setIsHide(true),10000)

console.log("alertshow",arrs.arrs.msgtype,arrs.arrs.msg,typeof(arrs),arrs)

useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsHide(true);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    }; // return function will only run when the component unmount
  }, []); // using empty square bracket it means after the component muount it will run only once


 // const types = variants
  return (
    <>
    { !isHide ? <Alert variant = {str1} style={{ width: "42rem", marginTop: "100px" }}>
      <Alert.Heading>
        {str2}
      </Alert.Heading>
    </Alert> : <div></div>}

    </>
  );
}

