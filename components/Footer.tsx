export default function Footer() {
  return (
    <footer className="footer">
      {/* TOP ROW */}
      <div className="footer-top">
        <div className="footer-newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from metta muse.</p>
          <div className="newsletter-input">
            <input placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4>CURRENCY</h4>
          <p>USD</p>
          <small>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </small>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* BOTTOM ROW */}
      <div className="footer-bottom">
        <div>
          <h4>metta muse</h4>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>

        <div>
          <h4>QUICK LINKS</h4>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div>
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <span>◯</span>
            <span>◯</span>
          </div>

          <h4 className="accepts-title">metta muse ACCEPTS</h4>
          <div className="payment-icons">
            <span>GPay</span>
            <span>MC</span>
            <span>PayPal</span>
            <span>AMEX</span>
            <span>Pay</span>
          </div>
        </div>
      </div>

      <p className="footer-copy">
        Copyright © 2023 metta muse. All rights reserved.
      </p>
    </footer>
  );
}
