import kumtor from "../../img/Kumtor.png"
import gazprom from "../../img/gazprom.svg"
import altyn from "../../img/aljans-altyn_logo.jpg"
import altynken from "../../img/altynken.png"
import kyrg from "../../img/kyrgneft.png"
import kyrgaltyn from "../../img/kyrgaltyn.png"

const Partners = () => {
	return (
		<div className="container">
			<h2 className="text-4xl text-center mb-16">Наши партнёры</h2>
			
			<div className="flex justify-between">
				<div className="grid grid-cols-3 w-1/2">
					<img className="w-40"
					src={kumtor}
					alt="kumtor"/>
					<img className="w-40"
					src={gazprom}
					alt="gazprom"/>
					<img className="w-44"
					src={altyn}
					alt="altynk"/>
					<img className="w-32"
					src={kyrg}
					alt="altyn"/>
					<img className="w-40 mt-10"
					src={altynken}
					alt="altyn"/>
					<img className="w-40"
					src={kyrgaltyn}
					alt="altyn"/>
				</div>
				
				{/*<img className="w-[650px] h-[370px]" src="../../../img/top10our.jpg" alt="top10"/>*/}
				
				<span className="text-xl mt-8 w-1/2 mb-24">
					Кумтор Голд Компании - ведущая горнодобывающая компания, специализирующаяся на поиске, добыче и переработке минеральных ресурсов.
					<br/>
					<br/>
					Мы гордимся тем, что сотрудничаем с ведущими компаниями в горнодобывающей и энергетической промышленности, такими как ЗАО Кумтор Голд Компании, ОсОО Альянс Алтын, ОсОО Алтынкен, АО Кыргызнефтегаз, ОАО Кыргызалтын и Газпром. Эти партнерства позволяют нам совместно разрабатывать и внедрять передовые решения для контроля и мониторинга производственных процессов, обеспечивая высочайший уровень безопасности и эффективности.
				</span>
			</div>
		</div>
	);
};

export default Partners;