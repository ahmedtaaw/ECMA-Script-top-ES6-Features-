import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
const CallAPI= ()=> {
    const [randomUserJsonData,setRandomUserJsonData]=useState('');
    const fetchRandomData = () => {
        return axios.get('https://randomuser.me/api')
            .then(({data}) => {
                // handle success
                console.log(data);
                return JSON.stringify(data,null,2);
            })
            .catch(err => {
                // handle error
                console.log(err);
            })
            .finally(function () {
                // always executed
            });

    };
    useEffect(()=>{
    fetchRandomData().then(randomdataz=>{
        setRandomUserJsonData(randomdataz || 'no data back from API');
    })
    
    },[])
    return (
        <div>
            <p>Fetch Random Data</p>
            <button onClick={()=>{
                fetchRandomData();
            }}>fetch Random Data</button>
            <p>{randomUserJsonData}</p>
        </div>
    );
}
export default CallAPI;