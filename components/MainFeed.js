import { useState } from 'react'

let data = {
    title: "HackHarvard",
    Link: "https://hackharvard.io/",
    ApplicationDate: "2021-09-01",
    EventDate: "2021-09-01",
    PostedBy: "RajGM",
    Real: 0,
    Spam: 0,
    Sponsored: false
}
export default function MainFeed() {
    return (
        <div className="mainFeed">

            <div className="eventCard">
                <TestTile data={data} />
            </div>
            <div className="eventCard">
                <TestTile data={data} />
            </div>
            <div className="eventCard">
                <TestTile data={data} />
            </div>
            <div className="eventCard">
                <TestTile data={data} />
            </div>
            <div className="eventCard">
                <TestTile data={data} />
            </div>
            <div className="eventCard">
                <TestTile data={data} />
            </div>
            <div className="eventCard">
                <TestTile data={data} />
            </div>
            <div className="eventCard">
                <TestTile data={data} />
            </div>
            <div className="eventCard">
                <TestTile data={data} />
            </div>
            <div className="eventCard">
                <TestTile data={data} />
            </div>
            <div className="eventCard">
                <TestTile data={data} />
            </div>


        </div>
    );
}

function TestTile({ data }) {
    const [dataToshow, setDataToshow] = useState(data.title);
    
    return (
        <div className="eventTile">
            <div className="space">

            </div>
            <div>
                <img src="https://hackharvard.io/static/media/HH22_logo_transparent_square.ebd93df1c22cd9cfd0ae.png" alt="title" className="iconLogo" />
            </div>
            <div>
                <a href={data.Link} onMouseEnter={()=>setDataToshow(data.Link)} onMouseLeave={()=>setDataToshow(data.title)} target="_blank">{dataToshow} </a>
                <img src="export.png" alt="title" className="redirectIcon" onMouseEnter={()=>setDataToshow(data.Link)} onMouseLeave={()=>setDataToshow(data.title)}/>
            </div>
            <div>
                Application Date:{data.ApplicationDate}
            </div>
            <div>
                Event Date:{data.EventDate}
            </div>
            <div className="rowFlex">
                <div>
                    <button>Real</button>
                </div>
                <div>
                    {data.Real}
                </div>
                <div>
                    {data.Spam}
                </div>
                <div>
                    <button>Spam</button>
                </div>
            </div>
            <div>
                <button>Update Details</button>
            </div>
            <div className="rowFlex">
                <div >
                    Posted by

                    <img src="https://hackharvard.io/static/media/HH22_logo_transparent_square.ebd93df1c22cd9cfd0ae.png" alt="title" className="contributorAvator" />

                </div>
                <div>
                    💗
                </div>
            </div>
        </div>
    );
}