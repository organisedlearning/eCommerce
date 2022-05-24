import React,{useState} from "react";
//import React from 'react'
//import Data from "./Data";
function Filter() {
    const [checked,setChecked]=useState([]);
    console.log(checked);
    const Continents=[{
        Name: "Asia",
        Area: "abc",
        Population :"xyz",
        Id:1,
    },
    {
        Name: "Afria",
        Area: "zab",
        Population :"wxy",
        Id:2
        
    },{
        Name: "South America",
        Area: "tuv",
        Population :"qrs",
        Id:3
    },{
        Name: "Africa",
        Area: "poq",
        Population :"mnp",
        Id:4
    },{
        Name: "Australia",
        Area: "ab",
        Population :"xy",
        Id:5
    }];
    const handleToggle=(value)=>{
        const currentIndex=checked.indexOf(value);
        const newChecked=[...checked];
        if(currentIndex===-1){
            newChecked.push(value);
        }else{
            newChecked.splice(currentIndex,1)
        }
setChecked(newChecked);
    }
 const handleFilter=(filter,categories)=>{
     
 }
handleFilter(filter,"continents");
    
    //console.log(checked);
    //console.log(Continents);
    return (
        <div>
           <h1> hello Continents</h1> 

        {checked&&Continents&&Continents.map((conti,id)=>{
            return(<>
            <label>
            <input type="checkbox" checked={checked.indexOf(conti.Id)===-1?false:true}value={conti.Name} 
            onChange={()=>handleToggle(conti.Id)} />{conti.Name}
            </label>
            </>)
           
        })}

        </div>
    )
    
}

export default Filter;
