import DriveButton from "./DriveButton";
import caseImg from "@/assets/Case.jpg";
import caseSideImg from "@/assets/CaseSide.jpg";

export default function Case() {
	const imageSize = 700;
	const smallImageSize = 400;

	return (
		<div>
			<div
				className="hidden sm:block mx-auto border-2 border-gray-400 rounded-xl relative p-1"
				style={{ width: imageSize, height: imageSize }}
			>
				<img src={caseImg.src} alt="Case" />
				<DriveButton driveName="diska" position="top-[133px] left-[158px]" />
				<DriveButton driveName="diskb" position="top-[173px] left-[158px]" />
				<DriveButton driveName="diskc" position="top-[213px] left-[158px]" />
				<DriveButton driveName="diskd" position="top-[255px] left-[158px]" />
				<DriveButton driveName="diske" position="top-[295px] left-[158px]" />
				<DriveButton driveName="diskf" position="top-[335px] left-[158px]" />
				<DriveButton driveName="diskg" position="top-[380px] left-[158px]" />
				<DriveButton driveName="diskh" position="top-[420px] left-[158px]" />
				<DriveButton driveName="diski" position="top-[460px] left-[158px]" />
				<DriveButton driveName="parity1" position="top-[498px] left-[158px]" />
				<DriveButton driveName="parity2" position="top-[540px] left-[158px]" />
				<DriveButton
					front
					driveName="diskj"
					position="top-[364px] left-[459px]"
				/>
			</div>
			<div
				className="block sm:hidden mx-auto border-2 border-gray-400 rounded-xl relative p-1"
				style={{ width: smallImageSize }}
			>
				<img src={caseSideImg.src} alt="Case" />
				{/* <DriveButton /> */}
			</div>
		</div>
	);
}
