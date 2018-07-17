const chai = require('chai');
const { expect } = chai;

const ShopifyImage = require('./index');
const src = 'https://cdn.shopify.com/s/files/1/1405/0664/products/4791207-9790062099-Pizza1.jpg';

describe('Shopify Image', () => {

  it('Should handle size', () => {
    const optsW = { size: '150x' };
    const optsH = { size: 'x150' };
    const optsC = { size: '150x150' };
    const imageW = ShopifyImage(src, optsW);
    const imageH = ShopifyImage(src, optsH);
    const imageC = ShopifyImage(src, optsC);
    expect(imageW).to.equal('https://cdn.shopify.com/s/files/1/1405/0664/products/4791207-9790062099-Pizza1_150x.jpg');
    expect(imageH).to.equal('https://cdn.shopify.com/s/files/1/1405/0664/products/4791207-9790062099-Pizza1_x150.jpg');
    expect(imageC).to.equal('https://cdn.shopify.com/s/files/1/1405/0664/products/4791207-9790062099-Pizza1_150x150.jpg');
  });

  it('Should handle crop', () => {
    const opts = { crop: 'center' };
    const image = ShopifyImage(src, opts);
    expect(image).to.equal('https://cdn.shopify.com/s/files/1/1405/0664/products/4791207-9790062099-Pizza1_crop_center.jpg');
  });

  it('Should handle scale', () => {
    const opts = { scale: 2 };
    const image = ShopifyImage(src, opts);
    expect(image).to.equal('https://cdn.shopify.com/s/files/1/1405/0664/products/4791207-9790062099-Pizza1@2x.jpg');
  });

  it('Should handle format', () => {
    const optsJ = { format: 'jpg' };
    const imageJ = ShopifyImage(src, optsJ);
    const optsP = { format: 'pjpg' };
    const imageP = ShopifyImage(src, optsP);
    expect(imageJ).to.equal('https://cdn.shopify.com/s/files/1/1405/0664/products/4791207-9790062099-Pizza1.jpg');
    expect(imageP).to.equal('https://cdn.shopify.com/s/files/1/1405/0664/products/4791207-9790062099-Pizza1.progressive.jpg');
  });

  it('Should handle all', () => {
    const opts = { size: '150x150', crop: 'center', scale: 2, format: 'pjpg' };
    const image = ShopifyImage(src, opts);
    expect(image).to.equal('https://cdn.shopify.com/s/files/1/1405/0664/products/4791207-9790062099-Pizza1_150x150_crop_center@2x.progressive.jpg');
  });

});
