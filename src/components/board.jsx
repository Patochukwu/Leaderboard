import { useState } from 'react'
import Profile from './profiles'
import { Leaderboard } from './database'
import Popup from './popup'

function between(data, between) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (between + 1));

  let filter = data.filter(val => {
    let userDate = new Date(val.dt);
    return previous <= userDate && today >= userDate;
  })

  
  return filter.sort((a, b) => {
    if (a.score === b.score) {
      return b.score - a.score;
    } else {
      return b.score - a.score;
    }
  });
  

}


export default function board() {

  const [period, setPeriod] = useState(0)
  const [showPopup, setShowPopup] = useState(false)
  const [currentProfile, setCurrentProfile] = useState()

  const handleClick = (e) => {
    setPeriod(e.target.dataset.id)
  }
  return (
    <div className='board'>
      <Popup show={showPopup} data={currentProfile} setShow={setShowPopup} />

      <section className='section'>
        <h1 className='leaderboard'>Leaderboard
        </h1>

        <div className='duration'>
          <button onClick={handleClick} data-id='7'>10 days</button>
          <button onClick={handleClick} data-id='31'>31 days</button>
          <button onClick={handleClick} data-id='0'>overall</button>
        </div>
      </section>


      <Profile Leaderboard={between(Leaderboard, 10)} setShowPopup={setShowPopup} setCurrentProfile={setCurrentProfile} />
    </div>
  )
}



