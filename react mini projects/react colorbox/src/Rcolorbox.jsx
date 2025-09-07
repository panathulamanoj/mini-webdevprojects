import {useState} from 'react';
export default function Rcolorbox()
{
    const colors=["red","green","blue","orange","blue","magenta","gold","yellow"];
    const randcolor = ()=>{
        return colors[Math.floor(Math.random()*colors.length)];
    }
    const [col,setcol] = useState(randcolor);
    const changecol = ()=>{
        setcol(randcolor());
    };
    return (
    <div style={{display:"inline-block",marginBottom:"0px",minHeight:"100px",minWidth:"100px",backgroundColor:col}} onClick={changecol}></div>
    );   
}