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
    </>
}