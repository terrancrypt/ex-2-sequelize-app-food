// 200
const successCode = (res, data, message) => {
  res.status(200).json({
    status: 200,
    message,
    content: data,
  });
};

// 400
const failCode = (res, data, message) => {
  res.status(400).json({
    status: 400,
    message,
    content: data,
  });
};

// 500
const errorCode = (res, message) => {
  res.status(500).json({
    status: 500,
    message,
  });
};

export { successCode, failCode, errorCode };
