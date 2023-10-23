# Actual Code
```html
<div>
  <div class='b'>
    <div class='c'></div>
  </div>
</div>
<style>
  body, div {
    display: flex;
    background: #F3AC3C;
    margin: 0;
  }
  div {
    width: 50%;
    height: 67%;
    background: #1A4341;
    align-self: center;
    margin-left: 25%;
    background: #1A4341;
  }
  .b, .c {
    height: 50%;
    background: #998235;
    align-self: flex-end;
    margin: 0;
  }
  .c {
    background: #F3AC3C;
    margin-left: 50%;
  }
</style>
```

# Minified Code
```html
<div><div b><div c></div></div><style>body, div{display:flex;background:#F3AC3C;margin:0}div{width:50%;height:67%;background:#1A4341;align-self:center;margin-left:25%;background:#1A4341}[b],[c]{height:50%;background:#998235;align-self:flex-end;margin:0}[c]{background:#F3AC3C;margin-left:50%}
```
