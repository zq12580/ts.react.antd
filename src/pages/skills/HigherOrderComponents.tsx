import React, { useState } from 'react'
import HigherOrder from "../../modules/HigherOrder";

const HigherOrderComponents: React.FC<Props> = (props) => {
  const { age, sex } = props
  const [name, setName] = useState('张三')
  return (
    <div>
      <div>姓名:{name}</div>
      <div>年龄:{age}</div>
      <div>性别:{sex}</div>
      <Aa />
    </div>
  )

}

export default HigherOrder(HigherOrderComponents)
HigherOrderComponents.defaultProps = {
  age: 18
};
interface Props {
  age?: number;
  sex?: string;
}

const Aa = () => {
  return (
    <div>99</div>
  )
}

