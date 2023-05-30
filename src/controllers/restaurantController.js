import { errorCode, failCode, successCode } from "../config/response.js";
import { isLiked, like, unLike } from "../utils/resUtils.js";
import sequelize from "../models/index.js";
import initModels from "../models/init-models.js";

const models = initModels(sequelize);

// Like
const postLikeRes = async (req, res) => {
  try {
    const { userId, resId } = req.body;

    const isAlreadyLiked = await isLiked(userId, resId);

    if (isAlreadyLiked) {
      return failCode(res, "Người dùng đã like nhà hàng này rồi");
    }

    await like(userId, resId);

    return successCode(res, "Like thành công!");
  } catch {
    errorCode(res, "Lỗi Back-End");
  }
};

// Unlike
const deleteUnlikeRes = async (req, res) => {
  try {
    const { userId, resId } = req.body;

    const isAlreadyLiked = await isLiked(userId, resId);

    if (!isAlreadyLiked) {
      return failCode(res, "Người dùng chưa like nhà hàng này!");
    }

    await unLike(userId, resId);

    return successCode(res, "Unlike thành công!");
  } catch {
    errorCode(res, "Lỗi Back End");
  }
};

// Lấy danh sách like theo nhà hàng
const getLikeByRes = async (req, res) => {
  try {
    const { resId } = req.params;
    const dataLike = await models.like_res.findAll({
      where: {
        res_id: resId,
      },
    });

    successCode(res, dataLike, "Lấy thông tin like của nhà hàng thành công!");
  } catch {
    errorCode(res, "Lỗi Back End");
  }
};

// Lấy danh sách like theo user
const getLikeByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const dataLike = await models.like_res.findAll({
      where: {
        user_id: userId,
      },
    });

    successCode(res, dataLike, "Lấy thông tin like của khách hàng thành công!");
  } catch {
    errorCode(res, "Lỗi Back End");
  }
}; 

export { postLikeRes, deleteUnlikeRes, getLikeByRes, getLikeByUser };
