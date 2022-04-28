/*
 * @Author: your name
 * @Date: 2022-04-28 16:23:08
 * @LastEditTime: 2022-04-28 17:49:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react-business/src/pages/about/index.js
 */
import { previewShow } from '@/components/preview';
import BigNumber from 'bignumber.js'
function About() {
  const handleClick = () => {
    console.log('handleClick')
    previewShow()
  }
  const x = new BigNumber(0.1)
  const y = x.plus(0.2)
  console.log(y, 'yyyyy')
  console.log(process.he, 'process.env.NODE_ENV----')
  console.log(process.env.TYPE, '环境变量type参数打印')
  return (
    <div>
      <h1>about</h1>
      <button onClick={handleClick}>showModal</button>
      <div>{`直接使用0.2 + 0.1: ${0.2 + 0.1}`}</div>
      <div>{`使用BigNumber进行0.2 + 0.1: ${y.toNumber()}`}</div>
    </div>
  );
}
export default About