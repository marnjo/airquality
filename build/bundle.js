'use strict';

var hero_1_image$1 = "https://news.files.bbci.co.uk/vj/live/idt-images/image-slider-hello/SMOG_vdyw4.jpg";
var hero_1_title$1 = "Delhi smog: How many cigarettes did you smoke this week?";
var p_1_value = "Breathing in Delhi is close to smoking more than a dozen cigarettes a day on an average. Click on your city to find out how many cigarettes you are smoking";
var total_cities_1_value = "32";
var p_2_value = "On November 7, Indian capital, Delhi woke up to a blanket of thick grey smog.  The toxic haze was so severe that politicians announced plans to close schools.  United Airlines shut all of its flights from the US to Delhi. Visibility was poor as pollution levels reached 30 times the World Health Organization's recommended limit in some areas.";
var p_3_value = "According to the data from the System of Air Quality Weather Forecasting and Research website, the levels of tiny particulate matter (known as PM 2.5) that enter deep into the lungs reached as high as 700 micrograms per cubic metre in some areas of Delhi on November 6th. The air quality standard for PM 2.5 is 15 µg/m3 and anything above 81 µg/m3 falls under poor air quality standard.";
var p_4_value = "Some reports claimed that New Delhi's air quality was so severe it was equivalent to smoking 45 cigarettes a day. We looked at the data to see if this was true. ";
var p_5_value = "Click on your city to find out how many cigarettes you have effectively smoked because of last week's pollution.";
var p_6_value = "Methodology for calculation: ";
var p_7_value = "A report by Berkeley Earth showed that in China, 1.6 million people die every year from an average exposure of 52 μg/m3 of PM2.5. To kill 1.6 million people would require, assuming 1.36 x9^6 deaths per cigarette, 1.1 trillion cigarettes. Since the population of China is 1.35 billion, that comes to 764 cigarettes every year per person, or about 2.4 cigarettes per day.";
var p_8_value = "Put another way, one cigarette is equivalent to an air pollution of 22 μg/m3 (Absolute value: 21.6 μg/m3) for one day.";
var p_9_value = "The average PM2.5 in Beijing over the year is about 85 μg/m3, equivalent to about 4 cigarettes per day. Similarly, if the air pollution in New Delhi, India, is 546 μg/m3, it is equivalent to about 25 cigarettes each day.";
var p_10_value = "We took the PM 2.5 data of 33 cities in India every day for one week. We calculated the mean of 6 days PM 2.5 data of each city and divided it by 21.6 μg/m3 to get the number of cigarettes. It is also imperative to say the numbers shown is the assumption that you ideally spent most of your time breathing air from outside.";
var english = {
	hero_1_image: hero_1_image$1,
	hero_1_title: hero_1_title$1,
	"article-info_1_byline": "By me!",
	"article-info_1_date": "20 November 2017",
	"article-info_1_category": "India",
	"article-info_1_category_url": "http://www.bbc.co.uk/news/world/asia/india",
	p_1_value: p_1_value,
	total_cities_1_value: total_cities_1_value,
	p_2_value: p_2_value,
	p_3_value: p_3_value,
	p_4_value: p_4_value,
	p_5_value: p_5_value,
	"compare-tabs_1_method": "1 cigarette is equivalent to an air pollution of 22 μg/m3 (Absolute value: 21.6 μg/m3) for one day.",
	"compare-tabs_1_title": "Select your city",
	"compare-tabs_1_city_1_name": "Ghaziabad",
	"compare-tabs_1_city_1_aqi": "283 PM2.5",
	"compare-tabs_1_city_1_cigg": "12",
	"compare-tabs_1_city_2_name": "Noida",
	"compare-tabs_1_city_2_aqi": "213 PM2.5",
	"compare-tabs_1_city_2_cigg": "10",
	"compare-tabs_1_city_3_name": "Delhi",
	"compare-tabs_1_city_3_aqi": "235 PM2.5",
	"compare-tabs_1_city_3_cigg": "10",
	"compare-tabs_1_city_4_name": "Lucknow",
	"compare-tabs_1_city_4_aqi": "158 PM2.5",
	"compare-tabs_1_city_4_cigg": "7",
	"compare-tabs_1_city_5_name": "Gurugram",
	"compare-tabs_1_city_5_aqi": "254 PM2.5",
	"compare-tabs_1_city_5_cigg": "11",
	"compare-tabs_1_city_6_name": "Faridabad",
	"compare-tabs_1_city_6_aqi": "220 PM2.5",
	"compare-tabs_1_city_6_cigg": "10",
	"compare-tabs_1_city_7_name": "Varanasi",
	"compare-tabs_1_city_7_aqi": "122 PM2.5",
	"compare-tabs_1_city_7_cigg": "5",
	"compare-tabs_1_city_8_name": "Kanpur",
	"compare-tabs_1_city_8_aqi": "268 PM2.5",
	"compare-tabs_1_city_8_cigg": "12",
	"compare-tabs_1_city_9_name": "Patna",
	"compare-tabs_1_city_9_aqi": "133 PM2.5",
	"compare-tabs_1_city_9_cigg": "6",
	"compare-tabs_1_city_10_name": "Muzaffarpur",
	"compare-tabs_1_city_10_aqi": "114 PM2.5",
	"compare-tabs_1_city_10_cigg": "5",
	"compare-tabs_1_city_11_name": "Mandi Gobindgarh",
	"compare-tabs_1_city_11_aqi": "75 PM2.5",
	"compare-tabs_1_city_11_cigg": "3",
	"compare-tabs_1_city_12_name": "Ludhiana",
	"compare-tabs_1_city_12_aqi": "69 PM2.5",
	"compare-tabs_1_city_12_cigg": "3",
	"compare-tabs_1_city_13_name": "Jodhpur",
	"compare-tabs_1_city_13_aqi": "126 PM2.5",
	"compare-tabs_1_city_13_cigg": "6",
	"compare-tabs_1_city_14_name": "Amritsar",
	"compare-tabs_1_city_14_aqi": "61 PM2.5",
	"compare-tabs_1_city_14_cigg": "3",
	"compare-tabs_1_city_15_name": "Ahmedabad",
	"compare-tabs_1_city_15_aqi": "91 PM2.5",
	"compare-tabs_1_city_15_cigg": "4",
	"compare-tabs_1_city_16_name": "Panchkula",
	"compare-tabs_1_city_16_aqi": "41 PM2.5",
	"compare-tabs_1_city_16_cigg": "2",
	"compare-tabs_1_city_17_name": "Gaya",
	"compare-tabs_1_city_17_aqi": "70 PM2.5",
	"compare-tabs_1_city_17_cigg": "3",
	"compare-tabs_1_city_18_name": "Nagpur",
	"compare-tabs_1_city_18_aqi": "27 PM2.5",
	"compare-tabs_1_city_18_cigg": "1",
	"compare-tabs_1_city_19_name": "Vijaywada",
	"compare-tabs_1_city_19_aqi": "32 PM2.5",
	"compare-tabs_1_city_19_cigg": "1",
	"compare-tabs_1_city_20_name": "Chandrapur",
	"compare-tabs_1_city_20_aqi": "43 PM2.5",
	"compare-tabs_1_city_20_cigg": "1",
	"compare-tabs_1_city_21_name": "Chennai",
	"compare-tabs_1_city_21_aqi": "58 PM2.5",
	"compare-tabs_1_city_21_cigg": "2",
	"compare-tabs_1_city_22_name": "Bhiwadi",
	"compare-tabs_1_city_22_aqi": "103 PM2.5",
	"compare-tabs_1_city_22_cigg": "4",
	"compare-tabs_1_city_23_name": "Mumbai",
	"compare-tabs_1_city_23_aqi": "44 PM2.5",
	"compare-tabs_1_city_23_cigg": "2",
	"compare-tabs_1_city_24_name": "Nashik",
	"compare-tabs_1_city_24_aqi": "51 PM2.5",
	"compare-tabs_1_city_24_cigg": "2",
	"compare-tabs_1_city_25_name": "Thane",
	"compare-tabs_1_city_25_aqi": "41 PM2.5",
	"compare-tabs_1_city_25_cigg": "2",
	"compare-tabs_1_city_26_name": "Aurangabad",
	"compare-tabs_1_city_26_aqi": "48 PM2.5",
	"compare-tabs_1_city_26_cigg": "2",
	"compare-tabs_1_city_27_name": "Hyderabad",
	"compare-tabs_1_city_27_aqi": "56 PM2.5",
	"compare-tabs_1_city_27_cigg": "2",
	"compare-tabs_1_city_28_name": "Visakhapatnam",
	"compare-tabs_1_city_28_aqi": "51 PM2.5",
	"compare-tabs_1_city_28_cigg": "2",
	"compare-tabs_1_city_29_name": "Rajamahandevaram",
	"compare-tabs_1_city_29_aqi": "44 PM2.5",
	"compare-tabs_1_city_29_cigg": "2",
	"compare-tabs_1_city_30_name": "Chittoor",
	"compare-tabs_1_city_30_aqi": "11 PM2.5",
	"compare-tabs_1_city_30_cigg": "0",
	"compare-tabs_1_city_31_name": "Bangalore\n",
	"compare-tabs_1_city_31_aqi": "23 PM2.5",
	"compare-tabs_1_city_31_cigg": "1",
	"compare-tabs_1_city_32_name": "Trivandrum",
	"compare-tabs_1_city_32_aqi": "53 PM2.5",
	"compare-tabs_1_city_32_cigg": "2",
	p_6_value: p_6_value,
	p_7_value: p_7_value,
	p_8_value: p_8_value,
	p_9_value: p_9_value,
	p_10_value: p_10_value
};

// setting the tags with their necessary data from the json file

// header
const hero_1_image = document.getElementById('hero_1_image'); // image
hero_1_image.src = hero_1_image$1;

const hero_1_title = document.getElementById('hero_1_title');// title
hero_1_title.innerText = hero_1_title$1;

const article_info_1_byline = document.getElementById('article-info_1_byline');// author
article_info_1_byline.innerText = english["article-info_1_byline"];

const article_info_1_date = document.getElementById('article-info_1_date');// date
article_info_1_date.innerText = english["article-info_1_date"];

const article_info_1_category = document.getElementById('article-info_1_category');// category
article_info_1_category.innerText = english["article-info_1_category"];

const article_info_1_category_url = document.getElementById('article-info_1_category_url');// title
article_info_1_category_url.href = english["article-info_1_category_url"];

// main/body
function dealWithPs() {
    for( let i = 1; i <= 10; i++){
        if(i == 2) dealWithSelect();
        const p = document.createElement('p');
        p.setAttribute('id', `p-${i}`);
        p.innerText = english[`p_${i}_value`];
        document.querySelector('.ps').appendChild(p);
    }
}

dealWithPs();

function dealWithSelect(){
    const form = document.createElement('form');
    const select = document.createElement('select');
    
    for( let i = 1; i <= 32; i++){
        const option = document.createElement('option');
        option.value = english[`compare-tabs_1_city_${i}_cigg`];
        option.innerText = english[`compare-tabs_1_city_${i}_name`];
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
