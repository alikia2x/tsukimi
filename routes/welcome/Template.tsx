import React from "react";

export default function Template(props: React.PropsWithChildren) {
	return (
		<div className="relative flex justify-center">
			<div className="relative flex flex-col w-11/12 md:w-4/5 lg:w-3/4 xl:w-1/2 pt-12 xl:pt-20">
				{props.children}
			</div>
		</div>
	);
}
