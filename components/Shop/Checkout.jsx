import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePostHttp } from "../../hooks/postHttp";
import { UserLogout } from "../../redux/actions/UserAction";
import { isMobile } from "../../Utilities";
import EmailField from "../EmailField";
import NumberField from "../NumberField";
import TextField from "../TextField";

const Checkout = ({ quantity, setQuantity }) => {
  const router = useRouter();
  const user = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobileno, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [edit, setEdit] = useState(false);
  const [disablePay, setDisablePay] = useState(true);
  const [submit, setSubmit] = useState(false);

  const [payLoading, payData] = usePostHttp(
    submit
      ? {
          userid: user.data.id,
          firstname,
          lastname,
          mobileno,
          email,
          address,
          price: 200,
          quantity,
          shippingfee: 0,
          paymentMethod,
        }
      : null,
    "/pay"
  );

  const bankIcon = (
    <FontAwesomeIcon icon={faUniversity} className="text-skBlue" size="lg" />
  );

  useEffect(() => {
    if (user && user.data) {
      setFirstname(user.data.firstname);
      setLastname(user.data.lastname);
      setMobileNo(user.data.mobile);
      setEmail(user.data.email);
      setAddress("");
    }
  }, []);

  useEffect(() => {
    if (
      firstname &&
      lastname &&
      address &&
      email &&
      mobileno &&
      paymentMethod &&
      !edit
    )
      setDisablePay(false);
    else setDisablePay(true);
  }, [firstname, lastname, mobileno, email, address, paymentMethod, edit]);

  useEffect(() => {
    if (payData.success) {
      setSubmit(false);
      router.push(`/order?orderid=${payData.result.orderid}`);
    }
    
    if(!payData.success && payData.result == 'Invalid token'){
      dispatch(UserLogout(false))
    }
  }, [payData]);

  return (
    <div className="box-border px-16 py-20">
      <h1 className="text-heading text-2xl font-bold">Checkout</h1>
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
                  <input
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                    className="w-16 h-8 text-center"
                    type="text"
                    name="quantity"
                    disabled={true}
                  />
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
          <tr>
            <th>Product</th>
            <th>Unit Price</th>
            <th>QTY</th>
            <th>Price</th>
          </tr>
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
                <input
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  className="w-16 h-8 text-center"
                  type="text"
                  name="quantity"
                  disabled={true}
                />
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
      <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col relative py-10 space-y-4">
        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full flex flex-col">
          <h6 className="text-xl text-heading mb-4">
            Shipping Information{" "}
            <span
              onClick={() => {
                setEdit(!edit);
              }}
              className="text-skBlue text-sm cursor-pointer underline"
            >
              {edit ? "Apply" : "Edit"}
            </span>
          </h6>
          <TextField
            id="firstname"
            classNames="lg:w-full md:w-full sm:w-full xs:w-full xxs:w-full xs:h-8 xxs:h-8 mt-2 rounded-xl border border-lightGray placeholder-lightGray disabled:bg-gray-100"
            placeholder="First Name"
            value={firstname}
            setValue={setFirstname}
            alert={true}
            disabled={!edit}
          />
          <TextField
            id="lastname"
            classNames="lg:w-full md:w-full sm:w-full xs:w-full xxs:w-full xs:h-8 xxs:h-8 mt-2 rounded-xl border border-lightGray placeholder-lightGray disabled:bg-gray-100"
            placeholder="Last Name"
            value={lastname}
            setValue={setLastname}
            alert={true}
            disabled={!edit}
          />
          <TextField
            id="address"
            classNames="lg:w-full md:w-full sm:w-full xs:w-full xxs:w-full xs:h-8 xxs:h-8 mt-2 rounded-xl border border-lightGray placeholder-lightGray disabled:bg-gray-100"
            placeholder="Address"
            value={address}
            setValue={setAddress}
            alert={false}
            disabled={!edit}
          />
          <EmailField
            classNames="lg:w-full md:w-full sm:w-full xs:w-full xxs:w-full mt-2 xs:h-8 xxs:h-8 rounded-xl border border-lightGray placeholder-lightGray disabled:bg-gray-100"
            value={email}
            setValue={setEmail}
            placeholder="Email Address"
            to={true}
            endpoint={"/register/verify/email?value="}
            alert={false}
            disabled={!edit}
          />
          <NumberField
            id="mobileno"
            classNames="lg:w-full md:w-full sm:w-full xs:w-full xxs:w-full xs:h-8 xxs:h-8 mt-2 rounded-xl border border-lightGray placeholder-lightGray disabled:bg-gray-100"
            value={mobileno}
            setValue={setMobileNo}
            placeholder="Mobile Number"
            disabled={!edit}
          />
        </div>
        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full flex flex-col self-end">
          <table className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full self-end float-right text-subheading">
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
          <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full flex flex-col self-end">
            <h4 className="w-full text-skBlue text-xl font-semibold">
              Select Method of Payment
            </h4>
            <div className="h-20 px-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {" "}
                {bankIcon}
                <p className="text-lg text-subheading"> Bank Transfer</p>
              </div>
              <input
                checked={paymentMethod == "banktransfer"}
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                }}
                name="banktransfer"
                value="banktransfer"
                type="radio"
              />
            </div>
          </div>
          <button
            disabled={disablePay}
            onClick={() => setSubmit(true)}
            className="disabled:opacity-50 xl:w-1/2 lg:w-1/2 md:w-3/4 sm:w-full xs:w-full xl:self-end lg:self-end md:self-end sm:self-center xs:self-center text-center rounded-full bg-skBlue font-bold xl:text-xl lg:text-xl reno:text-xl md:text-md sm:text-xl xs:text-xl xxs:text-xl text-white py-4"
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
