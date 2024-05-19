<template>
  <div>
    <div>
      <h1 class="h1">WishList</h1>
    </div>
    <div class="WhishlistThing">
      <div>
        <img
          id="ProductImage"
          src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg"
          alt="ProductImage"
        />
      </div>
      <div id="ProductName">
        <p>the Whislisted Products name</p>
      </div>
      <div id="Heart">
        <img
          src="https://www.psdgraphics.com/wp-content/uploads/2022/01/perfect-heart-shape.png"
          alt="Heart"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.h1 {
  font-size: 50px;
  color: rgb(94, 101, 102);
  font-weight: bold;
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
}

#ProductImage {
  width: 100px;
  height: 100px;
  border: 1px solid rgb(255, 255, 255);
}

#Heart {
  width: 60px;
  height: 46px;
  border: 1px solid rgb(255, 255, 255);
  display: flex;
  margin-left: auto;
  margin-right: 10px;
}

.WhishlistThing {
  border: 1px solid rgb(0, 0, 0);
  border-left: 1px solid rgb(255, 255, 255);
  border-right: 1px solid rgb(255, 255, 255);
  display: flex;
  align-items: center;
}

#ProductName {
  border-left: 1px solid rgb(255, 255, 255);
  padding-left: 10px;
  font-size: 30px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  color: rgb(94, 101, 102);
}
</style>
