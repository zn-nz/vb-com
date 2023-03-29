<template>
  <ve-select
    :loading="loading"
    :model-value="currentValue"
    loading-text="加载中..."
    no-match-text="未查询到数据"
    no-data-text="未查询到数据"
    clearable
    filterable
    fit-input-width
    remote
    reserve-keyword
    remote-show-suffix
    :allowCreate="allowCreate"
    @remote-method="handleSearch"
    @loadMore="loadMore"
    @clear="handleClear"
    @visible-change="visibleChange"
    @change="handleChange"
    :value-key="props.option.key"
  >
    <ElOption
      v-for="item in listData"
      :key="item[props.option.key]"
      :label="
        props.option.label
          .split(',')
          .map((key:string) => item[key])
          .join('-')
      "
      :value="item"
    />
  </ve-select>
</template>

<script lang="ts" setup name="VeSelectV2">
import { VeSelect } from '@ve-com/components'
import { ElOption } from 'element-plus'
import { defineProps, onMounted, ref, watch } from 'vue'
import { selectV2Props } from './select-v2'

const props = defineProps(selectV2Props)

const currentValue = ref()
function setCurrentValue (v: any) {
  if (isArray(props.modelValue)) {
    currentValue.value = listData.value.filter((item: any) =>
      props.modelValue?.includes(item[props.option.key])
    )
  } else if (props.modelValue) {
    const find = listData.value.find((item: any) => {
      return item[props.option.key] === v
    })
    if (!find && props.allowCreate) {
      currentValue.value = props.modelValue
    } else {
      currentValue.value = find
    }
  } else {
    currentValue.value = null
  }
  if (v !== props.modelValue) {
    emit('change', currentValue.value)
  }
}
const emit = defineEmits([
  'update:modelValue', // 只给选中项的value值
  'change',
  'update:data', // 给选中项的全部json对象
  'visibleChange',
  'clear'
])
const listData = ref()
let cacheListData: [] = []
let cacheSearchList: [] = []
let cacheNoMore = false
const listQuery = ref({ pageIndex: 1, pageSize: 20 })
const keyword = ref()
let noMore = false
const loading = ref(false)
onMounted(() => {
  props.init && getListData()
})
watch(
  () => JSON.stringify(props.defaultParams),
  () => {
    reset()
  }
)
watch(
  () => props.insertList,
  () => {
    initData()
  }
)
watch(() => props.modelValue, setCurrentValue)
function reset () {
  listData.value = []
  cacheListData = []
  keyword.value = undefined
  listQuery.value.pageIndex = 1
  getListData()
}
async function getListData () {
  if (!props.api) {
    // eslint-disable-next-line no-throw-literal
    throw 'scroll-select-v2 组件 未定义api'
  }
  loading.value = true
  let query = {
    ...props.defaultParams,
    ...listQuery.value,
    [props.searchKey]: keyword.value
  }
  if (props.formatSearchKey) {
    query = { ...query, ...props.formatSearchKey(keyword.value) }
  }
  const { data: res } = await props.api(query)
  loading.value = false
  const { ok, data } = res ?? {}
  if (ok) {
    let temp: [] =
      data?.filter(
        (i: any) =>
          !listData.value.find(
            (j: any) => j[props.option.key] === i[props.option.key]
          )
      ) || []
    props.formatDataFc && (temp = props.formatDataFc(temp))
    if (keyword.value) {
      noMore = ~~data?.length < listQuery.value.pageSize
      cacheSearchList.push(...temp)
      listData.value = [...cacheSearchList]
    } else {
      temp?.length && cacheListData.push(...temp)
      initData()
      cacheNoMore = noMore = ~~data?.length < listQuery.value.pageSize
      if (props.modelValue) {
        if (isArray(props.modelValue)) {
          const _value = listData.value.filter((item: any) =>
            props.modelValue?.includes(item[props.option.key])
          )
          if (_value.length < props.modelValue.length) {
            loadMore()
          }
          handleChange(_value)
        } else {
          const find = listData.value.find(
            (item: any) => item[props.option.key] === props.modelValue
          )
          if (find) {
            handleChange(find)
          } else {
            loadMore()
          }
        }
      }
      if (!props.modelValue && props.defaultFirst) {
        handleChange(listData.value[0])
      }
    }
  } else {
    noMore = true
  }
}
function loadMore () {
  if (!noMore && !loading.value) {
    listQuery.value.pageIndex++
    getListData()
  }
}
function handleSearch (value: any) {
  if (value) {
    cacheSearchList = []
    keyword.value = value
    listQuery.value.pageIndex = 1
    listData.value = []
    getListData()
  } else {
    visibleChange(false)
  }
}
function visibleChange (show: boolean) {
  if (!props.modelValue) {
    if (show) {
      initData()
      noMore = cacheNoMore
    } else {
      keyword.value = undefined
    }
  }
  if (!show) {
    keyword.value = undefined
    cacheListData.push(
      ...(cacheSearchList?.filter(
        (i) =>
          !cacheListData.find(
            (j) => j[props.option.key] === i[props.option.key]
          )
      ) || [])
    )
    initData()
    noMore = cacheNoMore
  }
  emit('visibleChange', show)
}
function handleClear () {
  emit('clear')
  keyword.value = undefined
  listQuery.value.pageIndex = 1
  initData()
  noMore = cacheNoMore
}
function initData () {
  const temp =
    cacheListData?.filter(
      (i) =>
        !props.insertList.find(
          (j: any) => j[props.option.key] === i[props.option.key]
        )
    ) || []
  listData.value = [...props.insertList, ...temp]
}
function handleChange (item: any) {
  let val = item?.[props.option.key]
  if (isArray(item)) {
    val = item.map((_i: any) => _i[props.option.key])
  }
  currentValue.value = item
  emit('update:modelValue', val)
  emit('update:data', item)
  if (val !== props.modelValue) {
    emit('change', item)
  }
}
function isArray (obj: any) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}
defineExpose({ reset, initData })
</script>
