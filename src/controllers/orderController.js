import { errorCode, failCode, successCode } from "../config/response.js";
import { addOrder, checkOrdered } from "../utils/orderUtils.js";

const postAddOrder = async (req, res) => {
  try {
    const { userId, foodId, amount, arrSubId } = await req.body;
    const isAlreadyOrdered = await checkOrdered(userId, foodId);

    if (isAlreadyOrdered) {
      failCode(res, "User đã order món này rồi!");
    } else {
      const dataOrder = await addOrder(userId, foodId, amount, arrSubId);
      successCode(res, dataOrder, "Thêm order thành công!");
    }
  } catch {
    errorCode(res, "Lỗi Back-End");
  }
};

export { postAddOrder };
