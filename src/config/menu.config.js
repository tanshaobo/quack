const MainMenuConfig = [
  {
    meta: '活动',
    path: '/Active',
    name: 'Native'
  },
  {
    meta: '卦石',
    path: '/Nature',
    name: 'Nature'
  },
  {
    meta: '花费',
    path: '/Speed',
    name: 'Speed'
  }
]
const NatureConfig = [
  {
    meta: '类别',
    isDisabled: false,
    name: 'Class'
  },
  {
    meta: '属性',
    isDisabled: false,
    name: 'Attr'
  },
  {
    meta: '计算',
    isDisabled: false,
    name: 'Computed'
  }
]

const SpendConfig = [
  {
    meta: '花费',
    isDisabled: false,
    name: 'Speed'
  }
]

export default {
  MainMenuConfig,
  NatureConfig,
  SpendConfig
}
