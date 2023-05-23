import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';

export default class ExampleThree extends Component {
  constructor(props) {
    super(props);
    // constructor(props): 이 함수는 컴포넌트가 처음 생성될 때 실행되며, 상태를 초기화합니다. 
    // 이 코드에서는 테이블의 헤더(상품코드, 상품이름, 수량, 가격), 각 열의 너비, 
    // 그리고 테이블에 표시될 데이터를 초기화합니다
    this.state = {
      tableHead: ['상품코드', '상품이름', '수량', '가격'],
      widthArr: [40, 60, 80, 100], // 테이블 헤드
      tableData: [
        ['001', '상품1', '10', '100'],
        ['002', '상품2', '5', '200'],
        ['003', '상품3', '8', '150'],
        // Add more rows as needed
      ]
    };
  }

  render() {
    const { tableHead, widthArr, tableData } = this.state;

    // render(): 이 함수는 React 컴포넌트에서 필수적인 함수로, 컴포넌트가 어떻게 화면에 그려질지 정의합니다.
    //  이 경우에는 두 개의 ScrollView 컴포넌트를 중첩하여 사용하고 있습니다. 
    // 외부 ScrollView는 가로 스크롤을 가능하게 하고, 
    // 내부 ScrollView는 테이블 데이터 부분을 세로로 스크롤할 수 있게 합니다.

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
              <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.text} />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                {tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={widthArr}
                    style={[styles.row, index % 2 && { backgroundColor: '#fff' }]}
                    textStyle={styles.text}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}
// Table과 Row: 이 두 컴포넌트는 react-native-table-component 라이브러리에서 가져 온 것이다.
// Table은 테이블을 그리는 데 사용되며, Row는 테이블의 각 행을 그리는 데 사용됩니다. 
// 이 코드에서는 Table 컴포넌트를 사용하여 테이블의 헤더와 본문을 각각 그리고 있습니다.

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#fff' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});

// StyleSheet.create: 이 메서드는 스타일을 정의하는 데 사용됩니다. 
// 여기서는 컨테이너, 헤더, 텍스트, 데이터 래퍼, 행에 대한 스타일을 정의하고 있습니다.
// 테이블 형태로 상품에 대한 정보를 표시하는 React Native 애플리케이션 컴포넌트이다!