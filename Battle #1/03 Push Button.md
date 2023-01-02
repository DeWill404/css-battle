# Actual Code
```html
<p class='r'></p>
<p class='c o'></p>
<p class='c m'></p>
<p class='c i'></p>
<style>
  * {
    margin: 0px;
    background: #6592CF;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .r, .m {
    background: #243D83; 
  }
  .c {
    border-radius: 50%;
  }
  .r {
    width: 300px;
    height: 150px;
  }
  .o {
    width: 250px;
    height: 250px;
  }
  .m {
    width: 150px;
    height: 150px;
  }
  .i {
    width: 50px;
    height: 50px;
    background: #EEB850;
  }
</style>
```

# Minified Code
```html
<p r></p><p c o></p><p c m></p><p c i><style>*{margin:0;background:#6592CF;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}[r], [m]{background:#243D83; }[c]{border-radius:50%}[r]{width:300;height:150}[o]{width:250;height:250}[m]{width:150;height:150}[i]{width:50;height:50;background:#EEB850}
```