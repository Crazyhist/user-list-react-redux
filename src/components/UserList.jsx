import React from 'react'
import { FixedSizeList } from 'react-window'

const Row = ({ index, style }) => <div style={style}>Row {index}</div>

const Example = () => (
	<FixedSizeList height={150} itemCount={1000} itemSize={35} width={300}>
		{Row}
	</FixedSizeList>
)
export default Example
