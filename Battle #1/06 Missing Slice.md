# Actual Code
```html
<p></p>
<p class='r'></p>
<p class='b'></p>
<style>
  * {
    background: #E3516E;
  }
  p {
    width: 100px;
    height: 100px;
    background: #51B5A9;
    position: absolute;
    top: 34px;
    left: 100px;
    border-radius: 100% 0 0;
  }
  .r {
    left: 200px;
    border-radius: 0 100% 0 0;
    background: #FADE8B;
  }
  .b {
    top: 134px;
    border-radius: 0 0 0 100%;
    background: #F7F3D7;
  }
</style>
```

# Minified Code
```html
<p></p><p r></p><p b><style>*{background:#E3516E}p{width:100;height:100;background:#51B5A9;position:absolute;top:34;left:100;border-radius:100% 0 0}[r]{left:200;border-radius:0 100% 0 0;background:#FADE8B}[b]{top:134;border-radius:0 0 0 100%;background:#F7F3D7}
```
