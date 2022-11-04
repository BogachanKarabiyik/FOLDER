import React, { useEffect, useState, useRef } from 'react'
import { SocketProvider } from '../contexts/SocketProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  Navigate,
  useNavigate
} from "react-router-dom";

export default function LoginRegister({ playerName }) {
  const socket = SocketProvider()


  //useEffect(() => {
    //if (window.location.href !== "https://www.xpresspassphoto.com/") {
      //window.location.href = "https://www.xpresspassphoto.com/"
    //}
  //},[])


  useEffect(() => {

    socket.once("load-error", error => {

    })
  }, [socket])

  const [month, setMonth] = useState({ number: 11, name: 'November', days: 30, empty: 1, tabStyle: { backgroundImage: 'url(november.jpg)', backgroundPosition: 'center' }})
  const [calendarPosition, setCalendarPosition] = useState(1)
  const [day, setDay] = useState({ number: 1, name: 'Monday'})
  const [hour, setHour] = useState(0)
  const [name, setName] = useState()
  const [number, setNumber] = useState()
  const [address, setAddress] = useState()
  const [suit, setSuit] = useState()
  const [city, setCity] = useState()
  const [zip, setZip] = useState()
  const [hourDisabled1, setHourDisabled1] = useState(false)
  const [hourDisabled2, setHourDisabled2] = useState(false)
  const [hourDisabled3, setHourDisabled3] = useState(false)
  const [hourDisabled4, setHourDisabled4] = useState(false)
  const [hourDisabled5, setHourDisabled5] = useState(false)
  const [hourDisabled6, setHourDisabled6] = useState(false)
  const dayRef = useRef()
  let isDisabled2 = true
  let guard = false

  useEffect (() => {
    fetch('http://192.168.0.212:5000/get-reservation')
      .then(function(res){
        const response = res.json().then((data) => {
          setHourDisabled1(false)
          setHourDisabled2(false)
          setHourDisabled3(false)
          setHourDisabled4(false)
          setHourDisabled5(false)
          setHourDisabled6(false)
          console.log(data)
          for (let i = 0; i < data.length; i++) {
            if (data[i].day === day.number && data[i].month === month.name) {
              if (data[i].hour == 7) {
                setHourDisabled1(true)
              }
              else if (data[i].hour == 10) {
                setHourDisabled2(true)
              }
              else if (data[i].hour == 13) {
                setHourDisabled3(true)
              }
              else if (data[i].hour == 16) {
                setHourDisabled4(true)
              }
              else if (data[i].hour == 19) {
                setHourDisabled5(true)
              }
              else if (data[i].hour == 22) {
                setHourDisabled6(true)
              }
            }
          }
        })
      })
      .catch(function(err) {
        console.log(err);
      })
  },[month, day, hour])
  
  function handleMonthLeft() {
    setMonth(prevMonth => {
      if (prevMonth.number - 1 === 0) {
        return { number: 12, name: 'December', days: 31, empty: 3, tabStyle: { backgroundImage: 'url(december.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number - 1 === 1) {
        return { number: 1, name: 'January', days: 31, empty: 5, tabStyle: { backgroundImage: 'url(january.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number - 1 === 2) {
        return { number: 2, name: 'February', days: 28, empty: 1, tabStyle: { backgroundImage: 'url(february.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number - 1 === 3) {
        return { number: 3, name: 'March', days: 31, empty: 1, tabStyle: { backgroundImage: 'url(march.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number - 1 === 4) {
        return { number: 4, name: 'April', days: 30, empty: 4, tabStyle: { backgroundImage: 'url(april.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number - 1 === 5) {
        return { number: 5, name: 'May', days: 31, empty: 6, tabStyle: { backgroundImage: 'url(may.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number - 1 === 6) {
        return { number: 6, name: 'June', days: 30, empty: 2, tabStyle: { backgroundImage: 'url(june.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number - 1 === 7) {
        return { number: 7, name: 'July', days: 31, empty: 4, tabStyle: { backgroundImage: 'url(july.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number - 1 === 8) {
        return { number: 8, name: 'August', days: 31, empty: 0, tabStyle: { backgroundImage: 'url(august.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number - 1 === 9) {
        return { number: 9, name: 'September', days: 30, empty: 3, tabStyle: { backgroundImage: 'url(september.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number - 1 === 10) {
        return { number: 10, name: 'October', days: 31, empty: 5, tabStyle: { backgroundImage: 'url(october.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number - 1 === 11) {
        return { number: 11, name: 'November', days: 30, empty: 1, tabStyle: { backgroundImage: 'url(november.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number - 1 === 12) {
        return { number: 12, name: 'December', days: 31, empty: 3, tabStyle: { backgroundImage: 'url(december.jpg)', backgroundPosition: 'center' } }
      }
    })
  }

  function handleMonthRight() {
    setMonth(prevMonth => {
      if (prevMonth.number + 1 === 13) {
        return { number: 1, name: 'January', days: 31, empty: 5, tabStyle: { backgroundImage: 'url(january.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number + 1 === 1) {
        return { number: 1, name: 'January', days: 31, empty: 5, tabStyle: { backgroundImage: 'url(january.jpg)', backgroundPosition: 'center' }}
      }
      else if (prevMonth.number + 1 === 2) {
        return { number: 2, name: 'February', days: 28, empty: 1, tabStyle: { backgroundImage: 'url(february.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number + 1 === 3) {
        return { number: 3, name: 'March', days: 31, empty: 1, tabStyle: { backgroundImage: 'url(march.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number + 1 === 4) {
        return { number: 4, name: 'April', days: 30, empty: 4, tabStyle: { backgroundImage: 'url(april.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number + 1 === 5) {
        return { number: 5, name: 'May', days: 31, empty: 6, tabStyle: { backgroundImage: 'url(may.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number + 1 === 6) {
        return { number: 6, name: 'June', days: 30, empty: 2, tabStyle: { backgroundImage: 'url(june.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number + 1 === 7) {
        return { number: 7, name: 'July', days: 31, empty: 4, tabStyle: { backgroundImage: 'url(july.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number + 1 === 8) {
        return { number: 8, name: 'August', days: 31, empty: 0, tabStyle: { backgroundImage: 'url(august.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number + 1 === 9) {
        return { number: 9, name: 'September', days: 30, empty: 3, tabStyle: { backgroundImage: 'url(september.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number + 1 === 10) {
        return { number: 10, name: 'October', days: 31, empty: 5, tabStyle: { backgroundImage: 'url(october.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number + 1 === 11) {
        return { number: 11, name: 'November', days: 30, empty: 1, tabStyle: { backgroundImage: 'url(november.jpg)', backgroundPosition: 'center' } }
      }
      else if (prevMonth.number + 1 === 12) {
        return { number: 12, name: 'December', days: 31, empty: 3, tabStyle: { backgroundImage: 'url(december.jpg)', backgroundPosition: 'center' } }
      }
    })
  }

  function emptyDivs() {
    const emptyDiv = []
    for (let i = 0; i < month.empty; i++) {
      emptyDiv.push(<div key={i}/>)
    }
    return emptyDiv
  }

  function handleDayClick(e) {
    setHour(0)
    let weekDay = 'Monday'
    let weeks = 0
    for (let i = (month.empty + 1); i <= (parseInt(e.currentTarget.textContent) + month.empty); i++) {

      if ( i % 7 === 0 ) {
        weeks += 7
      }

      if (i - weeks === 1) {
        weekDay = 'Monday'
      } else if (i - weeks === 2) {
        weekDay = 'Tuesday'
      } else if (i - weeks === 3) {
        weekDay = 'Wednesday'
      } else if (i - weeks === 4) {
        weekDay = 'Thursday'
      } else if (i - weeks === 5) {
        weekDay = 'Friday'
      } else if (i - weeks === 6) {
        weekDay = 'Saturday'
      } else if (i - weeks === 0) {
        weekDay = 'Sunday'
      }
    }

    setDay({ number: parseInt(e.currentTarget.textContent), name: weekDay })
    setCalendarPosition(0)
  }

  function daysButtons() {
    const daysButton = []
    for (let i = 1; i < month.days + 1; i++) {
      daysButton.push(<button key={i} ref={dayRef} onClick={handleDayClick} className="day-button" disabled={false}>{i}</button>)
    }
    return daysButton
  }

  const calendar = (
    <div className="calendar-wrapper">
      <h3>Mo</h3>
      <h3>Tu</h3>
      <h3>We</h3>
      <h3>Th</h3>
      <h3>Fr</h3>
      <h3>Sa</h3>
      <h3>Su</h3>
      {emptyDivs()}
      {daysButtons()}
    </div>
  )

  function handleBuy() {

    fetch('http://192.168.0.212:5000/get-reservation')
      .then(function(res){
        const response = res.json().then((data) => {
          for (let i = 0; i < data.length; i++) {
            if (data[i].day === day.number && data[i].month === month.name && data[i].hour === hour) {
              guard = true;
            }
          }
          if (guard) {

          }
          else {
            fetch('http://192.168.0.212:5000/make-res', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({name: name, number: number, address: address, day: day.name, month: month.name, monthDay: day.number, hour: hour})
            })
            .then(function(res){
              console.log(res);
            })
            .catch(function(err) {
              console.log(err);
            })

            handleSend()

            fetch('http://192.168.0.212:5000/create-checkout-session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              items: [
                {id: 1, quantity: 1}
              ]
            })
            }).then(res => {
              if (res.ok) return res.json()
              return res.json().then(json => Promise.reject(json))
            }).then(({ url }) => {
              window.location = url
              if (url === 'http://192.168.0.212:3000/success') {

              }
              else if (url === 'http://192.168.0.212:3000/cancel') {
                fetch('http://192.168.0.212:5000/cancel-reservation', {
                method: 'POST',
                headers: {
                  'Content-type': 'application/json'
                },
                body: JSON.stringify({name: name, number: number, address: address, day: day.name, month: month.name, monthDay: day.number, hour: hour})
                })
                .then(function(res){
                  console.log(res);
                })
                .catch(function(err) {
                  console.log(err);
                })
              }
            }).catch(e => {
              console.error(e.error)
            })
          }
        })
      })
      .catch(function(err) {
        console.log(err);
      })
  }

  function handleAddress() {
    fetch('http://192.168.0.212:5000/address-setup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({name: name, number: number, address: address, day: day.name, month: month.name, monthDay: day.number, hour: hour})
    })
    .then(function(res){
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  function handleSend() {
    const text = 'Bahadir! A new appointment has been made. NAME: ' + name + ', PHONE NUMBER: ' + number + ', ADDRESS: ' + address + ', SUIT NUMBER: ' + suit + ', CITY: ' + city + ', ZIP CODE: ' + zip + ' Good Luck.'
    const number2 = 6195192535

    fetch('http://192.168.0.212:5000/send-text', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({number: number2, text: text})
    })
    .then(function(res){
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  function UserHour1() {
    setHour(7)
  }
  function UserHour2() {
    setHour(10)
  }
  function UserHour3() {
    setHour(13)
  }
  function UserHour4() {
    setHour(16)
  }
  function UserHour5() {
    setHour(19)
  }
  function UserHour6() {
    setHour(22)
  }

  const dayCalendar = (
    <div className="dayCalendar-wrapper">
      <button onClick={UserHour1} disabled={hourDisabled1}>7AM</button>
      <button onClick={UserHour2} disabled={hourDisabled2}>10AM</button>
      <button onClick={UserHour3} disabled={hourDisabled3}>1PM</button>
      <button onClick={UserHour4} disabled={hourDisabled4}>4PM</button>
      <button onClick={UserHour5} disabled={hourDisabled5}>7PM</button>
      <button onClick={UserHour6} disabled={hourDisabled6}>10PM</button>
    </div>
  )

  const addressForm = (
    <div className="address-form">
      <form>
        <table>
          <tbody>
            <tr>
              <td><input className="adb1" onChange={e => setName(e.target.value)} maxLength="300" type="text" placeholder='Name'></input></td>
              <td><input className="adb2" onChange={e => setNumber(e.target.value)} maxLength="300" type="text" placeholder='Phone Number'></input></td>
            </tr>
            <tr>
              <td><input className="adb3" onChange={e => setAddress(e.target.value)} maxLength="300" type="text" placeholder='Address'></input></td>
              <td><input className="adb4" onChange={e => setSuit(e.target.value)} maxLength="300" type="text" placeholder='Suit Number'></input></td>
            </tr>
            <tr>
              <td><input className="adb5" onChange={e => setCity(e.target.value)} maxLength="300" type="text" placeholder='City'></input></td>
              <td><input className="adb6" onChange={e => setZip(e.target.value)} maxLength="300" type="text" placeholder='Zip Code'></input></td>
            </tr>
          </tbody>
        </table>
        {name ? (number ? (address ? (suit ? (city ? (zip ? (isDisabled2 = false) : "") : "") : "") : "") : "") : ""}
        <button type="button" onClick={handleBuy} disabled={isDisabled2}>Make Appointment</button>
      </form>
    </div>
  )

  const dayTab = (
    <div className="day-tab">
      <h1 className="day">{day.name}, {month.name} {day.number}, 2022{hour ? ", " + (hour > 10 ? hour - 12 : hour) + (hour > 10 ? "PM" : "AM") : ""}</h1>
    </div>
  )

  const monthTab = (
    <div className="month-tab">
      <button onClick={handleMonthLeft} className="month-left">Left</button>
      <h1 className="month">{month.name}</h1>
      <button onClick={handleMonthRight} className="month-right">Right</button>
    </div>
  )

  return (
    <div className="landing-wrapper">

      <div className="navigation-tab" style={month.tabStyle}>
        <h1 className="navigation-logo">XpressPassPhoto</h1>
        <a href='/' className="navigation-reservation">Make A Reservation</a>
      </div>

      {calendarPosition ? monthTab : dayTab}
      {calendar}
      {calendarPosition ? 0 : dayCalendar}
      {hour ? addressForm : 0}
    </div>
  );
}