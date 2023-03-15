# Actual Code
```html
<p class='o'></p>
<p class='g'></p>
<p class='b'></p>
<style>
  * {
    margin: 0;
    position: fixed;
    background: #0B2429;
    top: 115px;
    left: 200px;
    transform-origin: top left;
  }
  p {
    width: 100px;
    height: 100px;
  }
  .g {
    background: #998235;
    transform: skewY(-45deg);
    left: 130px;
    top: 115px;
    width: 70px;
    height: 69px;
  }
  .b {
    background: #1A4341;
    transform: skewY(45deg);
    top: 46px;
    width: 70px;
    height: 67px;
  }
  .o {
    background: #F3AC3C;
    rotate: 45deg;
  }
</style>
```

# Minified Code
```html
<p o></p><p g></p><p b><style>*{margin:0;position:fixed;background:#0B2429;top:115;left:200;transform-origin:top left}p{width:100;height:100}[g]{background:#998235;transform:skewY(-45deg);left:130;top:115;width:70;height:69}[b]{background:#1A4341;transform:skewY(45deg);top:46;width:70;height:67}[o]{background:#F3AC3C;rotate:45deg}
```
