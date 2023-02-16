import Categories from './model/categoryModel.js';
import Product from './model/productModel.js';

// 6. Sukurkite dar vieną route GET /categoryvalue/, šis paduos kiekvienos kategorijos produktų kainos sumą, pvz:

// {
//   "phones": 1020, (1020 yra suma visų produktų verčių, kurie yra phones kategorijoje)
//   "tv":     2000
// }

export async function getCategoryValue(req, res) {
  try {
    const products = await Product.find({}).populate(
      'categoryId',
      { title: true },
      'categories'
    );

    const sums = products.reduce((sumObj, product) => {
      if (sumObj[product.categoryId.title]) {
        sumObj[product.categoryId.title] += product.price;
      } else {
        sumObj[product.categoryId.title] = product.price;
      }
      return sumObj;
    }, {});

    res.json(sums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllCategories(req, res) {
  try {
    const categories = await Categories.find();

    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllProductsWithCategories(req, res) {
  try {
    const products = await Product.find({}).populate(
      'categoryId',
      { title: true },
      'categories'
    );

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function postTest(req, res) {
  const test = await Categories.create({
    title: 'test',
    description: 'test description',
  });

  res.json(test);
}
