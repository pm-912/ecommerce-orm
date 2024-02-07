// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Associates Product with Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
Category.hasMany(Product, {
  foreignKey:'category_id',
  onDelete: "CASCADE",
});

// Associates Products to Tags, using a third Model called ProductTag
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: "product_id" });
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: "tag_id"});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
