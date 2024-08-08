import React, { ChangeEventHandler } from "react";
import _ from "lodash";

interface SelectorDataMap {
	[key: string]: string
}

interface NativeSelectProps {
	value?: string | number | readonly string[] | undefined;
	onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
	data?: string[] | SelectorDataMap;
	prompt?: string;
}

const NativeSelect: React.FC<NativeSelectProps> = ({ value, onChange, data = [], prompt }) => {
	return (
		<select
			className="py-1 px-3 pe-9 block w-full border-gray-200 rounded-lg focus:border-blue-500 
            focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 
            dark:border-neutral-700 dark:text-neutral-100 dark:placeholder-neutral-300 dark:focus:ring-neutral-600"
			value={value}
			onChange={onChange}
		>
			{prompt && (
				<option value="" disabled>
					{prompt}
				</option>
			)}

			{_.isArray(data) ? 
				data.map((item, index) => (
					<option key={index} value={item}>
						{item}
					</option>
				))
				: 
				_.keys(data).map((value, index) => (
					<option key={index} value={value}>
						{data[value]}
					</option>
				))
			}
		</select>
	);
};

export default NativeSelect;
