// src/pages/Payment.js
import './Payment.css';

const Payment = () => {
  return (
    <div className="payment-page">
      <h2>Complete Your Purchase</h2>
      <form className="payment-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Card Number" required />
        <div className="card-details">
          <input type="text" placeholder="MM/YY" required />
          <input type="text" placeholder="CVV" required />
        </div>
        <input type="number" placeholder="Amount (₹)" required />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
