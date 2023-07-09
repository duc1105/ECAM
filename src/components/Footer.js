
const Footer = () => {
  return `
  <footer>
    <div class="container tw-pt-16">
      <div class="row">
      <div class="tw-flex">
        <div class=" tw-pt-12">
          <div class="about footer-item  " >
            <div class="tw-w-[220px] tw-ml-[130px]">
              <a href="#"><img src="/assets/images/df.png" alt="Onix Digital TemplateMo"></a>
            </div>
            <div class="tw-ml-[120px]">
            <a href="#" class="tw-pl-8">ductaph28316@fpt.edu.vn</a>
            <ul class="tw-pl-10">
              <li><a href="#"><i class="fa fa-github"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-behance"></i></a></li>
              <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 tw-ml-[300px] tw-mt-[120px]">
          <div class="subscribe-newsletters footer-item">
            <h4>Subscribe Newsletters</h4>
            <p>Get our latest news and ideas to your inbox</p>
            <form action="#" method="get">
              <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="">
              <button type="submit" id="form-submit" class="main-button "><i class="fa fa-paper-plane-o"></i></button>
            </form>
          </div>
        </div>
        </div>
        <div >
          
        
        <div class="col-lg-12">
          <div class="copyright">
            <p>Copyright ©  2022 Anh Duc.
              <br>
              Designed by <a rel="nofollow" href="https://templatemo.com" title="free CSS templates">Anh Duc</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
    `;
};
export default Footer;
