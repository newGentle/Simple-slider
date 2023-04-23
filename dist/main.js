/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/img/image1.png":
/*!****************************!*\
  !*** ./src/img/image1.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/image1.png";

/***/ }),

/***/ "./src/img/image2.png":
/*!****************************!*\
  !*** ./src/img/image2.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/image2.png";

/***/ }),

/***/ "./src/img/image3.png":
/*!****************************!*\
  !*** ./src/img/image3.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/image3.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/css/style.css */ "./src/css/style.css");
/* harmony import */ var _src_img_image1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/img/image1.png */ "./src/img/image1.png");
/* harmony import */ var _src_img_image2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/img/image2.png */ "./src/img/image2.png");
/* harmony import */ var _src_img_image3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/img/image3.png */ "./src/img/image3.png");










const details = {
item1: fetch('http://localhost:3000/item1/')
.then((response) => response.json())
.then((data) => JSON.parse(data)),

item2: fetch('http://localhost:3000/item2/')
.then((response) => response.json())
.then((data) => JSON.parse(data)),

item3: fetch('http://localhost:3000/item3/')
.then((response) => response.json())
.then((data) => JSON.parse(data)),
};

console.log(details['item1']);
function setNextElement(item) {
    const mainImage = document.querySelector('.img>img');
    const cityText = document.querySelector('.city>span');
    const apartmentText = document.querySelector('.apartment>span');
    const timeText = document.querySelector('.time>span');
    const costText = document.querySelector('.cost>span');
    
    mainImage.setAttribute('class', 'fading');
    
    mainImage.src = details[item].image;
    
    cityText.innerHTML = details[item].city;
    apartmentText.innerHTML = details[item].apartment;
    timeText.innerHTML = details[item].time;
    costText.innerHTML = details[item].cost;
    sto();

    function sto() {
        let timeOut = setTimeout(deleteFading, 500);
    };
    function deleteFading() {
        mainImage.removeAttribute('class', 'fading');
    }

};

const links = document.querySelectorAll('.link');
const dots = document.querySelectorAll('.dots');

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const nextElement = '';

links.forEach(item => {
    item.addEventListener('click', () => {
        links.forEach(i => i.setAttribute('data-state', ''));
        item.setAttribute('data-state', 'active-link');
        setNextElement(item.classList.item(1));
        
        changeDot(item.classList.item(1));        
    });
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        dots.forEach(i => {
            i.setAttribute('data-state', '');
            i.querySelector('rect').setAttribute('fill-opacity', '0.3');
        });
        dot.setAttribute('data-state', 'active-dot');
        setNextElement(dot.classList.item(1));
        
        changeLink(dot.classList.item(1));        
    });
});





leftArrow.addEventListener('click', () => {
    let slider=[];
    for (let item of Object.keys(details)) {
        slider.push(item);
    }
    dots.forEach(dot => {
        if (dot.hasAttribute('data-state') && dot.getAttribute('data-state') == 'active-dot') { 
            if (dot.classList.item(1) == slider[0]) {
                nextElement = slider[slider.length - 1];
            }
            else {
                nextElement = slider[slider.indexOf(dot.classList.item(1)) - 1 ];
            };
            
        }
    });
    changeDot(nextElement);
    changeLink(nextElement);
    setNextElement(nextElement);

});

rightArrow.addEventListener('click', () => {
    
    let slider=[];
    for (let item of Object.keys(details)) {
        slider.push(item);
    };
    dots.forEach(dot => {
        console.log(dots.length);
        if (dot.hasAttribute('data-state') && dot.getAttribute('data-state') == 'active-dot') { 
            if (dot.classList.item(1) == slider[slider.length - 1]) {
                nextElement = slider[0];
            }
            else {
                nextElement = slider[slider.indexOf(dot.classList.item(1)) + 1 ];
            };
            
        };
    });
    changeDot(nextElement);
    changeLink(nextElement);
    setNextElement(nextElement);

});


function changeDot(dotClassName) {
    dots.forEach(dot => {
        dot.setAttribute('data-state', '');
        dot.querySelector('rect').setAttribute('fill-opacity', '0.3');
        if (dot.classList.item(1) == dotClassName) {
            dot.setAttribute('data-state', 'active-dot');
        };
    });
};

function changeLink(linkClassName) {
    links.forEach(link => {
        link.setAttribute('data-state', '');
        if (link.classList.item(1) == linkClassName) {
            link.setAttribute('data-state', 'active-link');
        };
    });
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmYTtBQUNiO0FBQzhCO0FBQ2E7QUFDQTtBQUNBO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NmLTEzLjctaHcwMy8uL3NyYy9jc3Mvc3R5bGUuY3NzPzczYmYiLCJ3ZWJwYWNrOi8vc2YtMTMuNy1odzAzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NmLTEzLjctaHcwMy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NmLTEzLjctaHcwMy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NmLTEzLjctaHcwMy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zZi0xMy43LWh3MDMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuLi9zcmMvY3NzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBpbWFnZTEgZnJvbSAnLi4vc3JjL2ltZy9pbWFnZTEucG5nJztcclxuaW1wb3J0IGltYWdlMiBmcm9tICcuLi9zcmMvaW1nL2ltYWdlMi5wbmcnO1xyXG5pbXBvcnQgaW1hZ2UzIGZyb20gJy4uL3NyYy9pbWcvaW1hZ2UzLnBuZyc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBkZXRhaWxzID0ge1xyXG5pdGVtMTogZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9pdGVtMS8nKVxyXG4udGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuLnRoZW4oKGRhdGEpID0+IEpTT04ucGFyc2UoZGF0YSkpLFxyXG5cclxuaXRlbTI6IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvaXRlbTIvJylcclxuLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbi50aGVuKChkYXRhKSA9PiBKU09OLnBhcnNlKGRhdGEpKSxcclxuXHJcbml0ZW0zOiBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2l0ZW0zLycpXHJcbi50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4udGhlbigoZGF0YSkgPT4gSlNPTi5wYXJzZShkYXRhKSksXHJcbn07XHJcblxyXG5jb25zb2xlLmxvZyhkZXRhaWxzWydpdGVtMSddKTtcclxuZnVuY3Rpb24gc2V0TmV4dEVsZW1lbnQoaXRlbSkge1xyXG4gICAgY29uc3QgbWFpbkltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZz5pbWcnKTtcclxuICAgIGNvbnN0IGNpdHlUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHk+c3BhbicpO1xyXG4gICAgY29uc3QgYXBhcnRtZW50VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcGFydG1lbnQ+c3BhbicpO1xyXG4gICAgY29uc3QgdGltZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZT5zcGFuJyk7XHJcbiAgICBjb25zdCBjb3N0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3N0PnNwYW4nKTtcclxuICAgIFxyXG4gICAgbWFpbkltYWdlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmFkaW5nJyk7XHJcbiAgICBcclxuICAgIG1haW5JbWFnZS5zcmMgPSBkZXRhaWxzW2l0ZW1dLmltYWdlO1xyXG4gICAgXHJcbiAgICBjaXR5VGV4dC5pbm5lckhUTUwgPSBkZXRhaWxzW2l0ZW1dLmNpdHk7XHJcbiAgICBhcGFydG1lbnRUZXh0LmlubmVySFRNTCA9IGRldGFpbHNbaXRlbV0uYXBhcnRtZW50O1xyXG4gICAgdGltZVRleHQuaW5uZXJIVE1MID0gZGV0YWlsc1tpdGVtXS50aW1lO1xyXG4gICAgY29zdFRleHQuaW5uZXJIVE1MID0gZGV0YWlsc1tpdGVtXS5jb3N0O1xyXG4gICAgc3RvKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RvKCkge1xyXG4gICAgICAgIGxldCB0aW1lT3V0ID0gc2V0VGltZW91dChkZWxldGVGYWRpbmcsIDUwMCk7XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gZGVsZXRlRmFkaW5nKCkge1xyXG4gICAgICAgIG1haW5JbWFnZS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhZGluZycpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmsnKTtcclxuY29uc3QgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb3RzJyk7XHJcblxyXG5jb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1hcnJvdycpO1xyXG5jb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LWFycm93Jyk7XHJcbmNvbnN0IG5leHRFbGVtZW50ID0gJyc7XHJcblxyXG5saW5rcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsaW5rcy5mb3JFYWNoKGkgPT4gaS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCAnJykpO1xyXG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgJ2FjdGl2ZS1saW5rJyk7XHJcbiAgICAgICAgc2V0TmV4dEVsZW1lbnQoaXRlbS5jbGFzc0xpc3QuaXRlbSgxKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2hhbmdlRG90KGl0ZW0uY2xhc3NMaXN0Lml0ZW0oMSkpOyAgICAgICAgXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5kb3RzLmZvckVhY2goZG90ID0+IHtcclxuICAgIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkb3RzLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgICAgIGkuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgJycpO1xyXG4gICAgICAgICAgICBpLnF1ZXJ5U2VsZWN0b3IoJ3JlY3QnKS5zZXRBdHRyaWJ1dGUoJ2ZpbGwtb3BhY2l0eScsICcwLjMnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb3Quc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgJ2FjdGl2ZS1kb3QnKTtcclxuICAgICAgICBzZXROZXh0RWxlbWVudChkb3QuY2xhc3NMaXN0Lml0ZW0oMSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNoYW5nZUxpbmsoZG90LmNsYXNzTGlzdC5pdGVtKDEpKTsgICAgICAgIFxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxldCBzbGlkZXI9W107XHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIE9iamVjdC5rZXlzKGRldGFpbHMpKSB7XHJcbiAgICAgICAgc2xpZGVyLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgICBkb3RzLmZvckVhY2goZG90ID0+IHtcclxuICAgICAgICBpZiAoZG90Lmhhc0F0dHJpYnV0ZSgnZGF0YS1zdGF0ZScpICYmIGRvdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnKSA9PSAnYWN0aXZlLWRvdCcpIHsgXHJcbiAgICAgICAgICAgIGlmIChkb3QuY2xhc3NMaXN0Lml0ZW0oMSkgPT0gc2xpZGVyWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0RWxlbWVudCA9IHNsaWRlcltzbGlkZXIubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0RWxlbWVudCA9IHNsaWRlcltzbGlkZXIuaW5kZXhPZihkb3QuY2xhc3NMaXN0Lml0ZW0oMSkpIC0gMSBdO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNoYW5nZURvdChuZXh0RWxlbWVudCk7XHJcbiAgICBjaGFuZ2VMaW5rKG5leHRFbGVtZW50KTtcclxuICAgIHNldE5leHRFbGVtZW50KG5leHRFbGVtZW50KTtcclxuXHJcbn0pO1xyXG5cclxucmlnaHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIFxyXG4gICAgbGV0IHNsaWRlcj1bXTtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgT2JqZWN0LmtleXMoZGV0YWlscykpIHtcclxuICAgICAgICBzbGlkZXIucHVzaChpdGVtKTtcclxuICAgIH07XHJcbiAgICBkb3RzLmZvckVhY2goZG90ID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkb3RzLmxlbmd0aCk7XHJcbiAgICAgICAgaWYgKGRvdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnKSAmJiBkb3QuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJykgPT0gJ2FjdGl2ZS1kb3QnKSB7IFxyXG4gICAgICAgICAgICBpZiAoZG90LmNsYXNzTGlzdC5pdGVtKDEpID09IHNsaWRlcltzbGlkZXIubGVuZ3RoIC0gMV0pIHtcclxuICAgICAgICAgICAgICAgIG5leHRFbGVtZW50ID0gc2xpZGVyWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV4dEVsZW1lbnQgPSBzbGlkZXJbc2xpZGVyLmluZGV4T2YoZG90LmNsYXNzTGlzdC5pdGVtKDEpKSArIDEgXTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY2hhbmdlRG90KG5leHRFbGVtZW50KTtcclxuICAgIGNoYW5nZUxpbmsobmV4dEVsZW1lbnQpO1xyXG4gICAgc2V0TmV4dEVsZW1lbnQobmV4dEVsZW1lbnQpO1xyXG5cclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlRG90KGRvdENsYXNzTmFtZSkge1xyXG4gICAgZG90cy5mb3JFYWNoKGRvdCA9PiB7XHJcbiAgICAgICAgZG90LnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsICcnKTtcclxuICAgICAgICBkb3QucXVlcnlTZWxlY3RvcigncmVjdCcpLnNldEF0dHJpYnV0ZSgnZmlsbC1vcGFjaXR5JywgJzAuMycpO1xyXG4gICAgICAgIGlmIChkb3QuY2xhc3NMaXN0Lml0ZW0oMSkgPT0gZG90Q2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIGRvdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCAnYWN0aXZlLWRvdCcpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUxpbmsobGlua0NsYXNzTmFtZSkge1xyXG4gICAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsICcnKTtcclxuICAgICAgICBpZiAobGluay5jbGFzc0xpc3QuaXRlbSgxKSA9PSBsaW5rQ2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgJ2FjdGl2ZS1saW5rJyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9