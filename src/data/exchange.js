/**
 * @Author              : tanshaobo
 * @Date                : 2020/4/25
 * @PROJECT_NAME        : Examination
 * @FileName            : test
 * @describe            ：兑换列表
 * @Example             : mock模拟数据请求
 * @instance            : id命名规则
 *                          第一位：a: 活动 s: 商城;
 *                          第二位：1: 元宝 2: 元宝+龙元 3: 元宝+龙魄 4: 元宝+龙元+龙魄
 *                          第三位：c: 货币 g: 卦石 d: 丹药 w: 武功 k: 卡包 z: 装备
 *                          第四位: 数字: 对应所属序列(十六进制)
 */

const exchange = [
  {
    id: 'a1c3',
    times: 3,
    prize: { type: '道具', name: '龙魄', num: 1 },
    required: [{ type: 'coin', id: 'yb', name: '元宝', num: 1999 }]
  },
  {
    id: 'a2g1',
    times: 5,
    prize: { type: '道具', name: '橙色卦石玉', num: 1 },
    required: [
      { type: 'coin', id: 'ly', name: '龙元', num: 1 },
      { type: 'coin', id: 'yb', name: '元宝', num: 2999 }
    ]
  },
  {
    id: 'a3g2',
    times: 5,
    prize: { type: '道具', name: '橙色卦石玉之二', num: 1 },
    required: [
      { type: 'coin', id: 'lp', name: '龙魄', num: 1 },
      { type: 'coin', id: 'yb', name: '元宝', num: 3999 }
    ]
  },
  {
    id: 'a3w7',
    times: 32,
    prize: { type: '道具', name: '橙色武功扭蛋之七', num: 1 },
    required: [
      { type: 'coin', id: 'lp', name: '龙魄', num: 2 },
      { type: 'coin', id: 'yb', name: '元宝', num: 999 }
    ]
  },
  {
    id: 'a3w8',
    times: 32,
    prize: { type: '道具', name: '橙色武功扭蛋之八', num: 1 },
    required: [
      { type: 'coin', id: 'lp', name: '龙魄', num: 3 },
      { type: 'coin', id: 'yb', name: '元宝', num: 1999 }
    ]
  },
  {
    id: 'a4ze',
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之十四', num: 5 },
    required: [
      { type: 'coin', id: 'yb', name: '元宝', num: 9999 },
      { type: 'coin', id: 'ly', name: '龙元', num: 3 },
      { type: 'coin', id: 'lp', name: '龙魄', num: 3 }
    ]
  },
  {
    id: 'a4zf',
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之十五', num: 5 },
    required: [
      { type: 'coin', id: 'yb', name: '元宝', num: 9999 },
      { type: 'coin', id: 'ly', name: '龙元', num: 4 },
      { type: 'coin', id: 'lp', name: '龙魄', num: 4 }
    ]
  },
  {
    id: 'a2d2',
    times: 20,
    prize: { type: '道具', name: '培元丹', num: 10 },
    required: [
      { type: 'coin', id: 'yb', name: '元宝', num: 1999 },
      { type: 'coin', id: 'ly', name: '龙元', num: 2 }
    ]
  },
  {
    id: 'a2d3',
    times: 20,
    prize: { type: '道具', name: '进化丹', num: 10 },
    required: [
      { type: 'coin', id: 'yb', name: '元宝', num: 1999 },
      { type: 'coin', id: 'ly', name: '龙元', num: 2 }
    ]
  },
  {
    id: 'a3kb',
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之十一', num: 1 },
    required: [
      { type: 'coin', id: 'yb', name: '元宝', num: 4666 },
      { type: 'coin', id: 'lp', name: '龙魄', num: 1 }
    ]
  },
  {
    id: 'a3ka',
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之十', num: 1 },
    required: [
      { type: 'coin', id: 'yb', name: '元宝', num: 3666 },
      { type: 'coin', id: 'lp', name: '龙魄', num: 1 }
    ]
  },
  {
    id: 'a3k9',
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之九', num: 1 },
    required: [
      { type: 'coin', id: 'yb', name: '元宝', num: 3666 },
      { type: 'coin', id: 'lp', name: '龙魄', num: 1 }
    ]
  },
  {
    id: 'a2k7',
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之七', num: 1 },
    required: [
      { type: 'coin', id: 'yb', name: '元宝', num: 3666 },
      { type: 'coin', id: 'ly', name: '龙元', num: 1 }
    ]
  },
  {
    id: 'a2k6',
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之六', num: 1 },
    required: [
      { type: 'coin', id: 'yb', name: '元宝', num: 3666 },
      { type: 'coin', id: 'ly', name: '龙元', num: 1 }
    ]
  },
  {
    id: 'a2k5',
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之五', num: 1 },
    required: [
      { type: 'coin', id: 'yb', name: '元宝', num: 3666 },
      { type: 'coin', id: 'ly', name: '龙元', num: 1 }
    ]
  },
  {
    id: 'a2k4',
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之四', num: 1 },
    required: [
      { type: 'coin', id: 'yb', name: '元宝', num: 3666 },
      { type: 'coin', id: 'ly', name: '龙元', num: 1 }
    ]
  },
  {
    id: 'a2k3',
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之三', num: 1 },
    required: [
      { type: 'coin', id: 'yb', name: '元宝', num: 3666 },
      { type: 'coin', id: 'ly', name: '龙元', num: 1 }
    ]
  },
  {
    id: 'a2k2',
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之二', num: 1 },
    required: [
      { type: 'coin', id: 'yb', name: '元宝', num: 3666 },
      { type: 'coin', id: 'ly', name: '龙元', num: 1 }
    ]
  },
  {
    id: 's2d2',
    times: 10,
    prize: { type: '道具', name: '培元丹', num: 10 },
    required: [{ type: 'coin', id: 'yb', name: '元宝', num: 6666 }]
  },
  {
    id: 's2d3',
    times: 10,
    prize: { type: '道具', name: '进化丹', num: 10 },
    required: [{ type: 'coin', id: 'yb', name: '元宝', num: 6666 }]
  },
  {
    id: 1,
    times: 32,
    prize: { type: '道具', name: '橙色武功扭蛋', num: 1 },
    required: [{ type: 'coin', id: 'yb', name: '元宝', num: 499 }]
  },
  {
    id: 2,
    times: 32,
    prize: { type: '道具', name: '橙色武功扭蛋之二', num: 1 },
    required: [{ type: 'coin', id: 'yb', name: '元宝', num: 499 }]
  },
  {
    id: 3,
    times: 32,
    prize: { type: '道具', name: '橙色武功扭蛋之三', num: 1 },
    required: [{ type: 'coin', id: 'yb', name: '元宝', num: 599 }]
  },

  {
    id: 5,
    times: 32,
    prize: { type: '技能', name: '真分筋错骨手', num: 1 },
    required: [
      { type: 'coin', id: 'lp', name: '龙魄', num: 2 },
      { type: 'coin', id: 'yb', name: '元宝', num: 1999 }
    ]
  },
  {
    id: 6,
    times: 32,
    prize: { type: '技能', name: '真铁砂掌', num: 1 },
    required: [
      { type: 'coin', id: 'lp', name: '龙魄', num: 3 },
      { type: 'coin', id: 'yb', name: '元宝', num: 1999 }
    ]
  },
  {
    id: 7,
    times: 0,
    prize: { type: '道具', name: '体力丹', num: 1 },
    required: [{ type: 'coin', id: 'yb', name: '元宝', num: 50 }]
  },
  {
    id: 10,
    times: 32,
    prize: { type: '技能', name: '霸绝人间', num: 1 },
    required: [
      { type: 'coin', id: 'lp', name: '龙魄', num: 3 },
      { type: 'coin', id: 'yb', name: '元宝', num: 2999 }
    ]
  },
  {
    id: 11,
    times: 32,
    prize: { type: '技能', name: '真霹雳拳', num: 1 },
    required: [
      { type: 'coin', id: 'lp', name: '龙魄', num: 3 },
      { type: 'coin', id: 'yb', name: '元宝', num: 2999 }
    ]
  },
  {
    id: 12,
    times: 32,
    prize: { type: '技能', name: '绝神阵', num: 1 },
    required: [
      { type: 'coin', id: 'lp', name: '龙魄', num: 3 },
      { type: 'coin', id: 'yb', name: '元宝', num: 2999 }
    ]
  },
  {
    id: 19,
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之八', num: 1 },
    required: [
      { type: 'coin', id: 'yb', name: '元宝', num: 3666 },
      { type: 'coin', id: 'ly', name: '龙元', num: 1 }
    ]
  },
  {
    id: 23,
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之十二', num: 1 },
    required: [
      { type: 'coin', id: 'yb', name: '元宝', num: 4666 },
      { type: 'coin', id: 'lp', name: '龙魄', num: 1 }
    ]
  },
  {
    id: 24,
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之十三', num: 1 },
    required: [
      { type: 'coin', id: 'yb', name: '元宝', num: 5666 },
      { type: 'coin', id: 'lp', name: '龙魄', num: 2 }
    ]
  },
  {
    id: 26,
    times: 20,
    prize: { type: '道具', name: '融灵丹', num: 10 },
    required: [
      { type: 'coin', id: 'yb', name: '元宝', num: 1999 },
      { type: 'coin', id: 'ly', name: '龙元', num: 2 }
    ]
  },
  {
    id: 31,
    times: 10,
    prize: { type: '道具', name: '橙色武功扭蛋', num: 1 },
    required: [
      { type: '道具', name: '橙色残章', num: 3 },
      { type: 'coin', id: 'yb', name: '元宝', num: 299 }
    ]
  },
  {
    id: 32,
    times: 10,
    prize: { type: '道具', name: '橙色武功扭蛋之二', num: 1 },
    required: [
      { type: '道具', name: '橙色残章', num: 3 },
      { type: 'coin', id: 'yb', name: '元宝', num: 299 }
    ]
  },
  {
    id: 33,
    times: 10,
    prize: { type: '道具', name: '橙色武功扭蛋之三', num: 1 },
    required: [
      { type: '道具', name: '橙色残章', num: 3 },
      { type: 'coin', id: 'yb', name: '元宝', num: 399 }
    ]
  },
  {
    id: 34,
    times: 10,
    prize: { type: '道具', name: '橙色武功扭蛋之四', num: 1 },
    required: [
      { type: '道具', name: '橙色残章', num: 4 },
      { type: 'coin', id: 'yb', name: '元宝', num: 399 }
    ]
  },
  {
    id: 35,
    times: 10,
    prize: { type: '道具', name: '橙色武功扭蛋之五', num: 1 },
    required: [
      { type: '道具', name: '橙色残章', num: 4 },
      { type: 'coin', id: 'yb', name: '元宝', num: 499 }
    ]
  },
  {
    id: 36,
    times: 10,
    prize: { type: '道具', name: '橙色武功扭蛋之六', num: 1 },
    required: [
      { type: '道具', name: '橙色残章', num: 4 },
      { type: 'coin', id: 'yb', name: '元宝', num: 599 }
    ]
  }
]

export default exchange
