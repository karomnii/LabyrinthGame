import '../styles/App.css';
import ContentSection from './ContentSection';
import LeftParagraph from './LeftParagraph';
import NavBar from './NavBar';
import { useState } from 'react';
import FontSizeControls from './FontSizeControls';
import pocztowka from './assets/pocztowka.png';
import RegistrationForm from './RegistrationForm';
import GallerySwiper from './GallerySwiper';
import zdjecie1 from './assets/zdjecie1.png';
import zdjecie2 from './assets/zdjecie2.png';
import grillek from './assets/grillek.png';
import RightParagraph from './RightParagraph';
import Footer from './Footer';
function App() {
	const [currentlySelected, setCurrentlySelected] = useState(
		window.location.hash.split('#')[1]
	);
	const observer = new IntersectionObserver(
		function (entries) {
			// const target = entries.reduce(
			// 	(acc, entry) => {
			// 		if (acc.time === null && acc.target === null) {
			// 			return { target: entry.target.id, time: entry.time };
			// 		}
			// 		if (entry.time < acc.time) {
			// 			return { target: entry.target.id, time: entry.time };
			// 		}
			// 		return acc;
			// 	},
			// 	{ target: null, time: null }
			// );
			// setCurrentlySelected(target.target);
			// window.location.hash = `#${target.target}`;
		},
		{ threshold: [1] }
	);
	return (
		<>
			<NavBar
				currentlySelected={currentlySelected}
				setCurrentlySelected={setCurrentlySelected}
			/>
			<FontSizeControls />
			<ContentSection
				observer={observer}
				id='description_short'
				className='description_short'
				heading={'Zapraszamy wszystkich przyszłych studentów!'}
			>
				<LeftParagraph>
					Zapraszamy Cię na niezapomniany wyjazd wprowadzający na
					wyspę Korfu, Grecję, który umożliwi Ci przypomnienie i
					ugruntowanie wiedzy z liceum czy technikum, przygotowując
					Cię tym samym do nauki na kierunkach technicznych na
					studiach.
					<br />
					Nasz program wyjazdu został starannie zaprojektowany, abyś
					mógł jeszcze raz przejrzeć i utrwalić kluczowe zagadnienia z
					przedmiotów takich jak matematyka, fizyka, chemia i
					informatyka. Doświadczeni nauczyciele będą prowadzić
					interaktywne zajęcia i warsztaty, które pozwolą Ci odświeżyć
					i utrwalić istotne informacje oraz rozwijać umiejętności
					rozwiązywania problemów.
					<br />
					W trakcie wyjazdu będziesz miał także okazję uczestniczyć w
					praktycznych ćwiczeniach laboratoryjnych i projektowych,
					które przybliżą Ci realne zastosowania wiedzy technicznej.
					Dzięki temu będziesz mógł zobaczyć, jak teorię można
					przenieść na praktykę, co będzie wartościowym doświadczeniem
					przed rozpoczęciem studiów.
					<br />
					Oprócz zajęć edukacyjnych, nasz program wyjazdu obejmuje
					również różnorodne aktywności rekreacyjne i wycieczki, które
					umożliwią Ci odkrycie piękna Korfu i relaks po intensywnym
					dniu nauki. Będziesz miał także okazję spotkać się i
					nawiązać kontakty z innymi młodymi ludźmi, którzy podzielają
					Twoje zainteresowania i ambicje.
					<br />
					Zapewniamy komfortowe zakwaterowanie i wyżywienie, abyś mógł
					skoncentrować się na odświeżaniu swojej wiedzy i
					przygotowaniu się do studiów. Wyjazd na wyspę Korfu stworzy
					niezapomniany i inspirujący klimat, który przyczyni się do
					Twojego sukcesu w przyszłości.
					<br />
					Dołącz do naszego wyjazdu wprowadzającego na wyspę Korfu i
					przygotuj się w najlepszy możliwy sposób do nauki na
					kierunkach technicznych na studiach!
				</LeftParagraph>
			</ContentSection>
			<ContentSection
				observer={observer}
				id='organizers'
				className='organizers'
				heading='Organizatorzy'
			>
				<LeftParagraph>
					Nasi organizatorzy, składający się z elitarnych instytucji
					akademickich z różnych części świata, połączyli swoje siły,
					aby opracować i wprowadzić innowacyjne rozwiązania. Dzięki
					swojej doskonałej reputacji i wiedzy eksperckiej, Konsorcjum
					zdobyło uznanie w dziedzinie badań naukowych, rozwoju
					technologicznego i tworzenia nowatorskich programów
					nauczania.
					<br />
					Celem naszego wydarzenia jest sprawdzenie, jak te
					wypracowane rozwiązania sprawdzają się w praktyce. Pragniemy
					zapewnić uczestnikom unikalną okazję do eksploracji i
					testowania nowych technologii, metodyk i podejść, które mogą
					rewolucjonizować obszary edukacji i nauki.
					<br />
					Ponadto, Konsorcjum stawia na tworzenie sieci i nawiązywanie
					współpracy między uczestnikami. Będzie to doskonała okazja
					do budowania relacji, wymiany pomysłów i nawiązywania
					kontaktów zarówno z innymi uczestnikami, jak i
					przedstawicielami uczelni wyższych.
				</LeftParagraph>
			</ContentSection>
			<ContentSection
				observer={observer}
				id='description_long'
				className='description_long'
				heading='Ważne informacje'
			>
				<LeftParagraph>
					Miejsce: Wyjazd odbędzie się na malowniczej wyspie Korfu,
					Grecja.
					<br />
					Długość wyjazdu: Dwutygodniowy program szkoleniowy.
					<br />
					Czas wyjazdu: Wyjazd planowany jest na jeden z dni w
					sierpniu (dokładna data zostanie podana wkrótce).
					<br />
					Cena: Około 3000 złotych, obejmujących zakwaterowanie,
					wyżywienie, materiały szkoleniowe oraz zaplanowane zajęcia i
					wycieczki.
					<br />
					Transport: Podróż odbywa się samolotem. Transfer z lotniska
					do hotelu zapewniony.
					<br />
					Plan podróży: Dzień 1: Przyjazd na Korfu, transfer z
					lotniska do hotelu, zameldowanie.
					<br />
					Dzień 2-12: Intensywne zajęcia szkoleniowe, warsztaty i
					laboratoria.
					<br />
					Dzień 13: Wycieczka po wyspie, zwiedzanie atrakcji
					kulturowych i przyrodniczych.
					<br />
					Dzień 14: Zakończenie programu, wręczenie certyfikatów,
					pożegnalna kolacja.
				</LeftParagraph>
			</ContentSection>
			<ContentSection
				observer={observer}
				id='osrodek'
				className='osrodek'
				heading='Ośrodek'
			>
				<LeftParagraph>
					Ośrodek Capo Di Corfu usytuowany jest w otoczeniu ogrodu
					krajobrazowego, przy samej plaży w miejscowości Agios Petros
					<br />
					Wszystkie pokoje są klimatyzowane, dysponują balkonem lub
					patio z widokiem na ogród i wyposażone zostały w niewielką
					lodówkę, a także telewizor z płaskim ekranem i dostępem do
					kanałów satelitarnych oraz odtwarzaczem DVD. W każdym pokoju
					znajduje się łazienka z prysznicem, suszarką do włosów i
					bezpłatnym zestawem kosmetyków.
					<br />
					Restauracja Arete serwuje świeże specjały kuchni
					śródziemnomorskiej i międzynarodowej oraz dania
					wegetariańskie. Przy basenie znajduje się restauracja IL
					Pirata, która zaprasza na śródziemnomorskie potrawy do
					wyboru z karty.
					<br />
					Do dyspozycji Gości są rozmaite udogodnienia, w tym odkryte
					baseny z niewielkimi zjeżdżalniami, kort tenisowy, stół do
					ping ponga oraz plac zabaw dla dzieci.
					<br />
					Personel recepcji służy pomocą w wypożyczeniu samochodu. Na
					miejscu dostępny jest ponadto bezpłatny prywatny parking.
					<br />
					Najpopularniejsze udogodnienia:
				</LeftParagraph>
				<ul>
					<li>Bezpłatne Wifi</li>
					<li>Lokalizacja przy samej plaży</li>
					<li>Udogodnienia dla niepełnosprawnych</li>
					<li>Bar</li>
					<li>Spa i centrum odnowy biologicznej</li>
				</ul>
				<br />
				<img className='osrphoto' src={pocztowka} />
			</ContentSection>
			<RegistrationForm observer={observer} />
			<ContentSection
				observer={observer}
				id='zdjecia'
				className='gallery'
			>
				<GallerySwiper>
					<img src={zdjecie1}></img>
					<img src={zdjecie2}></img>
					<img src={grillek}></img>
				</GallerySwiper>
			</ContentSection>
			<ContentSection
				observer={observer}
				id='onas'
				className='osrodek'
				heading='O nas'
			>
				<LeftParagraph>
					Witaj na naszej stronie internetowej umożliwiającej
					rejestracje na szkołe letnią! Jesteśmy trójką studentów,
					którzy zainspirowani swoimi doświadczeniami postanowili
					stworzyć to miejsce, aby podzielić się wiedzą i pasją z
					innymi osobami zainteresowanymi przygotowaniem na wymarzony
					kierunek studiów.
				</LeftParagraph>
				<RightParagraph>
					Nasze imiona to Maciek, Mikołaj i Piotr. Połączyła nas
					wspólna miłość do nauki oraz przekonanie, że nauka to nie
					tylko siedzenie w szkole ale też dobra zabawa.
				</RightParagraph>
				<LeftParagraph>
					Jesteśmy pasjonatami podróży i odkrywania nowych miejsc.
					Często mieliśmy okazję uczestniczyć w szkołach letnich w
					różnych częściach świata. Każda z naszych podróży
					edukacyjnych była wyjątkowym doświadczeniem, które nie tylko
					poszerzyło naszą wiedzę, ale również rozwinęło nasze
					umiejętności międzykulturowe i otwarło nas na nowe
					perspektywy. Teraz chcemy podzielić się tymi doświadczeniami
					z Tobą!
				</LeftParagraph>
				<LeftParagraph>
					Chcemy również zachęcić Cię do odkrywania korzyści, jakie
					niesie ze sobą uczestnictwo w szkole letniej. Pozwala ona na
					rozwinięcie umiejętności interpersonalnych, zdobycie nowych
					przyjaciół, poszerzenie horyzontów kulturowych i naukowych
					oraz rozszerzenie swoich możliwości edukacyjnych. Bez
					względu na to, czy jesteś młodym uczniem, studentem, czy
					profesjonalistą, szkoła letnia może stanowić inspirujące i
					wartościowe doświadczenie.
				</LeftParagraph>
				<LeftParagraph>
					Zapraszamy każdego zainteresowanego przygotowaniem na studia
					połączonym z dobrą zabawą na to przeżycie nie do
					zapomnienia.
				</LeftParagraph>
			</ContentSection>
			<ContentSection
				id='kontakt1'
				className='contact'
				observer={observer}
				heading='Kontakt'
			>
				<p>
					Zadzwoń do nas: 222 333 444 <br />
					Napisz do nas:{' '}
					<a href='mailto:superwakacje@gmail.com'>
						superwakacje@gmail.com
					</a>
				</p>
			</ContentSection>
			<Footer />
		</>
	);
}

export default App;
