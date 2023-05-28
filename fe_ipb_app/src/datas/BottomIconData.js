import CartIcon from '../../assets/icons/cart.png';
import PayIcon from '../../assets/icons/pay.png';
import PinIcon from '../../assets/icons/pin.png';
// import SettinsIcon from '../../assets/icons/settings.png';
import { Cart, Wallet, QR, Pin, Settings } from '../screens/TabScreens';
import HomeStacks from '../stacks/HomeStacks';

export const BottomIconData = [
  {
    id: 1,
    name: 'HomeStacks',
    icon: CartIcon,
    url: 'HomeStacks',
    component: HomeStacks,
    cnt: 10,
  },
  {
    id: 2,
    name: 'Wallet',
    icon: PayIcon,
    url: 'Wallet',
    component: Wallet,
    cnt: 3,
  },
  {
    id: 4,
    name: 'Pin',
    icon: PinIcon,
    url: 'Pin',
    component: Pin,
  },
];
//   {
//     id: 5,
//     name: 'Settings',
//     icon: SettinsIcon,
//     url: 'Settings',
//     component: Settings,
//   }
// ];

// BottomIcon Data 에서 버튼 을 변경한다 . 

// id: 탭의 고유한 식별자입니다.
// name: 탭의 이름입니다. 어떤탭인지 인식하기 위해 보는 코드입니다.
// icon: 탭에 표시될 아이콘의 이미지를 가져옵니다.
// url: 탭이 클릭될 때 이동할 경로를 나타냅니다.
// component: 해당 탭을 클릭했을 때 렌더링되는 컴포넌트입니다.
// cnt (선택적): 탭 아이콘 위에 표시되는 숫자를 나타냅니다.
//  주로 알림이나 업데이트의 수를 표시하는 데 사용됩니다. 
//  이 속성은 모든 탭에 존재하지 않을 수 있습니다.
// 이 코드에서는 'HomeStacks', 'Wallet', 'Pin'이라는 세 가지 탭을 정의하고 있습니다. 
// 각 탭은 각기 다른 아이콘과 컴포넌트를 가지고 있습니다.

// 이러한 정보를 바탕으로 하단 탭 바를 생성할 수 있습니다. 
// 일반적으로는 이러한 데이터를 사용하여 반복적인 방식으로 탭을 생성합니다. 
// 예를 들어, BottomIconData 배열을 순회하며 각 탭에 해당하는 컴포넌트와 아이콘, 경로를 설정하게 됩니다.