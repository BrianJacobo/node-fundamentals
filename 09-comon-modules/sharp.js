const sharp = require('sharp')

sharp('./javascript-3.jpg').resize(380).toFile('resize.png')