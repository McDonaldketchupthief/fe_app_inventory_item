import React from 'react';
import { Button, Text } from 'react-native';
import styled from 'styled-components/native';

// React는 리액트 라이브러리를 임포트 하고 있고 
// Button과 Text는 리액트 네이티브에서 제공하는 UI 컴포넌트를 임포트 하고 있습니다. 
// styled는 styled-components 라이브러리에서 스타일링 함수를 임포트합니다.

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;

`;

// Container와 Title은 styled-components를 이용해 스타일링된 컴포넌트입니다:
// Container는 View 컴포넌트를 스타일링한 것으로, 전체 화면을 차지하며 (flex: 1), 중앙 정렬을 하고 있습니다.

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #2c2c2c;
`;

// Title는 Text 컴포넌트를 스타일링한 것으로, 크기가 크고 진한 글씨체를 사용하며 색상은 어두운 회색입니다.



const MenuDetail = ({navigate, route, menu}) => {
  console.log('MenuDetail() / navigate: ', navigate);
  console.log("MenuDetail() / route:'". route, "'");
  return (
    <Container>
      <Title>{route.params.menu.name}</Title>                   
      <Text>ID : {route.params.menu.id}</Text>
      <Text>{route.params.menu.price} 원</Text>
      <Text>{route.params.menu.description}</Text>
    </Container>
  )
}

export default MenuDetail;

// // 위 코드는 React Native를 이용하여 만든 MenuDetail라는 이름의 함수형 컴포넌트입니다.
// 이 컴포넌트는 세 가지 props인 navigate, route, 그리고 menu를 인자로 받습니다. 

// 각각의 역할을 설명 하자면 navigate : 화면 간의 이동을 담당하는 함수입니다. 
// 이 함수를 이용하여 다른 화면으로 이동할 수 있습니다. [현재는 이 함수는 이용 안하는중]

// route : 현재 화면에 대한 정보를 담고 있는 객체입니다. 
// 이 객체 내의 params 속성을 통해 이전 화면으로부터 전달받은 파라미터에 접근할 수 있습니다.

// menu : 이 예제에서는 menu가 사용되지 않고 있습니다.
//  그러나 일반적으로 이러한 형태의 인자는 부모 컴포넌트로부터 전달받은 데이터를 나타냅니다.




// MenuDetail 컴포넌트는 이 props들을 이용하여 메뉴의 상세 정보를 화면에 출력합니다. 
// 이때 사용하는 것이 route.params.menu라는 객체입니다. 
// 이 객체는 메뉴의 이름(name), 아이디(id), 가격(price), 설명(description)을 담고 있습니다. 
// 이 정보들을 텍스트로 출력하여 메뉴의 상세 정보를 사용자에게 보여줍니다.

// 또한, 이 컴포넌트는 두 개의 console.log 구문을 포함하고 있어, 컴포넌트가 실행될 때 
// navigate 함수와 route 객체의 내용을 콘솔에 출력합니다.
//  이를 통해 개발자는 이 두 가지 props의 현재 상태를 확인할 수 있습니다.

// 마지막으로, 이 컴포넌트를 export default MenuDetail;을 통해 
// 다른 파일에서 임포트하여 사용할 수 있게 하고 있습니다.


