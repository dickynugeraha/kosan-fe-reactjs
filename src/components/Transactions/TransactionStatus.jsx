import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import sourceApi from "../../api/source-api";
import { formatRupiah } from "../../helpers/stringFormat";
import GlobalLoading from "../common/GlobalLoading";
import { useNavigate } from "react-router";

const TransactionStatus = ({ status }) => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getOrdersByStatusHandler = async () => {
    setIsLoading(true);
    const response = await sourceApi.ordersByStatus({
      token: token,
      status: status,
    });
    if (response.success) {
      setOrders(response.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getOrdersByStatusHandler();
  }, [status]);

  console.log(orders);

  return (
    <Table striped>
      <thead>
        <tr>
          <th>No</th>
          <th>Customer</th>
          <th>Room</th>
          <th>Total payment</th>
          <th>Actions</th>
        </tr>
      </thead>
      {isLoading ? (
        <tbody>
          <td colSpan={5}>
            <GlobalLoading />
          </td>
        </tbody>
      ) : (
        <tbody>
          {orders.length === 0 && (
            <td colSpan={5}>
              <p className="m-0">Data not found</p>
            </td>
          )}
          {orders.length !== 0 &&
            orders.map((order, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{order.user.name}</td>
                <td>{order.room.number_room}</td>
                <td>{formatRupiah(order.total_price)}</td>
                <td>
                  <p
                    style={{ color: "#0070E0" }}
                    onClick={() =>
                      navigate(`/transactions/${order.id}`, { state: order })
                    }
                  >
                    Detail
                  </p>
                </td>
              </tr>
            ))}
        </tbody>
      )}
    </Table>
  );
};

export default TransactionStatus;
