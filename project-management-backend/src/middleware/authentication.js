const admin = require('../firebase')

const verifyToken = async(request,response) => {
    const idToken = request.headers.authorization;
    console.log(request.headers)

  if (!idToken) {
    return response.status(401).send("Unauthorized");
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    request.user = decodedToken;
    next();
  } catch (error) {
    return response.status(401).send("Unauthorized");
  }
}

module.exports = { verifyToken }