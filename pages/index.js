import React, { useEffect, useState } from "react"
import Link from "next/link"

const DisplayDate = (props) => {

    const [date, setDate] = useState(0);

    useEffect(() => {
        const tid = setInterval(() => { setDate(Date.now()) }, 1000);
        return () => clearInterval(tid);//return clearer
    });

    const d = new Date(date);

    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    const h0 = Math.floor(h / 10);
    const h1 = h % 10;

    const m0 = Math.floor(m / 10);
    const m1 = m % 10;

    const s0 = Math.floor(s / 10);
    const s1 = s % 10;

    if (props.rgb == "1") {
        return (<div className="flex row centered">
            <div>
                <span className="color_red f4 bolder mxq">{h0}</span>
                <span className="color_red f4 bolder">{h1}</span>
                <span className="f4 bolder">:</span>
                <span className="color_green f4 bolder mxq">{m0}</span>
                <span className="color_green f4 bolder">{m1}</span>
                <span className="f4 bolder">:</span>
                <span className="color_blue f4 bolder mxq">{s0}</span>
                <span className="color_blue f4 bolder">{s1}</span>
            </div>
        </div>);
    }
    return (<div className="flex row centered">
        <div className="">
            <span className="pxh bg_black color_white f4 bolder mxq">{h0}</span>
            <span className="pxh bg_black color_white f4 bolder">{h1}</span>
            <span className="f4 bolder">:</span>
            <span className="pxh bg_black color_white f4 bolder mxq">{m0}</span>
            <span className="pxh bg_black color_white f4 bolder">{m1}</span>
            <span className="f4 bolder">:</span>
            <span className="pxh bg_black color_white f4 bolder mxq">{s0}</span>
            <span className="pxh bg_black color_white f4 bolder">{s1}</span>
        </div>
    </div>);

}

export default function Home() {
    const date = new Date();
    return (
        <div>
            <DisplayDate rgb="0" />
            {/* <DisplayDate/> */}
            <div>
                <a href="cards">Play some cards game.</a>
            </div>
        </div>
    )
}