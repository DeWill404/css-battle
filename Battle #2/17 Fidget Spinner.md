# Actual Code
```html
<p class='h'></p>
<p class='u f'></p>
<p class='b f'></p>
<p class='l o'></p>
<p class='r o'></p>
<style>
  * {
    background: #09042A;
    margin: 0;
  }
  body > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  .h {
    background: #E78481;
    width: 100px;
    height: 100px;
  }
  .f {
    background: #F5BB9C;
    width: 60px;
    height: 60px;
    border: 10px solid #09042A;
  }
  .u {
    top: 97px;
  }
  .b {
    top: 203px;
  }
  .o {
    width: 60px;
    height: 60px;
    border: 10px solid #E78481;
  }
  .l {
    left: 140px;
  }
  .r {
    left: 260px;
  }
</style>
```

# Minified Code
```html
<p h></p><p u f></p><p b f></p><p l o></p><p r o><style>*{background:#09042A;margin:0}body > *{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);border-radius:50%}[h]{background:#E78481;width:100;height:100}[f]{background:#F5BB9C;width:60;height:60;border:10px solid #09042A}[u]{top:97}[b]{top:203}[o]{width:60;height:60;border:10px solid #E78481}[l]{left:140}[r]{left:260}
```
