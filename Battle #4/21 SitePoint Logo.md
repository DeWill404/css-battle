# Actual Code
```html
<p></p>
<p class='b'></p>
<style>
  * {
    background: #222;
    color: #F2994A;
  }
  p:before, p:after {
    content: ' ';
    width: 80px;
    height: 30px;
    background: currentcolor;
    position: absolute;
    rotate: -45deg;
    top: 85px;
    left: 138px
  }
  p:after {
    border-radius: 0 6px 0 9px;
    rotate: 45deg;
    top: 135px;
    left: 123px;
  }
  .b {
    rotate: 180deg;
    margin: 300px -7px 0 0;
    color: #2D9CDB;
  }
</style>
```

# Minified Code
```html
<p></p><p b><style>*{background:#222;color:#F2994A}p:before, p:after{content:' ';width:80;height:30;background:currentcolor;position:absolute;rotate:-45deg;top:85;left:138}p:after{border-radius:0 6px 0 9px;rotate:45deg;top:135;left:123}[b]{rotate:180deg;margin:300px -7px 0 0;color:#2D9CDB}
```
