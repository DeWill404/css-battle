# Actual Code
```html
<div class='d'><p></p><p class='x'></p></div>
<div><p style='background:#AA445F'></p><p class='x'></p></div>
<div class='d'><p></p><p class='x'></p></div>
<style>
  body {
    background: #62306D;
    display: flex;
    padding: 42px 42px 0 42px;
  }
  div {
    width: 100px;
    height: 100px;
    background: #E38F66;
    border-radius: 50%;
    position: relative;
  }
  p {
    background: #E38F66;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: 20px;
  }
  .x {
    position: absolute;
    background: #F7EC7D;
    border-radius: 0;
    width: 100px;
    height: 900px;
    left: -20px;
    top: 25px;
    z-index: -1;
  }
  .d {
    margin-top: 100px;
    background: #AA445F;
  }
</style>
```

# Minified Code
```html
<div d><p></p><p x></p></div><div><p style='background:#AA445F'></p><p x></p></div><div d><p></p><p x></p><style>body{background:#62306D;display:flex;padding:42px 42px 0 42}div{width:100;height:100;background:#E38F66;border-radius:50%;position:relative}p{background:#E38F66;height:60;width:60;border-radius:50%;margin:20}[x]{position:absolute;background:#F7EC7D;border-radius:0;width:100;height:900;left:-20;top:25;z-index:-1}[d]{margin-top:100;background:#AA445F}
```
