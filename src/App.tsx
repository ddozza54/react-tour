import { useState } from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <section>
      <h1>내가 가고 싶은 나라들</h1>
      <form>
        <input value={inputValue} placeholder="이름" onChange={(e) => setInputValue(e.currentTarget.value)} />
        <button>가자!</button>
      </form>
      <ul>
        <li>
          <span>인도</span>
          <button>✅</button>
          <button>🗑️</button>
        </li>
      </ul>

      <div>
        <h2>내가 가본 나라들</h2>
        <ul>
          <li>
            <span>인도</span>
            <button>👎</button>
            <button>❌</button>
          </li>
        </ul>
      </div>
      <div>
        <h2>내가 좋아하는 나라들</h2>
        <ul>
          <li>
            <span>인도</span>
            <button>👍</button>
            <button>❌</button>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default App
