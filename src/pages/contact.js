import Footer from "@/components/Footer";
import Header from "../components/Header";

const ContactPage = () => {
  return `
        ${Header()}
        <div id="contact" class="contact-us section">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="section-heading">
            <h2>Feel free to <em>Contact</em> us via the <span> form</span></h2>
            <div id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5398.622925004835!2d105.73468077924935!3d21.051117682849874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1svi!2s!4v1676972849199!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="info">
              <span><i class="fa fa-phone"></i> <a href="#">0325587305<br>0349950478</a></span>
              <span><i class="fa fa-envelope"></i> <a href="#">ductaph28316@fpt.edu.com<br>trananhduca23@gmail.com</a></span>
            </div>
          </div>
        </div>
        <div class="col-lg-5 align-self-center">
          <form id="contact" action="" method="get">
            <div class="row">
              <div class="col-lg-12">
                <fieldset>
                  <input type="name" name="name" id="name" placeholder="Name" autocomplete="on" required>
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <input type="surname" name="surname" id="surname" placeholder="Surname" autocomplete="on" required>
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email"
                    required="">
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <input type="text" name="website" id="website" placeholder="Your Website URL" required="">
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" class="main-button">Submit Request</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="contact-dec">
      <img src="assets/images/contact-dec.png" alt="">
    </div>
    <div class="contact-left-dec">
      <img src="assets/images/contact-left-dec.png" alt="">
    </div>
  </div>
      
        ${Footer()}
        `;
};
export default ContactPage;
