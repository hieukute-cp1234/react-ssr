import React from "react";
import fs from "fs";
import ReactDOMServer from "react-dom/server";
import express from "express";
import App from "../client/components/app";

const PORT = process.env.PORT || 3000;
const app = express();
app.use("/static", express.static(__dirname));

const createPageApp = async () => {
  const reactApp = ReactDOMServer.renderToString(<App />);

  const html = await fs.promises.readFile(`${__dirname}/index.html`, "utf-8");
  const reactHtml = html.replace(
    '<div id="root"></div>',
    `<div id="root">${reactApp}</div>`
  );
  return reactHtml;
};

app.get("*", async (req, res) => {
  const indexHtml = await createPageApp();
  res.status(200).send(indexHtml);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
