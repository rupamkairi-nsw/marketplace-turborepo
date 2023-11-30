import { default as Razorpay } from "razorpay";

export const rzp = new Razorpay({
  key_id: process.env.RZP_KEY_ID as string,
  key_secret: process.env.RZP_KEY_SECRET as string,
});
