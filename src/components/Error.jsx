export const Error = ({ children }) => {
	return (
		<div className="text-red-500 max-w-sm mx-auto">
			<p className="border border-red-600 text-center font-bold py-2 text-xs rounded-full">
				{children}
			</p>
		</div>
	);
};
