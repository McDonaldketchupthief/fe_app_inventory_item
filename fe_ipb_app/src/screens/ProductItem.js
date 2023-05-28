//참고용
const ProductItem = (props) => {
    console.log("props: ", props);
    console.log("props.item.name: ", props.item.name);
    return (
        <>
            <tr>
                <td>{props.item.id}</td>
                <td>{props.item.name}</td>
                <td>{props.item.price}</td>
                <td>{props.item.description}</td>
            </tr>
        </>
    );
}

export default ProductItem;


// console.log("props: ", props);: 전달받은 props 객체를 콘솔에 출력합니다.
//  이를 통해 전달된 데이터를 확인할 수 있습니다.

// console.log("props.item.name: ", props.item.name);: props 객체 내부의 item 속성의 name 속성을 콘솔에 출력합니다. 
// 이를 통해 전달된 데이터 중 name 속성의 값을 확인할 수 있습니다.

// return (...): JSX 문법을 사용하여 컴포넌트의 출력을 정의합니다. tr 요소를 사용하여 HTML 테이블 행을 생성하고, 
// props.item 객체의 속성들을 해당 행의 각 열에 출력합니다. props.item.id, props.item.name, props.item.price, props.item.description 속성을 사용하여
//  각 열에 해당하는 데이터를 출력합니다.

// export default ProductItem;: ProductItem 컴포넌트를 모듈의 기본 내보내기로 설정합니다.
//  이를 통해 다른 파일에서 이 컴포넌트를 가져와 사용할 수 있습니다.

// 즉, ProductItem 컴포넌트는 주어진 props 객체의 item 속성에 포함된 데이터를 출력하는 역할을 합니다.
//  이 컴포넌트는 HTML 테이블에서 한 행의 데이터를 나타내며, props.item 객체의 속성들을 테이블 열에 맞게 출력합니다.