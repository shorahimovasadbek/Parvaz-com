import React,{useState} from 'react';
import './main.css'
import Btn from '../Buttons/Button'
import img3 from '../../../assets/oo.jpeg'
import img1 from '../../../assets/yem.png'
import img2 from '../../../assets/qop.jpg'
import { Link } from 'react-router-dom';

const Index = () => {
const [img, setimg] = useState(img3);
const image =[
    {image:img3},
    {image: img1},
    {image: img2}
]
    return (
        <div className="container">
            <div className='container'>
                <div className="row">
                    <div className=" mx-3 maincard">
                        <img src={img} alt=""  className='w-100  '/>
                    </div>
                    <div className='col-6 mx-3 btn'><button className='btn btn-outline-light rounded-pill w-100'><Link onClick={() => {window.location.href = '/contact'}}>buy now</Link></button></div>
                    <div className="box" >
                        {
                            image.map((item ,i)=>{
                                return <img src={item.image} alt="hahah" className={`${img ===  item.image ? 'cardd carddd': 'cardd'}`} onClick={()=>{setimg(item.image)}} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
