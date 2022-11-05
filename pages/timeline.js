import React from 'react'

import Timeline from "../components/timelinepage/cont"

let timedata = [
    {
        message: 'first commit',
        date:"Mar 20, 2021",
        fullhash: "3350c1486b40e9daa42b759e7f839e4fc1566f70",
        hash: "3350c14",
    },
    {
        message: 'initial',
        date:"Mar 20, 2021",
        fullhash: "2a860b7d400a875beb1b11896dacc3bd4c377cb5",
        hash: "2a860b7",
    },
    {
        message: 'nodevers',
        date:"Mar 21, 2021",
        fullhash: "e8d879d2c30a0ee4b39b2bfcd9c92e8c1006de6a",
        hash: "e8d879d",
    }
];

export default function timeline() {

    return (<div className="container">
        {/* Timeline */}
        <Timeline data={timedata}/>
    </div>);
}