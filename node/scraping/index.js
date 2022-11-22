const puppeteer = require("puppeteer");

// A la hora de recuperar datos puppeteer resuelve promesas

const browserURL = async () => {
  const browser = await puppeteer.launch();
  // page nos permite interacturar con el navegador
  const page = await browser.newPage();
  // Navegar a la página
  await page.goto("https://www.rumbo.es/vuelos/");
  // Capturar página
  await page.screenshot( { path: "./screenshot/rumbo.jpg" } );

  await page.type('.slvrn.rsqqi, .riJbp.PGlrP', 'buscador')
  await page.screenshot( { path: "./screenshot/tripadvisor.jpg" } );
  // close() se utiliza para cerrar el nagador
  await browser.close();
};

browserURL();
