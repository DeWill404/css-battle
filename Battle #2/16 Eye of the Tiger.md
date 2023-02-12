# Actual Code
```html
<p class='b'></p>
<p class='o'></p>
<p class='i'></p>
<style>
  * {
    background: #0B2429;
    margin: 0;
  }
  body > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  .b {
    background: #998235;
    width: 200px;
    height: 200px;
    rotate: 45deg;
    top: 191px;
    left: 100px;
    border-radius: 50% 0;
  }
  .o {
    background: #F3AC3C;
    width: 140px;
    height: 140px;
    border: 20px solid #0B2429;
  }
  .i {
    width: 50px;
    height: 50px;
  }
</style>
```

# Minified Code
```html
<p b></p><p o></p><p i><style>*{background:#0B2429;margin:0}body > *{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);border-radius:50%}[b]{background:#998235;width:200;height:200;rotate:45deg;top:191;left:100;border-radius:50% 0}[o]{background:#F3AC3C;width:140;height:140;border:20px solid #0B2429}[i]{width:50;height:50}
```
