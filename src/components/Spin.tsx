import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import { tuple } from './util'

type SpinIndicator = React.ReactElement<HTMLElement>
interface SpinProps {
    prefixCls?: string
    className?: string
    spinning?: boolean
    style?: React.CSSProperties
    delay?: number
    indicator?: SpinIndicator
}
const omit = (obj: any, arr: string[]) => {
	arr.map(key => { obj[key] && delete obj[key] })
	return obj
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
		<span className={classnames(dotClassName, `${prefixCls}-dot-spin`)}>
			<i className={`${prefixCls}-dot-item`}></i>
			<i className={`${prefixCls}-dot-item`}></i>
			<i className={`${prefixCls}-dot-item`}></i>
			<i className={`${prefixCls}-dot-item`}></i>
		</span>
	)
}
const Spin: React.FC<SpinProps> = props => {
	const renderSpir = () => {
		const {
			prefixCls = 'spin',
			className,
			style,
			...restProps
		}  = props
        
		const spinClassName = classnames(
			`${prefixCls}__wrap`, {}, className
		)
		const divProps = omit(restProps, [ 'spinning', 'indicator', 'delay' ])
        
		const spinElement = (
			<div {...divProps} style={style} className={spinClassName}>
				{renderIndicator(prefixCls, props)}
			</div>
		)
		return spinElement
	}
	return <>{ renderSpir() }</>
}
export default Spin