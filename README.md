# responsive-modal
Respnsive modal supports IE9+

For open modal use openmodal('first'), when first is modal ID attribute

<pre>
   <a href="javascript:openmodal('first');">Open modal 1</a>
   <a href="javascript:openmodal('two');">Open modal 2</a>
</pre>

modal window code

<pre>
   <div class="modal-window" id="first">
     U can open another model from model <a href="javascript:openmodal('two');">Open modal 2</a>
  </div>

  <div class="modal-window" id="two">
     Some code in modal 2
  </div>
</pre>

simple but nice modal
