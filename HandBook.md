#### What about browsers that do not support

# JavaScript

## Giới thiệu về ECMAScript

Bất cứ khi nào bạn đọc về JavaScript, chắc chắn bạn sẽ thấy một trong các thuật ngữ sau:

- ES3
- ES5
- ES6
- ES7
- ES8
- ES2015
- ES2016
- ES2017
- ECMAScript 2015
- ECMAScript 2016
- ECMAScript 2017

Điều này có nghĩa là gì?

Tất cả chúng đều đề cập đến một standard (tiêu chuẩn) gọi là **ECMAScript**.

**ECMAScript** là tiêu chuẩn dựa trên JavaScript và nó thường được viết tắt là **ES**.

Bên cạnh JavaScript, một số ngôn ngữ khác implement (triển khai) ECMAScript, báo gồm:

- ActionScript (the Flash scripting language), nó đang mất dần tính phổ biến vì Flash sẽ chính thức ngừng hoạt động vào năm 2020
- JScript (the Microsoft scripting dialect), vì vào thời điểm đó JavaScript chỉ được hỗ trợ bởi Netscape và cuộc chiến trình duyệt đang ở đỉnh điểm, Microsoft đã phải xây dựng phiên bản riêng cho Internet Explorer

Nhưng tất nhiên JavaScript là cách triển khai ES phổ biến và được sử dụng rộng rãi nhất.

Tại sao lại là cái tên kì lạ này?

`Ecma International` là hiệp hội tiêu chuẩn Thụy Sĩ, người chịu trách nhiệm xác định các tiêu chuẩn quốc tế.

Khi JavaScript được tạo ra, nó đã được Netscape and Sun Microsystems giới thiệu cho Ecma và họ đặt cho nó cái tên ECMA-262 alias **ECMAScript**.

Theo Wikipedia, thông cáo báo chí này của Netscape và Sun Microsystems (nhà sản xuất Java) có thể giúp tìm ra lựa chọn tên, có thể bao gồm các vấn đề pháp lý và thương hiệu của Microsoft.

Sau IE9, Microsoft đã ngừng xây dựng thương hiệu hỗ trợ ES của mình trong các trình duyệt là JScript và bắt đầu gọi nó là JavaScript.

Vì vậy, kể từ năm 201x, ngôn ngữ phổ biến duy nhất hỗ trợ ECMAScript spec là JavaScript.

## Phiên bản ECMAScript hiện tại

Phiên bản ECMAScript hiện tại là ES2020, được phát hành vào tháng 6 năm 2020.

## TC39 là gì?

TC39 là viết tắt của Technical Committee 39, một ủy ban kỹ thuật gồm những người có nhiệm vụ xây dựng đặc tả ECMAScript.

Thành viên của TC39 là các chuyên gia, kỹ sư đến từ những công ty công nghệ hàng đầu thế giới như Google, Mozilla, Facebook, Apple, Microsoft... Họ có nhiệm vụ trao đổi, thảo luận, thiết kế, xây dựng hướng đi cho ngôn ngữ lập trình JavaScript.

Mọi đề xuất phiên bản tiêu chuẩn phải trải qua nhiều giai đoạn khác nhau, được giải thích [ở đây](https://tc39.es/process-document/).

## ES Versions

I found it puzzling why sometimes an ES version is referenced by edition number andsometimes by year, and I am confused by the year by chance being -1 on the number, whichadds to the general confusion around JS/ES.

Before ES2015, ECMAScript specifications were commonly called by their edition. So ES5 isthe official name for the ECMAScript specification update published in 2009.

Why does this happen? During the process that led to ES2015, the name was changed fromES6 to ES2015, but since this was done late, people still referenced it as ES6, and thecommunity has not left the edition naming behind - the world is still calling ES releases byedition number.

This table should clear things a bit:

| Edition | Official name | Date published |
| ------- |:-------------:| --------------:|
|         | ES2020        | June 2020      |
|         | ES2019        | June 2019      |
| ES9     | ES2018        | June 2018      |
| ES8     | ES2017        | June 2017      |
| ES7     | ES2016        | June 2016      |
| ES6     | ES2015        | June 2015      |
| ES5.1   | ES5.1         | June 2011      |
| ES5     | ES5           | December 2009  |
| ES4     | ES4           | Abandoned      |
| ES3     | ES3           | December 1999  |
| ES2     | ES2           | June 1998      |
| ES1     | ES1           | June 1997      |

## ES2015

### let and const

Cho đến ES2015, `var` là cấu trúc duy nhất có sẵn để khai báo biến.

```js
var a = 0
```

Nếu bạn quên thêm `var`, bạn sẽ gán giá trị cho một biến chưa được khai báo và kết quả có thể thay đổi.

Trong môi trường hiện đại, khi bật chế độ nghiêm ngặt (strict mode), bạn sẽ gặp lỗi. Trong các môi trường cũ hơn (hoặc đã tắt chế độ nghiêm ngặt), điều này sẽ khởi tạo biến và gán nó cho global object (đối tượng toàn cục). Nếu bạn không khởi tạo biến khi khai báo, nó sẽ có giá trị `undefined` cho đến khi bạn gán giá trị cho nó.

```js
var a //typeof a === 'undefined'
```

Bạn có thể khai báo lại biến nhiều lần, ghi đè nó:

```js
var a = 1
var a = 2
```

Bạn cũng có thể khai báo nhiều biến cùng một lúc trong cùng một câu lệnh:

```js
var a = 1, b = 2
```

 `Scope` (phạm vi) là phần code nơi biến hiển thị.

Một biến được khởi tạo bằng `var` bên ngoài bất kỳ hàm nào được gán cho global object, có global scope (phạm vi toàn cục) và hiển thị ở mọi nơi. Một biến được khởi tạo bằng `var` bên trong một hàm được gán cho hàm đó, nó local (cục bộ) và chỉ hiển thị bên trong nó, giống như một tham số hàm (function parameter).

Bất kỳ biến nào được định nghĩa trong một hàm có cùng tên với biến toàn cục sẽ được ưu tiên hơn biến toàn cục.

Điều quan trọng là phải hiểu rằng một block (được xác định bằng một cặp dấu ngoặc nhọn) không xác định scope mới. Scope mới chỉ được tạo khi một hàm được tạo, do đó `var` không có block scope mà là function scope.

Bên trong một hàm, bất kỳ biến nào được định nghĩa trong nó có thể sử dụng ở bất cứ đâu trong hàm đó, ngay cả khi biến được khai báo ở cuối hàm, nó vẫn có thể được tham chiếu ngay từ đầu, vì JavaScript trước khi thực thi code nó đã thực sự di chuyển tất cả các biến lên trên cùng (một cái gì đó được gọi là **hoisting**). Để tránh nhầm lẫn, hãy luôn khai báo các biến khi bắt đầu một hàm.

#### Using `let`

`let` là một tính năng mới được giới thiệu trong ES2015 và về cơ bản nó là một phiên bản của `var` và nó có block scope. Scope của nó được giới hạn trong block, câu lệnh hoặc biểu thức nơi nó được khai báo và tất cả các container bên trong block.

Các nhà phát triển JavaScript hiện đại có thể chọn chỉ sử dụng `let` và bỏ hoàn toàn việc sử dụng `var`.

Khai báo `let` bên ngoài bất kỳ hàm nào, trái với `var` nó không tạo ra một biến toàn cục.

#### Using `const`

Các biến được khai báo bằng `var` hoặc `let` có thể được thay đổi giá trị sau này trong chương trình và có thể gán lại. Khi một `const` được khởi tạo, giá trị của nó không bao giờ có thể được thay đổi và nó không thể gán cho một giá trị khác.

```js
const a = 'test'
```

Chúng ta không thể gán một ký tự khác cho `a` `const`. Tuy nhiên, chúng ta có thể thay đổi `a` nếu đó là một object cung cấp các method ()phương thức) thay đổi nội dung của nó.

`const` không cung cấp tính bất biến (immutability), nó chỉ đảm bảo rằng không thể thay đổi tham chiếu (reference).

`const` có block scope giống như `let`.

Các nhà phát triển JavaScript hiện đại có thể chọn luôn sử dụng `const` cho các biến không cần thiết phải được chỉ định (gán lại) lại sau này trong chương trình, bởi vì chúng ta nên luôn sử dụng cấu trúc đơn giản nhất có thể để tránh mắc lỗi.

### Arrow Function

Các Arrow function, kể từ khi được giới thiệu, đã thay đổi vĩnh viễn cách đọc/viết code JavaScript (và cả cách hoạt động).

Sự thay đổi này rất đáng hoan nghênh đến nỗi bây giờ bạn hiếm khi thấy việc sử dụng từ khóa function trong các cơ sở code hiện đại. Mặc dù một số số code buộc phải sử dụng function.

Arrow function cho phép bạn viết các hàm bằng cú pháp ngắn hơn, từ:

```js
const myFunction = function() {
  //...
}
```

thành

```js
const myFunction = () => {
  //...
}
```

Nếu thân hàm chỉ chứa một câu lệnh duy nhất, bạn có thể bỏ qua các dấu ngoặc và viết tất cả trên một dòng:

```js
const myFunction = () => doSomething()
```

Các parameter được đặt trong ngoặc đơn:

```js
const myFunction = (param1, param2) => doSomething(param1, param2)
```

Nếu hàm có một (và chỉ một) parameter, bạn có thể bỏ qua hoàn toàn các dấu ngoặc đơn:

```js
const myFunction = param => doSomething(param)
```

Nhờ cú pháp ngắn gọn này, các arrow function được khuyến khích sử dụng các hàm nhỏ.

#### Return ngầm định

Các arrow function cho phép bạn có một return ngầm định: các giá trị được return mà không cần phải sử dụng từ khóa `return`.

Nó hoạt động khi có một câu lệnh one-line trong thân hàm:

```js
const myFunction = () => 'test'

myFunction() //'test'
```

Một ví dụ khác, khi return một object, hãy nhớ bọc dấu ngoặc nhọn trong ngoặc đơn để tránh nó bị coi là dấu ngoặc đơn của hàm:

```js
const myFunction = () => ({ value: 'test' })

myFunction() //{value: 'test'}
```

#### Cách `this` hoạt động trong arrow function

`this` là một khái niệm có thể phức tạp để nắm bắt, vì nó thay đổi rất nhiều tùy thuộc vào context (bối cảnh) và cũng thay đổi tùy thuộc vào mode JavaScript (strict mode hay không).

Điều quan trọng là phải làm rõ khái niệm này vì các arrow function hoạt động rất khác so với các hàm thông thường (function).

Khi được định nghĩa là một method (phương thức) của một object, trong một hàm thông thường, nó tham chiếu đến object, vì vậy bạn có thể thực hiện:

```js
const car = {
  model: "Fiesta",
  manufacturer: "Ford",
  fullName: function () {
    return `${this.manufacturer}${this.model}`;
  },
};
```

Gọi `car.fullName()` sẽ return `"Ford Fiesta"`.

Scope `this` của các arrow function là inherited (thừa hưởng) từ execution context (bối cảnh thực thi). Một arrow function không bind `this`, vì thế giá trị của nó sẽ được tra cứu trong call stack vì thế `car.fullName()` sẽ không hoạt động và sẽ return về string `"undefined undefined"`: 

```js
const car = {
  model: "Fiesta",
  manufacturer: "Ford",
  fullName: () => {
    return `${this.manufacturer}${this.model}`;
  },
};
```

Do đó, các arrow function không phù hợp làm các object method (phương thức đối tượng).

Các arrow function cũng không thể được sử dụng làm constructor (hàm tạo), khi khởi tạo một object sẽ tạo ra một `TypeError`.

Đây là nơi các hàm thông thường nên được sử dụng thay thế khi **không cần đến dynamic context**.

Đây cũng là một vấn đề khi xử lý event. DOM Event listener đặt `this` là target element, và nếu bạn muốn dựa vào `this` trong một event handler, thì một hàm thông thường là cần thiết:

```js
const link = document.querySelector('#link');
link.addEventListener("click", () => {
  // this === window
});
```

```js
const link = document.querySelector("#link");
link.addEventListener("click", function () {
  // this === link
});
```

### Class

JavaScript có một cách khá phổ biến để triển khai inheritance (kế thừa): [prototypical inheritance](https://flaviocopes.com/javascript-prototypal-inheritance/).

Theo quan điểm của tôi, prototypical inheritance không giống như hầu hết các ngôn ngữ lập trình phổ biến khác - triển khai kế thừa dựa trên class.

Những người đến từ Java hoặc Python hoặc các ngôn ngữ khác đã gặp khó khăn trong việc hiểu các đặc điểm của prototypal inheritance, vì vậy ủy ban ECMAScript đã quyết định sprinkle syntactic sugar on top of prototypical inheritance để nó giống với cách hoạt động của kế thừa dựa trên class trong các triển khai phổ biến khác.

Điều này rất quan trọng: các đoạn code bên dưới vẫn vậy và bạn có thể truy cập một object prototype theo cách thông thường.

#### Định nghĩa một class

Một class trông như thế này:

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  hello() {
    return "Hello, I am " + this.name + ".";
  }
}
```

Một class có một định danh, chúng ta có thể sử dụng để tạo các đối tượng mới bằng cách sử dụng `newClassIdentifier()`.

Khi object được khởi tạo, phương thức constructor được gọi, với bất kỳ tham số nào được truyền vào.

Một class cũng có nhiều phương thức như nó cần. Trong trường hợp này, `hello` là một phương thức và có thể được gọi trên tất cả các đối tượng bắt nguồn từ class này:

```js
const flavio = new Person("Flavio");
flavio.hello();
```

#### Kế thừa class

Một class có thể extend một class khác và các đối tượng được khởi tạo bằng class này kế thừa tất cả các phương thức của cả hai class.

Nếu class kế thừa có một phương thức trùng tên với một trong các class cao hơn trong hệ thống phân cấp, phương thức gần nhất sẽ được ưu tiên:

```js
class Programmer extends Person {
  hello() {
    return super.hello() + " I am a programmer.";
  }
}
const flavio = new Programmer("Flavio");
flavio.hello();
```

(chương trình trên in ra `Hello, I am Flavio. I am a programmer.`)

Các class không có khai báo biến class rõ ràng, nhưng bạn phải khởi tạo biến (bất kỳ biến nào) trong constructor.

Bên trong một class, bạn có thể tham chiếu đến class cha bằng cách gọi `super()`.

#### Static methods

Thông thường các phương thức được định nghĩa trên instance, không phải trên class.

Thay vào đó, các static method (phương thức tĩnh) được thực thi trên class:

```js
class Person {
  static genericHello() {
    return "Hello";
  }
}
Person.genericHello(); //Hello
```

#### Private methods

JavaScript không built-in (tích hợp) code để xác định các phương thức private hoặc protected.

#### Getters and setters

Bạn có thể thêm các phương thức có tiền tố là `get` hoặc `set` để tạo `getter` và `setter`.

`getter` và `setter` dùng để truy cập biến hoặc sửa đổi giá trị của biến.

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  set name(value) {
    this.name = value;
  }
  get name() {
    return this.name;
  }
}
```

Nếu bạn chỉ có `getter`, thì không thể đặt property (thuộc tính) và mọi nỗ lực làm như vậy sẽ bị bỏ qua:

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this.name;
  }
}
```

Nếu bạn chỉ có một `setter`, bạn có thể thay đổi giá trị nhưng không thể truy cập nó từ bên ngoài:

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  set name(value) {
    this.name = value;
  }
}
```

### Default parameters

Default parameter đã được giới thiệu trong ES2015 và được triển khai rộng rãi trong các trình duyệt hiện đại.

Đây là hàm `doSomething` chấp nhận `param1`.

```js
const doSomething = (param1) => {

};
```

Chúng ta có thể thêm giá trị mặc định cho `param1` nếu hàm được gọi mà không chỉ định tham số:

```js
const doSomething = (param1 = "test") => {

};
```

Tất nhiên, điều này cũng hoạt động cho nhiều tham số hơn:

```js
const doSomething = (param1 = "test", param2 = "test2") => {

};
```

Điều gì sẽ xảy ra nếu bạn có một object duy nhất với các giá trị tham số trong đó?

Trước đây, nếu chúng ta phải truyền một object tùy chọn vào một hàm, để có giá trị mặc định của các tùy chọn đó nếu một trong số chúng không được xác định, bạn phải thêm một chút code vào bên trong hàm:

```js
const colorize = (options) => {
  if (!options) {
    options = {};
  }
  const color = "color" in options ? options.color : "yellow";
  //...
};
```

Với destructuring, bạn có thể cung cấp các giá trị mặc định, điều này giúp đơn giản hóa code rất nhiều:

```js
const colorize = ({ color = "yellow" }) => {
  // ...
};
```

Tương tự nếu không có đối tượng nào được chuyển khi gọi hàm `colorrize`, chúng ta có thể gán một đối tượng trống theo mặc định:

```js
const spin = ({ color = "yellow" } = {}) => {
  // ...
};
```

### Template Literals

Template Literals cho phép bạn làm việc với các string theo một cách mới so với các phiên bản ES5 trở xuống.

Cú pháp thoạt nhìn rất đơn giản, chỉ cần sử dụng backticks (**`**) thay vì dấu ngoặc kép hoặc đơn:

```js
const a_string = `something`
```

Chúng là duy nhất bởi vì chúng cung cấp rất nhiều tính năng mà các chuỗi bình thường được tạo bằng dấu ngoặc kép không có, cụ thể là:

- Chúng cung cấp một cú pháp tuyệt vời để xác định chuỗi nhiều dòng

- Chúng cung cấp một cách dễ dàng để interpolate (nội suy) các biến và biểu thức trong chuỗi

- Chúng cho phép bạn tạo DSLs với các template tag (DSL có nghĩa là ngôn ngữ dành riêng cho miền và ví dụ như nó được sử dụng trong React bởi Styled Components, để định nghĩa CSS cho một component)

#### Multiline strings

Trước ES6, để tạo một chuỗi kéo dài trên hai dòng, bạn phải sử dụng ký tự `\` ở cuối dòng:

```js
const string = "first part \
second part";
```

Điều này cho phép tạo một chuỗi trên 2 dòng, nhưng nó chỉ được hiển thị trên một dòng:

```js
first part second part
```

Để hiển thị chuỗi trên nhiều dòng, bạn cần phải thêm `\n` vào cuối mỗi dòng, như sau:

```js
const string = "first line\n \
second line";
```

hoặc

```js
const string = "first line\n" + "second line";
```

Các template literal làm cho các chuỗi nhiều dòng đơn giản hơn nhiều.

Khi một template literal được mở bằng backtick, bạn chỉ cần nhấn enter để tạo một dòng mới, không có ký tự đặc biệt và nó được hiển thị như sau:

```js
const string = `Hey
this
string
is awesome!`;
```

Hãy nhớ rằng space (khoảng trắng) có ý nghĩa, vì vậy hãy làm như sau:

```js
const string = `First
                Second`;
```

sẽ tạo một chuỗi như thế này:

```js
First
                Second
```

một cách dễ dàng để khắc phục sự cố này là có một dòng đầu tiên trống và thêm phương thức `trim()` ngay sau backtick đóng, điều này sẽ loại bỏ bất kỳ khoảng trắng nào trước ký tự đầu tiên:

```js
const string = `
First
Second`.trim();
```

#### Interpolation

Các template literal cung cấp một cách dễ dàng để nội suy các biến và biểu thức thành chuỗi.

Bạn làm như vậy bằng cách sử dụng cú pháp `${...}`:

```js
const va = "test";
const string = `something ${va}`; //something test
```

bên trong `${}`, bạn có thể thêm bất kỳ thứ gì, ngay cả các biểu thức:

```js
const string = `something ${1 + 2 + 3}`;
const string2 = `something ${foo() ? "x" : "y"}`;
```

#### Template tags

Tagged template  là một tính năng thoạt đầu nghe có vẻ ít hữu ích hơn đối với bạn, nhưng nó thực sự được sử dụng bởi rất nhiều thư viện phổ biến xung quanh, như Styled Components hoặc Apollo, thư viện GraphQL client/server, vì vậy điều cần thiết là phải hiểu cách hoạt động của nó

Trong Styled Components template tag được sử dụng để xác định các chuỗi CSS:

```js
const Button = styled.button`
  font-size: 1.5em;
  background-color: black;
  color: white;
`;
```

Trong Apollo template tag được sử dụng để xác định các GraphQL query schema:

```js
const query = gql`
  query {
   ...
  }
`;
```

`styled.button` và `gql` template tag được đánh dấu trong các ví dụ trên đó chỉ là **functions**:

```js
function gql(literals, ...expressions) {}
```

hàm này trả về một chuỗi, có thể là kết quả của bất kỳ loại tính toán nào.

`literals` là một mảng chứa template literal content được mã hóa bởi các phép nội suy biểu thức.

`expressions` chứa tất cả các phép nội suy.

Nếu chúng ta lấy một ví dụ ở trên:

```js
const string = `something ${1 + 2 + 3}`;
```

`literals` là một mảng có 2 item. Đầu tiên là `something`, cho đến
interpolation đầu tiên, và 2 là một string trống, khoảng trống giữa kết thúc của
interpolation đầu tiên và cuối chuỗi. `expressions` trong trường hợp này là một mảng có một mục duy nhất, `6`.

Một ví dụ phức tạp hơn là:

```js
const string = `something
another ${"x"}
new line ${1 + 2 + 3}
test`;
```

trong trường hợp này `literals` là một mảng trong đó item đầu tiên là:

```js
;`something
another `
```

item thứ 2 là:

```js
;`
new line `
```

và item thứ 3 là:

```js
;`
test`
```

`expressions` trong trường hợp này là một mảng có 2 item, `x` và `6`.

Hàm được truyền các giá trị đó có thể làm bất cứ điều gì với chúng và đây là sức mạnh của tính năng loại này.

Ví dụ đơn giản nhất chính là replicating những gì mà string interpolation thực hiện, bằng cách kết hợp `literals` và `expressions`:

```js
const interpolated = interpolate`I paid ${10}€`;
```

và đâu là cách `interpolate` hoạt động:

```js
function interpolate(literals, ...expressions) {
  let string = ``;
  for (const [i, val] of expressions) {
    string += literals[i] + val;
  }
  string += literals[literals.length - 1];
  return string;
}
```

### Destructuring assignments

Cho một object, bạn có thể trích xuất một số giá trị và đặt chúng vào các biến được đặt tên:

```js
const person = {
  firstName: "Tom",
  lastName: "Cruise",
  actor: true,
  age: 54, //made up
};
const { firstName: name, age } = person;
```

`name` và `age` chứa các giá trị mong muốn.

Cú pháp cũng hoạt động trên mảng:

```js
const a = [1, 2, 3, 4, 5];
const [first, second] = a;
```

Câu lệnh này tạo 3 biến mới bằng cách lấy các item có chỉ số 0, 1, 4 từ mảng `a`:

```js
const [first, second, , , fifth] = a;
```

### Enhanced Object Literals

Trong ES2015 Object Literals đã đạt được siêu năng lực.

#### Cú pháp đơn giản hơn để bao gồm các biến

Thay vì

```js
const something = "y";
const x = {
  something: something,
};
```

bạn có thể

```js
const something = "y";
const x = {
  something,
};
```

#### Prototype

Một prototype có thể được chỉ định với

```js
const anObject = { y: 'y' }
const x = {
    __proto__: anObject
}
```

**super()**

```js
const anObject = { y: "y", test: () => "zoo" };
const x = {
  __proto__: anObject,
  test() {
    return super.test() + "x";
  },
};
x.test(); //zoox
```

**Dynamic properties**

```js
const x = { ["a" + "_" + "b"]: "z" };
x.a_b; //z
```

### For-of loop

ES5 trở lại vào năm 2009 giới thiệu vòng lặp `forEach()`. Và không có cách nào để thoát khỏi vòng lặp (break) giống như các vòng lặp `for` thông thường.

ES2015 giới thiệu vòng lặp `for-of`  là sự kết hợp ngắn gọn giữa `forEach` với khả năng `break`:

```js
// Lặp các giá trị
for (const v of ["a", "b", "c"]) {
  console.log(v);
}

// Lấy chỉ mục bằng entries()
for (const [i, v] of ["a", "b", "c"].entries()) {
  console.log(index); // index
  console.log(value); // value
}
```

Lưu ý việc sử dụng `const`. Vòng lặp tạo ra scope mới trong mỗi lần lặp, do đó ta có thể sử dụng nó một cách an toàn thay vì  `let`.

Điểm khác biệt với `for...in` là:

- `for...of` lặp qua các giá trị thuộc tính

- `for...in` lặp lại các tên thuộc tính

### Promise

Một đối tượng `Promise` đại diện cho một giá trị ở thời điểm hiện tại có thể chưa tồn tại, nhưng sẽ được xử lý và có giá trị vào một thời gian nào đó trong tương lai.

 Việc này sẽ giúp bạn viết các dòng code xử lý bất đồng bộ (asynchronous) trông có vẻ đồng bộ hơn.

Lấy ví dụ, nếu bạn sử dụng Promise cho việc gọi API để lấy dữ liệu, bạn sẽ tạo ra một đối tượng `Promise` đại diện cho data lấy được từ API. Điều cốt lõi ở đây là dữ liệu sẽ chưa tồn tại ở thời điểm đối tượng `Promise` được tạo ra, mà chỉ có thể truy cập sau khi có response từ web service. Trong thời gian chờ lấy dữ liệu, đối tượng `Promise` sẽ đóng vai trò như một proxy cho dữ liệu. Hơn nữa, bạn có thể đính các callback vào đối tượng `Promise` để thực hiện việc xử lý dữ liệu. Các callback này sẽ chỉ thực hiện khi dữ liệu đã sẵn sàng.

#### JavaScript API nào sử dụng promise

Ngoài code và mã thư viện của riêng bạn, các promise được sử dụng bởi các API Web hiện đại tiêu chuẩn như:

- Battery API

- Fetch API

- Service Workers

#### Tạo một promise

Tạo một promise khá đơn giản, chỉ cần tạo mới đối tượng Promise `new Promise`. Đồng thời  truyền vào đó một hàm callback. Hàm callback này sẽ nhận 2 tham số là `resolve` và `reject`, với cả 2 tham số đều có kiểu là hàm (function). 

```js
const promise = new Promise((resolve, reject) => {
  // ...
});
```

Nếu hàm `resolve` được gọi, trạng thái của promise sẽ là thành công và hành động `then` được gọi. Tham số bạn truyền vào hàm `resolve` sẽ được chuyển đến `then`:

```js
const promise = new Promise((resolve, reject) => {
  // Lưu ý: resolve chỉ cho phép truyền đúng 1 param
  return resolve(27);
});

// Tham số từ resolve sẽ được chuyển đến then
promise.then((number) => console.log(number)); // 27
```

Ngược lại nếu hàm `reject` được gọi, trạng thái của promise sẽ là thất bại và hành động `catch` được gọi. Tương tự như `resolved` tham số được truyền vào `reject` sẽ được chuyển đến `catch`.

```js
const promise = new Promise((resolve, reject) => {
  // Lưu ý: reject chỉ cho phép truyền đúng 1 param
  return reject("lỗi");
});

promise.catch((error) => console.error(error)); // lỗi
```

Ví dụ:

```js
let done = true;
const isItDoneYet = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (done) {
      const workDone = "Thành công";
      resolve(workDone);
    } else {
      const why = "Thất bại";
      reject(new Error(why));
    }
  }, 3000);
});

isItDoneYet
  .then((ok) => {
    console.log(ok);
  })
  .catch((error) => {
    console.error(error);
  });
```

#### Nối nhiều Promise

Một promise có thể trả về một promise khác, tạo ra một chuỗi các promise.

Ví dụ:

```js
fetch("/todos.json")
  .then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    }
    return Promise.reject(new Error(response.statusText));
  })
  .then((response) => response.json())
  .then((data) => {
    console.log("Request succeeded with JSON response", data);
  })
  .catch((error) => {
    console.error("Request failed", error);
  });
```

#### Xử lý lỗi

```js
new Promise((resolve, reject) => {
  throw new Error("Error");
}).catch((error) => {
  console.error(error);
});

// Hoặc

new Promise((resolve, reject) => {
  reject("Error");
}).catch((error) => {
  console.error(error);
});
```

#### Lỗi xếp tầng

Nếu bên trong hàm `catch()` bạn phát sinh lỗi, bạn có thể nối thêm một hàm `catch()` thứ hai để xử lý, v.v.

```js
new Promise((resolve, reject) => {
  throw new Error("Error");
})
  .catch((err) => {
    throw new Error("Error");
  })
  .catch((error) => {
    console.error(error);
  });
```

#### Orchestrating promises

**`Promise.all()`**

Phương thức `Promise.all(iterable)` trả ra một promise mới và promise mới này chỉ được kết thúc khi tất cả các promise trong `iterable` kết thúc hoặc có một promise nào đó xử lý thất bại.

Kết quả của promise mới này là một mảng chứa kết quả của tất cả các promise theo đúng thứ tự hoặc kết quả lỗi của promise gây lỗi.

Ví dụ:

```js
const f1 = fetch("/something.json");
const f2 = fetch("/something2.json");

Promise.all([f1, f2])
  .then((res) => {
    console.log("Array of results", res);
  })
  .catch((error) => {
    console.error(error);
  });
```

Cú pháp destructuring ES2015 cho phép bạn viết:

```js
Promise.all([f1, f2]).then(([res1, res2]) => {
  console.log("Results", res1, res2);
});
```

**`Promise.race()`**

Phương thức `Promise.race()` nhận vào một mảng các promise sẽ resolve/reject ngay khi một trong số các promise này hoàn thành/xảy ra lỗi.

Ví dụ:

```js
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promiseOne, promiseTwo])
  .then((result) => {
    console.log(result); // "two"
  })
  .catch((error) => {
    console.error(error);
  });
```

```js
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(reject, 500, "Lỗi tại one");
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "Lỗi tại two");
});

Promise.race([promiseOne, promiseTwo])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error); // "Lỗi tại two"
  });
```

#### Các lỗi thường gặp

**Uncaught TypeError: undefined is not a promise**

Nếu bạn nhận được lỗi `Uncaught TypeError: undefined is not a promise` trong console, hãy đảm bảo rằng bạn sử dụng `new Promise()` thay vì chỉ `Promise()`.

### Module

ES Modules là tiêu chuẩn ECMAScript để làm việc với các module.

Mặc dù Node.js đã sử dụng tiêu chuẩn CommonJS trong nhiều năm, nhưng trình duyệt chưa bao giờ có module system, vì mọi quyết định quan trọng như module system phải được chuẩn hóa trước bởi ECMAScript và sau đó được triển khai lên trình duyệt.

Quá trình tiêu chuẩn hóa này đã hoàn thành với ES2015 và các trình duyệt bắt đầu triển khai tiêu chuẩn này cố gắng giữ cho mọi thứ được liên kết tốt, hoạt động theo cùng một cách và hiện tại ES Modules được Chrome, Safari, Edge và Firefox hỗ trợ (kể từ phiên bản 60).

Module rất tuyệt, vì chúng cho phép bạn encapsulate tất cả các loại chức năng và expose chức năng này với các tệp JavaScript khác, dưới dạng thư viện.

#### ES Modules Syntax

Cú pháp để nhập một module là:

```js
import package from "module-name";
```

Trong khi CommonJS sử dụng:

```js
const package = require("module-name");
```

Module là một tệp JavaScript xuất một hoặc nhiều giá trị (object, hàm hoặc biến), sử dụng `export` keyword. Lấy ví dụ, module này xuất một hàm trả về một chuỗi chữ hoa:

```js
// uppercase.js
export default (str) => str.toUpperCase();
```

Trong ví dụ này, module xách định một lần export default, vì vậy nó có thể là một anonymous function (hàm ẩn danh). Nếu không nó sẽ cần một cái tên để phân biệt với các export khác.

Bây giờ, bất kỳ JavaScript module nào khác đều có thể nhập chức năng được cung cấp bởi uppercase.js bằng cách import nó.

Một trang HTML có thể thêm một module bằng cách sử dụng thẻ `<script>` với thuộc tính `type="module"`:

```html
<script type="module" src="index.js"></script>
```

> Note: this module import behaves like a `defer` script load. See [efficiently load JavaScript with defer and async](https://flaviocopes.com/javascript-async-defer/)

Điều quan trọng cần lưu ý là bất kỳ tập lệnh nào được tải bằng `type ="module"` đều được tải ở chế độ nghiêm ngặt (strict mode).

In this example, the `uppercase.js` module defines a default export, so when we import it, we can assign it a name we prefer:

Trong ví dụ này, module `uppercase.js` định nghĩa một export default, vì vậy khi chúng ta nhập nó, chúng ta có thể gán cho nó một cái tên mà chúng ta muốn:

```js
import toUpperCase from "./uppercase.js";
```

và chúng ta có thể sử dụng nó:

```js
toUpperCase("test"); // "TEST"
```

Bạn cũng có thể sử dụng một đường dẫn tuyệt đối để import module, để tham chiếu các module được định nghĩa trên một tên miền khác:

```js
import toUpperCase from "https://abc.xyz/uppercase.js";
```

Đây cũng là cú pháp import hợp lệ:

```js
import { toUpperCase } from "/uppercase.js";
import { toUpperCase } from "../uppercase.js";
```

Nhưng điều này lại không:

```js
import { toUpperCase } from "uppercase.js";
import { toUpperCase } from "utils/uppercase.js";
```

Nó hoặc là tuyệt đối, hoawjc có `./` hoặc `/` trước tên.

#### Các tùy chọn import/export khác

Bạn đã thấy ví dụ này ở trên:

```js
export default (str) => str.toUpperCase();
```

Điều này tạo ra một export default. Tuy nhiên, trong một tệp, bạn có thể xuất nhiều thứ, bằng cách sử dụng cú pháp sau:

```js
const a = 1;
const b = 2;
const c = 3;

export { a, b, c };
```

Một module khác có thể import tất cả chúng bằng cách sử dụng:

```js
import * from 'module'
```

Bạn chỉ có import một số cái bằng các sử dụng sử dụng destructuring:

```js
import { a } from "module";
import { a, b } from "module";
```

Bạn có thể đối tên import cho thuận tiện bằng cách sử dụng `as`:

```js
import { a, b as two } from "module";
```

Bạn có thể import cái được export default, và bất kì non-default export bằng tên, như cách import React phổ biến này:

```js
import React, { Component } from "react";
```

#### CORS

Module được tìm nạp bằng CORS. Điều này có nghĩa là nếu bạn tham chiếu các tập lệnh từ các trang web khác, chúng phải có CORS header hợp lệ cho phép tải trên nhiều trang web (như `Access-Control-Allow-Origin: *`)

#### Còn các trình duyệt không hỗ trợ thì sao?

Sử dụng kết hợp cả `type="module"` và `nomodule`:

```html
<script type="module" src="module.js"></script>
<script nomodule src="fallback.js"></script>
```

#### Kết luận

ES Module là một trong những tính năng lớn nhất được giới thiệu trong các trình duyệt hiện đại. Chúng là một phần của ES6 nhưng chặng đường để triển khai chúng còn dài.

Bây giờ chúng ta có thể sử dụng chúng! Nhưng chúng ta cũng phải nhớ rằng có nhiều module hơn sẽ ảnh hưởng đến hiệu suất trên trang của chúng ta, vì nó cần thêm một bước nữa mà trình duyệt phải thực hiện trong thời gian chạy.

Webpack có lẽ sẽ vẫn là một người chơi lớn ngay cả khi ES Module xuất hiện trên trình duyệt, nhưng việc có một tính năng như vậy được xây dựng trực tiếp bằng ngôn ngữ là một điều rất tốt đối với việc thống nhất cách các module hoạt động phía client-side và cả trên Node.js.

### Phương thức string mới

Bất kì string nào cũng có một số instance method mới:

- `repeat()`

- `codePointAt()`

#### repeat()

Lặp lại các chuỗi trong số lần được chỉ định:

```js
"Ha".repeat(3); // "HaHaHa"
```

Trả về một chuỗi trống nếu không có tham số hoặc tham số là `0`. Nếu tham số âm, bạn sẽ nhận được lỗi `RangeError`.

#### codePointAt()

Phương thức này có thể được sử dụng để xử lý các ký tự Unicode không thể được biểu thị bằng một đơn vị Unicode 16-bit duy nhất mà cần có 2 ký tự thay thế.

Sử dụng `charCodeAt()` khi bạn muốn truy xuất cái đầu tiên ,cái thứ thứ 2 và kết hợp chúng. Sử dụng `codePointAt()` bạn nhận được tất cả trong một lần gọi.

Ví dụ: ký tự tiếng Trung "𠮷" này được cấu tạo bởi 2 phần UTF-16 (Unicode):

```js
"𠮷".charCodeAt(0).toString(16); // d842
"𠮷".charCodeAt(1).toString(16); // dfb7
```

Nếu bạn tạo một ký tự mới bằng cách kết hợp các ký tự unicode đó:

```js
"\ud842\udfb7" // "𠮷"
```

Bạn có thể nhận được kết quả tương tự bằng cách sử dụng `codePointAt()`:

```js
"𠮷".codePointAt(0); // 20bb7
```

Nếu bạn tạo một ký tự mới bằng cách kết hợp các ký tự unicode đó:

```js
"\u{20bb7}" // "𠮷"
```

### Phương thức Object mới

ES6 đã giới thiệu một số phương thức tĩnh trong Object namespace:

- `Object.is()` xác định xem hai giá trị có cùng giá trị hay không

- `Object.assign()` sử dụng để shallow copy (sao chép nông) một object

- `Object.setPrototypeOf` thiết lập một object prototype

#### Object.is()

Phương thức này nhằm giúp so sánh các giá trị

Sử dụng:

```js
Object.is(a, b);
```

Kết quả luôn là `false` trừ khi:

- a và b là cùng một object
- a và b là các chuỗi bằng nhau (các chuỗi bằng nhau khi được tạo bởi các ký tự giống nhau)
- a và b là các số bằng nhau (các số bằng nhau khi giá trị của chúng bằng nhau)
- a và b đều `undefined`, cả hai đều `null`, cả hai đều `NaN`, đều `true` hoặc cả hai đều `false`

```js
const a = "Nihta";
const b = "Nihta";

console.log(Object.is(a, b)); // true
```

```js
const a = 1;
const b = 1;

console.log(Object.is(a, b)); // true
```

```js
console.log(Object.is(undefined, undefined)); // true
console.log(Object.is(null, null)); // true
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(true, true)); // true
console.log(Object.is(false, false)); // true
```

> `0` và `-0` là các giá trị khác nhau trong JavaScript, vì vậy hãy chú ý trong trường hợp đặc biệt này (chuyển đổi tất cả thành `+0` bằng cách sử dụng toán tử `+` trước khi so sánh).