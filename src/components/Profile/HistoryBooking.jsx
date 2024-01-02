import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import API from "../../api/source-api";
import { resolvePath } from "react-router";
import GlobalLoading from "../common/GlobalLoading";
import { formatDate, formatRupiah } from "../../helpers/stringFormat";

const HistoryBooking = () => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("user_id");

  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getOrdersByUserId = async () => {
      setIsLoading(true);
      const response = await API.ordersByUser({ token: token, userId: userId });
      console.log(response);
      if (response.success) {
        setOrders(response.data);
      } else {
        return;
      }
      console.log(orders);
      setIsLoading(false);
    };

    getOrdersByUserId();
  }, []);

  return (
    <div>
      {isLoading ? (
        <GlobalLoading />
      ) : (
        <Table striped>
          {orders.length === 0 ? (
            <p>No data found!</p>
          ) : (
            <>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Start Booking</th>
                  <th>End Booking</th>
                  <th>Room</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{order.start_order}</td>
                    <td>{order.end_order}</td>
                    <td>{order.room.number_room}</td>
                    <td>{formatRupiah(order.total_price)}</td>
                    <td>Detail</td>
                  </tr>
                ))}
              </tbody>
            </>
          )}
        </Table>
      )}
    </div>
  );
};

export default HistoryBooking;
