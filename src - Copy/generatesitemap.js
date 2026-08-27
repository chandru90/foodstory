import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";

const sitemap = new SitemapStream({
  hostname: "https://foodstorys.com",
});

const routes = [
  "/",
  "/generaterecipe",
  "/foodstory",
  "/nutrireads",
];

routes.forEach((url) => {
  sitemap.write({ url });
});

sitemap.end();

streamToPromise(sitemap).then((data) => {
  fs.writeFileSync("public/sitemap.xml", data);
});

