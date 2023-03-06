import React, { useState } from 'react';
import './main.css'

const Index = () => {
    const massiv = [
        {
            Name: 'Features',
            about: [{ i: 'Balanced with proteins, energy, vitamins and minerals for healthy growth cycles of laying hen chicks' },
            { i: 'Produced in crumble form' }
            ]
        },
        {
            Name: 'BENEFITS',
            about:[{ i: 'Speeds up chick growth' },
            { i: 'Promotes productivity and reduces death rate' }, { i: 'Provides faster growth in a short period of time' }, { i: 'Protects chicks against coccidiosis and reduces death rate' }, { i: 'Improves feed efficiency and early growth' }, { i: 'Prevents feed spoilage' }, { i: 'Ensure best possible weight gain in the pullet to optimize her genetic potential.' }
            ]
        },
        {
            Name: 'INGREDIENTS',
            about: [{ i: 'Corn' }, { i: 'Soy Bean pulp' }, { i: 'Wheat' }, { i: 'Soy Bean Oil' }, { i: 'Calcium, Sodium chloride' },{i: 'Blackberry '}]
        },
        {
            Name: 'VITAMINS',
            about: [{ i: 'Vitamin A:12.000 IU' }, { i: ' Vitamin D3:2.640 IU' },{i:' Vitamin E : 30 mg'}]
        }
    ]

    const [about, setAbout] = useState(massiv[0].about);
    return (
        <div className="container text-white">
            <div className='row d-flex justify-content-between '>
                <div className="col-4 ">
                    {
                        massiv.map((item, index) => {
                            return (
                                <div key={index} className='my-2 d-flex justify-content-start align-items-center'>
                                    <h4 className={`${about.length === massiv[index].about.length? 'text1':'text2'}`} onClick={()=>{setAbout(massiv[index].about)}}>{item.Name}</h4>
                                    <i className="bi bi-arrow-right fs-5 fw-2 mx-2"></i>
                                </div>

                            )
                        })
                    }

                </div>
                <div className='col-8 d-flex justify-content-between align-items-center'>
                    <ul>
                        {
                            about.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <li>{item.i}</li>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Index;
