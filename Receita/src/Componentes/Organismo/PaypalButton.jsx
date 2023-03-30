import React, { useEffect } from "react";
import Swal from "sweetalert2";
const PaypalButton = () => {
  useEffect(() => {
    paypal
      .Buttons({
        style: {
          shape: "pill",
          color: "blue",
          layout: "vertical",
          label: "pay",
        },
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [{ amount: { value: 20 } }],
          });
        },
        onCancel: function (data) {
        Swal.fire(
'Pago cancelado',
)
        },
        onApprove: function (data, actions) {
          return actions.order.capture().then(function (orderData) {
            // Full available details
            console.log(
              "Capture result",
              orderData,
              JSON.stringify(orderData, null,2)
            );
            // Show a success message within this page, e.g.
            element.innerHTML = "";
            element.innerHTML = "<h3>Gracias por tu compra!</h3>";
            actions.redirect("https://receita.iothings.com.mx/Home");
            // Or go to another URL:  actions.redirect('thank_you.html');
          });
        },
        onError: function (err) {
          console.log(err);
        },
      })
      .render("#paypal-button-container");
  },);
  return <div id="paypal-button-container"></div>;
};

export default PaypalButton;
