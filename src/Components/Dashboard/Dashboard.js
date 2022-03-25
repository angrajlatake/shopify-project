import './Dashboard.scss'
import product from '../../assets/products_major.svg'
import store from '../../assets/managed-store_major.svg'
import wand from '../../assets/wand_major.svg'
import marketing from '../../assets/marketing_major.svg'
import tax from '../../assets/timeline-attachment_major.svg'
import finance from '../../assets/billing-statement-dollar_major.svg'
import hamburger from '../../assets/hamburger.svg';
import {Link} from 'react-router-dom'


function DashBoard() {
    return (  
        <div className='dash'>
            <div className="header-dash">
                <img className='header__img' src={hamburger} alt="hamburger" />
                <input className='header-dash__search' type="text" placeholder='Search'/>
                <p className='header-dash__user'>JS</p>
            </div>
            <div className="container">
                <div className='dash__title'>
                    <h1>Welcome to ShopLab, Joe</h1>
                </div>
                <div className="card">
                    <h2> Do you know where to start?</h2>
                    <p>Start the survey to recommendations.</p>
                    <Link to='/questionnaire'><button className='card__button button'> Quick start</button></Link>
                </div>
            </div>
            <div className='space'></div>
            <div className="module">
                <h2 className="module__title">Learning Modules</h2>
                <div className='module__card'>
                    <div className="module__img">
                        <img src={product} alt="" />
                    </div>
                    <p className="module__name">
                        What should I sell?
                    </p>
                </div>
                <div className='module__card'>
                    <div className="module__img">
                        <img src={store} alt="" />
                    </div>
                    <p className="module__name">
                        register my business
                    </p>
                </div>
                <div className='module__card'>
                    <div className="module__img">
                        <img src={wand} alt="" />
                    </div>
                    <p className="module__name">
                        Build my brand
                    </p>
                </div>
                <div className='module__card'>
                    <div className="module__img">
                        <img src={marketing} alt="" />
                    </div>
                    <p className="module__name">
                       Market my company
                    </p>
                </div>
                <div className='module__card'>
                    <div className="module__img">
                        <img src={tax} alt="" />
                    </div>
                    <p className="module__name">
                        Tax planning
                    </p>
                </div>
                <div className='module__card'>
                    <div className="module__img">
                        <img src={finance} alt="" />
                    </div>
                    <p className="module__name">
                        Business Funding
                    </p>
                </div>
                <div className='module__card'>
                    <div className="module__img">
                        <img src={product} alt="" />
                    </div>
                    <p className="module__name">
                        What should I sell?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;