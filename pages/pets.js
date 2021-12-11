import Image from 'next/image';

export default function PetsPage() {
	return (
		<>
			{['1', '2', '3', '4', '5'].map((path) => (
				<div key={path}>
					<Image src={`/${path}.jpg`} alt='pets' width='280' height='420' />
					{/* placeholder attr with proper blur can be passed to make images look better
                    blurDataURL attr for dynamic images */}
				</div>
			))}
		</>
	);
}
