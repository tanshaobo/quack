/**
 * @Author              : Tansb
 * @Date                : 2020/05/05 - 17:56
 * @describe            ：过滤器封装
 */

export default {
  /**
  @describe  将长数字按固定符号分隔
  @params [number] 第一位参数  代表每隔几位分隔一次 默认 4
  @params [String] 第二位参数 代表分隔符 ，默认 ,
  @example numberLevel(4,',')| 10000  输出  1,0000
  */
  numberLevel(v, a, b) {
    a = a || 4
    b = b || ','
    let s = String(v)
      .split('')
      .reverse()
      .join('')
    let reg = new RegExp(`\\d{1,${a}}`, `g`)
    let m = s.match(reg)
    let r = m
      .join(b)
      .split('')
      .reverse()
      .join('')
    return r
  }
}
