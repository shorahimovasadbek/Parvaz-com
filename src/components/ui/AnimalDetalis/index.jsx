import React,{useState} from 'react';
import './main.css'
import Btn from '../Buttons/Button'
import img3 from '../../../assets/oo.jpeg'
import img1 from '../../../assets/yem.png'
import img2 from '../../../assets/qop.jpg'

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
                    <div className=" mt-3 maincard">
                        <img src={img} alt=""  className='w-100  '/>
                    </div>
                    <div className='col-6 btn btn-outline-light rounded-pill mt-3 btn'>buy now</div>
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
