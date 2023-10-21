import React, { useLayoutEffect, useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { quizData } from '../../../Redux/Action'
import './TestSheet.scss'
const Timer = (props) => {
    const {initialMinute = 0,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    const navi = useNavigate()
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                    window.alert("Timed out")
                    navi("/dashboard")
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div>
        { minutes === 0 && seconds === 0
            ? null
            : 
            <div >
                <h1 > <span className='TimerWrapper'>{minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</span></h1> 
            </div>
        }
        </div>
    )
}

export default Timer;