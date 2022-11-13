import React, { FC, useContext, useState, ReactNode, useEffect, useRef } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";

export interface Test Props {
  /** 样式命名隔离 */
  prefixCls ?: string;
  /** 组件子节点 */
  children ?: ReactNode
  /** 容器内联样式 */
  style ?: React.CSSProperties
  /** 组件类名 */
  className ?: string
}

/**
* Test 组件模板
  */
const Test: FC < Test Props > = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, restProps } = props;
  const [state, setState] = useState(null)

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("<%= lowname %>", customizePrefixCls);

  const cls = classNames(prefixCls, className, {

  });
  return (
    <div className={cls} style={style} {...restProps}>
      <div>
        Test
      </div>
      <div className={`${prefixCls}-warp`}>{children}</div>
    </div>
  );
};

Test.defaultProps = {};

export default Test;