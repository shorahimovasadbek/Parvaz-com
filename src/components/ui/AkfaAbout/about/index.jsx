import React, { useEffect } from 'react';
import img1 from '../../../../assets/ModalImge/img1.png'
import img2 from '../../../../assets/ModalImge/img2.png'
import img3 from '../../../../assets/ModalImge/img3.png'
import img4 from '../../../../assets/ModalImge/img4.png'
import img5 from '../../../../assets/ModalImge/img5.png'
import img6 from '../../../../assets/ModalImge/img6.png'
import img7 from '../../../../assets/ModalImge/img7.png'
import img9 from '../../../../assets/ModalImge/img9.png'
import img10 from '../../../../assets/ModalImge/img10.png'
import img11 from '../../../../assets/ModalImge/img11.png'
import img12 from '../../../../assets/ModalImge/img12.png'
import AOS from 'aos';
import './mainIndex.css'
import 'aos/dist/aos.css';
import ModalImage from "react-modal-image";
import Header1 from '../../H1/Header1'

const Index = () => {
    useEffect(() => {
        AOS.init()
    }, []);

    const Images = [
        {
            imgUrl: img1,
            imgText: "L Frame Proﬁle"
        },


        {
            imgUrl: img1,
            imgText: "L Frame Proﬁle"
        },
        {
            imgUrl: img3,
            imgText: "Z Frame Proﬁle"
        },
        {
            imgUrl: img4,
            imgText: "Big Z Frame Proﬁle"
        },
        {
            imgUrl: img9,
            imgText: "L Frame Proﬁle"
        },
        {
            imgUrl: img10,
            imgText: "L Frame Proﬁle"
        },

        {
            imgUrl: img5,
            imgText: "Big T Frame"
        },
        {
            imgUrl: img6,
            imgText: "Single Glazing bead "
        },
        {
            imgUrl: img7,
            imgText: "L Frame Proﬁle"
        },
        {
            imgUrl: img11,
            imgText: "Double Glazing bead"
        },
        {
            imgUrl: img12,
            imgText: "G Frame Proﬁle"
        },
        {
            imgUrl: img2,
            imgText: "T Frame Proﬁle"
        },
    ]
    return (
        <div className='row mt-5'>
            <Header1 info="Profile info" />
            {
                Images.map(img => {
                    return (
                        <>
                            <div className="col-3 ">
                                <div className="bg-white img_card">
                                    <ModalImage
                                        small={img.imgUrl}
                                        large={img.imgUrl}
                                        alt={img.imgText}
                                        hideDownload={false}
                                        hideZoom={false}
                                        className="img-fluid modal-image"
                                    />
                                    <div className="">
                                        <hr />
                                        <h3>
                                            {img.imgText}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    );
}

export default Index;
