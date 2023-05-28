// import React, { Component , useState, useEffect } from 'react';
// import { StyleSheet, View, ScrollView } from 'react-native';
// import { Table, TableWrapper, Row } from 'react-native-table-component';
// import axios from 'axios';

// const MenuList = () => {
//   const url_be = "http://localhost:8080/product/list";
//   const [tableDataList, setTableDataList] = useState([]);
//   /*
//   category_id: null
//   category_name: "과자"
//   cost: 800
//   detail: null
//   exp: "2023-12-20"
//   id: 1 
//   imgname: "sw.jpg" 
//   name: "새우깡" 
//   price: 1500 
//   product_code: 1 
//   product_info_id: 1 
//   qnt: 1000
//    */
//   const tableHead = ['상품코드', '상품이름', '수량', '가격', '삭제'];
//   // tableHead: 테이블의 헤더에 표시될 열 제목을 담은 배열입니다.
//   //  ['상품코드', '상품이름', '수량', '가격', '삭제']
//   //  같이 5개의 열 제목이 포함된 배열이다 
//   const widthArr = [60, 60, 50, 100, 50 ] //테이블 헤드 
//       // widthArr: 각 열의 너비를 픽셀 단위로 지정하는 배열입니다. 
//        // 예를 들어, [60, 60, 50, 100, 50]와 같이 5개의 숫자로 구성된 배열입니다

//   useEffect(() => {
//     fetchData();
//     console.log("useEffect called!!");
//   }, []);
    
    

//     const fetchData = () => {
//       axios(
//         url_be,
//         {
//           method: 'get'
//         }
//       )
//       .then((res) => {
//         console.log("res:", res);
//         console.log("orderProdutList=>res.data:", res.data);
//         setTableDataList(res.data)
//       })
//       .catch((err) => console.log("orderproductlist/err", err));
//     }

    
//     return (
//       <div>
//         <table style={styles.serim}>
//           <thead>
//             <tr>
//               <th>상품코드</th>
//               <th>상품이름</th>
//               <th>수량</th>
//               <th>가격</th>
//               <th>삭제</th>
//             </tr>
//           </thead>  
//           <tbody>
//             {
//               tableDataList.map((data, index) => (
//                 <tr key={index}>
//                   <td>{data.product_code}</td>
//                   <td>{data.name}</td>
//                   <td>{data.qnt}</td>
//                   <td>{data.price}</td>
//                   <td>x</td>
//                 </tr>
//               ))
//             }
//           </tbody>
//         </table>
//       </div>
    
//     );
// }

// //View는 컴포넌트를 감싸는 역할을 합니다. 
// //ScrollView 컴포넌트를 사용하는 이유는 스크롤 가능한 영역으로 만들수가 있습니다.
// //Table 컴포넌트는 테이블 컨텐츠를 나타냅니다. 

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//   header: { height: 50, backgroundColor: '#fff' }, //테이블헤드
//   text: { textAlign: 'center', fontWeight: '100' },
//   dataWrapper: { marginTop: -1 },
//   row: { height: 40, backgroundColor: '#E7E6E1' },
//   serim: {
//     border: '1px',
//   }
// });

// // container: 이 스타일은 flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'와 같은 속성을 가지고 있습니다.
// //  이는 컨테이너 요소에 적용될 스타일입니다.
// //  flex: 1은 해당 요소가 화면에서 가능한 모든 공간을 차지할 수 있음을 의미합니다.
// //  padding은 요소의 안쪽 여백을 설정하고, paddingTop은 위쪽 여백을 추가로 설정합니다. backgroundColor은 요소의 배경색을 나타냅니다.
// // header: 이 스타일은 height: 50, backgroundColor: '#fff'와 같은 속성을 가지고 있습니다. 이는 테이블 헤더 요소에 적용될 스타일입니다. height는 요소의 높이를 설정하고, backgroundColor은 요소의 배경색을 나타냅니다.
// // text: 이 스타일은 textAlign: 'center', fontWeight: '100'와 같은 속성을 가지고 있습니다. 이는 텍스트 요소에 적용될 스타일입니다. textAlign: 'center'는 텍스트를 가운데로 정렬하고, fontWeight: '100'은 텍스트의 가중치를 나타냅니다.
// // dataWrapper: 이 스타일은 marginTop: -1와 같은 속성을 가지고 있습니다. 이는 데이터 래퍼 요소에 적용될 스타일입니다. marginTop은 요소의 위쪽 여백을 설정합니다. 여기서는 -1을 설정하여 요소가 상위 요소와 겹치도록 설정되었습니다.
// // row: 이 스타일은 height: 40, backgroundColor: '#E7E6E1'와 같은 속성을 가지고 있습니다. 이는 행 요소에 적용될 스타일입니다. height는 요소의 높이를 설정하고, backgroundColor은 요소의 배경색을 나타냅니다.

// export default MenuList;

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Modal, Alert } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import axios from 'axios';

const MenuList = () => {
  const url_be = "http://localhost:8080/product/list";
  const [tableDataList, setTableDataList] = useState([]);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const tableHead = ['상품코드', '상품이름', '수량', '가격', '삭제'];
  const widthArr = [60, 60, 50, 100, 90];

  useEffect(() => {
    fetchData();
    console.log("useEffect called!!");
  }, []);

  const fetchData = () => {
    axios.get(url_be)
      .then((res) => {
        console.log("res:", res);
        console.log("orderProdutList=>res.data:", res.data);
        setTableDataList(res.data)
      })
      .catch((err) => console.log("orderproductlist/err", err));
  }

  const handleDelete = (index) => {
    setDeleteIndex(index);
    setDeleteModalVisible(true);
  }

  const confirmDelete = () => {
    // Implement your delete logic here
    console.log("Deleting item at index", deleteIndex);
    setDeleteModalVisible(false);
    setDeleteIndex(null);
  }

  const cancelDelete = () => {
    setDeleteModalVisible(false);
    setDeleteIndex(null);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Table>
          <Row data={tableHead} style={styles.head} textStyle={styles.headText} widthArr={widthArr} />
          {
            tableDataList.map((data, index) => (
              <TableWrapper key={index} style={styles.row}>
                <Row
                  data={[data.product_code, data.name, data.qnt, data.price]}
                  textStyle={styles.text}
                  widthArr={widthArr.slice(0, 4)} // Exclude delete button column
                />
                <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteButton}>
                  <Text style={styles.deleteButtonText}>삭제</Text>
                </TouchableOpacity>
              </TableWrapper>
            ))
          }
        </Table>
      </ScrollView>

      <Modal
        visible={deleteModalVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>정말로 삭제하시겠습니까?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={confirmDelete} style={[styles.modalButton, styles.modalConfirmButton]}>
                <Text style={styles.modalButtonText}>확인</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={cancelDelete} style={[styles.modalButton, styles.modalCancelButton]}>
                <Text style={styles.modalButtonText}>취소</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  headText: { textAlign: 'center', fontWeight: 'bold' },
  text: { textAlign: 'center' },
  row: { flexDirection: 'row', backgroundColor: '#E7E6E1', borderBottomWidth: 1, borderBottomColor: '#ccc' },
  deleteButton: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' },
  deleteButtonText: { color: '#fff', fontWeight: 'bold' },
  modalContainer: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { backgroundColor: '#fff', padding: 20, borderRadius: 10 },
  modalText: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  modalButtons: { flexDirection: 'row', justifyContent: 'center' },
  modalButton: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 5, marginHorizontal: 10 },
  modalConfirmButton: { backgroundColor: 'green' },
  modalCancelButton: { backgroundColor: 'red' },
  modalButtonText: { color: '#fff', fontWeight: 'bold' },
});

export default MenuList;
