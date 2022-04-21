import { useCallback } from "react";
import { Link } from "react-router-dom";
import useDebounce from "../../utils/useDebounce";
import useThrottle from "../../utils/useThrottle";
function Home() {
  const handleClickOne = useDebounce(function() {
    console.log('点击一')
  }, 1000, [])
  const handleClickTwo = useCallback(() => {
    console.log('点击二')
  }, [])
  const handleClickThree = useThrottle(() => {
    console.log('点击三')
  }, 1000, [])
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
      </nav>
      <button onClick={handleClickOne}>clickOne</button>
      <button onClick={handleClickTwo}>clickTwo</button>
      <button onClick={handleClickThree}>clickThree</button>
    </div>
  );
}
export default Home