# Actual Code
```html
<p class='i'></p>
<p class='ii'></p>
<p class='iii'></p>
<p class='iv'></p>
<style>
  body {
    display: flex;
    padding: 77px 52px;
    background: #F2F2B6;
  }
  p {
    margin: 0;
    width: 0;
    height: 0;
    border: 75px solid transparent;
  }
  .i {
    border-top: 130px solid #FF6D00;
  }
  .ii {
    border-top: 130px solid #FD4602;
    margin-left: -130px;
    z-index: -1;
  }
  .iii {
    border-bottom: 130px solid #FD4602;
    margin: -75px -60px;
  }
  .iv {
    border-bottom: 130px solid #FF6D00;
    margin: -75px -70px;
    z-index: -1;
  }
</style>
```

# Minified Code
```html
<p i></p><p ii></p><p iii></p><p iv><style>body{display:flex;padding:77px 52;background:#F2F2B6}p{margin:0;width:0;height:0;border:75px solid transparent}[i]{border-top:130px solid #FF6D00}[ii]{border-top:130px solid #FD4602;margin-left:-130;z-index:-1}[iii]{border-bottom:130px solid #FD4602;margin:-75px -60}[iv]{border-bottom:130px solid #FF6D00;margin:-75px -70;z-index:-1}
```
