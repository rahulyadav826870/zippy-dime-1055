import React from 'react'
import Navbar from '../components/Navbar'
import VisitSingapore from './VisitSingapore'

export default function Heritage() {
  return (
    <div>
          <Navbar url="https://cdn1.tripoto.com/media/filter/tst/img/1429685/Image/1575886238_10_1.jpg" />
       <VisitSingapore headingText='Heritage With Tripoto' hide={false} spanText="Heritage Tripoto" />
    </div>
  )
}
