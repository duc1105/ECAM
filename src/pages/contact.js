import Footer from "@/components/Footer";
import Header from "../components/Header";

const ContactPage = () => {
  return `
        ${Header()}
      <div class="grid grid-cols-2 gap-4   tw-bg-slate-50">
      <div class="ml-10">
      <div>
      <div class="flex">
          <img class="w-6 h-14 pt-4" src="./image/address.png" alt="">
          <div class="mt-2 pl-3">
          <b class="text-xl " >Address</b>
          <p>Xuan Phuong,Nam Tu Liem,Ha Noi</p>
          </div>
          </div>

          
          <div class="flex">
          <img class="w-6 h-14 pt-4" src="./image/phone.png" alt="">
          <div class="mt-2 pl-3">
          <b class="text-xl " >Phone Number</b>
          <p>0325587305</p>
          </div>
          </div>



          <div class="flex">
          <img class="w-6 h-14 pt-4" src="./image/gmail.jpg" alt="">
          <div class="mt-2 pl-3">
          <b class="text-xl " >Email</b>
          <p>trananhduca23@gmail.com</p>
          </div>
          </div>
      </div>
      <hr>
      <div>
      <b class="text-xl  ">Contact</b>
      <form class="mt-3 ">
          <input type="text" placeholder="Họ và tên" class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2"  >
          <input type="text" placeholder="Email" class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2"  >
          <input type="text" placeholder="Nội dung" class="border-2 border-gray-500 w-100 h-40 rounded-2xl pb-20 pl-2"  >
          <button class="bg-neutral-600 w-40 h-10 rounded-2xl text-white mt-2  ">Gửi liên hệ</button>
      </form>
          </div>
      </div>
      <div class="pt-20">         
      <iframe class="w-100 h90" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7499.199761392695!2d105.73277175973305!3d21.05134823547738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1676565371046!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    
      </div>
      </div>
      
        ${Footer()}
        `;
};
export default ContactPage;
