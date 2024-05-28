import { StaticRouter } from "react-router-dom/server";
import fs from "fs";
import ReactDOMServer from "react-dom/server";
import express from "express";
import App from "../client/App";
import { ROUTES } from "../client/routers/routes";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static(__dirname));

const mapRoutes = ROUTES.map((route) => route.path);

const createPageApp = async (location: string) => {
  const reactApp = ReactDOMServer.renderToString(
    <StaticRouter location={location}>
      <App />
    </StaticRouter>
  );

  const html = await fs.promises.readFile(`${__dirname}/index.html`, "utf-8");
  const reactHtml = html.replace(
    '<div id="root"></div>',
    `<div id="root">${reactApp}</div>`
  );
  return reactHtml;
};

app.get("*", async (req: any, res: any) => {
  if (mapRoutes.includes(req.url)) {
    const indexHtml = await createPageApp(req.url);
    return res.status(200).send(indexHtml);
  }
  return res.status(200).send("");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
