const Badge = (props) => {
	const { label, size = 'md', showDot, variant = 'primary' } = props;
	const { wrapperClass, dotClass, sizeClass } = generateClass(variant, size);

	return (
		<div
			className={`${wrapperClass} ${sizeClass} flex items-center rounded-2xl`}
		>
			{showDot && (
				<span
					className={`${dotClass} mr-4`}
					style={{ width: 6, height: 6 }}
				></span>
			)}
			<span>{label}</span>
		</div>
	);
};

const generateClass = (variant, size) => {
	const variantClass = {
		primary: 'bg-supportShamrock-200',
		secondary: 'bg-support3-200',
		neon: 'bg-support5-200',
	};
	const dotClassType = {
		primary: 'bg-supportShamrock-base',
		secondary: 'bg-support3-base',
		neon: 'bg-red-400',
	};

	const sizeClassType = {
		sm: 'px-3 py-1',
		md: 'px-4 py-2',
		lg: 'px-5 py-2',
	};

	const wrapperClass = variantClass[variant];
	const dotClass = `${dotClassType[variant]} rounded-lg`;
	const sizeClass = sizeClassType[size];

	return { wrapperClass, dotClass, sizeClass };
};

export default Badge;
