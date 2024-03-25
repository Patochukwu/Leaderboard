export default function Popup({show, data, setShow}) {
    return(
        <>
        {show && <section className="popup">
            <div className="btnCon"><button className="close" onClick={() => setShow(false)}>close</button></div>
            <div className="container">
                <div className='popupimgcon'>
                    <img  src={data.img} className='popupimg' alt="" />
                </div>

                <div className="detailCon">
                    <h3 className='name'>{data.name}</h3>
                    <p className="location"><span>Location:</span> {data.location}</p>
                    <p className="text"><span>Age:</span> {data.age}</p>
                    {/* <p className="score"><span>Score:</span> {data.score}</p>
                    <p className="score"><span>Score:</span> {data.score}</p> */}
                </div>
        
            </div>
        </section>}
        </>
    )
}