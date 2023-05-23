import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Link } from '@react-navigation/native';

// React: 이것은 JavaScript 라이브러리로, 사용자 인터페이스를 구축하는데 사용됩니다

// react-native: 이것은 React를 기반으로 모바일 애플리케이션을 개발하기 위한 프레임워크입니다. 
// View와 Text는 React Native에서 제공하는 기본 컴포넌트로, UI를 구성하는 데 사용됩니다.

// styled-components/native: 이 라이브러리는 React 및 React Native에서 스타일링을 돕는 도구입니다
// CSS를 JavaScript 파일 내에 작성할 수 있게 해줍니다 이렇게 사용하면 재사용이 가능하고 가독성을 높일 수 있습니다.

// @react-navigation/native: 이 라이브러리는 React Native에서 사용하는 네비게이션 라이브러리입니다. 
// 화면간의 이동을 도울떄 사용 합니다.  Link 컴포넌트는 웹의 <a> 태그와 유사하게 다른 화면으로 연결하는 기능을 합니다.

const Container = styled.View`
  flex: 1;
  background-color: #fff; 
  align-items: center;
  justify-content: center;
`;

// 위의 코드는 React Native에서 사용되는 
// 스타일드 컴포넌트(Styled Component)를 사용하여 만든 Container 컴포넌트입니다.
//  이 컴포넌트는 다음과 같은 스타일을 가지고 있습니다:

// flex: 1: 컨테이너가 화면 전체를 채우도록 설정합니다. 이는 다른 컴포넌트와 함께 사용될 때 공간을 적절하게 분배하는데 도움을 줍니다.
// background-color: #fff: 배경색을 흰색(#ffffff)으로 설정합니다. 이는 컨테이너의 배경을 백색으로 만듭니다.
// align-items: center: 컨테이너 내부의 요소들을 수평 중앙에 정렬합니다. 수평 방향으로 가로로 가운데 정렬됩니다.
// justify-content: center: 컨테이너 내부의 요소들을 수직 중앙에 정렬합니다. 수직 방향으로 세로로 가운데 정렬됩니다.
// 즉, Container 컴포넌트는 화면 전체를 채우고, 흰색 배경을 가지며, 내부의 요소들을 수평 및 수직 중앙에 정렬하는 역할을 합니다.


//배송리스트

const ItemView = styled.View`
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

// padding: 20px: 컴포넌트의 내부에 패딩을 설정합니다. 패딩은 컨텐츠와 컨테이너의 경계 간의 공간을 의미하며, 
// 여기서는 20픽셀의 패딩이 설정되어 있습니다. 이를 통해 컴포넌트의 내용물이 경계에서 일정한 간격을 가지게 됩니다.
// border-bottom-width: 1px: 컴포넌트의 아래쪽 경계선의 너비를 1픽셀로 설정합니다.
//  이를 통해 컴포넌트의 아래쪽에 1픽셀 높이의 선이 그려집니다.
// border-bottom-color: #ccc: 컴포넌트의 아래쪽 경계선의 색상을 회색(#cccccc)으로 설정합니다.
//  이를 통해 컴포넌트의 아래쪽 경계선이 회색으로 표시됩니다.
// 즉, ItemView 컴포넌트는 패딩이 적용되고, 아래쪽에 1픽셀 높이의 회색 경계선이 있는 컴포넌트입니다. 
// 이를 통해 아이템 목록 등에서 각 아이템을 시각적으로 구분할 수 있습니다.






const ItemColumn = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;



const OrderDataList = [
  {
    id: 1,
    status: '배송준비중',
    orderTitle: '5월 20일 발주리스트',
  },
  {
    id: 2,
    status: '배송중',
    orderTitle: '5월 19일 발주리스트',
  },
  {
    id:3,
    status: '배송완료',
    orderTitle: '5월 18일 발주리스트',
  },
];

// 위의 코드는 주문 데이터 목록(OrderDataList)을 JavaScript 배열로 정의한 것입니다. 
// 각 주문 데이터는 객체 형태로 표현되며, 다음과 같은 속성을 가지고 있습니다:

// id: 주문 데이터의 고유 식별자로서 숫자 형태입니다. 각 주문 데이터 객체마다 고유한 id 값을 가지고 있습니다.
// status: 주문의 상태를 나타내는 문자열입니다. 
// 예를 들어, 첫 번째 주문은 '배송준비중', 두 번째 주문은 '배송중', 세 번째 주문은 '배송완료' 상태를 나타내고 있습니다.
// orderTitle: 주문의 제목을 나타내는 문자열입니다. 예를 들어, 첫 번째 주문은 '5월 20일 발주리스트', 
// 두 번째 주문은 '5월 19일 발주리스트', 세 번째 주문은 '5월 18일 발주리스트'라는 제목을 가지고 있습니다.
// 이 배열은 주문 데이터를 효율적으로 저장하고 관리하기 위해 사용될 수 있습니다. 
// 각 주문 데이터 객체는 고유한 식별자를 가지고 있으며, 주문 상태와 주문 제목 등의 정보를 포함하고 있습니다. 
// 이러한 배열을 활용하여 주문 목록을 표시하거나 필요한 정보를 추출하고 처리할 수 있습니다.

const OrderList = ({ navigation, route }) => {
  return (
    <Container>
      <Text>{route.name}</Text>
      <table>
        <thead>
          <tr>
            <th>배송내역</th>
            <th>발주내역</th>  
          </tr>
        </thead>
        <tbody>
          {OrderDataList.map((orderData, index) => (
            <tr key={index}>
              <td>{orderData.status}</td>
              <td>
                
                <Link to={{ screen: 'OrderDetails', params: { id:  orderData.id } }}>
                   <Text>{orderData.orderTitle}</Text>
                </Link> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default OrderList;


// 주문 목록에서 주문 날짜에 링크를 추가하려면, 주문 날짜 텍스트를 <Link> 
// 컴포넌트로 감싸고 적절한 네비게이션 경로를 제공해야 합니다. 
// 다음은 주문 목록을 위한 업데이트된 OrderList 컴포넌트의 한국어 설명입니다: