import React, { FC, useContext, useState, ReactNode, useEffect, useRef } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";

export interface {{name}} Props {
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
* {{name}} 组件模板
  */
const {{name}}: FC < {{name}} Props > = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, restProps } = props;
  const [state, setState] = useState(null)

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("<%= lowname %>", customizePrefixCls);

  const cls = classNames(prefixCls, className, {

  });
  return (
    <div className={cls} style={style} {...restProps}>
      <div>
        {{name}}
      </div>
      <div className={`${prefixCls}-warp`}>{children}</div>
    </div>
  );
};

{{name}}.defaultProps = {};

export default {{name}};