'use strict';
import '../css/lazyImg.css';
let _win = window === undefined ? null : window;
let imgsArr = [];
let imgsLength = 0;
let oldload;
let load = [];
let lazyImgTimeout;
let lazyImgLoadTimeout;
let theHeight;
let winHeight = _win ? _win.innerHeight : 0;
let lazyImg = function() {
    imgsArr = document.querySelectorAll('.lazyImg');
    imgsLength = imgsArr.length;
    winHeight = window.innerHeight;
};

let lazyImgScroll = function() {
    theHeight = document.documentElement.scrollTop || (document.body != null ? document.body.scrollTop : 0);
    theHeight += winHeight;

    clearTimeout(lazyImgTimeout);
    lazyImgTimeout = setTimeout(function() {
        for (var i = 0; i < imgsLength; i++) {
            var imgTop;
            if (imgsArr[i].dataset.top == undefined) {
                imgTop = imgsArr[i].offsetTop;
                // console.log(getOffset(imgsArr[i]).top);
                imgsArr[i].dataset.top = imgTop + getOffset(imgsArr[i]).top;
            }
            imgTop = imgsArr[i].dataset.top;
            if (imgTop >= (theHeight - winHeight * 1) && imgTop <= theHeight) {
                imgsArr[i].src = imgsArr[i].dataset.src;
                imgsArr[i].dataset.isload = true;
                imgsArr[i].onload = function() {
                    this.style.opacity = '1';
                    this.onload = null;
                };
            }
        }
    }, 50);

    function getOffset(node, offset) {
        if (!offset) {
            offset = {};
            offset.top = 0;
            offset.left = 0;
        }

        var imgParent = node.offsetParent;
        while (imgParent && imgParent.tagName !== 'BODY') {
            offset.top += imgParent.offsetTop;
            offset.left += imgParent.offsetLeft;
            imgParent = imgParent.offsetParent;
        }
        return offset;
    }
};
let fn = {
    install(vue, options) {
        let _opt = {
                timeout: options ? options.timeout : 200
            }
            // console.log('imglazy success');
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        oldload = window.onload;
        if (MutationObserver != null) {
            load.push(function() {
                var observer = new MutationObserver(function() {
                    clearTimeout(lazyImgLoadTimeout);
                    lazyImgLoadTimeout = setTimeout(function() {
                        lazyImg();
                        window.onscroll();
                    }, 200);
                });
                observer.observe(document, {
                    subtree: true,
                    childList: true
                });
            });
        } else {
            load.push(function() {
                document.body.addEventListener('DOMSubtreeModified', function() {
                    clearTimeout(lazyImgLoadTimeout);
                    lazyImgLoadTimeout = setTimeout(function() {
                        lazyImg();
                        window.onscroll();
                    }, _opt.timeout);
                }, false);
            });
        }
        window.onscroll = lazyImgScroll;
        window.lazyImg = lazyImg;
        load.push(lazyImg);
        load.push(lazyImgScroll);
        window.onload = function() {
            oldload && oldload();
            load.forEach(element => {
                element();
            });
        }
    }
};
export default fn;