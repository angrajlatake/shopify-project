import homeIcon from '../../assets/home_major.svg'
import resourceIcon from '../../assets/vocabulary_major.svg'
import communityIcon from '../../assets/team.svg'
import profileIcon from '../../assets/profile_minor.svg'
import './Footer.scss'


export default function Footer() {
    return (
        <footer className = "footer">
            <div className = "footer__section">
                <img src = {homeIcon} className = "footer__icon" alt = "home page icon" />
                <p className = "footer__section-title--home">Home</p>
            </div>
            <div className = "footer__section">
                <img src = {resourceIcon} className = "footer__icon" alt = "resource page icon" />
                <p className = "footer__section-title">Resources</p>
            </div>
            <div className = "footer__section">
                <img src = {communityIcon} className = "footer__icon" alt = "community page icon" />
                <p className = "footer__section-title">Community</p>
            </div>
            <div className = "footer__section">
                <img src = {profileIcon} className = "footer__icon" alt = "profile page icon" />
                <p className = "footer__section-title">Profile</p>
            </div>
        </footer>
    )
}