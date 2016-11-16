# Адаптивные модальные окна

Окна очень просты и мало весят, но тем не менее отлично работают на всех разрешениях экрана и изменяют свой размер динамично.
Поддерживаться всеми современными браузерами IE9+, Safari 7+, Chrome, Firefox ...

Для открытия окна используйте функцию openmodal('first'), где first - это ID блока модального окна

```
<a href="javascript:openmodal('first');">Open modal 1</a>
<a href="javascript:openmodal('two');">Open modal 2</a>
```

Код модальных окон

```
<div class="modal-window" id="first">
  U can open another model from model <a href="javascript:openmodal('two');">Open modal 2</a>
</div>

<div class="modal-window" id="two">
  Some code in modal 2
</div>
```
[Demo!](https://htmlpreview.github.io/?https://github.com/Venegrad/Responsive-modal/blob/master/index.html)
