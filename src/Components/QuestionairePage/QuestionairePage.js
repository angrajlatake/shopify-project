import './QuestionairePage.scss';

function QuestionairePage() {
  return (
    <div className="App">
        <div className='start'>
          <h1 className='start__title'>Let's Start...</h1>
          <p className='start__tell'>Tell us about your business. We'll use this information to help you get started.</p>
        </div>
        <form className='form'>
          <div className='sell'>
            <h3>What does your business primarily sell?</h3>
             <label>
            <input type="radio" value="decor" name="sell" className='radio-input'/><span className='radio-text'> Home and decor</span>
             </label>
             <label>
            <input type="radio" value="jewelry" name="sell" /><span className='radio-text'> Jewelry and accessories</span>
            </label>
            <label>
            <input type="radio" value="food" name="sell"/><span className='radio-text'> Food and Drink</span>
            </label>
            <label>
            <input type="radio" value="clothing" name="sell" /><span className='radio-text'> Clothing and fashion</span>
            </label>
            <label>
            <input type="radio" value="crafts" name="sell" /> <span className='radio-text'>Crafts and books</span>
            </label>
            <label>
            <input type="radio" value="electronics" name="sell" /> <span className='radio-text'>Electronics</span>
            </label>
            <label>
            <input type="radio" value="artwork" name="sell" /> <span className='radio-text'>Artwork</span>
            </label>
            <label>
            <input type="radio" value="other" name="sell" /> <span className='radio-text'>Other</span>
            </label>
            <input type="text" value="" name="sell" className='sell__text-input'/> 
          </div>
          <div className='brand'>
          <h3>Does your brand have a name?</h3>
            <label>
            <input type="radio" value="yes" name="yesorno" /> <span className='radio-text'>Yes</span>
            </label>
            <label>
            <input type="radio" value="no" name="yesorno" /> <span className='radio-text'>No</span>
            </label>
          </div>
          <div className='register'>
          <h3 >Is your business registered?</h3>
          <label>
            <input type="radio" value="yes" name="register" /> <span className='radio-text'>Yes</span>
          </label>
          <label>
            <input type="radio" value="no" name="register" /> <span className='radio-text'>No</span>
          </label>
          <label>
            <input type="radio" value="no" name="register" /> <span className='radio-text'>Not sure</span>
            </label>
          </div>
          <div className='know'>
          <h3>Do you know your ideal shoppers (customer groups)?</h3>
          <label>
            <input type="radio" value="yes" name="know" /> <span className='radio-text'>Yes</span>
          </label>
          <label>
            <input type="radio" value="no" name="know" /> <span className='radio-text'>No</span>
          </label>
          <label>
            <input type="radio" value="no" name="know" /> <span className='radio-text'>Not sure</span>
          </label>
          </div>
          <div className='funding'>
          <h3>Does your business need funding?</h3>
          <label>
            <input type="radio" value="yes" name="funding" /> <span className='radio-text'>Yes</span>
          </label>
          <label>
            <input type="radio" value="no" name="funding" /> <span className='radio-text'>No</span>
          </label>
          <label>
            <input type="radio" value="no" name="funding" /> <span className='radio-text'>Not sure</span>
          </label>
          </div>
          <div className='continue'>
            <button className='continue__button'>Continue</button>
          </div>
        </form>
    </div>
  );
}

export default QuestionairePage;
