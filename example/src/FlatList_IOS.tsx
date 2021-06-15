import React, {Component} from 'react';
import {FlatList, Text, StyleSheet, View, SafeAreaView} from 'react-native';

export default class FlatListIOS extends Component<any> {
  // 构造函数
  constructor(props: any) {
    super(props);
    this.state = {
      enableRefresh: true,
      refreshing: false,

      enableLoadMore: false,
      loadingMore: false,
      isLoadAll: false,
      list: [],
    };
  }
  componentDidMount() {
    // 加载数据
    this.loadDataList();
  }
  loadDataList = () => {
    console.log('调用了请求方法');
    this.setState({
      refreshing: true,
    });
    // 网络请求
    setTimeout(() => {
      let count = Math.floor(Math.random() * 10) + 4;
      let arr = [];
      for (let i = 0; i < count; i++) {
        arr.push(`随机数据${Math.floor(Math.random() * 10000)}`);
      }
      this.setState({
        refreshing: false,
        list: arr,
        enableLoadMore: true,
        isLoadAll: arr.length > 18,
      });
      console.log('刷新结束:');
    }, 1000);
  };
  loadMoreData = () => {
    this.setState({
      loadingMore: true,
    });
    // 网络请求
    setTimeout(() => {
      let count = Math.floor(Math.random() * 10) + 15;
      let arr = [];
      for (let i = 0; i < count; i++) {
        arr.push(`随机数据${Math.floor(Math.random() * 10000)}`);
      }
      let newlist = this.state.list.concat(arr);
      this.setState({
        loadingMore: false,
        list: newlist,
        isLoadAll: newlist.length > 20,
      });
      console.log('加载更多结束:');
    }, 600);
  };
  // 渲染组件
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          style={styles.listView}
          data={this.state.list}
          keyExtractor={(item, index) => '' + index + item}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  height: 44,
                  backgroundColor: 'white',
                  borderBottomWidth: 1,
                  justifyContent: 'center',
                  borderBottomColor: '#f2f2f2',
                }}>
                <Text style={{marginLeft: 10}}>{item}</Text>
              </View>
            );
          }}
          enableMJRefresh
          mjRefreshing={this.state.refreshing}
          onMJRefresh={this.loadDataList}
          mjHeaderStyle={{
            headerType: 'normal',
            stateTitle: {
              idle: '下拉刷新吧吧吧',
              pulling: '你放手，我就刷新',
              refreshing: '正在玩命加载中',
            },
            stateLabelStyle: {
              color: '#FF00FF',
              fontSize: 16,
            },
            timeLabelStyle: {
              color: '#008000',
            },
            labelImageGap: 40,
          }}
          enableMJLoadMore={this.state.enableLoadMore}
          mjLoadingMore={this.state.loadingMore}
          mjLoadAll={this.state.isLoadAll}
          onMJLoadMore={this.loadMoreData}
          mjFooterStyle={{
            stateLabelStyle: {
              color: '#ff0000',
              fontSize: 16,
            },
            indicatorType: 'gray',
            labelImageGap: 10,
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    backgroundColor: '#f5f9fa',
  },
});
