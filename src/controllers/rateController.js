import { errorCode, failCode, successCode } from "../config/response.js";
import sequelize from "../models/index.js";
import initModels from "../models/init-models.js";
import { addRate, checkUserRate } from "../utils/rateUtils.js";

const models = initModels(sequelize);

// Thêm đánh giá
const postAddRate = async (req, res) => {
  try {
    const { userId, resId, amount } = await req.body;
    const isUserAlreadyRated = await checkUserRate(userId, resId);

    if (isUserAlreadyRated) {
      failCode(res, "Bạn đã đánh giá nhà hàng này rồi!");
    } else {
      const dataRate = await addRate(userId, resId, amount);
      successCode(res, dataRate, "Thêm đánh giá thành công!");
    }
  } catch {
    errorCode(res, "Lỗi Back-End");
  }
};

// Lấy đánh giá theo nhà hàng
const getRateByRes = async (req, res) => {
  try {
    const { resId } = req.params;
    const dataRate = await models.rate_res.findAll({
      where: {
        res_id: resId,
      },
    });
    successCode(res, dataRate, "Lấy đánh giá theo nhà hàng thành công!");
  } catch {
    errorCode(res, "Lỗi Back-End");
  }
};

// Lấy đánh giá theo user
const getRateByUser = async (req, res) => {
try {
    const {userId} = req.params
    const dataRate = await models.rate_res.findAll({
        where:{
            user_id: userId,
        }
    })
    successCode(res, dataRate, "Lấy đánh giá theo khách hàng thành công!")
} catch {
    errorCode(res, "Lỗi Back-End");
}
};

export { postAddRate, getRateByRes, getRateByUser };
