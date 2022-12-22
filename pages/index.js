import React, { useEffect, useState } from "react"
import styled from "styled-components"

let color = "rgb";
const set_color = (x) => {
    let supported = ["rgb", "bw", "red", "green", "blue", "pink"];
    if (supported.indexOf(x) < 0) {
        return;
    }
    color = x;
}

const go_rgb = () => set_color("rgb");
const go_bw = () => set_color("bw");
const go_red = () => set_color("red");
const go_green = () => set_color("green");
const go_blue = () => set_color("blue");
const go_pink = () => set_color("pink");


const rgb_display = (data) => {
    const { h0, h1, m0, m1, s0, s1 } = data;
    return (<div className="flex row centered">
        <div className="f6 bolder p1h">
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

const display_monochrome = (data) => {
    const { h0, h1, m0, m1, s0, s1 } = data;
    const { textColor, backgroundColor } = data;

    const spanCss1 = `${textColor} ${backgroundColor} mxq pxh`;
    const spanCss2 = `${textColor} ${backgroundColor} pxh`;

    return (<div className="flex row centered">
        <div className="f6 bolder p1h">
            <span className={`${spanCss1}`}>{h0}</span>
            <span className={`${spanCss2}`}>{h1}</span>
            <span>:</span>
            <span className={`${spanCss2}`}>{m0}</span>
            <span className={`${spanCss1}`}>{m1}</span>
            <span>:</span>
            <span className={`${spanCss2}`}>{s0}</span>
            <span className={`${spanCss1}`}>{s1}</span>
        </div>
    </div>);
}

const bw_display = (data) => display_monochrome({ ...data, textColor: "color_white", backgroundColor: "bg_black" });

const display_red = (data) => display_monochrome({ ...data, textColor: "color_white", backgroundColor: "bg_red" });

const display_green = (data) => display_monochrome({ ...data, textColor: "color_white", backgroundColor: "bg_memgreen" });

const display_blue = (data) => display_monochrome({ ...data, textColor: "color_white", backgroundColor: "bg_neonblue" });

const display_pink = (data) => display_monochrome({ ...data, textColor: "color_white", backgroundColor: "bg_pink" });

const display_norgb = (data, color) => {
    let returnable = null;
    switch (color) {
        case "bw":
            returnable = bw_display(data);
            break;
        case "red":
            returnable = display_red(data);
            break;
        case "green":
            returnable = display_green(data);
            break;
        case "blue":
            returnable = display_blue(data);
            break;
        case "pink":
            returnable = display_pink(data);
            break;
        default:
            returnable = bw_display(data);
    }
    return returnable;
}

const DisplayDate = (props) => {

    const [date, setDate] = useState(0);

    useEffect(() => {
        const tid = setInterval(() => { setDate(Date.now()) }, 200);
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

    if (color == "rgb") {
        return rgb_display({ h0, h1, m0, m1, s0, s1 });
    }
    return display_norgb({ h0, h1, m0, m1, s0, s1 }, color);
}

const ColoredButton = ({ text, color, bgcolor, fn }) => {
    let letters = text.split("");

    //bg_red bo_black bowq color_white mxq pxh =>odd
    //bg_red bo_black bowq color_white pxh =>even
    let css1 = `${bgcolor} ${color} bo_black bowq mxq pxh`;
    let css2 = `${bgcolor} ${color} bo_black bowq pxh`;

    let spans = letters.map((e, i) => (i % 2 == 0) ? <span key={i} className={css2}>{e}</span> : <span key={i} className={css1}>{e}</span>);

    let divCss = `flex ${bgcolor} stretch my0 pxq pyh flex centered`;
    return (<div className={divCss}>
        <button className="f3 bolder bg-transparent bow0 pointer" onClick={() => fn()}>{spans}</button>
    </div>)
}
const SideBar = () => {
    return (<React.Fragment>
        <div className="flex stretch bg_black my0 pxq pyh flex centered">
            <button className="f3 bolder bg-transparent bow0 pointer pxh" onClick={go_rgb}>
                <span className="bg_red pxh">R</span>
                <span className="bg_green pxh">G</span>
                <span className="bg_blue pxh">B</span>
            </button>
        </div>
        <div className="flex stretch bg_violet2 my0 pxq pyh flex centered">
            <button className="f3 bolder color_white bg_black bow0 pointer pxh" onClick={go_bw}>
                <span className="bg_black color_white pxh">B</span>
                <span className="bg_white color_black pxh">&amp;</span>
                <span className="bg_black color_white pxh">W</span>
            </button>
        </div>

        <ColoredButton text="RED" color="color_white" bgcolor="bg_red" fn={go_red} />
        <ColoredButton text="GREEN" color="color_white" bgcolor="bg_memgreen" fn={go_green} />
        <ColoredButton text="BLUE" color="color_white" bgcolor="bg_neonblue" fn={go_blue} />
        <ColoredButton text="PINK" color="color_white" bgcolor="bg_pink" fn={go_pink} />
    </React.Fragment>)
}
const MainBox = styled.div`
    display:grid;
    grid-template-columns:288px auto;

    @media (max-width:576px){
        display:grid;
        grid-template-columns:auto;
    }    
`
export default function Home() {
    const date = new Date();
    return (
        <div>
            <div className="flex stretch bg_darkgray myh pxq pyh">
                <button className="f3 bolder borah mxq bg_darkgray  pointer">
                    <a href="/cards" className="no-decor color_white"><span>CARDS</span></a>
                </button>
                <button className="f3 bolder borah mxq bg_white pointer">
                    <a href="/memory" className="no-decor color_black"><span>MEMORY</span></a>
                </button>
                <button className="f3 bolder borah mxq bg_darkgray  pointer">
                    <a href="/p24" className="no-decor color_white"><span>Puzzle 24</span></a>
                </button>
            </div>
            <MainBox>
                <div id="left">
                    <SideBar />
                </div>
                <div id="Right">
                    <DisplayDate rgb="0" />
                </div>
            </MainBox>
        </div>
    )
}