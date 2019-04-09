window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const switcher = document.querySelector('#cbx'),
        more = document.querySelector('.more'),
        modal = document.querySelector('.modal'),
        videos = document.querySelectorAll('.videos__item');
  let player;

  let bindSlideToggle = (trigger, boxBody, content, openClass) => {
    let button = {
      'element': document.querySelector(trigger),
      'active': false
    };
    const box = document.querySelector(boxBody),
          boxContent = document.querySelector(content);
    
    button.element.addEventListener('click', () => {
      if (button.active) {
        button.active = false;
        box.style.height = 0 + 'px';
        box.classList.remove(openClass);
      } else {
        button.active = true;
        box.style.height = boxContent.clientHeight + 'px';
        box.classList.add(openClass);
      }
    });
  }
  bindSlideToggle('.hamburger', '[data-slide="nav"]', '.header__menu', 'slide-active');

  let switchMode = () => {
    let drawWhite = (selector, color) => {
      document.querySelectorAll(selector).forEach(item => {
        item.style.stroke = color;
        item.style.color = color;
      });
    }
    let drawAll = (color) => {
      drawWhite('.hamburger > line', color);
      drawWhite('.videos__item-descr', color);
      drawWhite('.videos__item-views', color);
      drawWhite('.header__item-descr', color);
    }
    if (night) {
      night = false;
      document.body.classList.remove('night');
      drawAll('#000');
      document.querySelector('.logo > img').src = 'logo/youtube.svg';
    } else {
      night = true;
      document.body.classList.add('night');
      drawAll('#fff');
      document.querySelector('.logo > img').src = 'logo/youtube_night.svg';
    }
  }
  let night = false;
  switcher.addEventListener('change', () => {
    switchMode();
  });

  const data = [
    ['img/thumb_3.webp', 'img/thumb_4.webp', 'img/thumb_5.webp'],
    ['#3 Верстка на flexbox CSS | Блок преимущества и галерея | Марафон верстки | Артем Исламов',
      '#2 Установка spikmi и работа с ветками на Github | Марафон вёрстки  Урок 2',
      '#1 Верстка реального заказа landing Page | Марафон вёрстки | Артём Исламов'],
    ['3,6 тыс. просмотров', '4,2 тыс. просмотров', '28 тыс. просмотров'],
    ['X9SmcY3lM-U', '7BvHoh0BrMw', 'mC8JW_aG2EM']
  ];

  more.addEventListener('click', () => {
    const videosWrapper = document.querySelector('.videos__wrapper');
    more.remove();

    for (let i = 0; i < data[0].length; i++) {
      let card = document.createElement('a');
          card.classList.add('videos__item', 'videos__item-active');
          card.setAttribute('data-url', data[3][i]);
      card.innerHTML = `
        <img src="${data[0][i]}" alt="thumb">
        <div class="videos__item-descr">${data[1][i]}</div>
        <div class="videos__item-views">${data[2][i]}</div>
      `;
      videosWrapper.appendChild(card);
      setTimeout(() => {
        card.classList.remove('videos__item-active');
      }, 10);
    }
  });
});