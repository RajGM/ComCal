import { useEffect } from 'react'
import HackathonTile from './HackathonTile';
import { useAtom } from 'jotai';
import { categoriesAtom, filterAtom } from './atoms';

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
let data2 = {
    title: "HackStanford",
    Link: "https://hackharvard.io/",
    ApplicationDate: "2021-09-01",
    EventDate: "2021-09-01",
    PostedBy: "RajGM",
    Real: 0,
    Spam: 0,
    Sponsored: false
}
let data3 = {
    title: "CalHacks",
    Link: "https://hackharvard.io/",
    ApplicationDate: "2021-09-01",
    EventDate: "2021-09-01",
    PostedBy: "RajGM",
    Real: 0,
    Spam: 0,
    Sponsored: false
}

let arrData = [data, data2, data3, data]

function CardField({ arrData }) {
    return arrData ? arrData.map((indiData) => <div className="eventCard"> <HackathonTile data={indiData} key={indiData} /></div>) : null;
}

export default function MainFeed() {

    const [category] = useAtom(categoriesAtom);
    const [filter] = useAtom(filterAtom);

    useEffect(() => {
        console.log(category);
        console.log(filter);
    }), [category, filter];

    return (
        <div className="mainFeed">
            <CardField arrData={arrData} />

        </div>
    );
}
