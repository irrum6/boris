import React from "react"
import styled from "styled-components"

import Board from "./board"
import ModeSwitcher from "./mode_switcher"
import Settings from "./settings"

const Container = styled.div`
    display:grid;
    grid-template-columns:auto 770px auto;
    height:770px;
    margin-top:4px;
    @media (max-width: 900px) {
        grid-template-columns:750px auto;
        height:750px;
        margin-top:12px;
    }
    @media (max-width: 750px) {
        grid-template-columns:600px auto;
        height:600px;
        margin-top:12px;
    }
    @media (max-width: 600px) {
        grid-template-columns:450px auto;
        height:450px;
        margin-top:12px;
    }
    @media (max-width: 450px) {
        grid-template-columns:auto;
        height:360px;
        margin-top:12px;
    }
`
let swipeLeft = false;
let swipeRight = false;

let startx = 0;
let x = 0;


function getSwipeX(event) {
    return event["touches"][0].clientX;
}

//first left swipe show mode switch
//second left swipe ignore
//swipe left settings open show board
function onSwipeLeft(event) {
    // console.log("left", swipeLeft, swipeRight);
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let center = document.getElementById("board");

    if (swipeRight) {
        //restore
        right.style.display = "none";
        left.style.display = "none";
        center.style.display = "grid";
        swipeLeft = false;
        swipeRight = false;
        return;
    }

    if (swipeLeft) {
        return;
    }

    right.style.display = "grid";
    left.style.display = "none";
    center.style.display = "none";
    swipeLeft = true;

}

//first right swipe settings
//second right swipe ignore
//swipe Right modes open show board
function onSwipeRight(event) {
    // console.log("right", swipeLeft, swipeRight);
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let center = document.getElementById("board");

    if (swipeLeft) {
        right.style.display = "none";
        left.style.display = "none";
        center.style.display = "grid";
        swipeLeft = false;
        swipeRight = false;
        return;
    }

    if (swipeRight) {
        return;
    }

    right.style.display = "none";
    left.style.display = "grid";
    center.style.display = "none";
    swipeRight = true;
}

function onSwipeStart(event) {
    startx = getSwipeX(event);
}

function onSwipe(event) {
    x = getSwipeX(event);
}

function onSwipeEnd(event) {
    console.log(x, startx);
    //ignore small swipes to enable clicks
    if (Math.abs(x - startx) < 100) {
        return;
    }
    if (x < startx) {
        onSwipeLeft(event);
        return;
    }
    if (x > startx) {
        onSwipeRight(event);
        return;
    }
}

const Swiper = styled.div`
    @media (min-width:900px){
        display:none
    }
`
export default ({ numbers, fn, modefn }) => (
    <React.Fragment>
        <Container>
            <Settings id="left" />
            <Board id="board" numbers={numbers} fn={fn} />
            <ModeSwitcher id="right" modefn={modefn} />
        </Container>
        <Swiper className="f3 borah text-center myh" onTouchStart={onSwipeStart} onTouchMove={onSwipe} onTouchEnd={onSwipeEnd}>Swipe</Swiper>
    </React.Fragment>
)