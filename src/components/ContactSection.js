import React from 'react';

export default class ContactSection extends React.Component {
    render() {
        return (
            <section className="section">
              <div className="container container--md">
                <form name="contactForm" id="contactForm" action="/thanks" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                  <div className="sr-only">
                    <label id="honeypot-label" htmlFor="honeypot">Don't fill this out if you're human:</label>
                    <input aria-labelledby="honeypot-label" id="honeypot" name="bot-field" />
                  </div>
                  <input aria-labelledby="honeypot-label" type="hidden" name="form-name" value="contactForm" />
                  <div className="form-group">
                    <label id="name-label" htmlFor="name">Nom</label>
                    <input aria-labelledby="name-label" type="text" name="name" id="name" placeholder="Votre nom" required />
                  </div>
                  <div className="form-group">
                    <label id="email-label" htmlFor="email">Email</label>
                    <input aria-labelledby="email-label" type="email" name="email" id="email" placeholder="Votre email" required />
                  </div>

                  <div className="form-group">
                    <label id="phone-label" htmlFor="phone">Tel</label>
                    <input aria-labelledby="phone-label" type="phone" name="phone" id="phone" placeholder="Telephone" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Sujet</label>
                    <div className="form-select-wrap">
                      <select name="subject" id="subject">
                        <option value="">Selectionner</option>
                        <option value="Demande de devis">Demande de devis</option>
                        <option value="Renseignements">Renseignements</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label id="message-label" htmlFor="message">Message</label>
                    <textarea aria-labelledby="message-label" name="message" id="message" rows="5" placeholder="Votre message" />
                  </div>
{/*
                  <div className="form-group form-checkbox">
                    <input aria-labelledby="consent-label" type="checkbox" name="consent" id="consent" />
                    <label id="consent-label" htmlFor="consent">I understand that this form is storing my submitted information so I can be
                      contacted.</label>
                  </div>
*/}
                  <div className="form-submit">
                    <button type="submit" className="button">Envoi</button>
                  </div>
                </form>
              </div>
            </section>
        );
    }
}
