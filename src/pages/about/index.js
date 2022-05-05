/*
 * @Author: your name
 * @Date: 2022-04-28 16:23:08
 * @LastEditTime: 2022-05-05 19:01:42
 * @LastEditors: bruceliu bruceliu@nswap.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react-business/src/pages/about/index.js
 */
import { previewShow } from '@/components/preview';
import BigNumber from 'bignumber.js'
import { useState, useReducer } from "react";
function About() {

  const [count, setCount] = useState(0)
  const [count2, dispatch] = useReducer(reducerAlert, {count2: 0})
  const handleClick = () => {
    console.log('handleClick')
    previewShow()
  }

  function reducerAlert(state, action) {
    let newState = {}
    switch (action.type) {
      case 'add':
        newState = {
          count2: state.count2 + 1
        }
        break
      default:
        break
    }

    return { ...state, ...newState }
  }
  const handleClickTwo = () => {
    console.log(count, 'count one')
    setCount(2)
    dispatch({type: 'add'})
    console.log(count, 'count two')
  }
  const x = new BigNumber(0.1)
  const y = x.plus(0.2)
  console.log(y, 'yyyyy')
  console.log(process.he, 'process.env.NODE_ENV----')
  console.log(process.env.TYPE, '环境变量type参数打印')
  console.log(process.env.ENV, 'ENV---')
  
  return (
    <div>
      <div>{count2.count2}</div>
      <h1>about</h1>
      <button onClick={handleClick}>showModal</button>
      <div>{`直接使用0.2 + 0.1: ${0.2 + 0.1}`}</div>
      <div>{`使用BigNumber进行0.2 + 0.1: ${y.toNumber()}`}</div>
      <button onClick={handleClickTwo}>click</button>
    </div>
  );
}
export default About