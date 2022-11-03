import React, { useEffect, useState } from "react"
import { useNavigate, Router } from 'react-router-dom';

let _rgb = "0";
const set_rgb_true = () => _rgb = "1"
const set_rgb_false = () => _rgb = "0";

const rgb_display = (data) => {
    const { h0, h1, m0, m1, s0, s1 } = data;
    return (<div className="flex row centered">
        <div className="f4 bolder">
            <span className="color_red bg_litegray mxq pxh">{h0}</span>
            <span className="color_red bg_litegray pxh">{h1}</span>
            <span>:</span>
            <span className="color_green bg_litegray mxq pxh">{m0}</span>
            <span className="color_green bg_litegray pxh">{m1}</span>
            <span>:</span>
            <span className="color_blue bg_litegray mxq pxh">{s0}</span>
            <span className="color_blue bg_litegray pxh">{s1}</span>
        </div>
    </div>);
}

const bw_display = (data) => {
    const { h0, h1, m0, m1, s0, s1 } = data;
    return (<div className="flex row centered">
        <div className="f4 bolder">
            <span className="bg_black color_white mxq pxh">{h0}</span>
            <span className="bg_black color_white pxh">{h1}</span>
            <span>:</span>
            <span className="bg_black color_white mxq pxh">{m0}</span>
            <span className="bg_black color_white pxh">{m1}</span>
            <span>:</span>
            <span className="bg_black color_white mxq pxh">{s0}</span>
            <span className="bg_black color_white pxh">{s1}</span>
        </div>
    </div>);
}

const DisplayDate = (props) => {

    const [date, setDate] = useState(0);

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
        return rgb_display({ h0, h1, m0, m1, s0, s1 });
    }
    return bw_display({ h0, h1, m0, m1, s0, s1 });
}

export default function Home() {
    const date = new Date();
    return (
        <div>
            <div className="flex stretch bg_darkgray myh pxq pyh">
                <button className="f3 bolder bg-blend zero-border pointer" onClick={set_rgb_true}>
                    <span className="bg_red pxh">R</span>
                    <span className="bg_green pxh">G</span>
                    <span className="bg_blue pxh">B</span>
                </button>
                <button className="f3 bolder color_white bg-blend zero-border pointer" onClick={set_rgb_false}>
                    <span className="bg_black color_white pxh">B</span>
                    <span className="bg_white color_black pxh">&amp;</span>
                    <span className="bg_black color_white pxh">W</span>
                </button>
                <button className="f2 bg-blend pointer">
                    Cards Game
                </button>
                <button className="f2 bg-blend pointer">
                    Memory Game
                </button>
            </div>
            <DisplayDate rgb="0" />
            <div>
                <a href="cards" className="color_black pointer mb1 f1h bolder">&gt;&gt;Play some cards game.</a>
            </div>
            <div>
                <a href="memory" className="color_black pointer mb1 f1h bolder">&gt;&gt;Play memory game.</a>
            </div>
        </div>
    )
}