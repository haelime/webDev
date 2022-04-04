/*!
* Start Bootstrap - Full Width Pics v5.0.5 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const targets = document.querySelectorAll(".fade-in-box");
const options = { root: null, threshold: 0.1, rootMargin: "-0px" };
const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        const container = entry.target;
        if (entry.isIntersecting) {
            container.classList.add("fade-in-box");
        } else {
            container.classList.remove("fade-in-box");
        }
    });
}, options);

targets.forEach((target) => {
    observer.observe(target);
});