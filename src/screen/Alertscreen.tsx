


import React from 'react'
import PropTypes from 'prop-types'

import { useDispatch, useSelector } from 'react-redux'

import { connect } from 'react-redux';
import { afterWrite } from '@popperjs/core';

import { useEffect,useState } from 'react';

import { Alert } from 'react-bootstrap';
import { useAppSelector } from '../Types';

type _alertData = {
   msg:string,
   id:string,
   alertType : string
}

const Alerts : React.FC = () => {

    const [messg , setMessg] = useState([]);
    const alertData : _alertData[]  = useAppSelector(state => state.alertReducer);

   console.log(alertData)

   useEffect(() => {
    if(alertData !== null && alertData.length !== null) {
        // setMessg(alertData)
    }
}, [alertData])

   return (
    <div>
        { messg.map((mess : _alertData,idx) => (
                (<Alert key={idx} variant={mess.alertType}>
                    {mess.msg}             
                </Alert>
            )))                         
    }
    </div>
   )

 }

export default Alerts;