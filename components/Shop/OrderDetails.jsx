import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../hooks/http";
import { useMultipartHttp } from "../../hooks/multipartHttp";
import { usePostHttp } from "../../hooks/postHttp";
import { UserLogout } from "../../redux/actions/UserAction";
import { isMobile } from "../../Utilities";

const OrderDetails = () => {
  const router = useRouter();
  const user = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const { orderid } = router.query;

  const [proof, setProof] = useState(null);
  const [toUpdateOrder, setToUpdateOrder] = useState(false);
  const [formData, setFormData] = useState(null);

  const [updateOrderLoading, updateOrderData] = useMultipartHttp(
    toUpdateOrder ? formData : null,
    `/shop/order/update`
  );

  const [orderDetailsLoading, orderDetails] = useHttp(
    `/orders?creatorid=${user.data.id}&id=${orderid}`,
    [orderid, updateOrderData]
  );


  useEffect(() => {
    let formData = new FormData();

    if (orderDetails) {
      formData.append("userid", user.data.id);
      formData.append("id", orderDetails.result[0].id);
      formData.append("firstname", orderDetails.result[0].firstname);
      formData.append("lastname", orderDetails.result[0].lastname);
      formData.append("address", orderDetails.result[0].address);
      formData.append("email", orderDetails.result[0].email);
      formData.append("mobileno", orderDetails.result[0].mobileno);
      formData.append("quantity", orderDetails.result[0].quantity);
      formData.append("price", orderDetails.result[0].price);
      formData.append("shippingfee", orderDetails.result[0].shippingfee);
      formData.append("paymentmethod", orderDetails.result[0].paymentmethod);
      formData.append("status", "Proof Submitted");
      formData.append("proof", proof);
      formData.append("creatorid", orderDetails.result[0].creatorid);

      setFormData(formData);
      setToUpdateOrder(true);
    }
  }, [proof]);

  useEffect(() => {
    if (updateOrderData && updateOrderData.result && updateOrderData.result.success)
      setToUpdateOrder(false);

    if(!updateOrderData.success && updateOrderData.result == 'Invalid token')
      dispatch(UserLogout(false));  
  }, [updateOrderData]);

  return (
    <div className="box-border px-16 py-20">
      <h1 className="text-heading text-2xl font-bold">Order Details</h1>
      <br />
      <div className="w-full flex items-center">
        <div className="w-1/2">
          <h4 className="text-subheading font-semibold text-lg">
            Order ID: <span className="font-normal">{orderid}</span>
          </h4>
          <h4 className="text-subheading font-semibold text-lg">
            Status:{" "}
            <span className="font-normal">
              {orderDetails && orderDetails.result[0].status}
            </span>
          </h4>
        </div>
        <div className="w-1/2">
          <h4 className="text-subheading text-lg font-semibold">
            Payment Method:
          </h4>
          <h4 className="text-subheading text-lg">
            {orderDetails &&
              orderDetails.result[0].paymentmethod == "banktransfer" &&
              "Bank Transfer"}
          </h4>
        </div>
      </div>
      <br />
      {isMobile() && orderDetails && (
        <table className="w-full text-subheading">
          <thead>
            <tr>
              <th colSpan="2">
              <p>Stock Knowledge VR Box</p>
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
                <p className="text-center">
                  &#8369; {orderDetails.result[0].price.toFixed(2)}
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-center">Quantity:</p>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  <input
                    value={orderDetails.result[0].quantity}
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
        <table className="w-full text-subheading">
          <thead className="border-b-2">
            <tr>
              <th className="pb-2">Product</th>
              <th>QTY</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="flex items-center justify-around">
                <img
                  className="w-30 h-20"
                  src={`${process.env.ASSETS_DOMAIN}/public/06 - vrbox.png`}
                />
                <p>Stock Knowledge VR Box</p>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  <p>{orderDetails && orderDetails.result[0].quantity}</p>
                </div>
              </td>
              <td>
                <p className="text-center">
                  &#8369;{" "}
                  {orderDetails &&
                    orderDetails.result[0].quantity *
                      orderDetails.result[0].price}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      )}
      <br />
      <div className="flex justify-between xl:flex-row lg:flex-row md:flex-row sm:flex-col-reverse xs:flex-col-reverse relative py-10">
        <div className="w-full sm:mb-4 xs:mb-4">
          <h4 className="text-lg font-semibold text-heading">
            Bank Transfer Payment
          </h4>
          <br />
          <p>Please send your payment thru:</p>
          <div className="flex items-center xl:w-1/2 lg:w-1/2 md:w-3/4">
            <div className="bg-gray-100 xl:w-32 lg:w-32 md:w-36 sm:w-36 xs:w-36 border">
              <p className="text-center text-heading font-semibold">
                MetroBank
              </p>
            </div>
            <div className="bg-gray w-full border">
              <p className="text-center">638-3-63815481-2</p>
            </div>
          </div>
          <br />
          <p>
            <span className="text-red-500">*</span> Take a screenshot or photo
            of deposit slip and upload it here.
          </p>
          <br />
          <input
            style={{ display: "none" }}
            className="hidden"
            type="file"
            name="proof"
            id="proof"
            onChange={(e) => setProof(e.target.files[0])}
          />
          <label
            className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xl:self-end lg:self-end md:self-end sm:self-center xs:self-center text-center rounded-full bg-skBlue font-bold xl:text-xl lg:text-xl reno:text-xl md:text-md sm:text-base xs:text-xl xxs:text-xl text-white xl:py-4 lg:py-4 md:py-4 sm:py-2 xs:py-2 xl:px-12 lg:px-12 md:px-12 sm:px-6 xs:px-6 cursor-pointer"
            htmlFor="proof"
          >
            Submit Proof of Payment
          </label>
        </div>
        <table className="w-1/4 float-right text-subheading">
          <tbody>
            <tr className="flex items-center justify-around">
              <td className="w-32">Shipping fee</td>
              <td className="w-32 text-right">
                &#8369; {orderDetails && orderDetails.result[0].shippingfee}
              </td>
            </tr>
            <tr className="flex items-center justify-around py-4 border-t-2">
              <td className="w-32 font-semibold">TOTAL</td>
              <td className="w-32 text-right">
                &#8369;{" "}
                {orderDetails &&
                  orderDetails.result[0].quantity *
                    orderDetails.result[0].price +
                    orderDetails.result[0].shippingfee}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetails;
