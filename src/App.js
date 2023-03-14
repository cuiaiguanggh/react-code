import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";
// import LifeCycles from './LifeCycles'
// import HookComponents from './Hook'
// import ClassComponents from './Class'
// import ParentComponent from './ParentComponent'
// import ChildComponent from './ChildComponent'
import Hook from "./Hook";

function useFunctionHook(age, name) {
  const [loading, set_loading] = useState(false);
  const _console = () => {
    console.log(name + "今年" + age);
    set_loading(true);
  };

  return {
    _console,
  };
}
function FunctionHook(props) {
  // console.log("props: ", props);

  const [name, set_name] = useState("张三");
  const [age, set_age] = useState(12);

  const show_name = useMemo(() => "hello:" + name, [name]);

  const say_age = useCallback(() => {
    console.log("my age is :" + age);
  });

  if (age >= 13) {
    const [sex, setSex] = useState("男");
  }

  // useEffect(() => {
  //   set_age(age + 1);
  //   set_name("张三三");
  // }, []);

  const { _console } = useFunctionHook(age, name);

  const ref = useRef("默认ref");

  return (
    <div id="function-hook" style={{ paddingLeft: 10 }}>
      <p>姓名：{name}</p>
      <p>年龄：{age}岁</p>
      <button onClick={() => _console()}>click</button>
      <button onClick={() => set_age(age + 1)}>add age</button>
    </div>
  );
}

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app-container">
        {<FunctionHook key="my-hook-fun" />}
        <Hook key={"hook-fun"} />
        {/* {FunctionHook()} */}
      </div>
    );
  }
}
