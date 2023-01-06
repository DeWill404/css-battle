# Actual Code
```html
<p class='d'></p>
<p></p>
<p class='d'></p>
<style>
  body {
    background: #62306D;
    display: flex;
    padding: 26px 42px;
  }
  p {
    background: #F7EC7D;
    width: 100px;
    height: 100px;
    border-radius: 50% 50% 0 0;
  }
  .d {
    align-self: end;
    transform: rotate(180deg);
  }
</style>
```

# Minified Code
```html
<p d></p><p></p><p d><style>body{background:#62306D;display:flex;padding:26px 42}p{background:#F7EC7D;width:100;height:100;border-radius:50% 50% 0 0}[d]{align-self:end;transform:rotate(180deg)}
```