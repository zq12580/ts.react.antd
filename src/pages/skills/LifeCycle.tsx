import React from 'react'
import { Button } from 'antd';
class LifeCycle extends React.Component<IProps, IState>{
  constructor(props: IProps) {
    super(props)
    this.state = {
      data: 0,
    };
  }

  // componentWillMount() {
  //   console.log('弃用componentWillMount');
  // }

  // componentDidMount() {
  //   console.log('componentDidMount');
  //   console.log('创建结束--------------------------------------');
  // }

  // shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>, nextContext: any): boolean {
  //   console.log('shouldComponentUpdate=>nextProps', nextProps);
  //   console.log('shouldComponentUpdate=>nextState', nextState);
  //   return true
  // }

  // componentWillUpdate() {
  //   console.log('弃用componentWillUpdate');
  // }

  // componentDidUpdate(prevProps: AvatarProps): void {
  //   console.log('componentDidUpdate=>AvatarProps', prevProps);
  //   console.log('更新结束--------------------------------------');
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  //   console.log('卸载---------');
  // }
  render() {
    return (
      <div >
        <img src={require('../../assets/images/lifeCycle.png')} alt="" height={800} />
        <div style={{ float: "left", width: '50%' }}>
          <h1>componentDidMount</h1>
          <p>componentDidMount是在组件已被渲染DOM后运行的</p>
          <p>一些依赖于DOM节点初始化的操作应该要放在这里，如常见的向服务器请求数据</p>
          <h1>render</h1>
          <p>只能通过props和state来访问数据，不能修改</p>
          <h1>shouldComponentUpdate</h1>
          <p>shouldComponentUpdate是否确定更新api</p>
          <h1>componentWillUpdate</h1>
          <p>componentDidUpdate渲染前更新的API</p>
          <h1>componentDidUpdate</h1>
          <p>componentDidUpdate渲染后更新的API</p>
          <h1>componentWillUnmount</h1>
          <p>componentWillUnmount在组件卸载的时候运行的</p>
        </div>
        <div style={{ float: "right", width: '50%' }}>
          <Button type='primary' onClick={() => this.changeData()}>点击</Button>
          <label>打开控制台</label>
          <h1>{this.state.data}</h1>
        </div>
      </div>
    );
  }
  // 点击
  changeData = () => {
    const { data } = this.state
    this.setState({ data: data + 1 })
  }

}


export default LifeCycle

interface IProps {
}
interface IState {
  data: number;
}