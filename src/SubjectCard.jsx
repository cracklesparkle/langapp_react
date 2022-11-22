import React, {useContext, useEffect, useState} from 'react';
import {Navigate, Link} from 'react-router-dom';
import { ViewContext } from './ViewContext';

function SubjectCard ({subject, index}) {
    const {setView} = useContext(ViewContext);


    const [data, setData] = useState(0);

    // useEffect(() => {
    //     localStorage.getItem('dataKey', JSON.stringify(data));
    // }, [data]);
    var progressEnabled = false 

    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem(index, JSON.stringify(data))).available);
    }, [data]);

    //PROGRESS
    if(progressEnabled){
        if (JSON.parse(localStorage.getItem(index, JSON.stringify(data))).available == 0){
            return (
                
                <div className='subject' style={{filter: 'grayscale(30%) brightness(60%)'}}>
                    <div>
                        <h3>{subject.Title}</h3>
                    </div>
            
                    <div>
                        <img src={subject.Image} alt={subject.Title}/>
                    </div>
                </div>
            )
        } else{
            return (
                
                <div onClick={()=>setView(subject.View)} className='subject'>
                    <div>
                        <h3>{subject.Title}</h3>
                    </div>
            
                    <div>
                        <img src={subject.Image} alt={subject.Title}/>
                    </div>
                </div>
            )
        }
    } else{
        return(
            <div onClick={()=>setView(subject.View)} className='subject'>
            <div>
                <h3>{subject.Title}</h3>
            </div>
    
            <div>
                <img src={subject.Image} alt={subject.Title}/>
            </div>
        </div>
        )
        
    }
    
    
}

export default SubjectCard;