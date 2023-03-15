# Actual Code
```html
<p></p>
<p class='s'></p>
<style>
  body {
    background: #62306D;
    margin: 84px 100px;
  }
  p {
    --b: #F7EC7D;
    --l: circle 20px at;
    --r: circle 10px at;
    background: radial-gradient(var(--l)top left,#0000 98%,var(--b))top left,radial-gradient(var(--l)bottom left,#0000 98%,var(--b))bottom left,radial-gradient(var(--r)top right,#0000 98%,var(--b))top right,radial-gradient(var(--r)bottom right,#0000 98%,var(--b))bottom right;
    background-size:51% 51%;
    background-repeat:no-repeat;
    width: 140px;
    height: 100px;
    display: inline-block
  }
  .s {
    --b: #E38F66;
    width: 60px;
    rotate: 180deg;
    margin-left: -4px;
  }
</style>
```

# Minified Code
```html
<p></p><p s><style>body{background:#62306D;margin:84px 100}p{--b:#F7EC7D;--l:circle 20px at;--r:circle 10px at;background:radial-gradient(var(--l)top left,#0000 98%,var(--b))top left,radial-gradient(var(--l)bottom left,#0000 98%,var(--b))bottom left,radial-gradient(var(--r)top right,#0000 98%,var(--b))top right,radial-gradient(var(--r)bottom right,#0000 98%,var(--b))bottom right;background-size:51% 51%;background-repeat:no-repeat;width:140;height:100;display:inline-block}[s]{--b:#E38F66;width:60;rotate:180deg}
```
