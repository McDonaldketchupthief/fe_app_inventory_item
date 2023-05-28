import React from 'react';
import { Platform } from 'react-native';
import Home from '../screens/Home';
import MenuList from '../screens/MenuList';
import MenuDetail from '../screens/MenuDetail';
import OrderDetails  from '../screens/OrderDetails';
import OrderList from '../screens/OrderList';

import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';

// import React from 'react';: React 라이브러리를 임포트합니다.
//  React는 UI를 구성하는 데 필요한 기본적인 요소를 제공합니다.

// import { Platform } from 'react-native';: React Native 라이브러리로부터 Platform 모듈을 임포트합니다.
//  이 모듈은 앱이 현재 어떤 플랫폼 (iOS, Android 등)에서 실행되고 있는지 확인하는 데 사용됩니다.

//  import Home from '../screens/Home';: '../screens/Home'에서 Home 컴포넌트를 임포트합니다.
//  이 컴포넌트는 홈 화면을 나타냅니다.

//  import { ExampleThree as MenuList } from '../screens/MenuList';: '../screens/MenuList'에서 ExampleThree 컴포넌트를 MenuList라는 이름으로 임포트합니다.
//  이 컴포넌트는 메뉴 목록 화면을 나타냅니다.

//  import MenuDetail from '../screens/MenuDetail';: '../screens/MenuDetail'에서 MenuDetail 컴포넌트를 임포트합니다. 
// 이 컴포넌트는 메뉴 세부 정보 화면을 나타냅니다.

//  import OrderDetails from '../screens/OrderDetails';: '../screens/OrderDetails'에서 OrderDetails 컴포넌트를 임포트합니다. 
// 이 컴포넌트는 주문 세부 정보 화면을 나타냅니다.

//  import OrderList from '../screens/OrderList';: '../screens/OrderList'에서 OrderList 컴포넌트를 임포트합니다.
//  이 컴포넌트는 주문 목록 화면을 나타냅니다.

//  import { createStackNavigator } from '@react-navigation/stack';: '@react-navigation/stack'에서 createStackNavigator 함수를 임포트합니다.
//  이 함수는 스택 네비게이션을 생성하는 데 사용됩니다.

//  import styled from 'styled-components/native';: 'styled-components/native'에서 styled 객체를 임포트합니다. 

// 이 객체를 사용하면 CSS와 유사한 문법으로 React Native 컴포넌트의 스타일을 정의할 수 있습니다.

//  이 코드의 다음 부분에서는 createStackNavigator를 사용하여 네비게이션 스택을 설정하고 각 화면을 정의하게 될 것입니다. 
// 이 네비게이션 스택은 사용자가 앱에서 화면을 전환하는 방법을 제어합니다.

const HeaderLogo = styled.Image`
  width: 180px;
  height: 30px;
`;

const Stack = createStackNavigator();
const BackArrow = styled.Image`
  width: 30px;
  height: 30px;
`;

const MenuBtn = styled.Image`
  width: 30px;
  height: 30px;
`;

const HomeStacks = () => {
  return (
    <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
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
        headerTintColor: '#35363B', //화살표 색상 
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 30,
          color: '#222',
        },
        headerTitleAlign: 'center',
        headerTitle: (props) => (
          <HeaderLogo source={require('../../assets/logo.png')} />
        ),
        
      }}
    >
      <Stack.Screen 
        name='발주 '  //발주 네임 
        component={Home} 
        options={{
          headerLeft: () => {
            const style = {
              marginRight: 10,
              marginLeft: 11,
            };

          },
          headerRight: () => {
            const style = {
              marginRight: 11,
              marginLeft: 10,
            };
          }
        }}
      />
      <Stack.Screen 
        name='MenuList'  //쌓이는 메뉴 
        component={MenuList} //쌓이는 메뉴
        options={
          {
            headerTitle: '발주 리스트',
            headerTitleStyle: {
              fontWeight: 'bold', // 굵기 
              fontSize: 24, // 위에 헤더 제목 크기
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
      <Stack.Screen name='MenuDetail' component={MenuDetail}
        options={({route}) => ({
          headerTitle: route.params.menu.name,
          headerBackTitleVisible: false,
          headerShown: true,
        })}
      />
      <Stack.Screen name='OrderList' component={OrderList}
          options={({route}) => ({    
            // headerTitle: route.params.menu.name,
            // headerBackTitleVisible: false,
            // headerShown: true,
        })}
      />

      <Stack.Screen name='OrderDetails' component={OrderDetails}
          options={({route}) => ({    
            id: route.params.id
        })}
      />
    </Stack.Navigator>
  )
}

export default HomeStacks;

// createStackNavigator(): Stack Navigator 객체를 생성합니다. 
// 이 객체는 여러 화면을 관리하는 데 사용됩니다.
//  <Stack.Navigator>: 생성한 Stack Navigator 객체를 사용하여 화면을 스택 형식으로 배치합니다.
//  이것은 JSX 태그 안에서 화면을 정의하는 데 사용됩니다.
//  initialRouteName='Home': 처음 앱을 시작했을 때 나타나는 화면을 'Home'으로 설정합니다.
// screenOptions: 모든 화면에 적용될 기본 옵션을 설정합니다. 
// 예에서는 헤더 스타일(headerStyle), 헤더 텍스트 색상(headerTintColor), 헤더 텍스트 스타일(headerTitleStyle), 헤더 정렬 방식(headerTitleAlign) 등을 정의하였습니다.
// <Stack.Screen>: 스택 내비게이터에 포함될 각 화면을 정의합니다.
//  이 태그 내에 name과 component 속성이 있습니다. name은 화면의 이름을 정의하며,
//   이 이름을 통해 다른 화면에서 이 화면으로 이동할 수 있습니다. 
//   component는 이 화면에 표시될 컴포넌트를 지정합니다.
// options: 특정 화면에 적용될 옵션을 설정합니다. 이는 헤더 스타일, 제목, 뒤로 가기 버튼 등을 설정할 수 있습니다. 
// options 속성을 함수로 제공할 경우, 이 함수는 route 객체를 매개변수로 받습니다. route 객체는 현재 화면에 대한 정보를 포함하며, 
// 이를 사용하여 동적으로 화면 옵션을 설정할 수 있습니다.
// 이 구조를 통해 앱의 화면 전환을 구성하고 관리할 수 있습니다. 
// 각 화면이 스택에 쌓이고, 사용자가 뒤로 가기를 누르면 현재 화면이 스택에서 제거되고 이전 화면으로 돌아갑니다.