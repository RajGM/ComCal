let data={
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
                <TestTile data={data}/>
            </div>
            <div className="eventCard">
                <TestTile data={data}/>
            </div>
            <div className="eventCard">
                <TestTile data={data}/>
            </div>
            <div className="eventCard">
                <TestTile data={data}/>
            </div>
            <div className="eventCard">
                <TestTile data={data}/>
            </div>
            <div className="eventCard">
                <TestTile data={data}/>
            </div>
            <div className="eventCard">
                <TestTile data={data}/>
            </div>
            <div className="eventCard">
                <TestTile data={data}/>
            </div>
            <div className="eventCard">
                <TestTile data={data}/>
            </div>
            <div className="eventCard">
                <TestTile data={data}/>
            </div>
            <div className="eventCard">
                <TestTile data={data}/>
            </div>


        </div>
    );
}

function TestTile({data}) {
    return (
        <div className="eventTile">
            <div className="rowFlex">
                <button className="sponsoredButton">Sponsored</button>
                <button>🛎️</button>
            </div>
            <div>
                <img src="https://hackharvard.io/static/media/HH22_logo_transparent_square.ebd93df1c22cd9cfd0ae.png" alt="title" className="iconLogo"/>
            </div>
            <div>
                Title
            </div>
            <div>
                Link
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
                    
                    <img src="https://hackharvard.io/static/media/HH22_logo_transparent_square.ebd93df1c22cd9cfd0ae.png" alt="title" className="contributorAvator"/>

                </div>
                <div>
                    💗
                </div>
            </div>
        </div>
    );
}