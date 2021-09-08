const ajax = new XMLHttpRequest(); // ajax 사용법
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
ajax.open('GET', NEWS_URL, false);  //동기로 해당 주소에서 데이터를 가져오겠다
ajax.send(); // 데이터를 가져온다 
 
const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');

for(let i = 0; i < 10 ; i++) {
    const li = document.createElement('li');
    li.innerHTML = newsFeed[i].title;
    ul.appendChild(li);    
}

document.getElementById('root').appendChild(ul);

// XHR  XMLHttpRequest로 가져온 항목들만 보여주는 
// JS 