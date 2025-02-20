import './Banner.css'
import {Link} from 'react-router-dom'
function Banner(){

    return (
        
        <div className="banner">
            <div className="bannerTitleSection">
                <h1 className="bannerTitle">GreenHaven</h1>
                <Link to="/products"><button className='bannerButton'>Start Now</button></Link>
            </div>
            <p className="bannerDescription">
                GreenHaven is your go-to online store for beautiful, healthy plants delivered straight to your door. From vibrant indoor greenery to outdoor garden essentials, we offer a wide selection of high-quality plants, pots, and care accessories. Whether you're a beginner or a seasoned plant lover, we make plant shopping easy with expert tips and nationwide delivery. Bring nature home with GreenHaven!
            </p>
        </div>
        

    )
}
export default Banner