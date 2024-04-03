import { app, logger } from './server';

const PORT = 3000

const server = app.listen(PORT, () => {
  logger.info(__dirname)
  logger.info(`Server running on port http://:${PORT}`);
});

const onCloseSignal = () => {
  logger.info('sigint received, shutting down');
  server.close(() => {
    logger.info('server closed');
    process.exit();
  });
  setTimeout(() => process.exit(1), 10000).unref(); // Force shutdown after 10s
};

process.on('SIGINT', onCloseSignal);
process.on('SIGTERM', onCloseSignal);