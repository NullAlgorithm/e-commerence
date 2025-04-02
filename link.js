const URL_Path = window.location.pathname;

const navBar = [
    {name: "Home" , url: "/index.html"},
    {name:"Casual", url: "/casual.html"},
    {name:"Product", url: "/product.html"},
    {name:"Cart", url:"/cart.html"},
];

const navBarView = navBar.map(
    (item) => `<a href="${item.url}" class="${URL_Path === item.url ? "text-red-500" : "text-blue-500"}">${item.name}</a>`
).join("");

document.getElementById("content").innerHTML = `<div class="flex items-center gap-5 border-b  py-2">${navBarView}</div?`;


