import express, { Request, Response, Router } from 'express';

import { readFileSync } from 'fs';

const indexRouter : Router = (() => {
  const router = express.Router();

  router.post('/new-dog', (req, res) => {
    console.log(req.body)
    res.redirect('/')
  });

  router.get('/get-dog', (req, res) => {
    res.send(req.query);
  });

  return router;
})();

export { indexRouter };