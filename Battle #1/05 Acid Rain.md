# Actual Code
```html
<div>
  <p class='l'></p>
  <p class='r'></p>
  <p></p>
</div>
<style>
  body {
    background: #0B2429;
  }
  div {
    display: flex;
    position: absolute;
    top: 29%;
    left: 15%;
    transform: rotate(135deg);
  }
  p {
    width: 120px;
    height: 120px;
    background: #F3AC3C;
    border-radius: 50% 0 50% 50%;
    transform: rotate(-135deg);
    margin-left: -35px;
  }
  .r {
    background: #998235;
  }
  .l {
    transform: rotate(45deg);
  }
</style>
```

# Minified Code
```html
<div><p l></p><p r></p><p></p><style>body{background:#0B2429}div{display:flex;position:absolute;top:29%;left:15%;transform:rotate(135deg)}p{width:120;height:120;background:#F3AC3C;border-radius:50% 0 50% 50%;transform:rotate(-135deg);margin-left:-35}[r]{background:#998235}[l]{transform:rotate(45deg)}
```