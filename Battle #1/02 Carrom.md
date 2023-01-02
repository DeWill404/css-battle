# Actual Code
```html
<p></p>
<p class='r'></p>
<p class='b'></p>
<p class='b r'></p>
<style>
  body {
    margin: 0px;
    background: #62374e;
  }
  p {
    position: absolute;
    width: 50px;
    height: 50px;
    margin: 50px;
    background: #fdc57b;
  }
  .r {
    right: 0px;
  }
  .b {
    bottom: 0px;
  }
</style>
```

# Minified Code
```html
<p></p><p r></p><p b></p><p b r><style>body{margin:0;background:#62374e}p{position:absolute;width:50;height:50;margin:50;background:#fdc57b}[r]{right:0}[b]{bottom:0}
```