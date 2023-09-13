const cars = [
    {
        id: '1',
        image: 'https://hips.hearstapps.com/hmg-prod/images/2023-bmw-8-series-03-1643213321.jpg?crop=0.790xw:0.590xh;0.116xw,0.251xh&resize=1200:*',
        title: 'BMW',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium corporis eum fugiat illum, incidunt ipsum laborum magnam nulla odit officia ratione sed temporibus vitae? Iusto maiores provident quos.',
        price: '35950$'
    },
    {
        id: '2',
        image: 'https://www.motortrend.com/uploads/2023/07/2-2024-Audi-A8-front-view.jpg',
        title: 'Audi',
        description: 'A ab accusantium corporis eum fugiat illum, incidunt ipsum laborum magnam nulla odit officia ratione sed temporibus vitae? Iusto maiores provident quos.',
        price: '55500$'
    },
    {
        id: '3',
        image: 'https://www.topgear.com/sites/default/files/2023/03/1%20Volvo%20XC90.jpg',
        title: 'Volvo',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. incidunt ipsum laborum magnam nulla odit officia ratione sed temporibus vitae? Iusto maiores provident quos.',
        price:
            '15000$'
    }

];
const app = document.getElementById("app");
let htmlTags = "";
cars.forEach((item) => {
    htmlTags += `<div class="card" style="width: 18rem;">
<img src= ${item.image}>
<div class="card-body">
<h5 class="card-title">${item.title}</h5>
<p class="card-text">${item.description}</p>
<a href="#" class="btn btn-primary">${item.price}</a>
</div>
</div>
`
})




app.innerHTML = htmlTags;