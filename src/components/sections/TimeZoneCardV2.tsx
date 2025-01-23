import React, { useState, useEffect } from 'react'
import moment from 'moment-timezone'
import 'moment/locale/ja'

const Timezone = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    moment.locale('ja')
    const interval = setInterval(() => {
      const now = moment().tz('Asia/Tokyo') // タイムゾーンを東京に
      setDateTime(now.format('YYYY年 MMMM Do (dddd) HH:mm:ss'))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <p>{dateTime}</p>
      <p className="text-sm text-gray-500">🇯🇵 東京, 日本 🇯🇵</p>
    </div>
  )
}

export default Timezone
