# Actual Code
```html
<p class='c o'></p>
<p class='d'></p>
<p class='c l'></p>
<p class='r'></p>
<style>
  * {
    margin: 0;
    background: #222730;
    --t: translate(-50%,-50%);
  }
  body * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: var(--t) rotate(45deg);
  }
  .c {
    background: #4CAAB3;
  }
  .o {
    height: 150px;
    width: 400px;
    transform: var(--t);
  }
  .d {
    width: 250px;
    height: 250px;
  }
  .l {
    width: 150px;
    height: 150px;
  }
  .r {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #393E46;
  }
</style>
```

# Minified Code
```html
<p c o></p><p d></p><p c l></p><p r><style>*{margin:0;background:#222730;--t:translate(-50%,-50%)}body *{position:absolute;top:50%;left:50%;transform:var(--t) rotate(45deg)}[c]{background:#4CAAB3}[o]{height:150;width:400;transform:var(--t)}[d]{width:250;height:250}[l]{width:150;height:150}[r]{width:50;height:50;border-radius:50%;background:#393E46}
```
