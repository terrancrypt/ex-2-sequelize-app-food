import sequelize from "../models/index.js";
import initModels from "../models/init-models.js";

const models = initModels(sequelize);

const checkOrdered = async (user_id, food_id) => {
  const dataOrder = await models.order.findOne({
    where: {
      user_id,
      food_id,
    },
  });
  return !!dataOrder;
};

const addOrder = async (user_id, food_id, amount, arr_sub_id) => {
  const dataOrder = await models.order.create({
    user_id,
    food_id,
    amount,
    arr_sub_id,
  });
  return dataOrder;
};

export { checkOrdered, addOrder };
