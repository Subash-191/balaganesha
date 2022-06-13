import short from "short-uuid";
import Razorpay from'razorpay';

export default function handler(req, res) {
  if (req.method == "POST") {
    const { amount } = req.body;
    const instance = new Razorpay({
      key_id: "rzp_test_JIwuFPVaCfSOEs",
      key_secret: "9lyv5uVU9vFFDIGmTnSr16dj",
    });
    instance.orders
      .create({
        amount: amount,
        currency: "INR",
        receipt: `receipt-${short.generate()}`,
      })
      .then((response) => {
        res.status(200).json({ data: response });
      });
  }
}
