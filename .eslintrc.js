module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module'
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended'],
  
    // add your custom rules here
    //it is base on https://github.com/vuejs/eslint-config-vue
    rules: {
      "vue/max-attributes-per-line": [2, {
        "singleline": 10,
        "multiline": {
          "max": 1,
          "allowFirstLine": false
        }
      }],
      "vue/singleline-html-element-content-newline": "off",
      "vue/multiline-html-element-content-newline":"off",
      "vue/name-property-casing": ["error", "PascalCase"],
      "vue/no-v-html": "off",
      'accessor-pairs': 2,
      'arrow-spacing': [2, {
        'before': true,
        'after': true
      }],
      'block-spacing': [2, 'always'],
      'brace-style': [2, '1tbs', {
        'allowSingleLine': true
      }],
      'camelcase': [0, {
        'properties': 'always'
      }],
      'comma-dangle': [2, 'never'],
      'comma-spacing': [2, {
        'before': false,
        'after': true
      }],
      'comma-style': [2, 'last'],
      'constructor-super': 2,
      'curly': [2, 'multi-line'],
      'dot-location': [2, 'property'],
      'eol-last': 2,
      'eqeqeq': ["error", "always", {"null": "ignore"}],
      'generator-star-spacing': [2, {
        'before': true,
        'after': true
      }],
      'handle-callback-err': [2, '^(err|error)$'],
      'indent': [2, 2, {
        'SwitchCase': 1
      }],
      'jsx-quotes': [2, 'prefer-single'],
      'key-spacing': [2, {
        'beforeColon': false,
        'afterColon': true
      }],
      'keyword-spacing': [2, {
        'before': true,
        'after': true
      }],
      'new-cap': [2, {
        'newIsCap': true,
        'capIsNew': false
      }],
      'new-parens': 2,
      'no-array-constructor': 2,
      'no-caller': 2,
      'no-console': 'off',
      'no-class-assign': 2,
      'no-cond-assign': 2,
      'no-const-assign': 2,
      'no-control-regex': 0,
      'no-delete-var': 2,
      'no-dupe-args': 2,
      'no-dupe-class-members': 2,
      'no-dupe-keys': 2,
      'no-duplicate-case': 2,
      'no-empty-character-class': 2,
      'no-empty-pattern': 2,
      'no-eval': 2,
      'no-ex-assign': 2,
      'no-extend-native': 2,
      'no-extra-bind': 2,
      'no-extra-boolean-cast': 2,
      'no-extra-parens': [2, 'functions'],
      'no-fallthrough': 2,
      'no-floating-decimal': 2,
      'no-func-assign': 2,
      'no-implied-eval': 2,
      'no-inner-declarations': [2, 'functions'],
      'no-invalid-regexp': 2,
      'no-irregular-whitespace': 2,
      'no-iterator': 2,
      'no-label-var': 2,
      'no-labels': [2, {
        'allowLoop': false,
        'allowSwitch': false
      }],
      'no-lone-blocks': 2,
      'no-mixed-spaces-and-tabs': 2,
      'no-multi-spaces': 2,
      'no-multi-str': 2,
      'no-multiple-empty-lines': [2, {
        'max': 1
      }],
      'no-native-reassign': 2,
      'no-negated-in-lhs': 2,
      'no-new-object': 2,
      'no-new-require': 2,
      'no-new-symbol': 2,
      'no-new-wrappers': 2,
      'no-obj-calls': 2,
      'no-octal': 2,
      'no-octal-escape': 2,
      'no-path-concat': 2,
      'no-proto': 2,
      'no-redeclare': 2,
      'no-regex-spaces': 2,
      'no-return-assign': [2, 'except-parens'],
      'no-self-assign': 2,
      'no-self-compare': 2,
      'no-sequences': 2,
      'no-shadow-restricted-names': 2,
      'no-spaced-func': 2,
      'no-sparse-arrays': 2,
      'no-this-before-super': 2,
      'no-throw-literal': 2,
      'no-trailing-spaces': 2,
      'no-undef': 2,
      'no-undef-init': 2,
      'no-unexpected-multiline': 2,
      'no-unmodified-loop-condition': 2,
      'no-unneeded-ternary': [2, {
        'defaultAssignment': false
      }],
      'no-unreachable': 2,
      'no-unsafe-finally': 2,
      'no-unused-vars': [2, {
        'vars': 'all',
        'args': 'none'
      }],
      'no-useless-call': 2,
      'no-useless-computed-key': 2,
      'no-useless-constructor': 2,
      'no-useless-escape': 0,
      'no-whitespace-before-property': 2,
      'no-with': 2,
      'one-var': [2, {
        'initialized': 'never'
      }],
      'operator-linebreak': [2, 'after', {
        'overrides': {
          '?': 'before',
          ':': 'before'
        }
      }],
      'padded-blocks': [2, 'never'],
      'quotes': [2, 'single', {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }],
      'semi': [2, 'never'],
      'semi-spacing': [2, {
        'before': false,
        'after': true
      }],
      'space-before-blocks': [2, 'always'],
      'space-before-function-paren': [1, 'always'],
      'space-in-parens': [2, 'never'],
      'space-infix-ops': 2,
      'space-unary-ops': [2, {
        'words': true,
        'nonwords': false
      }],
      'spaced-comment': [2, 'always', {
        'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
      }],
      'template-curly-spacing': [2, 'never'],
      'use-isnan': 2,
      'valid-typeof': 2,
      'wrap-iife': [2, 'any'],
      'yield-star-spacing': [2, 'both'],
      'yoda': [2, 'never'],
      'prefer-const': 0,
      'no-var': 1,
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      'object-curly-spacing': [2, 'always', {
        objectsInObjects: false
      }],
      'array-bracket-spacing': [2, 'never']
    }
  }
/*
 * "off"或者0，不启用这个规则
 * "warn"或者1，出现问题会有警告
 * "error"或者2，出现问题会报错
 */

// module.exports = {
//     root: true, //此项是用来告诉eslint找当前配置文件不能往父级查找
//     env: { //环配置 如 "browser": true, node: true,
//       node: true,
//     },
//     extends: ['plugin:vue/essential', '@vue/standard'],
//     rules: {
//       'array-callback-return': 1, //return 后面是否允许省略
//       "arrow-parens": ["error", "as-needed"], // 箭头函数的参数可以不使用圆括号
//       'consistent-return': 0, //要求 return 语句要么总是指定返回的值，要么不指定
//       'camelcase': 0, //强制驼峰法命名
//       'eqeqeq': 0, //强制全等( === 和 !==)
//       'func-names': 0, //函数表达式必须有名字
//       "global-require": 0, // 取消对require的验证，使得可以使用require来加载图片的相对路径
//       "import/no-unresolved": 0, // 取消自动解析路径，以此开启alias的别名路径设置
//       'import/extensions': 0, // 取消对文件扩展名的验证
//       'indent': 'off', //缩进风格(强制使用一致的缩进)
//       "linebreak-style": 0, // 取消换行符\n或\r\n的验证()
//       'max-len': 0, //字符串最大长度
//       "no-unused-vars": 1, //禁止出现未使用过的变量
//       "no-redeclare": 1, //禁止多次声明同一变量
//       'no-use-before-define': 1, //禁止在变量定义之前使用它们
//       "no-unused-expressions": 0, // 允许使用未使用过的表达式，以此来支持a && a()的代码形式
//       'no-restricted-syntax': 1, //禁用特定的语法
//       'no-plusplus': 1, //禁止使用++，--
//       'no-underscore-dangle': 0, // 允许在标识符中使用下划线
//       'no-param-reassign': 0, // 禁止对 function 的参数进行重新赋值
//       'no-nested-ternary': 0, // 禁止嵌套三元表达式
//       'no-else-return': 0, //禁止 if 语句中 return 语句之后有 else 块
//       'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
//       'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
//       'no-shadow': [1, { //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
//         "allow": ["resolve", "reject", "done", "cb"]
//       }],
//       'prefer-rest-params': 0, //要求使用剩余参数而不是 arguments
//       'prefer-arrow-callback': 0, //要求回调函数使用箭头函数
//       'prefer-const': 1, //首选const
//       "semi": 0, // 使用分号, 默认true
//       "singleQuote": true, // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
//       "tabWidth": 4, // tab缩进大小,默认为4
//       'template-curly-spacing': 'off', //要求或禁止模板字符串中的嵌入表达式周围空格的使用
//     },
//     parserOptions: {
//       parser: 'babel-eslint',
//     },
//   };


// module.exports = {
//     root: true,
//     env: {
//         node: true
//     },
//     extends: ['plugin:vue/essential', '@vue/standard'],
//     rules: {
//         'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
//         'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
//         indent: [
//             'error',
//             4,
//             {
//                 SwitchCase: 1
//             }
//         ], // 空格缩进 off 关闭
//         semi: 0, // 不检查结尾分号,
//         'singleQuote': false,
//         //强制使用单引号
//         // quotes: ['error', 'single'],
//         //关闭函数名与后面括号间必须空格规则
//         "no-unused-vars": 0,
//         'space-before-function-paren': 0,
//         'eqeqeq': 0,
//         // 关闭var 声明，每个声明占一行规则。
//         'one-var': 0,
//         "no-console": 0

//     },
//     parserOptions: {
//         parser: 'babel-eslint'
//     }
// }
