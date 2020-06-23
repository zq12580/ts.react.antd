import React from 'react'
const PrototypeChain = () => {
  function Obj(this: any) {
    this.name = '张三';
    this.age = '18';
  }
  console.log(Obj.prototype);


  return (
    <div>
      <span style={{ padding: '10px 0' }}>99899</span>
      <h1>所有的对象都是由函数创建的，js中的一切引用类型都是对象，包括Array，Object，Function等。</h1>
      <div>
        <img src={require('../../assets/images/prototypeChain1.png')} alt="" width='50%' />
        <img src={require('../../assets/images/prototypeChain2.png')} alt="" width='50%' />
      </div>
    </div>
  )
}
export default PrototypeChain