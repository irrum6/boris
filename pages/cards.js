import React from 'react'
import Link from "next/link"

import Board from '../components/board'

import Prompt  from '../components/prompt'

import App from "../prepages/cards/App.js"

export default function cards() {
    return(<div className="container">
        <App/>
    </div>);
}