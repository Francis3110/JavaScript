/**
 * Khai báo biến rectangle là 1 object gồm có các property:
 * - width: chiều rộng
 * - height: chiều dài
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều dài
 * - getArea: trả về diện tích
 */

// eslint-disable-next-line no-unused-vars
const rectangle = {
  width: 10,
  hight: 20,
  getWidth() {
      return this.width;
  },
  getHeight(){
      return this.hight;
  },
  getArea(){
      return this.width*this.hight;
  }
};

