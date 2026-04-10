import './contact.css'
import send from '../../assets/sentmassage.svg'


const ContactForm = () => {
  return (
    <section className='contactForm'>
        <h2>Contact Form</h2>
        <div className="forms">
            <form>
                <input type="text" placeholder='Full name' />
                <input type="number" placeholder='Phone number' />
                <textarea placeholder='Your Massage'></textarea>
            </form>
            <div className="formBtn">
                <button>
                    <img src={send} alt="✈" />
                    Send Massage
                </button>
            </div>
        </div>

    </section>
  )
}

export default ContactForm