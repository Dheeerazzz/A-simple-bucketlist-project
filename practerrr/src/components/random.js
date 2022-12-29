
function Randome()
{
    const x=Math.floor(Math.random()*3)
    if(x==0){
        const y="rock"
        return(<p>{y}</p>);
    }
    else if(x==1){
        const y="paper"
        return(<p>{y}</p>)
    }
    else{
        return(<p>scissor</p>)
    }
}
export default Randome;