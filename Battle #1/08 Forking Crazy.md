# Actual Code
```html
<div>
  <p class='c'></p>
  <p class='c'></p>
  <p class='c'></p>
  <p class='c'></p>
</div>
<p class='b c'></p>
<div class='s c'>
  <p></p>
  <p></p>
  <p></p>
</div>
<p class='r c'></p>
<style>
  * {
    margin: 0;
    background: #6592CF;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .c {
    background: #060F55;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 140px;
    height: 130px;
    top: 30px;
    left: 10px;
  }
  div p {
    position: static;
    width: 20px;
    border-radius: 10px;
  }
  .s {
    height:60px;
    width:100px;
    top: 10px;
  }
  .b {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    top: 30px;
  }
  .r {
    width: 20px;
    height: 99px;
    top: 110px;
  }
</style>
```

# Minified Code
```html
<div><p c></p><p c></p><p c></p><p c></p></div><p b c></p><div s c><p></p><p></p><p></p></div><p r c><style>*{margin:0;background:#6592CF;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}[c]{background:#060F55}div{display:flex;justify-content:space-between;width:140;height:130;top:30;left:10}div p{position:static;width:20;border-radius:10px}[s]{height:60;width:100;top:10}[b]{width:140;height:140;border-radius:50%;top:30}[r]{width:20;height:99;top:110}
```
