import sequelize from "../models/index.js";
import initModels from "../models/init-models.js";

const models = initModels(sequelize);

// Kiểm tra user đã đánh giá 1 nhà hàng hay chưa
const checkUserRate = async (user_id, res_id) => {
  const rate = await models.rate_res.findOne({
    where: {
      user_id,
      res_id,
    },
  });
  return !!rate;
};

// Thêm đánh giá
const addRate = async (user_id, res_id, amount) => {
  const dataRate = await models.rate_res.create({
    user_id,
    res_id,
    amount,
    date_rate: Date(),
  });

  return dataRate;
};


export { checkUserRate, addRate };
