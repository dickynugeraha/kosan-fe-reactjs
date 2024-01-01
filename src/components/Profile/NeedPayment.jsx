import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import API from "../../api/source-api";

const NeedPayment = () => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("user_id");

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDataNeedPaymentUser = async () => {
      setIsLoading(true);

      const response = await API.orderNeedPaymentUser({
        token: token,
        userId: userId,
      });

      console.log(response);

      if (response.success) {
        setData(response.data);
      } else {
        return;
      }

      setIsLoading(false);
    };

    fetchDataNeedPaymentUser();
  }, []);

  return (
    <Card>
      <Card.Body className="pb-0">
        <h5 className="m-0">Payment now!</h5>
      </Card.Body>
      <hr />
      <Container className="pb-3">Description</Container>
    </Card>
  );
};

export default NeedPayment;
