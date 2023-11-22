import Image from 'next/image'
import styles from './page.module.scss'

import Link from 'next/link';

import Table from './components/Table';

export default function Home() {
  return (
    <>
      <header className="header">
        <h1>
          <span className="title title__main">Hiker</span>
          <span className="title title__sub">Your journey starts here</span>
        </h1>

         <Link href="#" className="btn-oval">Discover</Link>
      </header>

      <main>
        <section className="desc__container">
         <div className="desc__text">  
            <h3 className="desc__heading heading">Find your place in the world</h3>
            <p className="desc__para para">Discover trails that lead to breathtaking landscapes that the Scottish highlands has to offer. From bold hills, to captivating greenery, to dynamic rivers, there are plentiful of places to experience and sights to behold.
            </p>
         </div>
         <div className="desc__gallery">
            <Image src="/images/highlands.jpg" width={300} height={220} className="desc__img desc__img--1"></Image>
            <Image src="/images/edinburgh_castle.jpg" width={300} height={220} className="desc__img desc__img--2"></Image>
            <Image src="/images/neist_point_lighthouse.jpg" width={300} height={220} className="desc__img desc__img--3"></Image>
         </div>
        </section>

        <section className="popular__container">
         <h3 className="popular__heading heading" >Popular locations</h3>
            <div className="popular__cards">
               <div className="popular__card popular__card--1">
                  <figure className="popular__card-placeholder">
                     <Image src="/images/urquhart_castle.jpg" width={400} height={260} className="popular__card-img popular__card-img--1"></Image>
                  </figure>
                  <h4 className="popular__card-title">Urquhart Castle</h4>
                  <p className="popular__card-text para">Lay your gaze upon Scottish history against the beautiful scenery consisting of Loch Ness and the landscape of the Great Glen.</p>
                  <div className="popular__card-footer">
                     <Link href="#" className="popular__button">More info</Link>
                  </div>
               </div>
               <div className="popular__card popular__card--1">
                  <figure className="popular__card-placeholder">
                     <Image src="/images/neist_point_lighthouse-2.jpg" width={400} height={260} className="popular__card-img popular__card-img--1"></Image>
                  </figure>
                  <h4 className="popular__card-title">Neist Point Lighthouse</h4>
                  <p className="popular__card-text para">Lay your gaze upon Scottish history against the beautiful scenery consisting of Loch Ness and the landscape of the Great Glen.</p>
                  <div className="popular__card-footer">
                     <Link href="#" className="popular__button">More info</Link>
                  </div>
               </div>
               <div className="popular__card popular__card--1">
                  <figure className="popular__card-placeholder">
                     <Image src="/images/stac_pollaidh.jpg" width={400} height={260} className="popular__card-img popular__card-img--1"></Image>
                  </figure>
                  <h4 className="popular__card-title">Stac Pollaidh</h4>
                  <p className="popular__card-text para">Lay your gaze upon Scottish history against the beautiful scenery consisting of Loch Ness and the landscape of the Great Glen.</p>
                  <div className="popular__card-footer">
                     <Link href="#" className="popular__button">More info</Link>
                  </div>
               </div>
            </div>
        </section>

        <section className="trails__container">
         <Table/>
        </section>

      </main>
    </>
  )
}
