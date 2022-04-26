const tesseract = require("node-tesseract-ocr")
const fs = require("fs")
const img = fs.readFileSync("demo.png")
const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}

tesseract
  .recognize(img, config)
  .then((text) => {
    console.log("Result:", text)
  })
  .catch((error) => {
    console.log(error.message)
  })
