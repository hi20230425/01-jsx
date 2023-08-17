import { useState } from 'react'; 

import Header from './component/Header'; 
import Footer from './component/Footer'; 

function App() {

  // 전역 변수 선언 
 // let name = "world" ;      // 문자열
 // let name = true ;         // boolean
//   let name = 1 ;           //number ( 정수 )
//  let name = 10.11;           // number ( 실수 )
//    let name = { age : 10, addr : '서울'}
    let name = [ '서울', 10 , true, 10.10 ]; 

    let onClickEvent = function () {
        console.log ( "버튼이 클릭 되었습니다. "); 
    }

  return (
    // JSX 의 문법 규칙 
      // 리턴문 내의 하나의 html 로 리턴되어야 한다. 
      // 리턴에서 감싸는 태그를 출력 하지 않을 경우 : <> </> 
      // HTML은 소문자 적용, 반드시 닫는 태그가 존재 해야 한다. <input />, <img />  
      // HTML 에서는 class 속성으로 클래스 이름을 지정함. 
      // JSX 에서는 class 이름이 예약어로 지정되어 있음. classNmae 
      // HTML 블락내에서 JavaScript 변수의 값을 불러올때 { } 를 사용함. 
      // 변수의 값을 출력시 , boolean, number, string, null, undefine 는 직접 변수 명으로 처리
      // 객체 나 배열인 경우 는 객체나 배열의 속성값을 출력 해야 한다. 
        // 객체 : name.age  , 배열 : name[0]
      // HTML 에서는 onclick , JSX 에서는 onClick 으로 처리 , C 가 대문자 

    //<div className="App">
    <>
      <Header />

      <input />
      <img />
      <h1> Hello, {name[1]} </h1>
      <p> This is a paragraph. </p>
      <button onClick = {onClickEvent}> click me</button>

      <Footer /> 
    </>
   // </div>

  );
}

export default App;
