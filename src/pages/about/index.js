import { previewShow } from '@/components/preview';

function About() {
  const handleClick = () => {
    console.log('handleClick')
    previewShow()
  }
  return (
    <div>
      <h1>about</h1>
      <button onClick={handleClick}>showModal</button>
    </div>
  );
}
export default About