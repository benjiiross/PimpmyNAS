import Image from "next/image";
import { getDrivesPos } from "@/actions/drivesActions";
import Case from "@/components/Case";

export default async function Home() {
	const data = await getDrivesPos(2);
	console.log(data);

	return (
		<div className="space-y-1">
			<h1 className="text-5xl text-center">PimpmyNAS</h1>
			<h2 className="text-2xl text-center">
				Gérer vos disques durs avec facilité
			</h2>
			<Case />
		</div>
	);
}
