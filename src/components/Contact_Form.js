import React, { useRef }  from 'react';
import emailjs from '@emailjs/browser';

const Contact_Form = (props) => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_pieaja6', 'template_3sdc7j4', form.current, 'S0px_8GQaTomUv03G')
        .then((result) => {
            console.log(result.text);
            window.alert('message envoyé');
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="contact__form grid">
            <div className="contact__inputs grid">
                <div className="contact__content">
                    <label className="contact__label">Objet</label>
                    <input type="text" className="contact__input" name="user_object" value={props.subject ? props.subject : null }/>
                </div>
                <div className="contact__content">
                    <label className="contact__label">Email</label>
                    <input type="email" className="contact__input" name="user_mail"/>
                </div>
                <div className="contact__content">
                    <label className="contact__label">Message</label>
                    <textarea name="user_message" id="" cols="0" rows="7" className="contact__input" placeholder={props.placeholder}></textarea>
                </div>

                <div>
                    <input className="button button--flex" type="submit" value="Envoyer message"/>
                </div>
            </div>
        </form>
    )
}

export default Contact_Form;