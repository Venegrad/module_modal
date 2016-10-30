# responsive-modal
Responsive modal supports IE9+, Safari 7+, Chrome, Firefox ...

For open modal use funсtion openmodal('first'), when first is modal ID attribute

```
<a href="javascript:openmodal('first');">Open modal 1</a>
<a href="javascript:openmodal('two');">Open modal 2</a>
```

Modal window code

```
<div class="modal-window" id="first">
  U can open another model from model <a href="javascript:openmodal('two');">Open modal 2</a>
</div>

<div class="modal-window" id="two">
  Some code in modal 2
</div>
```

simple and nice modal ^^