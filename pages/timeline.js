import React from 'react'

import Timeline from "../components/timelinepage/cont"

let timedata = [
    {
        branch: "main",
        message: " timeline wd ",
        date: "Nov 6 2022",
        fullhash: "84447a1846cc8dfc07744f883ef73657f91869ad",
        hash: "84447a1",
        files: ["5 changed files with 110 additions and 0 deletions. "]
    },
    {
        branch: "main",
        message: " button tabs to go ",
        date: "Nov 4 2022",
        fullhash: "575e5d57abf1bdbde55061c299176a12b232f976",
        hash: "575e5d5",
        files: [" 8 changed files with 72 additions and 17 deletions."]
    },
    {
        branch: "main",
        message: " style ref ",
        date: "Nov 4 2022",
        fullhash: "9134826c297aba9389a3233ee4db60abc8d2c783",
        hash: "9134826",
        files: ["10 changed files with 1,168 additions and 954 deletions. "]
    },
    {
        branch: "main",
        message: " two button switcher in main ",
        date: "Nov 3 2022",
        fullhash: "316d730f8d6d4669407d99e766a92db49bba13b2",
        hash: "316d730",
        files: [" 4 changed files with 92 additions and 18 deletions. "]
    },
    {
        branch: "main",
        message: "rf",
        date: "Mar 9 2022",
        fullhash: "a7d39a24d632e92db656cd28530d9b9fd1ddf53c",
        hash: "a7d39a2",
        files: [" 5 changed files with 3 additions and 45 deletions"]
    },
    {
        branch: "main",
        message: "link style ",
        date: "Mar 9 2022",
        fullhash: "932eae82d0c766b6a9ca9abc242ce3ab415d52e5",
        hash: "932eae8",
        files: ["pages/index.js"]
    },
    {
        branch: "main",
        message: "memory game ",
        date: "Mar 7 2022",
        fullhash: "d448e7e92ec927e49720eb0f840c5b09a6aa32a9",
        hash: "d448e7e",
        files: ["16 changed files with 431 additions and 3 deletions. "]
    },
    {
        branch: "main",
        message: "rf",
        date: "Mar 7 2022",
        fullhash: "5d01560fa284a0f9d2b4d52ee8b698148c759f2c",
        hash: "5d01560",
        files: [" 28 changed files with 469 additions and 476 deletions. "]
    },
    {
        branch: "main",
        message: "updates",
        date: "Feb 28 2022",
        fullhash: "c09df2457b47adfe2db11408c3600da131967cb5",
        hash: "c09df24",
        files: ["11 changed files with 5,650 additions and 1,707 deletions. "]
    },
    {
        branch: "main",
        message: " readme updated ",
        date: "Oct 6 2021",
        fullhash: "3c819e57b5019230656fb7c6590e5ea8a49e2676",
        hash: "3c819e5",
        files: ["readme.md"]
    },
    {
        branch: "main",
        message: " move imports ",
        date: "May 12 2021 ",
        fullhash: "d4d4e23a04cc13f1fca258b5f3ac0368f8d69b9f",
        hash: "d4d4e23",
        files: [" 7 changed files with 114 additions and 175 deletions. "]
    },
    {
        branch: "main",
        message: "port",
        date: " Apr 7 2021",
        fullhash: "c758ed1bde6a0226ca697dc53e3ffe91bb8b6005",
        hash: "c758ed1",
        files: ["package.json"]
    },
    {
        branch: "main",
        message: "rgb",
        date: " Apr 7 2021",
        fullhash: "42ad009d7087da9ae699d5bd4489895fcf696bd6",
        hash: "42ad009",
        files: ["7 changed files with 258 additions and 10 deletions. "]
    },
    {
        branch: "main",
        message: "clock",
        date: " Apr 6 2021",
        fullhash: "8e7043b58ce0cfd7d1d36551baa5fd1d399d67fe",
        hash: "8e7043b",
        files: ["11 changed files with 306 additions and 684 deletions. "]
    },
    {
        message: "rf2",
        date: " Apr 1 2021",
        fullhash: "f356d8cf302908d2b515074797c61ba3cb23a79c",
        hash: "f356d8c",
        files: ["package.json"]
    },
    {
        message: "rf2",
        date: " Apr 1 2021",
        fullhash: "453c4b59b34799bfa1310f277cb2f1e899434b1e",
        hash: "453c4b5",
        files: [" 46 changed files with 1,335 additions and 386 deletions."]
    },
    {
        message: " worked out  ",
        date: " Apr 1 2021",
        fullhash: "071805badcda5492c77deef00c6801da91b7bce9",
        hash: "071805b",
        files: [" 3 changed files with 665 additions and 1 deletion.", ".gitignore", "styles/colors.css", "styles/common.css"]
    },
    {
        message: " worked out  ",
        date: " Apr 1 2021",
        fullhash: "8c49c875ab45e4a1a1bd049428a0e6ec5b150ad2",
        hash: "8c49c87",
        files: ["38 changed files with 10 additions and 674 deletions."]
    },
    {
        message: "f4 ",
        date: "Mar 24 2021",
        fullhash: "e571a9de6682f4c3393a7855a83617d02f2dccb3",
        hash: "e571a9d",
        files: ["3 changed files with 35 additions and 35 deletions. ", "pages/App.js", "components/Board.js", "components/listwindow.js"]
    },
    {
        message: "wd rf ",
        date: "Mar 21 2021",
        fullhash: "e21813e0c2eab6a5dc191f321a85a04d1d07afb4",
        hash: "e21813e",
        files: ["12 changed files with 313 additions and 3,881 deletions. "]
    },
    {
        message: 'nodevers',
        date: "Mar 21 2021",
        fullhash: "e8d879d2c30a0ee4b39b2bfcd9c92e8c1006de6a",
        hash: "e8d879d",
        files: ["package.json"]
    },
    {
        message: 'initial',
        date: "Mar 20 2021",
        fullhash: "2a860b7d400a875beb1b11896dacc3bd4c377cb5",
        hash: "2a860b7",
        files: [" 51 changed files with 8,176 additions and 0 deletions."]
    },
    {
        message: 'first commit',
        date: "Mar 20 2021",
        fullhash: "3350c1486b40e9daa42b759e7f839e4fc1566f70",
        hash: "3350c14",
        files: ["README.md"]
    }
];

export default function timeline() {
    return (
        <React.Fragment>
            <div className='text-center bolder f4'>Commit Timeline:</div>
            <div className="container">
                <Timeline data={timedata} />
            </div>
        </React.Fragment>
        );
}