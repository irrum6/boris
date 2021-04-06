import React, { useEffect, useState } from "react"
import Link from "next/link"

let _rgb = "0";
const setrgb = () => {
    _rgb = _rgb == "0" ? "1" : "0";
    // console.log(1);
}

const DisplayDate = (props) => {

    const [date, setDate] = useState(0);
    // const [rgb, setRGB] = useState(props.rgb);

    useEffect(() => {
        const tid = setInterval(() => { setDate(Date.now()) }, 300);
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

    if (_rgb == "1") {
        return (<div className="flex row centered">
            <div>
                <span className="color_red bg_litegray f4 bolder mxq pxh">{h0}</span>
                <span className="color_red bg_litegray f4 bolder pxh">{h1}</span>
                <span className="f4 bolder">:</span>
                <span className="color_green bg_litegray f4 bolder mxq pxh">{m0}</span>
                <span className="color_green bg_litegray f4 bolder pxh">{m1}</span>
                <span className="f4 bolder">:</span>
                <span className="color_blue bg_litegray f4 bolder mxq pxh">{s0}</span>
                <span className="color_blue bg_litegray f4 bolder pxh">{s1}</span>
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
            <div className="flex stretch bg_darkgray myh pxq pyh">
                <button className="f2 bolder bg-blend bowq bo_black bo-solid pointer" onClick={setrgb}>
                    <span className="color_red">R</span>
                    <span className="color_green">G</span>
                    <span className="color_blue">B</span>
                </button>
            </div>
            <DisplayDate rgb="0" />
            {/* <DisplayDate/> */}
            <div>
                <a href="cards">Play some cards game.</a>
            </div>
        </div>
    )
}