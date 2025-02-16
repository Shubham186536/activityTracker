require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const DatabaseService = require('./services/database.service');
const authRoutes = require('./routes/auth.routes');
const activityRoutes = require('./routes/activity.routes');
const errorMiddleware = require('./middleware/error.middleware');
const rateLimitMiddleware = require('./middleware/rateLimit.middleware');
const config = require('./config/keys');

const app = express();

global.httpResponseHandlerError = require('./services/httpResponseHandler').httpResponseHandlerError
global.httpResponseSuccessHandler = require('./services/httpResponseHandler').httpResponseSuccessHandler

DatabaseService.connect();


app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api/', rateLimitMiddleware);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/auth', authRoutes);
app.use('/api/activities', activityRoutes);


app.use(errorMiddleware);


const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;