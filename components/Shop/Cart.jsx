import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { isMobile } from "../../Utilities";

const Cart = ({showModal, quantity, setQuantity }) => {
  const user = useSelector((state) => state.UserReducer);
  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 0);
  };

  return (
    <div className="box-border px-16 py-20">
      <h1 className="text-heading text-2xl font-bold">Cart</h1>
      <br />

      {isMobile() && (
        <table className="w-full text-subheading">
          <thead>
            <tr>
              <th colSpan="2">
                <td>
                  <p>Stock Knowledge VR Box</p>
                </td>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2">
                {" "}
                <img
                  className=""
                  src={`${process.env.ASSETS_DOMAIN}/public/06 - vrbox.png`}
                />
              </td>
            </tr>
            <tr>
              <td className="w-1/2">
                <p className="text-center">Unit Price:</p>
              </td>
              <td className="w-1/2">
                <p className="text-center">&#8369; 200.00</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-center">Quantity:</p>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => {
                      decrease();
                    }}
                    className="border h-8 w-8"
                  >
                    &#8722;
                  </button>
                  <input
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                    className="w-16 h-8 text-center"
                    type="text"
                    name="quantity"
                  />
                  <button
                    onClick={() => {
                      increase();
                    }}
                    className="border h-8 w-8"
                  >
                    &#43;
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="2"></td>
            </tr>
          </tbody>
        </table>
      )}
      {!isMobile() && (
        <table className="w-full border text-subheading">
          <thead>
            <tr>
              <th>Product</th>
              <th>Unit Price</th>
              <th>QTY</th>
              <th>Price</th>
            </tr>
          </thead>
          <tr>
            <td className="flex items-center justify-around border">
              <img
                className="w-30 h-20"
                src={`${process.env.ASSETS_DOMAIN}/public/06 - vrbox.png`}
              />
              <p>Stock Knowledge VR Box</p>
            </td>
            <td>
              <p className="text-center">&#8369; 200.00</p>
            </td>
            <td>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => {
                    decrease();
                  }}
                  className="border h-8 w-8"
                >
                  &#8722;
                </button>
                <input
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  className="w-16 h-8 text-center"
                  type="text"
                  name="quantity"
                />
                <button
                  onClick={() => {
                    increase();
                  }}
                  className="border h-8 w-8"
                >
                  &#43;
                </button>
              </div>
            </td>
            <td>
              <p className="text-center">
                &#8369; {`${(200 * quantity).toFixed(2)}`}
              </p>
            </td>
          </tr>
        </table>
      )}
      <div className="flex flex-col relative py-10">
        <table className="xl:block lg:block md:block xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-full xs:w-full self-end float-right text-subheading">
          <tr className="flex items-center justify-around">
            <td className="w-32">Subtotal</td>
            <td className="w-32 text-right">
              &#8369; {`${(200 * quantity).toFixed(2)}`}
            </td>
          </tr>
          <tr className="flex items-center justify-around border-b-2 pb-4">
            <td className="w-32">Shipping fee</td>
            <td className="w-32 text-right">&#8369; {`${(0).toFixed(2)}`}</td>
          </tr>
          <tr className="flex items-center justify-around py-4">
            <td className="w-32">TOTAL</td>
            <td className="w-32 text-right">
              &#8369; {`${(200 * quantity).toFixed(2)}`}
            </td>
          </tr>
        </table>
        {user && !user.isLogin ? (
          <button onClick={() => showModal(true)} className="xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-full xs:-w-full xl:self-end lg:self-end md:self-end text-center rounded-full bg-skBlue font-bold xl:text-xl lg:text-xl reno:text-xl md:text-md sm:text-xl xs:text-xl xxs:text-xl text-white py-4 px-12">
            Login
          </button>
        ) : (
          <Link href="/checkout">
            <a className="xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-full xs:-w-full xl:self-end lg:self-end md:self-end text-center rounded-full bg-skBlue font-bold xl:text-xl lg:text-xl reno:text-xl md:text-md sm:text-xl xs:text-xl xxs:text-xl text-white py-4 px-12">
              Checkout
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
