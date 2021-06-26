import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
          <div className="header">
            <div className="logo-bar">
              <p>fantasymotion</p>
            </div>
            <div className="navbar">
              <ul>
                <li><a href="http://">Home</a></li>
                <li><a href="http://">About</a></li>
                <li><a href="http://">Contact us</a></li>
                <li><a href="http://">products</a></li>
              </ul>
            </div>
          </div>

        <div className="container">

          <img src="/images/banner.png" alt="img-banner" className="img-fluid"/>
        </div>
        
        <div className="bubles">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </div>
  )
}
