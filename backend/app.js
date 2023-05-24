import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const delay = (secs) => new Promise((res) => setTimeout(res, secs * 1000));

app.get("/", async (req, res) => {
  if (!req.query.page || req.query.page === "1") {
    await delay(5);
    res.send({
      name: "John",
    });
  } else if (req.query.page === "2") {
    await delay(5);
    res.send({
      name: "Jane",
    });
  } else if (req.query.page === "3") {
    await delay(5);
    res.send({
      name: "Joe",
    });
  } else if (req.query.page === "4") {
    await delay(5);
    res.send({
      name: "Jill",
    });
  } else {
    await delay(5);
    res.send({
      name: "Jack",
    });
  }
});

app.listen(3000, () => console.log("Server Running"));
