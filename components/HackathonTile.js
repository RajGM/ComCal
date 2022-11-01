import { useState } from 'react';



export default function TestTile({ data }) {
    const [dataToshow, setDataToshow] = useState(data.title);

    return (
        <div className="eventTile">
            <div className="space"></div>
            <div>
                <img src="https://hackharvard.io/static/media/HH22_logo_transparent_square.ebd93df1c22cd9cfd0ae.png" alt="title" className="iconLogo" />
            </div>
            <div>
                <a href={data.Link} onMouseEnter={() => setDataToshow(data.Link)} onMouseLeave={() => setDataToshow(data.title)} target="_blank">{dataToshow} </a>
                <img src="export.png" alt="title" className="redirectIcon" onMouseEnter={() => setDataToshow(data.Link)} onMouseLeave={() => setDataToshow(data.title)} />
            </div>
            <div>
                Application Starts:{data.ApplicationDate}
            </div>
            <div>
                Application Ends:{data.ApplicationDate}
            </div>
            <div>
                Hackathon Begins:{data.ApplicationDate}
            </div>
            <div>
                Hackathon Ends:{data.EventDate}
            </div>
            <div className="rowFlex">
                <div>
                    <button title='Upvote'>Real</button>
                </div>
                <div>
                    {data.Real}
                </div>
                <div>
                    {data.Spam}
                </div>
                <div>
                    <button title='Mark Spam'>Spam</button>
                </div>
            </div>
            <div>
                <button title="Update Info">Update Details</button>
            </div>
            <div className="space"></div>
            <div className="rowFlex itemCenter">
                <div className='margin-right'>
                    Posted by {data.PostedBy}
                </div>
                <div className='margin-right'>
                    <img src="/hacker.png" alt="title" className="contributorAvator" />
                </div>
                <div>
                    <img src="/heart.png" alt="title" className="contributorAvator" title='Give like'/>
                </div>
            </div>
        </div>
    );
}