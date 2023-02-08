export const verifyToken = (request, response, next) => {
  try {
    const bearerHeader = request.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const token = bearer[1];
      request.token = token;
      next();
    } else {
      return response.send({
        result: "Invalid token",
      });
    }
  } catch (error) {}
};
