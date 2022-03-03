import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../hooks/http";
import { UserLogout } from "../../redux/actions/UserAction";
import { isMobile } from "../../Utilities";

const Orders = () => {
  const router = useRouter();
  const user = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  const { orderid } = router.query;
  const [ordersLoading, orders] = useHttp(`/orders?creatorid=${user.data.id}`, [
    orderid,
  ]);

  useEffect(()=> {
    if(orders && !orders.success && orders.data == 'Invalid token'){
      // dispatch(UserLogout(false));
    }
  },[orders])


  return (
    <div className="box-border px-16 py-20">
      <h1 className="text-heading text-2xl font-bold">Orders</h1>
      <br />
      {isMobile() &&
        orders && orders.success &&
        orders.result.map((elm) => {
          return (
            <table onClick={() => router.push(`/order?orderid=${elm.id}`)} key={elm.key} className="w-full text-subheading cursor-pointer mb-4">
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
                  <td>
                    <p className="text-center">Quantity:</p>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      <p>{elm.quantity}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/2">
                    <p className="text-center">Total Price:</p>
                  </td>
                  <td className="w-1/2">
                    <p className="text-center">&#8369; {elm.price * elm.quantity}</p>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/2">
                    <p className="text-center">Status:</p>
                  </td>
                  <td className="w-1/2">
                    <p className="text-center">{elm.status}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          );
        })}
      {!isMobile() && (
        <table className="w-full text-subheading">
          <thead className="border-b-2">
            <tr>
              <th className="pb-2">Product</th>
              <th>QTY</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders && orders.success &&
              orders.result.map((elm) => {
                return (
                  <tr
                    key={elm.id}
                    onClick={() => {
                      router.push(`/order?orderid=${elm.id}`);
                    }}
                    className="cursor-pointer"
                  >
                    <td className="flex items-center justify-around">
                      <img
                        className="w-30 h-20"
                        src={`${process.env.ASSETS_DOMAIN}/public/06 - vrbox.png`}
                      />
                      <p>Stock Knowledge VR Box</p>
                    </td>
                    <td>
                      <div className="flex items-center justify-center">
                        <p>{elm.quantity}</p>
                      </div>
                    </td>
                    <td>
                      <p className="text-center">
                        &#8369; {orders && elm.quantity * elm.price}
                      </p>
                    </td>
                    <td>
                      <p className="text-center">{elm.status}</p>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
