
const Partners = () => {
	return (
		<div className="container">
			<h2 className="text-4xl text-center mb-16">Наши партнёры</h2>
			
			<div className="flex justify-between">
				<iframe
					className="mx-auto mt-8"
					width="650"
					height="350"
					src="https://player.cnbc.com/p/gZWlPC/cnbc_global?playertype=synd&byGuid=7000325169"
					allowFullScreen
				>
				</iframe>
				
				{/*<img className="w-[650px] h-[370px]" src="../../../public/top10our.jpg" alt="top10"/>*/}
				
				<span className="text-xl mt-8 w-1/2 mb-24">
					Rio Tinto - ведущая мировая горнодобывающая компания, специализирующаяся на поиске, добыче и переработке минеральных ресурсов Земли.
					<br/>
					<br/>
					Мы гордимся тем, что среди наших клиентов числится Rio Tinto, ведущая мировая горнодобывающая компания, специализирующаяся на поиске, добыче и переработке  минеральных ресурсов Земли. Rio Tinto активно пользуется нашими услугами и приобретает у нас контрольно-измерительные приборы, доверяя нашему опыту и качеству предоставляемых решений. Такое сотрудничество подтверждает наш высокий уровень профессионализма и надежности.
				</span>
			</div>
		</div>
	)
		;
};

export default Partners;