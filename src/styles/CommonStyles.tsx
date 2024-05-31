/** Flexbox (mui box) styles */
/*
這段代碼設置了一個 flexbox 容器，並將其子項水平和垂直居中對齊：

display: 'flex': 將容器設置為 flexbox 容器。
justifyContent: 'center': 在主軸（水平軸）上居中對齊子項。
alignItems: 'center': 在交叉軸（垂直軸）上居中對齊子項。
*/
export const flexCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
/*
display: 'flex': 將容器設置為 flexbox 容器。
justifyContent: { xs: 'center', md: 'space-between' }: 在小屏幕（xs）上，子項水平居中對齊；在中等及以上屏幕（md）上，子項在主軸（水平軸）上兩端對齊。
alignItems: 'center': 在交叉軸（垂直軸）上居中對齊子項。
*/  
export const flexBetweenCenter = {
    display: 'flex',
    justifyContent: { xs: 'center', md: 'space-between' },
    alignItems: 'center',
};

export const dFlex = {
    display: 'flex',
    flexDirection: 'row',
};

export const flexBetween = {
    display: 'flex',
    justifyContent: 'space-between',
};
/*
display: { xs: 'none', md: 'block' }: 在小屏幕（xs）上，不顯示元素；在中等及以上屏幕（md）上，顯示元素為塊級元素（block）。
*/
export const displayOnDesktop = { 
    display: { xs: 'none', md: 'block' } 
};

export const fixedBottom = {
    position: 'absolute',
    bottom: 100,
    width: '100%',
  };
  

/** Custom carousel styles */
export const carouselDot = {
    color: '#fff',
    backgroundColor: '#000',
    opacity: 0.5,
    borderRadius: 10,
    p: 1,
    minWidth: 'auto',
  };
  
  export const fixedIcon = {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 10,
  };
  
  export const carouselImage = {
    height: 275,
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    borderRadius: 3,
  };