const puppeteer = require("puppeteer"); //funciona de forma asincrona

//Función autoejecutada
//le podnremos async para poder usar los await
async function scraping() {
  //Nuestro código
  try {
    console.log("Lanzamos navegador");
    const browser = await puppeteer.launch({
        headless:false
    });

    const page = await browser.newPage()
    // await page.goto('https://es.wikipedia.org/wiki/Node.js')
    // await page.goto('https://www.linkedin.com/in/brian-jacobo-fuentes-750b75196/')
    await page.goto('https://ubuntu.com/')

    var titulo1 = await page.evaluate(()=>{
        const h1 = document.querySelector('h1')
        return h1.innerHTML
    })

    console.log(titulo1);

    console.log("Cerramos navegador..");
    browser.close();
    console.log("navegador cerador");
  } catch (error) {
    console.log("hay un error");
    console.error(error);
  }
}
scraping();
