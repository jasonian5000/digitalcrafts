# Flexbox
## Flexbox is a modern css tool that was created to handle alot of the problems of early frontend dev, specifically layout.
---
# EVERYTHING IS A BOX!

## Layers of the box
- margin
    - border
        - padding
            - element

## Order of layout effects
1. top
1. right
1. bottom
1. left
- example: `margin: top right bottom left`
---
# FLEXBOX ONLY GOES ONE LAYER DEEP! WATCH YOUR DIVS

## This is the most common layout with flexbox

```    
.element {    
    display: flex;
    justify-content: center;
    flex-direction: row; 
    /* default is row*/
    height: auto;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}
```
