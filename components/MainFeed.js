import { useState } from 'react'
import HackathonTile from './HackathonTile';

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
                <HackathonTile data={data} />
            </div>
            <div className="eventCard">
                <HackathonTile data={data} />
            </div>
            <div className="eventCard">
                <HackathonTile data={data} />
            </div>
            <div className="eventCard">
                <HackathonTile data={data} />
            </div>
            <div className="eventCard">
                <HackathonTile data={data} />
            </div>
            <div className="eventCard">
                <HackathonTile data={data} />
            </div>
            <div className="eventCard">
                <HackathonTile data={data} />
            </div>
            <div className="eventCard">
                <HackathonTile data={data} />
            </div>
            <div className="eventCard">
                <HackathonTile data={data} />
            </div>
            <div className="eventCard">
                <HackathonTile data={data} />
            </div>
            <div className="eventCard">
                <HackathonTile data={data} />
            </div>
            
        </div>
    );
}