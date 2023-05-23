import React from 'react';
import styled from 'styled-components/native';

const TabConatiner = styled.View`
  flex: 1;
  background-color: ##35363B;
  justify-content: center;
  align-items: center;
`;

// const TabIcon = styled.Image`
//   width: 30px;
//   height: 30px;
// `;

const TabText = styled.Text`
  font-size: 30px;
  color: #222;
`;


// export const Cart = () => {
//   return (
//     <TabConatiner>
//       {/* <TabIcon source={require('../../assets/icons/cart.png')} /> */}
//       <TabText>Cart</TabText>
//     </TabConatiner>
//   );
// };

export const Wallet = () => {
  // 가상의 발주정보 리스트 데이터
  const orderList = [
    { id: 1, item: 'Item 1', quantity: 2 },
    { id: 2, item: 'Item 2', quantity: 1 },
    { id: 3, item: 'Item 3', quantity: 3 },
  ];

  return (
    <TabConatiner>
      {/* <TabIcon source={require('../../assets/icons/pay.png')} /> */}
      <TabText>Test2</TabText>

      {/* 발주정보 리스트 출력 */}
      <ul>
        {orderList.map((order) => (
          <li key={order.id}>
            <span>{order.item}</span> - <span>{order.quantity}</span>
          </li>
        ))}
      </ul>
    </TabConatiner>
  );
};


export const Pin = () => {
  return (
    <TabConatiner>
      {/* <TabIcon source={require('../../assets/icons/pin.png')} /> */}
      <TabText>Test3</TabText>
    </TabConatiner>
  );
};

// export const Settings = () => {
//   return (
//     <TabConatiner>
//       {/* <TabIcon source={require('../../assets/icons/settings.png')} /> */}
//       <TabText>Settings</TabText>
//     </TabConatiner>
//   );
// };
