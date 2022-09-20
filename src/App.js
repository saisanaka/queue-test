import './App.css';
import {useState , useEffect , useRef} from 'react'
import axios from './axios';

function App() {
  var checkbox_display = [];
  const ref = useRef()
  const [disp , setDisp] = useState(true)
  //const [check_box , setCheck_box] = useState(false)
  const [a, A] = useState();
  const [b, B] = useState();
  const [c, C] = useState();
  const [d, D] = useState();
  const [ee, E] = useState();
  const [f, Ff] = useState();
  const [g, G] = useState();
  const [h, H] = useState();
  const [i, I] = useState();
  const [j, J] = useState();
  const [k, KK] = useState();
  const [l, L] = useState();
  const [m, M] = useState();
  const [n, N] = useState(false);
  const [o, O] = useState(false);
  const [p, P] = useState(false);
  const [dn, Dn] = useState(false);
  /*useEffect(()=>{
    axios.get("/sounds/sound_list")
    .then((res) => res.json())
    .then(res => {
      console.log(res)
    }).catch(err =>{
      console.log(err)
    })
  },[])*/
  const submit = (e) =>{
    e.preventDefault();
    alert("submitted")
   /* console.dir(ee)
    console.log(a)
    alert(`a , ${a}`);
    alert(`b , ${b}`);
    alert(`c , ${c}`);
    alert(`d , ${d}`);
    alert(`e , ${ee}`);
    alert(`f , ${f}`);
    alert(`g , ${g}`);
    alert(`h , ${h}`);
    alert(`i , ${i}`);
    alert(`j , ${j}`);
    alert(`k , ${k}`);
    alert(`l , ${l}`);
    alert(`m , ${m}`);
    alert(`n , ${n}`);
    alert(`o , ${o}`);
    alert(`p , ${p}`); */
  }
  /*const nnn = () =>{
    N(!n)
    if(!n){
      console.log("pushing to " , checkbox_display.length)
      checkbox_display[checkbox_display.length]=true
      console.log("pushing to " , checkbox_display.length)
      //checkbox_display.push(true)
      alert("pushing")
    }else{
      checkbox_display.splice(checkbox_display.indexOf(true) , 1)
      alert("removing")
    }
    console.log(checkbox_display)
    intemediate_check_box()
  }
  const dnd = ()=>{
    Dn(!dn)
    if(!dn){
      console.log("pushing to " , checkbox_display.length)
      checkbox_display[checkbox_display.length]=true
      console.log("pushing to " , checkbox_display.length)
      //checkbox_display.push(true)
      alert("pushing")
    }else{
      checkbox_display.splice(checkbox_display.indexOf(true) , 1)
      alert("removing")
    }
    console.log(checkbox_display)
    intemediate_check_box()
  }
  const mmm = () =>{
    M(!m)
    if(!m){
      console.log("pushing to " , checkbox_display.length)
      checkbox_display[checkbox_display.length]=true
      console.log("pushing to " , checkbox_display.length)
      //checkbox_display.push(true)
      alert("pushing")
    }else{
      checkbox_display.splice(checkbox_display.indexOf(true) , 1)
      alert("removing")
    }
    console.log(checkbox_display)
    intemediate_check_box()
  }

  const x = (xx) =>{
    if(xx) return true
    return false
  }

  const intemediate_check_box = () =>{

    //console.log(checkbox_display)
    if(checkbox_display.length==3){
      //fully checked
      alert("fully checked")
      setCheck_box(true)
    }
    else if(checkbox_display.length >= 1){
      //indeterminate
      alert("indeterminate")
      setCheck_box(false)
    }else{
      //not checked
      alert("not checked")
      setCheck_box(false)
    }
  }*/
  const view = () =>{
    setDisp(!disp)
  }
  return (
    <>
    
    <div className='abc'>
      <div>
      <label>Nick Name</label><br />
      <input type="text" onChange={e=>A(e.target.value)}  placeholder="1" />
      </div>

      <div>
      <label>Strategy</label><br />
      <input type="text" onChange={e=>B(e.target.value)}  name="Nickname" placeholder="Testing" />
      </div>

      <div>
      <label>Caller Timeout</label><br />
      <input type="text" onChange={e=>C(e.target.value)} name="Alertheader" placeholder='"test\}andstuff"' />
      </div>

      {/*<div>
      <label>Wrapup time</label><br />
      <input type="number" onChange={e=>D(e.target.value)} name="Wrapuptime" placeholder="7" />
  </div>*/}

      <div>
        <label>Timeout destination</label><br />
        <select onChange={e=>D(e.target.value)} name='JoinAnnouncement'>
            <option value="volvo">HIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtv</option>
            <option value="saab">SaabHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtv</option>
            <option value="opel">OpelHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtvHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtv</option>
            <option value="audi">HIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtvHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtvHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtvHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtvHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtvAudi</option>
        </select>
      </div>
      
    </div>
    <div className='a'>
      <div>
        <label>Caller Id Prefix</label><br />
        <input type="text" onChange={e=>E(e.target.value)} name="CallerIdPrefix" placeholder="test" />
      </div>
      <div className='abb'>
        <label>Join Announcement</label><br />
        <select onChange={e=>Ff(e.target.value)} name='JoinAnnouncement'>
            <option value="volvo">HIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtv</option>
            <option value="saab">SaabHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtv</option>
            <option value="opel">OpelHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtvHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtv</option>
            <option value="audi">HIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtvHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtvHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtvHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtvHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtvAudi</option>
        </select>
      </div>
      <div className='abb'>
        <label>Hold Music</label><br />
        <select onChange={e=>G(e.target.value)} name='HoldMusic'>
            <option value="volvo">HIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtv</option>
            <option value="saab">SaabHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtv</option>
            <option value="opel">OpelHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtvHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtv</option>
            <option value="audi">HIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtvHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtvHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtvHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtvHIhibbvhvbhrbvubvguvbubvu5bubtuvbuvbtrvbuvurtvAudi</option>
        </select>
      </div>
      
    </div>
    <div onClick={view} className={`${disp ? 'triangle-right' : "triangle-down"}`}>
      <span className={`${disp ? 'triangle' : "triangle1"}`}>
      Advanced
      </span>
    </div>
    {!disp &&
      <div className='abc'>
        <div>
          <label>alert_info</label><br />
          <input type="text" onChange={e=>H(e.target.value)} placeholder='' />
        </div>

        <div>
          <label>Caller Id Suffix</label><br />
          <input type="text" onChange={e=>I(e.target.value)} name="CallerIdSuffix" placeholder='' />
        </div>

        <div>
          <label>Announce Position</label><br />
          <input type="number" onChange={e=>J(e.target.value)} name="CallerIdSuffix" placeholder='' />
        </div>

        <div>
          <label>default_wrap_up_time</label><br />
          <input type="number" onChange={e=>KK(e.target.value)} name="CallerIdSuffix" placeholder='' />
        </div>
        
        <div>
          <label>skip_busy_agent</label><br />
          <input type="checkbox"  onChange={e=>L(!l)} name="CallerIdSuffix" placeholder='' />
        </div>

      </div>
    }
    <div className='abba'>
      <div>
        <label>Extension Number</label><br />
        <input type="number" onChange={e=>M(e.target.value)} name="ExtensionNumber" placeholder='1' />
      </div>
      <div className='abbac'>
      <label >Ignore Dnd</label><br />
      <input onChange={e=>N(!n)} type="checkbox" />
      </div>

      <div className='abbac'>
      <label >Logged out</label><br />
      <input onChange={e=>O(!o)} type="checkbox" />
      </div>

      <div className='abbac'>
      <label >Skip Busy</label><br />
      <input onChange={e=>P(!p)} type="checkbox" />
      </div>
    </div>
    <div className='btn'>
      <button onClick={e=>submit(e)}>submit</button>
      <button>delete</button>
    </div>
    </>
  );
}

export default App;
