export default [
  {
    "env": {
      "browser": true,
      "es6": true,
      "node": true
    },
    "rules": {
      // 缩进风格
      "indent": ["error", 2, { "VariableDeclarator": "first" }],
      // 必须使用全等
      "eqeqeq": ["error", "always"],
      // 禁止使用eval
      "no-eval": "error",
      // 禁止不必要的嵌套块
      "no-lone-blocks": "error",
      // 禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
      "no-loop-func": "error",
      // 不能用多余的空格
      "no-multi-spaces": ["error", { "exceptions": { "Property": false } }],
      // 不能比较自身
      "no-self-compare": "error",
      // 禁止使用逗号运算符
      "no-sequences": "error",
      // parseInt必须指定第二个参数
      "radix": "error",
      // 未定义前不能使用
      "no-use-before-define": "error",
      // 大括号风格
      "brace-style": "error",
      // 强制驼峰法命名
      "camelcase": ["error", { "properties": "always", "ignoreImports": true }],
      // 对象字面量项尾不能有逗号
      "comma-dangle": ["error", "never"],
      // 文件以单一的换行符结束
      "eol-last": ["error", "always"],
      // 方法调用中间是否可以空格
      "func-call-spacing": ["error", "never"],
      // 对象字面量中冒号的前后空格
      "key-spacing": ["error", { "beforeColon": false }],
      // 换行风格
      "linebreak-style": ["error", "unix"],
      // 引号类型
      "quotes": ["error", "double"],
      // 语句强制分号结尾
      "semi": ["error", "always"],
      // 函数定义时括号前面要不要有空格
      "space-before-function-paren": ["error", "never"],
      // 中缀操作符周围要不要有空格
      "space-infix-ops": "error",
      // 箭头函数前/后括号
      "arrow-spacing": ["error", { "before": true, "after": true }],
      // 避免不必要的函数return 如 return undefined;
      "no-useless-return": "error",
      // async函数需要await
      "require-await": "error",
      // 确保代码块周围有所需的空格 如 function foo() {}
      "block-spacing": "error",
      // 强制关键字之间的一致空格 如 if (isValid) {}
      "keyword-spacing": ["error", { "before": true, "after": true }],
      // 强制构造函数的首字母大写
      "new-cap": ["error", { "capIsNew": false }],
      // 禁止重复导入同一模块
      "no-duplicate-imports": ["error", { "includeExports": true }],
      // 优先使用const
      "prefer-const": "error",
      // 使用解构赋值
      "prefer-destructuring": ["error", { "object": true, "array": false }],
      // 控制对象字面量中花括号内部的空格 如 { id: 1, name: 'John Doe', email: 'john.doe@example.com' }
      "object-curly-spacing": ["error", "always"],
      // 控制逗号前后的空格
      "comma-spacing": ["error", { "before": false, "after": true }]
    }
  }
];

