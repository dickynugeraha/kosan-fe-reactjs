import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import paymentNumber from "../../assets/images/payment_number.jpg";
import paymentBca from "../../assets/images/payment_bca.jpeg";

import API from "../../api/source-api";
import toast, { Toaster } from "react-hot-toast";
import { formatRupiah } from "../../helpers/stringFormat";
import GlobalLoading from "../common/GlobalLoading";

const RecentBooking = ({ isUpdate }) => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("user_id");

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    const fetchDataNeedPaymentUser = async () => {
      setIsLoading(true);
      const response = await API.orderNeedPaymentUser({
        token: token,
        userId: userId,
      });
      if (response.success) {
        if (response.data !== null) {
          setData(response.data);
        } else {
          setData(null);
        }
      } else {
        return;
      }
      setIsLoading(false);
    };

    fetchDataNeedPaymentUser();
  }, []);

  const submitPaymentHandler = async () => {
    if (image === null || paymentMethod.trim().length === 0) {
      toast.error("Please upload proof of payment or choosen payment method!", {
        duration: 2000,
      });
      return;
    }
    const response = await API.updatePayment({
      token: token,
      payload: {
        orderId: data.id,
        payment_method: paymentMethod,
        photo_transfer: image,
      },
    });
    console.log(response);
    if (response.success) {
      toast.success("Successfully, payment!", { duration: 1000 });
      setTimeout(() => {
        toast.remove();
        isUpdate();
      }, 2000);
    } else {
      toast.error(`Failed payment, Something worng!`, { duration: 2000 });
    }
  };

  return (
    <Card>
      {data === null ? (
        <p className="m-2">No data found!</p>
      ) : (
        <>
          {isLoading ? (
            <GlobalLoading />
          ) : (
            <Card.Body className="pb-0">
              <Toaster />
              <h5 className="m-0 fw-bold">Waiting your payment!</h5>

              <hr />

              <div>
                <p className="fw-bold mb-3">
                  Detail order room {data?.room?.number_room}
                </p>
                <div className="d-flex justify-content-between">
                  <span>Price room/month</span>
                  <span>{formatRupiah(data?.room?.price)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Period order</span>
                  <span>{data?.period_order} month</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="fw-bold">Total price</span>
                  <span className="fw-bold">
                    {formatRupiah(data?.total_price)}
                  </span>
                </div>
              </div>

              <hr />
              <div className="d-flex justify-content-between">
                <div>
                  <p className="mb-6 fw-bold">Payment method</p>
                  <ol>
                    <li>Ovo, Dana & Gopay : 08963214785</li>
                    <li>Bank BCA : 05618912089156135156</li>
                  </ol>
                </div>
                <div>
                  <img src={paymentBca} height="75px" width={"170px"} />
                  <img
                    src={paymentNumber}
                    height="100px"
                    width={"100px"}
                    className="ms-3"
                  />
                </div>
              </div>
              <div className="input-group my-3">
                <div>
                  <input
                    type="radio"
                    name="payment"
                    id="dana"
                    value="ovo/dana/gopay"
                    onChange={() => setPaymentMethod("ovo/dana/gopay")}
                  />
                  <label for="dana" className="ms-3">
                    Ovo / Dana / Gopay
                  </label>
                </div>
              </div>
              <div className="input-group">
                <div>
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    id="bank"
                    onChange={() => setPaymentMethod("bank")}
                  />
                  <label className="ms-3" for="bank">
                    Transfer bank BCA
                  </label>
                </div>
              </div>
              <hr />
              <div>
                <p className="fw-bold">Upload proof of payment </p>
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
                <div>
                  {image !== null && (
                    <img
                      height={"400"}
                      width={"220"}
                      src={URL.createObjectURL(image)}
                    />
                  )}
                </div>
              </div>
            </Card.Body>
          )}

          <Card.Footer className="d-flex justify-content-end">
            <Button
              variant="success"
              style={{ width: "140px" }}
              onClick={submitPaymentHandler}
            >
              Submit
            </Button>
          </Card.Footer>
        </>
      )}
    </Card>
  );
};

export default RecentBooking;
