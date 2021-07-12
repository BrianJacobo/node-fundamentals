const sharp = require('sharp')

// modificar el tamaño de la imagen
sharp('./javascript-3.jpg').resize(380).toFile('resize.png')

// A escala de grises
sharp('./javascript-3.jpg').resize(380).graysacle().toFile('resize.png')