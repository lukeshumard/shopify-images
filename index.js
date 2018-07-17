module.exports = (src, opts={}) => {
  const path = src.split('.');
  const target = path.length-2;
  const options = Object.keys(opts).map(o => {
    let value;
    const v = opts[o];
    switch(o) {
      case 'size':
        value = `_${v}`;
        break;
      case 'crop':
        value = `_crop_${v}`;
        break;
      case 'scale':
        value = `@${v}x`;
        break;
      case 'format':
        value = (v === 'pjpg') ? '.progressive' : '';
        break;
      default:
        value = '';
    }
    return value;
  });
  path[target] = path[target] += options.join('');
  return path.join('.');
};
