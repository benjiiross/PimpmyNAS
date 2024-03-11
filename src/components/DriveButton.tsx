interface DriveButtonProps {
	driveName: string;
	position: string;
	front?: boolean;
}

export default function DriveButton({
	driveName,
	position,
	front,
}: DriveButtonProps) {
	const size = front ? "w-[85px] h-[125px]" : "w-[120px] h-[22px]";
	return (
		<button
			type="button"
			className={`absolute ${position} ${size} hover:ring-4 rounded-sm transition duration-75`}
		>
			<p className="text-white text-center text-sm">
				{driveName}
				<br />
			</p>
		</button>
	);
}
