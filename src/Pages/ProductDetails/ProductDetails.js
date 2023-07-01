import React, { useContext } from "react";
import "./ProductDetails.css";
import { AppContext } from "../../Components/AppContext/AppContext";
import { AiOutlineClose } from "react-icons/ai";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
const ProductDetails = () => {
  const { curr, isCurr, handle_popup, changeQty2, handle_addCart2, sum_bill } =
    useContext(AppContext);

  return (
    <div
      onClick={(e) => {
        if (e.target.className === "ProductDetails isPop") {
          handle_popup(undefined);
        }
      }}
      className={`${isCurr ? "ProductDetails isPop" : "ProductDetails"}`}
    >
      <div className="ProductsDetails-box">
        <div className="ProductDetails-img">
          <img alt="" src={curr && curr.img[0]} />
        </div>

        <div className="ProductsDetails-info">
          <p className="Details-heading">{curr && curr.name}</p>
          <div className="Details-info">
            <p>Brand:</p>
            <p>{curr && curr.type}</p>
            <p>Product Code:</p>
            <p>{curr && curr.name}</p>
            <p>Reward Points:</p>
            <p>600</p>
            <p>Availability:</p>
            <p>In Stock</p>
          </div>
          <div className="Details-prices">
            <p className="pricing">
              {curr && (curr.qty * curr.prices).toFixed(2)} <span>$</span>
            </p>
            <div className="quantity">
              <p className="Qty">Qty</p>
              <InputGroup className="mb-3">
                <Button
                  variant="outline-secondary"
                  onClick={() => changeQty2(curr.id, -1)}
                >
                  -
                </Button>
                <Form.Control readOnly value={curr && curr.qty} />
                <Button
                  variant="outline-secondary"
                  onClick={() => changeQty2(curr.id, 1)}
                >
                  +
                </Button>
              </InputGroup>
            </div>
          </div>
          <div className="Details-button">
            <Button
              variant="outline-secondary"
              onClick={() => {
                handle_addCart2(curr.id);
                swal({
                  title: "Successfully!",
                  text: "Your pizza has been added!",
                  icon: "success",
                  button: "Close!",
                });
                handle_popup(undefined);
                sum_bill();
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>

        <AiOutlineClose
          className="ProductDetails-icon"
          onClick={() => handle_popup(undefined)}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
