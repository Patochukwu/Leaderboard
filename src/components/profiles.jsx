export default function profiles({ Leaderboard, setShowPopup, setCurrentProfile }) {
  const handleClick = (data) => {
    setShowPopup(prev => prev = !prev)
    setCurrentProfile(data)
  }
  return (
    <div id="profile">
      {
        Leaderboard.map((value) => (
          <div key={value.id} className="flex" onClick={() => handleClick(value)}>
            <div className="item">
              <div className='imgcon'>
                    <img  src={value.img} className='popupimg' alt="" />
                </div>
              <div className="info">
                <h3 className='nametext'>{value.name}</h3>
                <span>{value.location}</span>
              </div>
            </div>
            <div id='item'>
              <span>{value.score}</span>
            </div>
          </div>
        )
        )
      }
    </div>
  )
}


