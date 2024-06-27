import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import DeliveryIcon from '../assets/images/shared/tablet/Icon.png';
import OrderConfirmationModal from './ConfirmationModal';

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

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-secondary-light">
      <main className="px-4 py-8 mx-auto max-w-7xl">
        <button
          className="flex justify-start mb-6 transition duration-300 ease-in-out hover:text-primary sm:text-xl sm:py-6 lg:py-12 lg:mx-6 xl:mx-0 xl:pt-12 xl:pb-0"
          onClick={handleGoBack}
        >
          Go Back
        </button>
        <div className="xl:flex xl:justify-between xl:w-full">
          <div className="px-8 py-8 mb-10 text-left bg-white xl:w-2/3 rounded-default">
            <h1 className="flex justify-start mb-4 text-3xl font-bold uppercase text-secondary-black">
              Checkout
            </h1>
            <div className="grid grid-cols-1">
              <form
                id="checkoutForm"
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
                <section>
                  <h2 className="checkout-heading">Billing Details</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-1 font-bold text-secondary-black"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Alexei Ward"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-2 py-4 border border-gray-400 rounded-default"
                        required
                      />
                    </div>
                    <div className="md:col-start-2 md:row-start-1">
                      <label
                        htmlFor="email"
                        className="block mb-1 font-bold text-secondary-black"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="alexei@mail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-2 py-4 border border-gray-400 rounded-default"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-1 font-bold text-secondary-black"
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+1 202-555-0136"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-2 py-4 border border-gray-400 rounded-default"
                        required
                      />
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="checkout-heading">Shipping Info</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <label
                        htmlFor="address"
                        className="block mb-1 font-bold text-secondary-black"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="1137 Williams Avenue"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full p-2 py-4 border border-gray-400 rounded-default"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="zipCode"
                        className="block mb-1 font-bold text-secondary-black"
                      >
                        ZIP code
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        placeholder="10001"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full p-2 py-4 border border-gray-400 rounded-default"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="city"
                        className="block mb-1 font-bold text-secondary-black"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="New York"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full p-2 py-4 border border-gray-400 rounded-default"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="country"
                        className="block mb-1 font-bold text-secondary-black"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        placeholder="United States"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full p-2 py-4 border border-gray-400 rounded-default"
                        required
                      />
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="checkout-heading">Payment Details</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="md:col-span-1">
                      <label className="block mb-1 font-bold text-secondary-black">
                        Payment Method
                      </label>
                    </div>
                    <div className="space-y-2 md:col-span-1">
                      <label className="flex items-center space-x-2">
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
                      <label className="flex items-center space-x-2">
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
                          <label
                            htmlFor="eMoneyNumber"
                            className="block mb-1 font-bold text-secondary-black"
                          >
                            e-Money Number
                          </label>
                          <input
                            type="text"
                            id="eMoneyNumber"
                            name="eMoneyNumber"
                            placeholder="238521993"
                            value={formData.eMoneyNumber}
                            onChange={handleInputChange}
                            className="w-full p-2 py-4 border border-gray-400 rounded-default"
                            required={formData.paymentMethod === 'eMoney'}
                            pattern="[0-9]{9}"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="eMoneyPin"
                            className="block mb-1 font-bold text-secondary-black"
                          >
                            e-Money PIN
                          </label>
                          <input
                            type="text"
                            id="eMoneyPin"
                            name="eMoneyPin"
                            placeholder="6891"
                            value={formData.eMoneyPin}
                            onChange={handleInputChange}
                            className="w-full p-2 py-4 border border-gray-400 rounded-default"
                            required={formData.paymentMethod === 'eMoney'}
                            pattern="[0-9]{4}"
                          />
                        </div>
                      </>
                    )}
                    {formData.paymentMethod === 'cashOnDelivery' && (
                      <div className="flex md:col-span-2 md:w-full">
                        <div className="w-1/4">
                          <img
                            src={DeliveryIcon}
                            alt="cash on delivery"
                            className="p-4"
                          />
                        </div>
                        <div className="flex-grow">
                          <p className="w-3/4 text-sm text-gray-600 md:col-span-2">
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

          <div className="px-8 py-8 bg-white xl:w-full xl:w-1/3 xl:ml-6 rounded-default">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-left uppercase text-secondary-black">
                Summary
              </h2>
              <ul className="space-y-6">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex items-start space-x-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-16 h-16 rounded-default"
                    />
                    <div className="flex-grow text-left">
                      <h4 className="text-lg font-bold text-secondary-black">
                        {item.shortenedName}
                      </h4>
                      <p className="text-lg font-semibold tracking-wide text-gray-400">
                        ${formatPrice(item.price)}
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-lg font-semibold text-gray-500">
                        x{item.quantity}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="pt-6 mt-6 space-y-2 text-lg">
                <div className="flex justify-between">
                  <p className="text-gray-500 uppercase">Subtotal</p>
                  <p className="font-extrabold text-secondary-black">
                    ${formatPrice(subtotal)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500 uppercase">Shipping</p>
                  <p className="font-bold text-secondary-black">
                    ${formatPrice(shipping)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500 uppercase">VAT (INCLUDED)</p>
                  <p className="font-bold text-secondary-black">
                    ${formatPrice(vat)}
                  </p>
                </div>
                <div className="flex justify-between pt-4 mt-4">
                  <p className="text-xl font-semibold text-primary">
                    Grand Total
                  </p>
                  <p className="text-xl font-bold text-primary">
                    ${formatPrice(grandTotal)}
                  </p>
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
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
