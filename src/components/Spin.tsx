import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import { tuple } from './util'

type SpinIndicator = React.ReactElement<HTMLElement>
interface SpinProps {
    prefixCls: string
    className?: string
    spinning?: boolean
    style?: React.CSSProperties
    delay?: number
    indicator?: SpinIndicator
}
const defaultIndicator: React.ReactNode = null
const renderIndicator = (prefixCls: string, props: SpinProps): React.ReactNode => {
	const { indicator } = props
	const dotClassName = `${prefixCls}-dot`
	if (indicator === null) {
		return null
	}

	// 判断是否是有效的React元素
	if (React.isValidElement(indicator)) {
		return React.cloneElement(indicator, { className: classnames(indicator.props.className, dotClassName) })
	}
	if (React.isValidElement(defaultIndicator)) {
		return React.cloneElement((defaultIndicator as SpinIndicator), {
			className: classnames(((defaultIndicator as SpinIndicator).props.className, dotClassName))
		})
	}
	return (
		<span className={classnames(dotClassName, `${prefixCls}`)}>
			<i className={`${prefixCls}-dot-item`}></i>
			<i className={`${prefixCls}-dot-item`}></i>
			<i className={`${prefixCls}-dot-item`}></i>
			<i className={`${prefixCls}-dot-item`}></i>
		</span>
	)
}
const Spin: React.FC<{}> = props => {
	return <div></div>
}
export default Spin