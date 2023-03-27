# SelectV2

## 基本使用

<preview path="../demos/select-v2/select-v2-1.vue" title="基本使用" description=" "></preview>

## 组件 API【其他更多参照 el-select】

### Attributes 属性

| 参数                  | 说明                                           | 类型            | 可选值 | 默认值                      |
| --------------------- | ---------------------------------------------- | --------------- | ------ | --------------------------- |
| v-model / model-value | 双向绑定的值                                   | String \| Array |        |                             |
| v-model:data          | 当前选中项的 json 全部的 值                    | Object          |        |                             |
| api                   | 请求 api 方法                                  | Promise         |        |                             |
| searchKey             | 检索字段                                       | String          |        | name                        |
| formatSearchKey       | 格式化搜索参数                                 | Function        |        |                             |
| formatDataFc          | 格式化数据的方法                               | Function        |        |                             |
| defaultParams         | 默认参数                                       | Object          |        |                             |
| init                  | 是否初始化第一页数据                           | Boolean         |        | true                        |
| defaultFirst          | 是否默认选中第一项                             | Boolean         |        | false                       |
| option                | value【key】及 label【label】 的键值           | Object          |        | \{key: "id",label: "name"\} |
| insertList            | 回显时，避免浪费接口资源，直接插入要回显的数据 | Array           |        | 【 []                       |

### Methods 方法

| 方法名   | 说明     | 参数 | 返回值 |
| -------- | -------- | ---- | ------ |
| reset    | 重置清空 |      |        |
| initData | 重置数据 |      |        |

### Slots 插槽

| 插槽名 | 说明     | 参数 |
| ------ | -------- | ---- |
|        | 默认插槽 |      |
