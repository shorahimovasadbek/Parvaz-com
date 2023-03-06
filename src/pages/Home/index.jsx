import React from 'react'
import './main.css'
import Nav from '../../components/ui/Navbar/Navbar'
import Header from '../../components/ui/Header/Header'
import Cards from '../../components/ui/AllProducts'
import img1 from '../../assets/home/1.png'
import img2 from '../../assets/home/2.png'
import img3 from '../../assets/home/3.png'
import img4 from '../../assets/home/4.png'

export default function index() {
  const mass = [
    {
      img: img1,
      title: 'Advantages of our Products',
      des: 'If you are looking for high-quality PVC proﬁles, then you are on the right path. Before choosing  PVC proﬁle, you should consider quality because it plays a big role. It should be super drip wind, gaskets should be heat, noise, ﬁre, water and dust resistant'
    },
    {
      img: img2,
      title: 'Our flours',
      des: 'The products are producing with the best and most excellent quality under supervision of Turkish experts by Turkish and German machineries. All feed are producing by using the best quality raw materials, and special vitamins and minerals with Turkish standards that has the most excellent quality'
    },
    {
      img: img3,
      title: 'Parvazprof Industrial & Production Company',
      des: 'Parvazprof Industrial and Production Company is the top feed mill in the north which supplies broiler, layer and breeder chicken feed, dairy cattle feed, beef cattle feed, small ruminant feed, to a variety of customers throughout north and northeastern provinces of Afghanistan '
    },
    {
      img: img4,
      title: 'Other products',
      des: 'The products are producing with the best and most excellent quality under supervision of Turkish experts by Turkish and German machineries. All feed are producing by using the best quality raw materials, and special vitamins and minerals with Turkish standards that has the most excellent quality'
    }
  ]
  return (
    <div>
      <Nav/>
      <Header/>
      <div className='container'>
          <Cards mass={mass}/>
      </div>
    </div>
  )
}
