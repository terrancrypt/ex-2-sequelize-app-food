import sequelize from "../models/index.js";
import initModels from "../models/init-models.js";

const models = initModels(sequelize);

// Kiểm tra user_id đã tồn tại trong bảng like_res hay chưa
const isLiked = async (user_id, res_id) => {
  const like = await models.like_res.findOne({
    where: {
      user_id,
      res_id,
    },
  });

  return !!like;
};

// Like
const like = async (user_id, res_id) => {
  await models.like_res.create({
    user_id,
    res_id,
    date_like: Date(),
  });

  return true;
};

// Unlike
const unLike = async (user_id, res_id) => {
  await models.like_res.destroy({
    where: {
      user_id,
      res_id,
    },
  });

  return true;
};

export { isLiked, like, unLike };
