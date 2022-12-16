import { useEffect } from 'react';
import HackathonTile from './HackathonTile';
import { useAtom } from 'jotai';
import { categoriesAtom, filterAtom } from './atoms';
import { firestore } from '@lib/firebase';

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
    Link: "https://www.treehacks.com/",
    ApplicationDate: "2021-09-01",
    EventDate: "2021-09-01",
    PostedBy: "RajGM",
    Real: 0,
    Spam: 0,
    Sponsored: false
}
let data3 = {
    title: "CalHacks",
    Link: "https://www.calhacks.io/",
    ApplicationDate: "2021-09-01",
    EventDate: "2021-09-01",
    PostedBy: "RajGM",
    Real: 0,
    Spam: 0,
    Sponsored: false
}

let arrData = [data, data2, data3, data];

let dataToShow = [];

function CardField({ arrData }) {
    return arrData ? arrData.map((indiData) => <div className="eventCard"> <HackathonTile data={indiData} key={indiData} /></div>) : null;
}

async function queryTest(category, filter) {
    const query = firestore.collectionGroup('Hackathon').where('Type', '==', filter.toLowerCase());
    const queryData = (await query.get()).docs.map((doc) => doc.data());
    console.log(queryData);
    console.log(arrData);
    dataToShow=queryData;
}

export default function MainFeed() {

    const [category] = useAtom(categoriesAtom);
    const [filter] = useAtom(filterAtom);

    useEffect(() => {
        console.log(category);
        console.log(filter);
        queryTest(category,filter);
    }), [filter];

    return (
        <div className="mainFeed">
            {dataToShow.length>1?<CardField arrData={dataToShow} />:<CardField arrData={arrData} />}
        </div>
    );
}
