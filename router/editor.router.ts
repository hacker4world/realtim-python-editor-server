import { Router } from "express";
import axios from "axios";

export const router = Router();

router.post("/run", (req, res) => {
  const options = {
    script: req.body.code,
    language: "python3",
    clientId: process.env.CLIENT_ID as string,
    clientSecret: process.env.CLIENT_SECRET as string,
  };
  axios.post(process.env.API_URL as string, options).then((response) => {
    console.log(response.data);
    res.status(200).json(response.data);
  });
});
