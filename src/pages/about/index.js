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