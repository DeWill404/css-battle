# Actual Code
```html
<div>
  <p class='d'></p>
  <p></p>
  <p class='d'></p>
</div>
<style>
  * {
    background: #F5D6B4;
    margin: 0;
    position: relative;
  }
  div {
    height: 100px;
    margin: 100px 0 0 90px;
    display: flex;
  }
  div::after, div::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: #D86F45;
    top: 40px;
    left: -20px;
    border-radius: 50%;
  }
  div::after {
    left: 220px;
  }
  p {
    width: 100px;
    height: 50px;
    overflow: hidden;
    margin-left: -20px;
  }
  p::after {
    content: '';
    position: absolute;
    border: 20px solid #D86F45;
    border-radius: 50%;
    background: #F5D6B4;
    width: 60px;
    height: 60px;
  }
  .d {
    align-self: end;
    rotate: 180deg;
  }
</style>
```

# Minified Code
```html
<div><p d></p><p></p><p d></p><style>*{background:#F5D6B4;margin:0;position:relative}div{height:100;margin:100px 0 0 90;display:flex}div::after, div::before{content:'';position:absolute;width:20;height:20;background:#D86F45;top:40;left:-20;border-radius:50%}div::after{left:220}p{width:100;height:50;overflow:hidden;margin-left:-20}p::after{content:'';position:absolute;border:20px solid #D86F45;border-radius:50%;background:#F5D6B4;width:60;height:60}[d]{align-self:end;rotate:180deg}
```
