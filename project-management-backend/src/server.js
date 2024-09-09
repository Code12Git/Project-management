const express = require('express')
const cors = require('cors')
const logger = require('./utils/logger')
const { fromEnv } = require('./utils')
const connection = require('./config/db')
const { authRoute } = require('./routes')
const app = express()
const PORT = fromEnv('APP_PORT') || 3000;

connection()

app.use(express.json());
app.use(cors());
app.use('/api/v1/auth',authRoute)
app.use((req, res, next) => {
    logger.info({
        method: req.method,
        url: req.url,
        headers: req.headers,
    });
    next();
});


app.get("/ping", (req, res) => {
  res.status(200).json({ message:' Working!' })
});


app.listen(PORT, () => {
    logger.info(`🚀 Server is running on port ${PORT}`);
});
