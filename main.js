import { useState } from "react";


const [open,SetOpen] = useState(false)

const userpopup = ()=>{
    const handlepopup = ()=>{
        SetOpen(!open)
    }

    return<>
    <h1>
        {handlepopup}
    </h1>
    <h2>login</h2>
    <input/>
    <input/>
    <h3>hcpewdgit</h3>
    </>
}
export default userpopup