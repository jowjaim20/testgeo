import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import { SelectorIcon } from "@shared/svgIcons";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const variantType = {
	primary: "bg-background-code",
	secondary: "bg-secondary-50",
};

export default function Select(props) {
	const {
		selected,
		options = [],
		label,
		onChange,
		setShowCheck = false,
		variant = "primary",
		type = "select",
		placeholder = "Select",
	} = props;
	// const [selected, setSelected] = useState(selectedItem);
	const [items, setItems] = useState([]);
	const BULK_RENDER = 10;
	const variantClass = variantType[variant];

	useEffect(() => {
		if (options) {
			setItems(options.slice(0, BULK_RENDER));
		}
		return () => {};
	}, [options]);

	const handleScroll = (e) => {
		const bottom =
			parseInt(e.target.scrollHeight) - parseInt(e.target.scrollTop) ===
			parseInt(e.target.clientHeight);
		if (bottom) {
			if (items.length < options.length) {
				setItems([
					...items.concat(
						options
							.slice(items.length, items.length + BULK_RENDER)
							.filter((o) => o)
					),
				]);
			}
		}
	};

	const renderOptions = (option) => {
		return option.map((item) => (
			<Listbox.Option
				key={item.value}
				className={({ active }) =>
					classNames(
						active ? "text-support1-base bg-support4-100" : "text-gray-50",
						"cursor-default select-none relative py-2 pl-3 pr-3"
					)
				}
				value={item}
			>
				{({ selected, active }) => (
					<div className="flex items-center">
						{item.icon && <span className="mr-3">{item.icon}</span>}
						<span
							className={classNames(
								selected ? "font-semibold" : "font-normal",
								"block truncate"
							)}
						>
							{item.label}
						</span>

						{selected && setShowCheck ? (
							<span
								className={classNames(
									active ? "" : "",
									"text-support1-base absolute inset-y-0 right-0 flex items-center pr-4"
								)}
							>
								<CheckIcon className="h-5 w-5" aria-hidden="true" />
							</span>
						) : null}
					</div>
				)}
			</Listbox.Option>
		));
	};

	return (
		<Listbox value={selected} onChange={onChange}>
			<Listbox.Label className="block text-sm  font-medium text-gray-50">
				{label}
			</Listbox.Label>
			<div className="mt-1 relative">
				<Listbox.Button
					className={`${variantClass} relative w-full border border-subtle-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none text-base lg:text-sm focus:border-subtle-700`}
				>
					<span className="block truncate text-support1-base">
						{selected ? (
							selected.label
						) : (
							<span className="text-subtle-400">{placeholder}</span>
						)}
					</span>
					<span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
						{SelectorIcon}
					</span>
				</Listbox.Button>

				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Listbox.Options
						onScroll={handleScroll}
						static
						className={`${variantClass} absolute z-10 mt-1 w-full shadow-lg max-h-60 rounded-md py-1 text-base lg:text-sm ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none`}
					>
						{renderOptions(items)}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
}
