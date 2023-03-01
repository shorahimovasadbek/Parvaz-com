import React from 'react';
import './main.css'


const Index = (props) => {
    console.log(props);
    return (
        <div>
            <div className='maincard'>
                {
                  props.mass.map((item ,index)=>{
                    return(
                        <div key={index} className='MYcard my-5'>
                            <img src={item.image} alt="sigir" />
                            <button>See more</button>
                            <div className='botsec'>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    )
                  })  
                }
            </div>
        </div>
    );
}

export default Index;
