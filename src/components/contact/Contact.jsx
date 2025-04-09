import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e66ea214-812f-4417-b08c-aba47366b58d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us message <img src={msg_icon}/></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eligendi necessitatibus, quasi earum, illo nesciunt quis iusto nisi consequuntur perferendis iste? Ab accusantium culpa sint sapiente doloremque placeat tempore libero?</p>
            <ul>
                <li><img src={mail_icon}/>Contact@edusity.dev</li>
                <li><img src={phone_icon}/>545423464</li>
                <li><img src={location_icon}/>Village-Mattaur</li>
            </ul>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" required placeholder='Enter name' name ="name" />

                <label>Phone Number</label>
                <input type='tel' required placeholder='Enter Phone Number' name = 'phone'></input>

                <label>Write Your Message</label>
                <textarea name='message' rows="6"></textarea>
                <button className='btn dark-btn'>Submit</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact