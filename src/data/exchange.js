/**
 * @Author              : tanshaobo
 * @Date                : 2020/4/25
 * @PROJECT_NAME        : Examination
 * @FileName            : test
 * @describe            ：vuex封装
 * @Example             : mock模拟数据请求
 */

const exchange = [
  {
    id: 1,
    times: 32,
    prize: { type: '道具', name: '橙色武功扭蛋', num: 1 },
    required: [{ type: '元宝', name: '元宝', num: 499 }]
  },
  {
    id:2,
    times: 32,
    prize: { type: '道具', name: '橙色武功扭蛋之二', num: 1 },
    required: [{ type: '元宝', name: '元宝', num: 499 }]
  },
  {
    id:3,
    times: 32,
    prize: { type: '道具', name: '橙色武功扭蛋之三', num: 1 },
    required: [{ type: '元宝', name: '元宝', num: 599 }]
  },

  {
    id: 4,
    times: 32,
    prize: { type: '道具', name: '橙色武功扭蛋之七', num: 1 },
    required: [
      { type: '道具', name: '龙魄', num: 2 },
      { type: '元宝', name: '元宝', num: 999 }
    ]
  },
  {
    id: 5,
    times: 32,
    prize: { type: '技能', name: '真分筋错骨手', num: 1 },
    required: [
      { type: '道具', name: '龙魄', num: 2 },
      { type: '元宝', name: '元宝', num: 1999 }
    ]
  },
  {
    id: 6,
    times: 32,
    prize: { type: '技能', name: '真铁砂掌', num: 1 },
    required: [
      { type: '道具', name: '龙魄', num: 3 },
      { type: '元宝', name: '元宝', num: 1999 }
    ]
  },
  {
    id: 7, 
    times: 0,
    prize: { type: '道具', name: '体力丹', num: 1 },
    required: [{ type: '元宝', name: '元宝', num: 50 }]
  },
  {
    id: 8,
    times: 5,
    prize: { type: '道具', name: '橙色卦石玉', num: 1 },
    required: [
      { type: '道具', name: '龙元', num: 1 },
      { type: '元宝', name: '元宝', num: 2999 }
    ]
  },
  {
    id: 9,
    times: 5,
    prize: { type: '道具', name: '橙色卦石玉之二', num: 1 },
    required: [
      { type: '道具', name: '龙魄', num: 1 },
      { type: '元宝', name: '元宝', num: 3999 }
    ]
  },
  
  {
    id: 10,
    times: 32,
    prize: { type: '技能', name: '霸绝人间', num: 1 },
    required: [
      { type: '道具', name: '龙魄', num: 3 },
      { type: '元宝', name: '元宝', num: 2999 }
    ]
  },
  {
    id: 11,
    times: 32,
    prize: { type: '技能', name: '真霹雳拳', num: 1 },
    required: [
      { type: '道具', name: '龙魄', num: 3 },
      { type: '元宝', name: '元宝', num: 2999 }
    ]
  },
  {
    id: 12,
    times: 32,
    prize: { type: '技能', name: '绝神阵', num: 1 },
    required: [
      { type: '道具', name: '龙魄', num: 3 },
      { type: '元宝', name: '元宝', num: 2999 }
    ]
  },
  {
    id: 13,
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之二', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 3666 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  {
    id: 14,
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之三', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 3666 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  {
    id: 15,
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之四', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 3666 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  {
    id: 16,
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之五', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 3666 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  {
    id: 17,
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之六', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 3666 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  {
    id: 18,
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之七', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 3666 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  {
    id: 19,
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之八', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 3666 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  {
    id: 20,
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之九', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 3666 },
      { type: '道具', name: '龙魄', num: 1 }
    ]
  },
  {
    id: 21,
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之十', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 3666 },
      { type: '道具', name: '龙魄', num: 1 }
    ]
  },
  {
    id:22,
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之十一', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 4666 },
      { type: '道具', name: '龙魄', num: 1 }
    ]
  },
  {
    id: 23,
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之十二', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 4666 },
      { type: '道具', name: '龙魄', num: 1 }
    ]
  },
  {
    id: 24,
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之十三', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 5666 },
      { type: '道具', name: '龙魄', num: 2 }
    ]
  },
  {
    id:25,
    times: 20,
    prize: { type: '道具', name: '培元丹', num: 10 },
    required: [
      { type: '元宝', name: '元宝', num: 1999 },
      { type: '道具', name: '龙元', num: 2 }
    ]
  },
  {
    id: 26,
    times: 20,
    prize: { type: '道具', name: '融灵丹', num: 10 },
    required: [
      { type: '元宝', name: '元宝', num: 1999 },
      { type: '道具', name: '龙元', num: 2 }
    ]
  },
   {
    id: 27,
    times: 20,
    prize: { type: '道具', name: '进化丹', num: 10 },
    required: [
      { type: '元宝', name: '元宝', num: 1999 },
      { type: '道具', name: '龙元', num: 2 }
    ]
  },
  {
    id: 28,
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之十四', num: 5 },
    required: [
      { type: '元宝', name: '元宝', num: 9999 },
      { type: '道具', name: '龙元', num: 3 },
      { type: '道具', name: '龙魄', num: 3 }
    ]
  },
  {
    id: 29,
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之十五', num: 5 },
    required: [
      { type: '元宝', name: '元宝', num: 9999 },
      { type: '道具', name: '龙元', num: 4 },
      { type: '道具', name: '龙魄', num: 4 }
    ]
  },
  
  {
    id: 30,
    times: 32,
    prize: { type: '技能', name: '真八卦游龙掌', num: 1 },
    required: [
      { type: '道具', name: '龙魄', num: 2 },
      { type: '元宝', name: '元宝', num: 1999 }
    ]
  },
   {
     id: 31,
    times: 10,
    prize: { type: '道具', name: '橙色武功扭蛋', num: 1 },
    required: [
      { type: '道具', name: '橙色残章', num: 3 },
      { type: '元宝', name: '元宝', num: 299 }
    ]
  },
  {
    id: 32,
    times: 10,
    prize: { type: '道具', name: '橙色武功扭蛋之二', num: 1 },
    required: [
      { type: '道具', name: '橙色残章', num: 3 },
      { type: '元宝', name: '元宝', num: 299 }
    ]
  },
  {
    id: 33,
    times: 10,
    prize: { type: '道具', name: '橙色武功扭蛋之三', num: 1 },
    required: [
      { type: '道具', name: '橙色残章', num: 3 },
      { type: '元宝', name: '元宝', num: 399 }
    ]
  },
  {
    id: 34,
    times: 10,
    prize: { type: '道具', name: '橙色武功扭蛋之四', num: 1 },
    required: [
      { type: '道具', name: '橙色残章', num: 4 },
      { type: '元宝', name: '元宝', num: 399 }
    ]
  },
  {
    id:35,
    times: 10,
    prize: { type: '道具', name: '橙色武功扭蛋之五', num: 1 },
    required: [
      { type: '道具', name: '橙色残章', num: 4 },
      { type: '元宝', name: '元宝', num: 499 }
    ]
  },
  {
    id: 36,
    times: 10,
    prize: { type: '道具', name: '橙色武功扭蛋之六', num: 1 },
    required: [
      { type: '道具', name: '橙色残章', num: 4 },
      { type: '元宝', name: '元宝', num: 599 }
    ]
  }
]

export default exchange
