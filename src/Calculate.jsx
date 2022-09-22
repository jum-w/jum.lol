import {useState} from 'react';

function Calculate() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [total, setTotal] = useState(0);

  const hour1 = start.slice(0, 2);
  const hour2 = end.slice(0, 2);
  const min1 = start.slice(2, 4);
  const min2 = end.slice(2, 4);

  const hours = (total / 60).toFixed(2);

  const calculate = () => {
    if (((hour1 + min1).length === 4) && ((hour2 + min2).length === 4) && /^\d+$/.test(hour1) && /^\d+$/.test(hour2) && /^\d+$/.test(min1) && /^\d+$/.test(min2) && ((hour2 - hour1) * 60 + (min2 - min1) > 0) && (hour1 < 24) && (min1 < 60 && min2 < 60)){
      setTotal(total + ((hour2 - hour1) * 60 + (min2 - min1)));
    } else {
    }
  };

  // errors: if minus, if past 24

  const clear = () => {
    if (total !== 0) {
      setTotal((total / total) - 1);
    }
  };

  const submit = (e) => {
    if (e.key === 'Enter') {
      calculate();
    }
  }

  return (
    <div>
      <div className="flex">
        <form className="flex flex-col max-w-sm bg-slate-800 shadow-xl w-full m-12 rounded-lg text-center p-6 mx-auto text-gray-200" onKeyDown={submit}>
          <div className="start">
            <label className="block mb-2 flex">Start:</label>
            <input className="w-20 flex bg-slate-800 shadow-xl rounded-md border-2 border-slate-900 focus:border-blue-700 focus:outline-none p-1 text-gray-400 text-sm mb-5" type="text" placeholder="1230" value={start} onChange={e => setStart(e.target.value)} maxLength={4} />
          </div>
          <div className="end">
            <label className="block mb-2 flex">End:</label>
            <input className="w-20 flex bg-slate-800 shadow-xl rounded-md border-2 border-slate-900 focus:border-blue-700 focus:outline-none p-1 text-gray-400 text-sm" type="text" placeholder="1330" value={end} onChange={e => setEnd(e.target.value)} maxLength={4} />
          </div>
        </form>
      </div>
      <div className="flex flex-col max-w-sm bg-slate-800 shadow-xl w-full m-4 rounded-lg text-center p-6 mx-auto text-gray-200">
        <div className="flex-col">Total = {total} minutes. Hours = {hours}</div>
        <button className="p-2 m-4 border-2 rounded-lg mx-auto shadow-xl border-slate-700 hover:bg-slate-700 flex-row" onClick={calculate}>Calculate</button>
        <button className="p-2 mt-3 border-2 rounded-lg mx-auto shadow-xl border-slate-700 hover:bg-slate-700 flex-row" onClick={clear}>Clear</button>
      </div>
    </div>
  );
}

export default Calculate;