import React from 'react';
import { Platform } from 'react-native';
import Home from '../screens/Home';
import MenuList from '../screens/MenuList';
import MenuDetail from '../screens/MenuDetail';

// 이 코드는 React Native에서 네비게이션을 구현하기 위해 사용되는
// react-navigation 패키지와 styled-components를 활용한 스타일링을 포함하고 있습니다. 
// 해당 코드는 Stack 네비게이션을 생성하고 각각의 화면 컴포넌트(Home, MenuList, MenuDetail)와 연결합니다.

import { createStackNavigator } from '@react-navigation/stack';

// 먼저, react-navigation 패키지에서 createStackNavigator를 import하여 Stack을 생성합니다.
// 이 스택은 앱 내에서 화면 간의 이동을 관리합니다.

import styled from 'styled-components/native';


const HeaderLogo = styled.Image`
  width: 150px;
  height: 30px;
`;

// styled-components/native에서 HeaderLogo, BackArrow, MenuBtn과 
// 같은 스타일링된 이미지 컴포넌트를 생성합니다. 
// 각 컴포넌트는 이미지 크기와 스타일을 설정합니다.

const Stack = createStackNavigator();
const BackArrow = styled.Image`
  width: 30px;
  height: 30px;
`;

const MenuBtn = styled.Image`
  width: 30px;
  height: 30px;
`;

// StackNavigation 컴포넌트는 네비게이션 스택을 생성하고 초기 라우트를 Home으로 설정합니다. 
// screenOptions를 통해 네비게이션 헤더의 스타일을 설정합니다. 헤더 스타일은 배경색, 높이, 그림자 등이 포함됩니다. 
// 또한, 헤더 타이틀 스타일과 로고 이미지(HeaderLogo)를 설정합니다

const StackNavigation = () => {
  return (
    <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          // borderBottomColor: `#ffffff`,
          // borderBottomWidth: 1,
          height: 120,
          shadowColor: '#222',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.2,
          shadowRadius: 4.65,
        },
        headerTintColor: '#35363B',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
          color: '#222',
        },
        headerTitleAlign: 'center',
        headerTitle: (props) => (
          <HeaderLogo source={require('../../assets/logo.png')} />
        ),
        
      }}
    >
      <Stack.Screen 
        name='Home' 
        component={Home} 
        options={{
          headerLeft: () => {
            const style = {
              marginRight: 10,
              marginLeft: 11,
            };
            return (
              <MenuBtn 
                source={require('../../assets/icons/sort.png')} 
                style={style}
                onPress={()=>{alert('메뉴 버튼 클릭')}}
              />
            )
          },
          headerRight: () => {
            const style = {
              marginRight: 11,
              marginLeft: 10,
            };
            return (
              <MenuBtn 
                source={require('../../assets/icons/user.png')} 
                style={style}
                onPress={()=>{alert('내정보 클릭')}}
              />
            )
          }
        }}
      />
      {/* Stack.Screen을 통해 각 화면 컴포넌트를 스택에 추가합니다. 
      Home 화면은 headerLeft와 headerRight를 통해 메뉴 버튼과 내 정보 버튼을 추가합니다.
      이 버튼들은 이미지(MenuBtn)로 구현되며, 각각의 버튼을 눌렀을 때 alert를 통해 메시지를 표시합니다. */}
      <Stack.Screen 
        name='MenuList' 
        component={MenuList}
        options={
          {
            headerTitle: '메뉴 리스트',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
              letterSpacing: -1,
              color: '#222',
            },
            headerBackTitleVisible: false,
            headerBackImage: () => {
              const style = {
                marginRight: 10,
                marginLeft: Platform.OS === 'ios' ? 10 : 0,
              };
              return (
                <BackArrow source={require('../../assets/icons/left-circle.png')} style={style} />
              );
  
            }
          }
        }
      />
    {/* MenuDetail 화면은 options 함수를 통해 동적으로 헤더 타이틀을 설정합니다.
     route.params.menu.name을 통해 전달된 매개변수를 사용하여 메뉴 이름을 헤더 타이틀로 표시합니다. */}
      <Stack.Screen name='MenuDetail' component={MenuDetail}
        options={({route}) => ({
          headerTitle: route.params.menu.name,
          headerBackTitleVisible: false,
          headerShown: true,
        })}
      />
    </Stack.Navigator>
  )
}


export default StackNavigation;