import { rzp } from "./razorpay";

export async function createOrder() {
  try {
    const order = await rzp.orders.create({
      amount: 100,
      currency: "INR",
      payment_capture: true,
    });
    console.log(order);
    return order;
  } catch (error) {
    console.log("Error createOrder");
  }
}
