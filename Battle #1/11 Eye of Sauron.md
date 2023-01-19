# Actual Code
```html
<div class='c'>
  <div class='o h'></div>
  <div class='o l'>
    <p class='d'></p>
  </div>
  <div class='o h s'></div>
</div>
<style>
  body {
    background: #191210;
  }
  .c {
    width: 300px;
    height: 140px;
    margin: 80px 42px;
    display: flex;
    align-items: center;
  }
  .o {
    border: 20px solid #ECA03D;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    position: relative;
  }
  .l {
    width: 100px;
    height: 100px;
    margin: 0 -20px;
    z-index: 4;
  }
  .d {
    width: 50px;
    height: 50px;
    margin: 25px;
    background: #84271C;
    border-radius: 50%;
  }
  .h::after {
    content: ' ';
    background: #191210;
    width: 99px;
    height: 60px;
    position: absolute;
    top: -30px;
    left: -30px
  }
  .s::after {
    top: 30px;
    left: -10px;
  }
</style>
```

# Minified Code
```html
<div c><div o h></div><div o l><p d></p></div><div o h s></div><style>body{background:#191210}[c]{width:300;height:140;margin:80px 42;display:flex;align-items:center}[o]{border:20px solid #ECA03D;border-radius:50%;width:60;height:60;position:relative}[l]{width:100;height:100;margin:0 -20;z-index:4}[d]{width:50;height:50;margin:25;background:#84271C;border-radius:50%}[h]::after{content:' ';background:#191210;width:99;height:60;position:absolute;top:-30;left:-30}[s]::after{top:30;left:-10}
```
