# Shopify Images #

A generic Javascript utility for [Shopify img_url size parameters](https://help.shopify.com/en/themes/liquid/filters/url-filters#size-parameters).

## Installation ##
```bash
# with NPM
npm install --save shopify-images

# or with Yarn
yarn add shopify-images
```

## Usage ##

```javascript
const ShopifyImage = require('shopify-images');

const imageSrc = '//cdn.shopify.com/s/files/1/1405/0664/products/4791207-9790062099-Pizza1.jpg';
const options = {
  size: 'x320'
};

ShopifyImage(imageSrc, options);
// => '//cdn.shopify.com/s/files/1/1405/0664/products/4791207-9790062099-Pizza1_x320.jpg'
```

## Options ##

Options should be passed as an object. Please see Shopify's [size parameters](https://help.shopify.com/en/themes/liquid/filters/url-filters#size-parameters) for documentation.

** All Options **
```javascript
{
  size: '320x320',
  crop: 'center',
  scale: '2',
  format: 'pjg'
}
```

This will translate to...
```
//cdn.shopify.com/s/files/1/1405/0664/products/4791207-9790062099-Pizza1_320x320_center@2x.progressive.jpg
```
