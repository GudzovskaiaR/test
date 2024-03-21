function addTask() {
  var input = document.getElementById('input');
  // отримати поточний текст з поля введення
  var newTask = input.value;
  // додавати новий елемент до списку, тільки якщо було введено якийсь текст
  if (newTask != '') {
    // створити новий елемент списку HTML
    var item = document.createElement('li');
    // додати HTML для кнопок і тексту нового завдання
    // Зверніть увагу, що потрібно використовувати одинарні лапки '' замість подвійних "" в HTML
    item.innerHTML =
      '<input type="button" class="done" onclick="markDone(this.parentNode)" value="✓" /> ' +
      '<input type="button" class="remove" onclick="remove(this.parentNode)" value="✕" /> ' +
      ' <input type="button" class="done" onclick="markDone(this.parentNode)"value="!"/>' +
      newTask;

    // додати новий елемент до наявного списку
    document.getElementById('tasks').appendChild(item);

    /* Крок 4 нижче тут */
    input.value = '';
    input.placeholder = 'enter next task …';
  }
}

// змінити стиль, що використовується для цього елемента
function markDone(item) {
  item.className = 'finished';
}

/* Крок 7 нижче тут */
function remove(item) {
  // повністю видалити елемент з документа
  if (item.classList.contains('finished')) {
    item.remove();
  }
}

/* Крок 11 нижче тут */
function doAbout() {
  var divAbout = document.querySelector('.divabout');
  divAbout.innerHTML = 'author Ruslana Gudzovskaia';
}

/* Крок 14 нижче тут */
function clearAbout() {
  var divAbout = document.querySelector('.divabout');
  if (divAbout != '') {
    divAbout.innerHTML = '';
  }
}
// ===========================================================================================
// function dolime() {
//   var dd1 = document.getElementById('d1');
//   dd1.style.backgroundColor = 'lime';
// }
// function doyellow() {
//   var dd1 = document.getElementById('d1');
//   dd1.style.backgroundColor = 'withe';
//   var ctx = dd1.getContext('2d');
//   ctx.fillStyle = 'yellow';
//   ctx.fillRect(10, 10, 40, 40);
//   ctx.fillRect(60, 10, 40, 40);
//   ctx.fillStyle = 'black';
//   ctx.font = '30px Arial';
//   ctx.fillText('Hello', 10, 80);
// }
// function changecolor() {
//   var dd1 = document.getElementById('div1');
//   var dd2 = document.getElementById('div2');
//   dd1.className = 'blue';
//   dd2.className = 'orange';
// }
// function doRed() {
//   var dd1 = document.getElementById('div1');
//   var dd2 = document.getElementById('div2');
//   dd1.style.backgroundColor = 'red';
//   dd2.style.backgroundColor = 'red';

//   ctx.fillStyle = 'yellow';
//   ctx.fillRect(10, 10, 40, 40);
//   ctx.fillRect(60, 10, 40, 40);
//   ctx.fillStyle = 'black';
//   ctx.font = '30px Arial';
//   ctx.fillText('Hello', 10, 80);
// // }
// function doGreen() {
//   var dd1 = document.getElementById('div1');

//   var ctx = dd1.getContext('2d');
//   ctx.clearRect(0, 0, dd1.width, dd1.height);
//   dd1.style.backgroundColor = 'green';

// }
// function docolor() {
//   var dd1 = document.getElementById('div1');
//   var colorinput = document.getElementById('clr');
//   var color = colorinput.value;
//   dd1.style.backgroundColor = color;
// }
// function dosquare() {
//   var dd1 = document.getElementById('div1');
//   var sizeinput = document.getElementById('sldr');
//   var size = sizeinput.value;
//   var ctx = dd1.getContext('2d');
//   ctx.clearRect(0, 0, dd1.width, dd1.height);
//   ctx.fillStyle = 'yellow';
//   ctx.fillRect(10, 10, size, size);
// }
// function bckgcolor() {
//   var element = document.getElementById('can2');
//   element.className = 'pink';
// }
// function doChangeColor() {
//   var element = document.getElementById('can2');
//   var colorInput = document.getElementById('inputColor');
//   console.log(colorInput);
//   var color = colorInput.value;
//   element.style.backgroundColor = color;
// }
// function doRange() {
//   var element = document.getElementById('can2');
//   var rangeInput = document.getElementById('inputRange');
//   var size = rangeInput.value;
//   var x = rangeInput.min;
//   var x2 = parseInt(x) + 10;
//   console.log(x2);

//   var ctx = element.getContext('2d');
//   ctx.clearRect(0, 0, element.width, element.height);
//   ctx.fillStyle = 'grey';
//   ctx.fillRect(0, 0, size, size);

//   ctx.fillStyle = 'red';
//   ctx.fillRect(x2, x2, size, size);
//   ctx.fillStyle = 'blue';
//   ctx.fillRect(25, 25, size, size);
// }

// =============================================================================================
// var paintcanvas = document.getElementById('canvas1');

// var context = paintcanvas.getContext('2d');
// var color = 'black';
// var radius = 50;
// // малюватиме, лише якщо натискати на мишку (спрацьовує лише з натиснутою кнопкою)
// var isPainting = false;

// var inputElement = document.getElementById('canW');
// var inputValue = inputElement.value;

// function setWidth(value) {
//   if (isNumeric(value)) {
//     paintcanvas.width = value;
//   }
// }
// function setHeight(value) {
//   if (isNumeric(value)) {
//     paintcanvas.height = value;
//   }
// }
// function startPaint() {
//   isPainting = true;
// }
// function endPaint() {
//   isPainting = false;
// }

// function clearCanvas() {
//   context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
// }
// function doPaint(x, y) {
//   if (isPainting) {
//     paintCircle(x, y);
//   }
// }
// function paintCircle(x, y) {
//   // щоразу починайте нове коло (circle)
//   context.beginPath();
//   // малюйте коло з радіусом 2*PI навколо заданої точки
//   context.arc(x, y, radius, 0, Math.PI * 2, true);
//   context.fillStyle = color;
//   context.fill();
// }
// function setColor(newColor) {
//   color = newColor;
// }
// function resizeBrush(newSize) {
//   radius = newSize;
//   document.getElementById('sizeOutput').value = newSize;
// }

// // перевірте, щоб value було числовим значенням
// function isNumeric(value) {
//   // стандартна функція JavaScript, аби визначити, чи рядок можна перетворити рядок на число
//   return !isNaN(value);
// }
// =================================================================================
// Композиція зображень
// var image;
// var imageGrey;
// function upload() {
//   var fileinput = document.getElementById('finput');
//   image = new SimpleImage(fileinput);
//   imageGrey = new SimpleImage(fileinput);
//   var canvas = document.getElementById('can2');
//   image.drawTo(canvas);
// }
// function makeGray() {
//   for (var pixel of imageGrey.values()) {
//     var newColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
//     pixel.setRed(newColor);
//     pixel.setGreen(newColor);
//     pixel.setBlue(newColor);
//   }
//   var canvasGrey = document.getElementById('canGrey');
//   imageGrey.drawTo(canvasGrey);
// }

// Композиція зображень===============================================
// var fgImage = null;
// var bgImage = null;
// var fgCanvas;
// var bgCanvas;

// function loadForegroundImage() {
//   var file = document.getElementById('fgfile');
//   fgImage = new SimpleImage(file);
//   fgCanvas = document.getElementById('fgcan');
//   fgImage.drawTo(fgCanvas);
// }

// function loadBackgroundImage() {
//   var file = document.getElementById('bgfile');
//   bgImage = new SimpleImage(file);
//   bgCanvas = document.getElementById('bgcan');
//   bgImage.drawTo(bgCanvas);
// }

// function createComposite() {
//   // this function creates a new image with the dimensions of the foreground image and returns the composite green screen image
//   var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
//   var greenThreshold = 240;
//   for (var pixel of fgImage.values()) {
//     var x = pixel.getX();
//     var y = pixel.getY();
//     if (pixel.getGreen() > greenThreshold) {
//       //pixel is green, use background
//       var bgPixel = bgImage.getPixel(x, y);
//       output.setPixel(x, y, bgPixel);
//     } else {
//       //pixel is not green, use foreground
//       output.setPixel(x, y, pixel);
//     }
//   }
//   return output;
// }

// function doGreenScreen() {
//   //check that images are loaded
//   if (fgImage == null || !fgImage.complete()) {
//     alert('Foreground image not loaded');
//   }
//   if (bgImage == null || !bgImage.complete()) {
//     alert('Background image not loaded');
//   }
//   // clear canvases
//   clearCanvas();
//   // call createComposite, which does green screen algorithm and returns a composite image
//   var finalImage = createComposite();
//   finalImage.drawTo(fgCanvas);
// }

// function clearCanvas() {
//   doClear(fgCanvas);
//   doClear(bgCanvas);
// }

// function doClear(canvas) {
//   var context = canvas.getContext('2d');
//   context.clearRect(0, 0, canvas.width, canvas.height);
// }
// ===========================================================================
// var imageOriginal = null;
// var imageRed = null;
// var imageGrey = null;
// var imageRainbow = null;
// var imageWindow = null;
// var canvas = document.getElementById('canFilter');

// function imageIsLoaded(image) {
//   if (image == null || !image.complete()) {
//     alert('Image not loaded');
//     upload();
//     return false;
//   }
//   return true;
// }

// function upload() {
//   var selectImg = document.getElementById('btnSelect');
//   imageOriginal = new SimpleImage(selectImg);
//   imageRed = new SimpleImage(selectImg);
//   imageGrey = new SimpleImage(selectImg);
//   imageRainbow = new SimpleImage(selectImg);
//   imageWindow = new SimpleImage(selectImg);
//   imageOriginal.drawTo(canvas);
// }
// function filterGrey() {
//   for (var pixel of imageGrey.values()) {
//     var newColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
//     pixel.setRed(newColor);
//     pixel.setGreen(newColor);
//     pixel.setBlue(newColor);
//   }
// }
// function doGrey() {
//   if (imageIsLoaded(imageGrey)) {
//     filterGrey(imageGrey);
//     imageGrey.drawTo(canvas);
//   }
// }
// function doRed() {
//   if (imageIsLoaded(imageRed)) {
//     filterRed();
//     imageRed.drawTo(canvas);
//   }
// }
// function filterRed() {
//   for (var pixel of imageRed.values()) {
//     var red = pixel.getRed();
//     var green = pixel.getGreen();
//     var blue = pixel.getBlue();
//     var averageValue = (red + green + blue) / 3;
//     if (averageValue < 128) {
//       pixel.setRed(150);
//       pixel.setGreen(0);
//       pixel.setBlue(0);
//     } else {
//       pixel.setRed(250);
//       pixel.setGreen(averageValue * 2 - 255);
//       pixel.setBlue(averageValue * 2 - 255);
//     }
//   }
// }
// function filterRainbow() {
//   var height = imageRainbow.height;
//   for (var pixel of imageRainbow.values()) {
//     var y = pixel.getY();
//     var hColor = height / 7;
//     var red = pixel.getRed();
//     var green = pixel.getGreen();
//     var blue = pixel.getBlue();
//     var avg = (red + green + blue) / 3;
//     if (y < hColor) {
//       pixel.setRed(avg * 2);
//       pixel.setGreen(0);
//       pixel.setBlue(0);
//     }
//     if (y >= hColor && y <= hColor * 2) {
//       pixel.setRed(2 * avg);
//       pixel.setGreen(0.8 * avg);
//       pixel.setBlue(0);
//     }
//     if (y >= hColor * 2 && y <= hColor * 3) {
//       pixel.setRed(avg * 2);
//       pixel.setGreen(avg * 2);
//       pixel.setBlue(0);
//     }
//     if (y >= hColor * 3 && y <= hColor * 4) {
//       pixel.setRed(0);
//       pixel.setGreen(avg * 2);
//       pixel.setBlue(0);
//     }
//     if (y >= hColor * 4 && y <= hColor * 5) {
//       pixel.setRed(0);
//       pixel.setGreen(0);
//       pixel.setBlue(avg * 2);
//     }
//     if (y >= hColor * 5 && y <= hColor * 6) {
//       pixel.setRed(avg * 0.8);
//       pixel.setGreen(0);
//       pixel.setBlue(avg * 2);
//     }
//     if (y >= hColor * 6 && y <= height) {
//       pixel.setRed(avg * 1.6);
//       pixel.setGreen(0);
//       pixel.setBlue(avg * 1.6);
//     }
//   }
// }
// function doRainbow() {
//   imageIsLoaded(imageRainbow);
//   filterRainbow();
//   imageRainbow.drawTo(canvas);
// }

// function filterWindow() {
//   for (var pixel of imageWindow.values()) {
//     var width = imageWindow.width;
//     var height = imageWindow.height;
//     var wB = 10;
//     var wW = (width - wB * 4) / 3;
//     var hW = (height - wB * 3) / 2;

//     var x = pixel.getX();
//     var y = pixel.getY();
//     if (
//       x < wB ||
//       (x >= wB + wW && x <= wB * 2 + wW) ||
//       (x >= (wW + wB) * 2 && x <= (wW + wB) * 2 + wB) ||
//       (x >= width - wB && x <= width)
//     ) {
//       pixel.setRed(255);
//       pixel.setGreen(0);
//       pixel.setBlue(0);
//     }
//     if (
//       y < wB ||
//       (y >= wB + hW && y <= wB * 2 + hW) ||
//       (y >= height - wB && y <= height)
//     ) {
//       pixel.setRed(255);
//       pixel.setGreen(0);
//       pixel.setBlue(0);
//     }
//   }
// }
// function doWindow() {
//   if (imageIsLoaded(imageWindow)) {
//     filterWindow(imageWindow);
//     imageWindow.drawTo(canvas);
//   }
// }
// function reset() {
//   if (imageIsLoaded(imageOriginal)) {
//     imageOriginal.drawTo(canvas);
//     var selectImg = document.getElementById('btnSelect');
//     imageRed = new SimpleImage(selectImg);
//     imageGrey = new SimpleImage(selectImg);
//     imageRainbow = new SimpleImage(selectImg);
//     imageWindow = new SimpleImage(selectImg);
//   }
// }
// function doBlur() {}
