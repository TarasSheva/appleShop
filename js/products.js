const getProducts = async () => {
    try {
      const results = await fetch("./data/products.json");
      const data = await results.json();
      const products = data.products;
      console.log(products);
      return products;
    } catch (err) {
      console.log(err);
    }
  };

getProducts()