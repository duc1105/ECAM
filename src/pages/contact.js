import Footer from "@/components/Footer";
import Header from "../components/Header";

const ContactPage = () => {
  return `
        ${Header()}
      <div class="grid grid-cols-3 gap-4 ml-10">
          <div class="flex">
          <img class="w-15 h-20 pt-8" src="./image/address.png" alt="">
          <div class="mt-4 pl-3">
          <b class="text-2xl " >Address</b>
          <p>Xuan Phuong,Nam Tu Liem,Ha Noi</p>
          </div>
          </div>

          
          <div class="flex">
          <img class="w-15 h-20 pt-8" src="./image/phone.png" alt="">
          <div class="mt-4 pl-3">
          <b class="text-2xl " >Phone Number</b>
          <p>Xuan Phuong,Nam Tu Liem,Ha Noi</p>
          </div>
          </div>



          <div class="flex">
          <img class="w-15 h-20 pt-8" src="./image/gmail.jpg" alt="">
          <div class="mt-4 pl-3">
          <b class="text-2xl " >Email</b>
          <p>trananhduca23@gmail.com</p>
          </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6681.053533713437!2d105.7331211!3d21.0507651!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1676547925533!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
        ${Footer()}
        `;
};
export default ContactPage;
