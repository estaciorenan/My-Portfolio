import { useState } from "react";


export default function ValueContext(){
    const [themeDark, setThemeDark] = useState(true),
    [page, setPage]=useState(1);

    return{
        themeDark,
        setThemeDark,
        page,
        setPage
    }
}