import React, { useState } from 'react';
import { useCart } from './CartContext';
import DeliveryIcon from '../assets/images/shared/tablet/Icon.png';
import OrderConfirmationModal from './ConfirmationModal';
import GoBack from './GoBack';

interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: 'eMoney' | 'cashOnDelivery';
  eMoneyNumber?: string;
  eMoneyPin?: string;
}

const CheckoutPage: React.FC = () => {
  const { cartItems } = useCart();
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    paymentMethod: 'eMoney',
  });

  const formatPrice = (price: number): string => {
    return price.toFixed(2).replace(/\.00$/, '');
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) {
      console.log('Form submitted:', formData);
      setIsConfirmationModalOpen(true);
    } else {
      console.log('Form has errors');
      e.currentTarget.reportValidity();
    }
  };

  const handleButtonClick = () => {
    const form = document.getElementById('checkoutForm') as HTMLFormElement;
    if (form) {
      form.requestSubmit();
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 50;
  const vat = subtotal * 0.2;
  const grandTotal = subtotal + shipping + vat;

  return (
    <div className="bg-light">
      <main className="checkout-page">
        <GoBack />
        <div className="checkout-section">
          <div className="checkout-form-section">
            <h1 className="checkout-h1">Checkout</h1>
            <div className="checkout-form">
              <form
                id="checkoutForm"
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
                <section>
                  <h2 className="checkout-heading">Billing Details</h2>
                  <div className="billing-details">
                    <div>
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Alexei Ward"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="email">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="alexei@mail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="form-label">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+1 202-555-0136"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                </section>
                <section>
                  <h2 className="checkout-heading">Shipping Info</h2>
                  <div className="shipping-info">
                    <div className="address">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="1137 Williams Avenue"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="form-label">
                        ZIP code
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        placeholder="10001"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="New York"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="form-label">
                        Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        placeholder="United States"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                </section>
                <section>
                  <h2 className="checkout-heading">Payment Details</h2>
                  <div className="payment-details">
                    <div className="payment-method">
                      <label className="form-label">Payment Method</label>
                    </div>
                    <div className="payment-method-choices">
                      <label className="radio">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="eMoney"
                          checked={formData.paymentMethod === 'eMoney'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span>e-Money</span>
                      </label>
                      <label className="radio">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cashOnDelivery"
                          checked={formData.paymentMethod === 'cashOnDelivery'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span>Cash on Delivery</span>
                      </label>
                    </div>
                    {formData.paymentMethod === 'eMoney' && (
                      <>
                        <div>
                          <label htmlFor="eMoneyNumber" className="form-label">
                            e-Money Number
                          </label>
                          <input
                            type="text"
                            id="eMoneyNumber"
                            name="eMoneyNumber"
                            placeholder="238521993"
                            value={formData.eMoneyNumber}
                            onChange={handleInputChange}
                            className="form-input"
                            required={formData.paymentMethod === 'eMoney'}
                            pattern="[0-9]{9}"
                          />
                        </div>
                        <div>
                          <label htmlFor="eMoneyPin" className="form-label">
                            e-Money PIN
                          </label>
                          <input
                            type="text"
                            id="eMoneyPin"
                            name="eMoneyPin"
                            placeholder="6891"
                            value={formData.eMoneyPin}
                            onChange={handleInputChange}
                            className="form-input"
                            required={formData.paymentMethod === 'eMoney'}
                            pattern="[0-9]{4}"
                          />
                        </div>
                      </>
                    )}
                    {formData.paymentMethod === 'cashOnDelivery' && (
                      <div className="payment-method-container">
                        <div className="COD-icon">
                          <img
                            src={DeliveryIcon}
                            alt="cash on delivery"
                            className="p-4"
                          />
                        </div>
                        <div className="COD">
                          <p className="COD-text">
                            The 'Cash on Delivery' option enables you to pay in
                            cash when our delivery courier arrives at your
                            residence. Just make sure your address is correct so
                            that your order will not be cancelled.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              </form>
            </div>
          </div>
          <SummarySection
            cartItems={cartItems}
            subtotal={subtotal}
            shipping={shipping}
            vat={vat}
            grandTotal={grandTotal}
            handleButtonClick={handleButtonClick}
            isConfirmationModalOpen={isConfirmationModalOpen}
            setIsConfirmationModalOpen={setIsConfirmationModalOpen}
            formatPrice={formatPrice}
          />
        </div>
      </main>
    </div>
  );
};

const SummarySection: React.FC<{
  cartItems: {
    id: string;
    image: string;
    shortenedName: string;
    price: number;
    quantity: number;
  }[];
  subtotal: number;
  shipping: number;
  vat: number;
  grandTotal: number;
  handleButtonClick: () => void;
  isConfirmationModalOpen: boolean;
  setIsConfirmationModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formatPrice: (price: number) => string;
}> = ({
  cartItems,
  subtotal,
  shipping,
  vat,
  grandTotal,
  handleButtonClick,
  isConfirmationModalOpen,
  setIsConfirmationModalOpen,
  formatPrice,
}) => (
  <div className="summary-section">
    <div>
      <h2 className="summary-title">Summary</h2>
      <ul className="summary-list">
        {cartItems.map((item) => (
          <li key={item.id} className="summary-item">
            <img
              src={item.image}
              alt={item.shortenedName}
              className="summary-image"
            />
            <div className="summary-item-details">
              <h4 className="summary-item-names">{item.shortenedName}</h4>
              <p className="summary-item-price">${formatPrice(item.price)}</p>
            </div>
            <div className="summary-item-quantity">
              <span className="summary-item-quantity-text">
                x{item.quantity}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="summary-totals">
        <div className="summary-totals-row">
          <p className="summary-totals-labels">Subtotal</p>
          <p className="font-extrabold text-secondary-black">
            ${formatPrice(subtotal)}
          </p>
        </div>
        <div className="summary-totals-row">
          <p className="summary-totals-labels">Shipping</p>
          <p className="summary-totals-price">${formatPrice(shipping)}</p>
        </div>
        <div className="summary-totals-row">
          <p className="summary-totals-labels">VAT (INCLUDED)</p>
          <p className="summary-totals-price">${formatPrice(vat)}</p>
        </div>
        <div className="grand-total-row">
          <p className="grand-total-label">Grand Total</p>
          <p className="grand-total-amount">${formatPrice(grandTotal)}</p>
        </div>
      </div>
      <button
        type="submit"
        form="checkoutForm"
        className="w-full mt-8 uppercase btn"
        onClick={handleButtonClick}
      >
        Continue & Pay
      </button>
      <OrderConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
      />
    </div>
  </div>
);

export default CheckoutPage;
