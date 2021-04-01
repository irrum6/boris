import React from "react"
import Link from "next/link"

export default function Home(){
    const date = new Date();
    return (
        <div>
            <span>{date.toLocaleString()}</span>
            <div>
                <Link href="cards">
                    <a>Play some cards game.</a>
                </Link>
            </div>        
        </div>        
    )
}