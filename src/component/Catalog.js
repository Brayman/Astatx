import React, {useState} from 'react';
import '../css/catalog.css';
import {
    BrowserRouter as Router,
    NavLink,
    useLocation
  } from "react-router-dom";
import { ImSortAmountAsc, ImSortAmountDesc } from "react-icons/im";

function Catalog() {
    const [stat, setStat] = useState({
        
    });
    const data = [{"date":{"full":"2020-10-22T08:38:23.116Z","default":"2020/10/22"},"prorate":2.547,"buy":false,"usd":0,"byn":0,"increase":false,"rate":2.548},{"date":{"full":"2020-10-23T08:56:50.845Z","default":"2020/10/23"},"prorate":2.541,"buy":false,"usd":0,"byn":0,"increase":false,"rate":2.542},{"date":{"full":"2020-10-24T06:45:57.278Z","default":"2020/10/24"},"prorate":2.537,"buy":false,"usd":0,"byn":0,"increase":false,"rate":2.56},{"date":{"full":"2020-10-24T10:17:24.605Z","default":"2020/10/24"},"prorate":2.537,"buy":true,"usd":30,"byn":76.11,"increase":false,"rate":2.56},{"date":{"full":"2020-10-25T10:00:10.576Z","default":"2020/10/25"},"prorate":2.537,"buy":false,"usd":0,"byn":0,"increase":false,"rate":2.56},{"date":{"full":"2020-10-26T12:11:46.941Z","default":"2020/10/26"},"prorate":2.545,"buy":false,"usd":0,"byn":0,"increase":true,"rate":2.565},{"date":{"full":"2020-10-27T14:52:57.160Z","default":"2020/10/27"},"prorate":2.562,"buy":false,"usd":0,"byn":0,"increase":true,"rate":2.58},{"date":{"full":"2020-10-28T10:20:56.827Z","default":"2020/10/28"},"prorate":2.612,"buy":false,"usd":0,"byn":0,"increase":true,"rate":2.63},{"date":{"full":"2020-10-29T06:58:26.046Z","default":"2020/10/29"},"prorate":2.633,"buy":false,"usd":0,"byn":0,"increase":true,"rate":2.655},{"date":{"full":"2020-10-30T08:05:09.070Z","default":"2020/10/30"},"prorate":2.644,"buy":false,"usd":0,"byn":0,"increase":true,"rate":2.665},{"date":{"full":"2020-10-31T07:43:22.114Z","default":"2020/10/31"},"prorate":2.632,"buy":false,"usd":0,"byn":0,"increase":false,"rate":2.66},{"date":{"full":"2020-11-01T09:35:17.303Z","default":"2020/11/01"},"prorate":2.632,"buy":false,"usd":0,"byn":0,"increase":false,"rate":2.66},{"date":{"full":"2020-11-02T14:06:10.726Z","default":"2020/11/02"},"prorate":2.663,"buy":false,"usd":0,"byn":0,"increase":true,"rate":2.685},{"date":{"full":"2020-11-03T09:48:50.226Z","default":"2020/11/03"},"prorate":2.653,"buy":false,"usd":0,"byn":0,"increase":false,"rate":2.654},{"date":{"full":"2020-11-04T09:20:47.728Z","default":"2020/11/04"},"prorate":2.649,"buy":false,"usd":0,"byn":0,"increase":false,"rate":2.675},{"date":{"full":"2020-11-05T08:36:50.980Z","default":"2020/11/05"},"prorate":2.629,"buy":false,"usd":0,"byn":0,"increase":false,"rate":2.63},{"date":{"full":"2020-11-06T08:43:34.978Z","default":"2020/11/06"},"prorate":2.579,"buy":false,"usd":0,"byn":0,"increase":false,"rate":2.58},{"date":{"full":"2020-11-07T07:37:19.778Z","default":"2020/11/07"},"prorate":2.59,"buy":false,"usd":0,"byn":0,"increase":true,"rate":2.61},{"date":{"default":"8/11/2020","full":"2020-11-08T13:40:39.447Z"},"prorate":"2.590","buy":false,"usd":0,"byn":0,"increase":false,"rate":"2.610"},{"date":{"default":"9/11/2020","full":"2020-11-09T10:23:07.952Z"},"prorate":"2.577","buy":false,"usd":0,"byn":0,"increase":false,"rate":"2.600"},{"date":{"default":"9/11/2020","full":"2020-11-09T12:24:44.842Z"},"prorate":"2.577","buy":true,"usd":20,"byn":51.54,"increase":false,"rate":"2.600"},{"date":{"default":"10/11/2020","full":"2020-11-10T08:09:29.168Z"},"prorate":"2.562","buy":true,"usd":10,"byn":25.62,"increase":false,"rate":"2.563"},{"date":{"default":"11/11/2020","full":"2020-11-11T08:47:24.370Z"},"prorate":"2.558","buy":true,"usd":30,"byn":76.73,"increase":false,"rate":"2.559"},{"date":{"default":"12/11/2020","full":"2020-11-12T10:01:33.007Z"},"prorate":"2.566","buy":false,"usd":0,"byn":0,"increase":true,"rate":"2.567"},{"date":{"default":"13/11/2020","full":"2020-11-13T09:24:38.744Z"},"prorate":"2.567","buy":false,"usd":0,"byn":0,"increase":true,"rate":"2.568"},{"date":{"default":"14/11/2020","full":"2020-11-14T13:02:03.669Z"},"prorate":"2.575","buy":false,"usd":0,"byn":0,"increase":false,"rate":"2.590"},{"date":{"default":"15/11/2020","full":"2020-11-15T15:53:40.982Z"},"prorate":"2.575","buy":true,"usd":10,"byn":25.75,"increase":false,"rate":"2.590"},{"date":{"default":"16/11/2020","full":"2020-11-16T07:25:43.476Z"},"prorate":"2.565","buy":true,"usd":10,"byn":25.65,"increase":false,"rate":"2.566"},{"date":{"default":"17/11/2020","full":"2020-11-17T09:30:22.988Z"},"prorate":"2.561","buy":true,"usd":30,"byn":76.83,"increase":false,"rate":"2.585"},{"date":{"default":"18/11/2020","full":"2020-11-18T09:26:59.792Z"},"prorate":"2.553","buy":true,"usd":10,"byn":25.53,"increase":false,"rate":"2.554"}];
    const sum = data.reduce((acc, now, i,arr) => {
        console.log(i, acc);
        
        return acc + now.byn
       
    },0)
    const sumusd = data.reduce((acc, now, i,arr) => {
        console.log(i, acc);
        
        return acc + now.usd
       
    },0)
    return (
        <div>
            <div className='catalog_box'>
                <div className='main_text'>
                    Сумма
                </div>
                <div className='main_number'>
                    {sum} BYN
                </div>
           </div>
           <div className='catalog_box'>
                <div className='main_text'>
                    Сумма
                </div>
                <div className='main_number'>
                    {sumusd} USD
                </div>
           </div>
       </div>
    )
} 

export default Catalog;