import * as data from '../data/english.json';

// setting the tags with their necessary data from the json file

// header
const hero_1_image = document.getElementById('hero_1_image'); // image
hero_1_image.src = data.hero_1_image;

const hero_1_title = document.getElementById('hero_1_title');// title
hero_1_title.innerText = data.hero_1_title;

const article_info_1_byline = document.getElementById('article-info_1_byline');// author
article_info_1_byline.innerText = data.default["article-info_1_byline"];

const article_info_1_date = document.getElementById('article-info_1_date');// date
article_info_1_date.innerText = data.default["article-info_1_date"];

const article_info_1_category = document.getElementById('article-info_1_category');// category
article_info_1_category.innerText = data.default["article-info_1_category"];

const article_info_1_category_url = document.getElementById('article-info_1_category_url');// title
article_info_1_category_url.href = data.default["article-info_1_category_url"];

// main/body
function dealWithPs() {
    for( let i = 1; i <= 10; i++){
        if(i == 2) dealWithSelect();
        const p = document.createElement('p');
        p.setAttribute('id', `p-${i}`);
        p.innerText = data.default[`p_${i}_value`];
        document.querySelector('.ps').appendChild(p);
    }
}

dealWithPs()

function dealWithSelect(){
    const form = document.createElement('form');
    const select = document.createElement('select');
    
    for( let i = 1; i <= 32; i++){
        const option = document.createElement('option');
        option.value = data.default[`compare-tabs_1_city_${i}_cigg`];
        option.innerText = data.default[`compare-tabs_1_city_${i}_name`];
        select.appendChild(option);
    }

    form.appendChild(select);

    const display_ciggs = document.createElement('div');
    display_ciggs.setAttribute('id', 'display_ciggs');

    form.appendChild(display_ciggs);
    document.querySelector('.ps').appendChild(form);
}

const select = document.getElementsByTagName('select')[0];
select.addEventListener('change', (e) => {
    displayCigs(select.value);
});

function displayCigs(num){
    for(let i = 0; i < num; i++){
        const img = document.createElement("img");
        img.src = './src/img/ciggrette_icon.png';
        document.getElementById('display_ciggs').appendChild(img);
    }
}