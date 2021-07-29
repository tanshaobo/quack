/**
 * @Author              : tanshaobo
 * @Date                : 2020/4/25
 * @PROJECT_NAME        : Examination
 * @FileName            : test
 * @describe            ：vuex封装
 * @Example             : mock模拟数据请求
 */

const exchange = {
  '001': {
    times: 32,
    prize: { type: '道具', name: '橙色武功秘籍', num: 1 },
    required: [{ type: '元宝', name: '元宝', num: 399 }]
  },
  '002': {
    times: 27,
    prize: { type: '道具', name: '橙色武功扭蛋', num: 1 },
    required: [{ type: '元宝', name: '元宝', num: 499 }]
  },
  '003': {
    times: 32,
    prize: { type: '道具', name: '橙色武功扭蛋之二', num: 1 },
    required: [{ type: '元宝', name: '元宝', num: 499 }]
  },
  '004': {
    times: 32,
    prize: { type: '道具', name: '橙色武功扭蛋之三', num: 1 },
    required: [{ type: '元宝', name: '元宝', num: 599 }]
  },
  '005': {
    times: 32,
    prize: { type: '道具', name: '橙色武功扭蛋之四', num: 1 },
    required: [
      { type: '道具', name: '龙元', num: 1 },
      { type: '元宝', name: '元宝', num: 599 }
    ]
  },
  '006': {
    times: 32,
    prize: { type: '道具', name: '橙色武功扭蛋之五', num: 1 },
    required: [
      { type: '道具', name: '龙魄', num: 1 },
      { type: '元宝', name: '元宝', num: 699 }
    ]
  },
  '007': {
    times: 32,
    prize: { type: '道具', name: '橙色武功扭蛋之六', num: 1 },
    required: [
      { type: '道具', name: '龙魄', num: 1 },
      { type: '元宝', name: '元宝', num: 799 }
    ]
  },

  '010': {
    times: 32,
    prize: { type: '道具', name: '橙色武功扭蛋之七', num: 1 },
    required: [
      { type: '道具', name: '龙魄', num: 2 },
      { type: '元宝', name: '元宝', num: 999 }
    ]
  },
  '011': {
    times: 32,
    prize: { type: '技能', name: '真分筋错骨手', num: 1 },
    required: [
      { type: '道具', name: '龙魄', num: 2 },
      { type: '元宝', name: '元宝', num: 1999 }
    ]
  },
  '012': {
    times: 32,
    prize: { type: '技能', name: '真铁砂掌', num: 1 },
    required: [
      { type: '道具', name: '龙魄', num: 3 },
      { type: '元宝', name: '元宝', num: 1999 }
    ]
  },
  '013': {
    times: 0,
    prize: { type: '道具', name: '体力丹', num: 1 },
    required: [{ type: '元宝', name: '元宝', num: 50 }]
  },
  '014': {
    times: 5,
    prize: { type: '道具', name: '橙色卦石玉', num: 1 },
    required: [
      { type: '道具', name: '龙元', num: 1 },
      { type: '元宝', name: '元宝', num: 2999 }
    ]
  },
  '015': {
    times: 5,
    prize: { type: '道具', name: '橙色卦石玉之二', num: 1 },
    required: [
      { type: '道具', name: '龙魄', num: 1 },
      { type: '元宝', name: '元宝', num: 3999 }
    ]
  },
  '016': {
    times: 10,
    prize: { type: '道具', name: '体力丹', num: 1 },
    required: [{ type: '元宝', name: '元宝', num: 199 }]
  },
  '017': {
    times: 32,
    prize: { type: '技能', name: '霸绝人间', num: 1 },
    required: [
      { type: '道具', name: '龙魄', num: 3 },
      { type: '元宝', name: '元宝', num: 2999 }
    ]
  },
  '018': {
    times: 32,
    prize: { type: '技能', name: '真霹雳拳', num: 1 },
    required: [
      { type: '道具', name: '龙魄', num: 3 },
      { type: '元宝', name: '元宝', num: 2999 }
    ]
  },
  '019': {
    times: 32,
    prize: { type: '技能', name: '绝神阵', num: 1 },
    required: [
      { type: '道具', name: '龙魄', num: 3 },
      { type: '元宝', name: '元宝', num: 2999 }
    ]
  },
  '020': {
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 2666 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  '021': {
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之二', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 3666 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  '022': {
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之三', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 3666 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  '023': {
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之四', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 3666 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  '024': {
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之五', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 3666 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  '025': {
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之六', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 3666 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  '026': {
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之七', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 3666 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  '027': {
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之八', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 3666 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  '028': {
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之九', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 3666 },
      { type: '道具', name: '龙魄', num: 1 }
    ]
  },
  '029': {
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之十', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 3666 },
      { type: '道具', name: '龙魄', num: 1 }
    ]
  },
  '030': {
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之十一', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 4666 },
      { type: '道具', name: '龙魄', num: 1 }
    ]
  },
  '031': {
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之十二', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 4666 },
      { type: '道具', name: '龙魄', num: 1 }
    ]
  },
  '032': {
    times: 9,
    prize: { type: '道具', name: '橙色弟子卡包之十三', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 5666 },
      { type: '道具', name: '龙魄', num: 2 }
    ]
  },
  '033': {
    times: 66,
    prize: { type: '魂魄', name: '沈浪', num: 60 },
    required: [{ type: '魂魄', name: '日后', num: 60 }]
  },
  '034': {
    times: 66,
    prize: { type: '魂魄', name: '铁中棠', num: 60 },
    required: [{ type: '魂魄', name: '日后', num: 60 }]
  },
  '035': {
    times: 20,
    prize: { type: '道具', name: '培元丹', num: 10 },
    required: [
      { type: '元宝', name: '元宝', num: 1999 },
      { type: '道具', name: '龙元', num: 2 }
    ]
  },
  '036': {
    times: 20,
    prize: { type: '道具', name: '融灵丹', num: 10 },
    required: [
      { type: '元宝', name: '元宝', num: 1999 },
      { type: '道具', name: '龙元', num: 2 }
    ]
  },
  '037': {
    times: 20,
    prize: { type: '道具', name: '进化丹', num: 10 },
    required: [
      { type: '元宝', name: '元宝', num: 1999 },
      { type: '道具', name: '龙元', num: 2 }
    ]
  },
  '038': {
    times: 66,
    prize: { type: '魂魄', name: '水母阴姬', num: 60 },
    required: [{ type: '魂魄', name: '日后', num: 60 }]
  },
  '039': {
    times: 66,
    prize: { type: '魂魄', name: '夜帝', num: 60 },
    required: [{ type: '魂魄', name: '日后', num: 60 }]
  },
  '040': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋', num: 5 },
    required: [
      { type: '元宝', name: '元宝', num: 6666 },
      { type: '道具', name: '龙元', num: 3 },
      { type: '道具', name: '龙魄', num: 3 }
    ]
  },
  '041': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之二', num: 5 },
    required: [
      { type: '元宝', name: '元宝', num: 6666 },
      { type: '道具', name: '龙元', num: 3 },
      { type: '道具', name: '龙魄', num: 3 }
    ]
  },
  '042': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之三', num: 5 },
    required: [
      { type: '元宝', name: '元宝', num: 6666 },
      { type: '道具', name: '龙元', num: 3 },
      { type: '道具', name: '龙魄', num: 3 }
    ]
  },
  '043': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之四', num: 5 },
    required: [
      { type: '元宝', name: '元宝', num: 6666 },
      { type: '道具', name: '龙元', num: 3 },
      { type: '道具', name: '龙魄', num: 3 }
    ]
  },
  '044': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之五', num: 5 },
    required: [
      { type: '元宝', name: '元宝', num: 6666 },
      { type: '道具', name: '龙元', num: 3 },
      { type: '道具', name: '龙魄', num: 3 }
    ]
  },
  '045': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之六', num: 5 },
    required: [
      { type: '元宝', name: '元宝', num: 6666 },
      { type: '道具', name: '龙元', num: 3 },
      { type: '道具', name: '龙魄', num: 3 }
    ]
  },
  '046': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之七', num: 5 },
    required: [
      { type: '元宝', name: '元宝', num: 6666 },
      { type: '道具', name: '龙元', num: 3 },
      { type: '道具', name: '龙魄', num: 3 }
    ]
  },
  '047': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之八', num: 5 },
    required: [
      { type: '元宝', name: '元宝', num: 7777 },
      { type: '道具', name: '龙元', num: 3 },
      { type: '道具', name: '龙魄', num: 3 }
    ]
  },
  '048': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之九', num: 5 },
    required: [
      { type: '元宝', name: '元宝', num: 7777 },
      { type: '道具', name: '龙元', num: 3 },
      { type: '道具', name: '龙魄', num: 3 }
    ]
  },
  '049': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之十', num: 5 },
    required: [
      { type: '元宝', name: '元宝', num: 8888 },
      { type: '道具', name: '龙元', num: 3 },
      { type: '道具', name: '龙魄', num: 3 }
    ]
  },
  '050': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之十一', num: 5 },
    required: [
      { type: '元宝', name: '元宝', num: 8888 },
      { type: '道具', name: '龙元', num: 3 },
      { type: '道具', name: '龙魄', num: 3 }
    ]
  },
  '051': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之十二', num: 5 },
    required: [
      { type: '元宝', name: '元宝', num: 8888 },
      { type: '道具', name: '龙元', num: 3 },
      { type: '道具', name: '龙魄', num: 3 }
    ]
  },
  '052': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之十三', num: 5 },
    required: [
      { type: '元宝', name: '元宝', num: 9999 },
      { type: '道具', name: '龙元', num: 3 },
      { type: '道具', name: '龙魄', num: 3 }
    ]
  },
  '053': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之十四', num: 5 },
    required: [
      { type: '元宝', name: '元宝', num: 9999 },
      { type: '道具', name: '龙元', num: 3 },
      { type: '道具', name: '龙魄', num: 3 }
    ]
  },
  '054': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之十五', num: 5 },
    required: [
      { type: '元宝', name: '元宝', num: 9999 },
      { type: '道具', name: '龙元', num: 4 },
      { type: '道具', name: '龙魄', num: 4 }
    ]
  },
  '055': {
    times: 10,
    prize: { type: '道具', name: '十一级紫色武功扭蛋', num: 1 },
    required: [
      { type: '道具', name: '紫色残章', num: 1024 },
      { type: '道具', name: '龙元', num: 1 },
      { type: '道具', name: '龙魄', num: 1 }
    ]
  },
  '056': {
    times: 99,
    prize: { type: '道具', name: '橙色弟子卡包之十三', num: 1 },
    required: [{ type: '魂魄', name: '日后', num: 20 }]
  },
  '057': {
    times: 99,
    prize: { type: '道具', name: '橙色弟子卡包之十二', num: 1 },
    required: [{ type: '魂魄', name: '日后', num: 20 }]
  },
  '058': {
    times: 20,
    prize: { type: '道具', name: '经验石', num: 100000 },
    required: [{ type: '元宝', name: '元宝', num: 2999 }]
  },
  '059': {
    times: 5,
    prize: { type: '道具', name: '聚魂丹', num: 500 },
    required: [
      { type: '道具', name: '紫色元神', num: 5 },
      { type: '道具', name: '龙元', num: 5 }
    ]
  },
  '060': {
    times: 32,
    prize: { type: '技能', name: '真八卦游龙掌', num: 1 },
    required: [
      { type: '道具', name: '龙魄', num: 2 },
      { type: '元宝', name: '元宝', num: 1999 }
    ]
  },
  '061': {
    times: 99,
    prize: { type: '道具', name: '橙色弟子卡包之十一', num: 1 },
    required: [{ type: '魂魄', name: '日后', num: 20 }]
  },
  '062': {
    times: 1,
    prize: { type: '魂魄', name: '公子羽', num: 60 },
    required: [
      { type: '元宝', name: '元宝', num: 8888 },
      { type: '道具', name: '龙元', num: 4 },
      { type: '道具', name: '龙魄', num: 4 }
    ]
  },
  '063': {
    times: 5,
    prize: { type: '道具', name: '橙色材料包', num: 200 },
    required: [
      { type: '元宝', name: '元宝', num: 888 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  '064': {
    times: 10,
    prize: { type: '道具', name: '进阶石', num: 100000 },
    required: [
      { type: '元宝', name: '元宝', num: 888 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  '065': {
    times: 10,
    prize: { type: '道具', name: '聚魂丹', num: 1000 },
    required: [
      { type: '元宝', name: '元宝', num: 999 },
      { type: '道具', name: '龙魄', num: 1 }
    ]
  },
  '066': {
    times: 5,
    prize: { type: '道具', name: '经验圣水', num: 2000 },
    required: [
      { type: '元宝', name: '元宝', num: 1666 },
      { type: '道具', name: '龙魄', num: 1 }
    ]
  },
  '067': {
    times: 6,
    prize: { type: '道具', name: '闪避套装装备袋', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 2999 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  '068': {
    times: 6,
    prize: { type: '道具', name: '命中套装装备袋', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 2999 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  '069': {
    times: 6,
    prize: { type: '道具', name: '破罡套装装备袋', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 2999 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  '070': {
    times: 6,
    prize: { type: '道具', name: '生命套装装备袋', num: 1 },
    required: [
      { type: '元宝', name: '元宝', num: 3666 },
      { type: '道具', name: '龙元', num: 1 }
    ]
  },
  '073': {
    times: 16,
    prize: { type: '装备', name: '真血踪踏', num: 1 },
    required: [{ type: '装备', name: '真羊皮斗篷', num: 1 }]
  },
  '105': {
    times: 6,
    prize: { type: '道具', name: '橙色材料包', num: 30 },
    required: [{ type: '道具', name: '紫色材料包', num: 500 }]
  },
  '106': {
    times: 10,
    prize: { type: '道具', name: '百万银票', num: 30 },
    required: [{ type: '道具', name: '橙色精华', num: 1 }]
  },
  '107': {
    times: 10,
    prize: { type: '道具', name: '橙色材料包', num: 1000 },
    required: [{ type: '道具', name: '橙色精华', num: 10 }]
  },
  '108': {
    times: 10,
    prize: { type: '道具', name: '进阶石', num: 500000 },
    required: [{ type: '道具', name: '橙色精华', num: 10 }]
  },
  '111': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋', num: 1 },
    required: [
      { type: '道具', name: '橙色精华', num: 1 },
      { type: '元宝', name: '元宝', num: 666 }
    ]
  },
  '112': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之二', num: 1 },
    required: [
      { type: '道具', name: '橙色精华', num: 1 },
      { type: '元宝', name: '元宝', num: 666 }
    ]
  },
  '113': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之三', num: 1 },
    required: [
      { type: '道具', name: '橙色精华', num: 1 },
      { type: '元宝', name: '元宝', num: 666 }
    ]
  },
  '114': {
    times: 1,
    prize: { type: '道具', name: '攻击套装装备袋', num: 20 },
    required: [
      { type: '道具', name: '橙色精华', num: 20 },
      { type: '元宝', name: '元宝', num: 9999 },
      { type: '道具', name: '龙元', num: 3 }
    ]
  },
  '115': {
    times: 1,
    prize: { type: '道具', name: '防御套装装备袋', num: 20 },
    required: [
      { type: '道具', name: '橙色精华', num: 20 },
      { type: '元宝', name: '元宝', num: 9999 },
      { type: '道具', name: '龙元', num: 3 }
    ]
  },
  '116': {
    times: 1,
    prize: { type: '道具', name: '命中套装装备袋', num: 20 },
    required: [
      { type: '道具', name: '橙色精华', num: 20 },
      { type: '元宝', name: '元宝', num: 9999 },
      { type: '道具', name: '龙元', num: 3 }
    ]
  },
  '117': {
    times: 1,
    prize: { type: '道具', name: '破罡套装装备袋', num: 20 },
    required: [
      { type: '道具', name: '橙色精华', num: 20 },
      { type: '元宝', name: '元宝', num: 9999 },
      { type: '道具', name: '龙元', num: 3 }
    ]
  },
  '118': {
    times: 1,
    prize: { type: '道具', name: '闪避套装装备袋', num: 20 },
    required: [
      { type: '道具', name: '橙色精华', num: 20 },
      { type: '元宝', name: '元宝', num: 9999 },
      { type: '道具', name: '龙元', num: 3 }
    ]
  },
  '119': {
    times: 1,
    prize: { type: '道具', name: '生命套装装备袋', num: 20 },
    required: [
      { type: '道具', name: '橙色精华', num: 20 },
      { type: '元宝', name: '元宝', num: 9999 },
      { type: '道具', name: '龙元', num: 3 }
    ]
  },
  '120': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之四', num: 10 },
    required: [
      { type: '道具', name: '橙色精华', num: 10 },
      { type: '道具', name: '龙元', num: 2 },
      { type: '元宝', name: '元宝', num: 8888 }
    ]
  },
  '121': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之五', num: 10 },
    required: [
      { type: '道具', name: '橙色精华', num: 10 },
      { type: '道具', name: '龙元', num: 2 },
      { type: '元宝', name: '元宝', num: 8888 }
    ]
  },
  '122': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之六', num: 10 },
    required: [
      { type: '道具', name: '橙色精华', num: 10 },
      { type: '道具', name: '龙元', num: 2 },
      { type: '元宝', name: '元宝', num: 8888 }
    ]
  },
  '123': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之七', num: 10 },
    required: [
      { type: '道具', name: '橙色精华', num: 10 },
      { type: '道具', name: '龙元', num: 2 },
      { type: '元宝', name: '元宝', num: 8888 }
    ]
  },
  '124': {
    times: 2,
    prize: { type: '道具', name: '橙色装备袋之八', num: 10 },
    required: [
      { type: '道具', name: '橙色精华', num: 10 },
      { type: '道具', name: '龙元', num: 2 },
      { type: '元宝', name: '元宝', num: 8888 }
    ]
  },
  '125': {
    times: 5,
    prize: { type: '道具', name: '进阶石', num: 5000 },
    required: [{ type: '道具', name: '紫色精华', num: 5 }]
  },
  '140': {
    times: 10,
    prize: { type: '道具', name: '橙色武功秘籍', num: 1 },
    required: [
      { type: '道具', name: '橙色残章', num: 3 },
      { type: '元宝', name: '元宝', num: 199 }
    ]
  },
  '141': {
    times: 10,
    prize: { type: '道具', name: '橙色武功扭蛋', num: 1 },
    required: [
      { type: '道具', name: '橙色残章', num: 3 },
      { type: '元宝', name: '元宝', num: 299 }
    ]
  },
  '142': {
    times: 10,
    prize: { type: '道具', name: '橙色武功扭蛋之二', num: 1 },
    required: [
      { type: '道具', name: '橙色残章', num: 3 },
      { type: '元宝', name: '元宝', num: 299 }
    ]
  },
  '143': {
    times: 10,
    prize: { type: '道具', name: '橙色武功扭蛋之三', num: 1 },
    required: [
      { type: '道具', name: '橙色残章', num: 3 },
      { type: '元宝', name: '元宝', num: 399 }
    ]
  },
  '144': {
    times: 10,
    prize: { type: '道具', name: '橙色武功扭蛋之四', num: 1 },
    required: [
      { type: '道具', name: '橙色残章', num: 4 },
      { type: '元宝', name: '元宝', num: 399 }
    ]
  },
  '145': {
    times: 10,
    prize: { type: '道具', name: '橙色武功扭蛋之五', num: 1 },
    required: [
      { type: '道具', name: '橙色残章', num: 4 },
      { type: '元宝', name: '元宝', num: 499 }
    ]
  },
  '146': {
    times: 10,
    prize: { type: '道具', name: '橙色武功扭蛋之六', num: 1 },
    required: [
      { type: '道具', name: '橙色残章', num: 4 },
      { type: '元宝', name: '元宝', num: 599 }
    ]
  }
}

export default exchange
