import React from 'react';
import './main.css'
import Btn from '../Buttons/Button'

const Index = () => {
    return (
        <div className='container'>
            <div className="myrow">
                <div className="cols">
                    <img src="https://open-windows.com.au/wp-content/uploads/2020/03/Powder-Coating-.jpg" alt="pvc" />
                </div>
                <div className="cols1">
                    <h4>Advantages of our Products</h4>
                    <p>If you are looking for high-quality PVC proﬁles, then you are on the right path. Before choosing  PVC proﬁle, you should consider quality because it plays a big role. It should be super drip wind, gaskets should be heat, noise, ﬁre, water and dust resistant</p>
                    <Btn/>
                </div>
            </div>
        </div>
    );
}

export default Index;
