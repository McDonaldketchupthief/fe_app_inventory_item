import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

// import React from 'react';: React 라이브러리를 가져옵니다.
// React는 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리이다.

// import { Button } from 'react-native';: React Native 라이브러리에서 Button 컴포넌트를 가져옵니다.
//  React Native는 React의 원칙을 따르면서 모바일 애플리케이션을 구축하는 데 사용되는 프레임워크입니다. 
//  Button 컴포넌트는 사용자가 클릭할 수 있는 기본적인 인터페이스 요소입니다.

// import styled from 'styled-components/native';: 
// styled-components 라이브러리의 React Native 버전을 가져옵니다.
//  이를 통해 재사용 가능하고 유지 관리가 용이한 컴포넌트 스타일링을 구현할 수 있습니다.

const Container = styled.View`
  flex: 1;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: center;
`;
// styled.View: styled-components의 기본 구문으로서, 
// View라는 React Native 컴포넌트를 스타일링합니다.

// const Container: Container라는 이름의 새로운 컴포넌트를 선언합니다. 
//  이 컴포넌트는 재사용이 가능 해서 유용하다 

// flex: 1;: 컴포넌트의 크기를 부모 컴포넌트의 가용 공간 전체를 차지하도록 만듭니다.

// background-color: #f3f3f3;: 컴포넌트의 배경색을 회색(#f3f3f3)으로 설정합니다

// align-items: center;: 컴포넌트의 자식 요소들을 세로 축(y축)을 기준으로 가운데 정렬합니다.

// justify-content: center;: 컴포넌트의 자식 요소들을 가로 축(x축)을 기준으로 가운데 정렬합니다.

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #2c2c2c;
  margin-bottom: 50px;
`;

// 스타일 컴포넌트로 이용하여 해당 컴포넌트에 스타일을 각 적용합니다. 
// font-size: 20px; : 텍스트의 글꼴 크기를 20 픽셀로 설정합니다.
// font-weight: bold; : 텍스트를 굵게 표시하도록 설정합니다.
// color: #2c2c2c; : 텍스트의 색상을 #2c2c2c(어두운 회색)으로 설정합니다.
// margin-bottom: 50px; : 컴포넌트의 하단에 50 픽셀의 여백(margin)을 설정합니다.
// 이는 이 컴포넌트 아래의 다른 컴포넌트와의 간격을 제어합니다.

const ButtonContainer = styled.View`
  margin-bottom: 50px;
`;
//  컴포넌트의 하단에 50 픽셀의 여백(margin)을 설정합니다.
//  이는 이 컴포넌트 아래의 다른 컴포넌트와의 간격을 제어합니다.

const Home = ({ navigation, route }) => {
  return (
    <Container>
      <Title>{route.name}</Title>
      <ButtonContainer>
        <Button
          title="발주 정보 리스트"
          onPress={() => navigation.navigate('MenuList')}
          color="#35363B"
          icon={<Image source={{ uri: 'https://www.pocketcu.co.kr/images/main/intro_img02.png' }} />}
        />
      </ButtonContainer>
      <Button
        title="배송 리스트"
        onPress={() => navigation.navigate('OrderList')}
        color="#35363B" // 원하는 색상 배송리스트 
      />
    </Container>
  );
};

export default Home;

// Imports: 해당 컴포넌트는 React, 'react-native'의 Button 및 'styled-components/native'에서 필요한 모듈을 가져옵니다. 
// 이 모듈들은 컴포넌트를 정의하고 스타일을 지정하는 데 사용됩니다.

// Component Definition: Home 컴포넌트는 navigation과 route라는 두 가지 프롭을 받는 함수형 컴포넌트로 정의됩니다. 
// 일반적으로 네비게이션 라이브러리에서 제공하는 프롭으로, 네비게이션 스택과 현재 경로에 대한 정보를 담고 있습니다.

// Styling: 해당 컴포넌트는 'styled-components/native' 패키지를 사용하여 스타일이 적용된 컴포넌트를 생성합니다. 
// Container, Title, ButtonContainer는 styled 함수를 사용하여 정의되며, UI의 각 부분에 대한 스타일을 지정합니다.

// Container: Container 컴포넌트는 화면의 메인 컨테이너 뷰를 나타냅니다. 
// flexbox 속성이 설정되어 사용 가능한 공간을 채우도록 확장됩니다. 
// 배경색은 #f3f3f3로 설정되어 있으며, 자식 요소를 수직 및 수평으로 중앙에 정렬합니다.

// Title: Title 컴포넌트는 화면 상단의 제목 텍스트를 나타냅니다. 
// 글꼴 크기는 20픽셀이며, 볼드체로 표시되며, 색상은 #2c2c2c로 설정됩니다. 
// 또한 아래쪽 여백을 50픽셀로 설정하여 일정한 간격을 만듭니다.

// ButtonContainer: ButtonContainer 컴포넌트는 버튼들을 위한 컨테이너입니다.
//  제목과 버튼 사이에 일정한 간격을 만들기 위해 아래쪽 여백이 50픽셀로 설정됩니다.

// Buttons: Button 컴포넌트의 두 인스턴스가 있습니다. 
// 첫 번째 버튼은 "발주 정보 리스트"로 레이블이 지정되어 있으며 'MenuList' 경로와 연결됩니다. 
// 버튼을 누르면 'MenuList' 화면으로 이동하는 onPress 이벤트 핸들러가 있습니다. 
// 두 번째 버튼은 "배송 리스트"로 레이블이 지정되어 있으며 'OrderList' 경로와 연결됩니다. 
// 눌렀을 때 'OrderList' 화면으로 이동하는 onPress 이벤트 핸들러가 있습니다. 두 버튼 모두 색상이 #35363B로 설정되어 있습니다.

// Export: Home 컴포넌트는 모듈의 기본 익스포트로 내보내져, 애플리케이션의 다른 부분에서 접근할 수 있습니다.

// 종합적으로, Home 컴포넌트는 중앙에 제목, 두 개의 버튼 및 배경색이 표시됩니다. 버튼을 누르면 애플리케이션 내 다른 화면으로 이동합니다.