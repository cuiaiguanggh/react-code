import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
  componentDidMount,
  memo,
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
const FunctionHook0 = memo(() => {
  useEffect(() => {
    // console.log("FunctionHook0 useEffect");
  }, []);
  useEffect(() => {
    // console.log("FunctionHook0 useEffect");
  }, []);

  return "";

  // return <div id="function-hook" style={{ paddingLeft: 10 }}></div>;
});

function FunctionHook1(props) {
  // console.log("props: ", props);

  const [name, set_name] = useState("张三");
  const [age, set_age] = useState(12);

  const show_name = useMemo(() => "hello:" + name, [name]);

  const say_age = useCallback(() => {
    console.log("my age is :" + age);
  });

  // if (age >= 13) {
  //   const [sex, setSex] = useState("男");
  // }

  // useEffect(() => {
  //   set_age(age + 1);
  //   set_name("张三三");
  // }, []);

  useEffect(() => {
    console.log("age更新", age);
  }, [age]);

  useEffect(() => {
    console.log("name更新", name);
  }, [name]);

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

  state = {
    name: "app-class-state-name",
  };

  componentDidMount() {}
  render() {
    return (
      <div className="app-container">
        {/* <FunctionHook0 key="fun-hook-0" name="test" /> */}
        <FunctionHook0 />

        {/* <FunctionHook1 key="fun-hook-1" /> */}

        {/* <Hook key={"hook-fun"} /> */}
        {/* {FunctionHook()} */}
      </div>
    );
  }
}
