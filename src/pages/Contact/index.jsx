import React from 'react'
import Header from '../../components/ui/ProductHeader';
import img from '../../assets/bugdoy.png'
import Card from '../../components/ui/Contact/Contact'
import bg from '../../assets/HOmeImage/1.png'


export default function index() {
  const styles = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    };
  return (
    <div style={styles}>
     <Header img={img} text='Our Contact ' subtitl='Contact' />
     <Card/>
    </div>
  )
}
