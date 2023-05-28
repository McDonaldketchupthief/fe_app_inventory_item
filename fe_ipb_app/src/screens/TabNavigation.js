import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import { BottomIconData } from '../datas/BottomIconData';


// 코드는 React Native에서 탭 네비게이션을 구현하기 위한 TabNavigation 컴포넌트를 정의한 것입니다. 


const Tab = createBottomTabNavigator();

const MyIcon = styled.Image`
  width: 25px;
  height: 25px;
`;
//밑스타일 아이콘
// MyIcon 컴포넌트: styled-components/native를 사용하여 
// 스타일링된 이미지 컴포넌트를 정의합니다. 
// 이 컴포넌트는 아이콘의 크기를 설정하는 역할을 합니다.

const TabIcon = ( {name, size, focused, color} ) => {
  return (
    <MyIcon 
      source={name}
    />
  );
}

// TabIcon 컴포넌트: 탭 바에 표시될 아이콘을 정의하는 컴포넌트입니다.
// name, size, focused, color 등의 속성을 받아와 해당하는 이미지 아이콘을 렌더링합니다.

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='HomeStacks'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#35363B', //밑창 배경화면
          height: 70, // 밑높이 
        },
      }}

      //TabNavigation 컴포넌트: 탭 네비게이션을 구현하는 메인 컴포넌트입니다.
      // Tab.Navigator를 사용하여 탭 네비게이터를 생성하고,
      // initialRouteName과 screenOptions 등의 설정을 지정합니다.
    >
      {
        BottomIconData.map( iconData => (
          <Tab.Screen 
            key={iconData.id}
            name={iconData.name} 
            component={iconData.component} 
            options={{
              tabBarIcon: ( props ) => TabIcon({...props, name: iconData.icon }) ,
              tabBarBadge: iconData.cnt ? iconData.cnt : null,
              tabBarBadgeStyle: {
                backgroundColor: '#222',
                color: '#fff',
                position: 'absolute',
                top: 30,
              },
            }}
          />
        ))
      }
      
    </Tab.Navigator>
  );
}

// BottomIconData.map(): BottomIconData 배열을 순회하면서 각 아이템에 대한 탭 스크린을 생성합니다. 
// Tab.Screen을 사용하여 탭 스크린을 정의하고, tabBarIcon을 설정하여 아이콘을 표시하고,
//  tabBarBadge와 tabBarBadgeStyle을 설정하여 뱃지(알림)를 표시할 수 있습니다.

//탭 네비게이션은 BottomIconData 배열에 정의된 아이템들을 기반으로 탭 바와 화면 전환을 관리합니다.
// 각 아이템은 name, icon, component, cnt 등의 속성을 가지며,
//  Tab.Screen을 통해 해당 아이템에 대한 화면 컴포넌트를 연결합니다.

// 컴포넌트의 스타일링은 tabBarStyle을 통해 탭 바의 배경색과 높이를 설정하며, 
// tabBarBadgeStyle을 통해 뱃지(알림)의 스타일을 지정합니다.

// 설정을 통해 TabNavigation 컴포넌트는 React Native 애플리케이션에서 하단 탭 네비게이션을 구현하고, 
// 각 탭에 대한 화면 전환과 아이콘 표시, 뱃지(알림) 표시 등을 제공합니다.

export default TabNavigation;