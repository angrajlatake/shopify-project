import './ModulePage.scss';
import modelPhoto from '../../assets/ettitude-capital-hero-small-509c45228c7919a1f5575d3564e4576946e55a28669e747d65b0691d3ddb2fbc 1.png'
import arrow from '../../assets/hero-decorator-927e7526dd4d324c888e2e96171b0caaf916157000cb0de82ec4c2f76283e791 1.svg'
import computerWoman from '../../assets/Group.svg'
import bookMan from '../../assets/Group-1.svg'
import chatPic from '../../assets/Group-2.svg'

export default function ModulePage() {

    const handleClick = () => {
        window.open('https://www.shopify.com/capital');
    };
    return (
        <div className = "module-page">
            <section className = "module-page__header">
                <h1 className = "module-page__header-text">Looks like you need help with funding!</h1>
            </section>
            <div className = "module-page__content-wrap">
                <section className = "module-page__cta">
                    <div className = "module-page__cta-card">
                        <div className = "module-page__photo-design-container">
                            <img src = {modelPhoto} className = "module-page__cta-photo" alt = "woman smiling" />
                            <img src = {arrow} className = "module-page__cta-arrow" alt = "" />
                        </div>
                        <h1 className = "module-page__cta-title">Simplified, fast funding</h1>
                        <p className = "module-page__cta-subtitle">Get your business moving and accelerate growth with quick and esay access to funds through Shopify Capital.</p>
                        <button onClick={handleClick} className = "module-page__cta-button">Learn More</button>
                        <p className = "module-page__cta-caption">Don't have a Shopify store? Get Started with a <a href = "https://www.shopify.com/free-trial?term=shopify%2014%20day%20trial&adid=565799981959&campaignid=15436644439&branded_enterprise=1&BOID=brand&gclid=Cj0KCQjw0PWRBhDKARIsAPKHFGijhDEoVTHuYw3zoWcWNYURNlXDmMWfpGJzBKGcdVSX19Nphlw-_NMaAjW_EALw_wcB&cmadid=516586854;cmadvertiserid=10730501;cmcampaignid=26990768;cmplacementid=324494812;cmcreativeid=163722649;cmsiteid=5500011" target = "_blank" rel="noreferrer noopener">14-day free trial</a></p>   
                    </div>
                </section>
            </div>
            <section className = "module-page__article">
                <div className = "module-page__article-cta">
                    <h2 className = "module-page__article-header">Articles</h2>
                    <div className = "module-page__article-section">
                        <a href="https://www.shopify.com/blog/business-financing?itcat=capital&itterm=capital-resources-blog"  target = "_blank" rel="noreferrer noopener"><img src = {computerWoman} className = "module-page__article-photo" alt = "Woman working on her business finances" /></a>
                        <div className = "module-page__article-copywrap">
                            <h3 className = "module-page__article-title">The Entrepreneur's Guide to Small Business Finance</h3>
                            <p className = "module-page__article-author">By Jason Moraz</p>
                        </div>
                    </div>
                    <div className = "module-page__article-section">
                        <a href="https://help.shopify.com/en/manual/finances/shopify-capital?itcat=capital&itterm=capital-resources-help-docs"  target = "_blank" rel="noreferrer noopener"><img src = {bookMan} className = "module-page__article-photo" alt = "Man reading on how to secure startup financing" /></a>
                        <div className = "module-page__article-copywrap">
                            <h3 className = "module-page__article-title">Small Business Grants: How to Secure Financing for your Startup</h3>
                            <p className = "module-page__article-author">By Jason Moraz</p>
                        </div>
                    </div>
                    <div className = "module-page__article-section">
                        <a href="https://help.shopify.com/en/manual/your-account/shopify-capital/shopify-capital-faq?itcat=capital&itterm=capital-resources-faq"  target = "_blank" rel="noreferrer noopener"><img src = {chatPic} className = "module-page__article-photo" alt = "q and a" /></a>
                        <div className = "module-page__article-copywrap">
                            <h3 className = "module-page__article-title">How to get a Small Business Loan and What to Know Before Applying</h3>
                            <p className = "module-page__article-author">By Jason Moraz</p>
                        </div>
                    </div>
                </div>
            </section>    
        </div>
    )
}